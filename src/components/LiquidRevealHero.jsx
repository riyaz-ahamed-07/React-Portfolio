import { useEffect, useRef } from 'react';
import './LiquidRevealHero.css';

const BASE_SRC = '/hero/base.png';
const CHROME_SRC = '/hero/chrome.png';

// Soft hole with laggy trail + chromatic fringe. Path is an auto orbit
// around the face — no pointer tracking.
const SETTINGS = {
  radiusFactor: 0.18,
  hardness: 0.62,
  lifeMs: 1600,
  momentum: 0.12,
  trailScale: 0.4,
  maxBlobs: 160,
  // Orbit around the portrait face (center as fractions of viewport).
  faceX: 0.5,
  faceY: 0.4,
  orbitRx: 0.16, // horizontal radius as fraction of min(w,h)
  orbitRy: 0.2, // vertical radius — slightly taller ellipse on the face
  orbitSpeed: 0.55, // radians per second
};

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

// Two flat images. The trail paints a soft hole through the base so chrome
// shows through. Chromatic fringe sits on the hole edge — no iridescent overlay.
const FRAG = `
precision highp float;
varying vec2 v_uv;
uniform sampler2D u_base;
uniform sampler2D u_chrome;
uniform sampler2D u_trail;
uniform vec2 u_trailRes;
uniform vec2 u_baseFit;
uniform vec2 u_chromeFit;

vec2 fitUV(vec2 uv, vec2 fit) {
  return 0.5 + (uv - 0.5) * fit;
}

float field(vec2 uv) {
  vec2 e = 1.25 / u_trailRes;
  float s = texture2D(u_trail, uv).r * 0.28;
  s += texture2D(u_trail, uv + vec2( e.x, 0.0)).r * 0.14;
  s += texture2D(u_trail, uv + vec2(-e.x, 0.0)).r * 0.14;
  s += texture2D(u_trail, uv + vec2(0.0,  e.y)).r * 0.14;
  s += texture2D(u_trail, uv + vec2(0.0, -e.y)).r * 0.14;
  s += texture2D(u_trail, uv + vec2( e.x,  e.y)).r * 0.04;
  s += texture2D(u_trail, uv + vec2(-e.x,  e.y)).r * 0.04;
  s += texture2D(u_trail, uv + vec2( e.x, -e.y)).r * 0.04;
  s += texture2D(u_trail, uv + vec2(-e.x, -e.y)).r * 0.04;
  return s;
}

void main() {
  vec2 uv = v_uv;
  float t = field(uv);

  vec2 ge = 2.5 / u_trailRes;
  vec2 grad = vec2(
    field(uv + vec2(ge.x, 0.0)) - field(uv - vec2(ge.x, 0.0)),
    field(uv + vec2(0.0, ge.y)) - field(uv - vec2(0.0, ge.y))
  );
  float gmag = length(grad);
  float edge = smoothstep(0.02, 0.18, gmag);
  vec2 dir = gmag > 0.0001 ? grad / gmag : vec2(0.0);

  // Soft reveal mask — the whole trick.
  float m = smoothstep(0.04, 0.52, t);

  vec3 base = texture2D(u_base, fitUV(uv, u_baseFit)).rgb;

  // Chromatic fringe: split RGB only near the hole edge.
  float ca = 0.0045 * edge;
  vec2 cuv = uv;
  vec3 chrome;
  chrome.r = texture2D(u_chrome, fitUV(cuv + dir * ca, u_chromeFit)).r;
  chrome.g = texture2D(u_chrome, fitUV(cuv, u_chromeFit)).g;
  chrome.b = texture2D(u_chrome, fitUV(cuv - dir * ca, u_chromeFit)).b;

  vec3 col = mix(base, chrome, m);
  gl_FragColor = vec4(col, 1.0);
}`;

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || 'Shader compile failed');
  }
  return shader;
};

const createTexture = (gl, unit) => {
  const tex = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  return tex;
};

const coverFit = (cw, ch, iw, ih) => {
  const s = Math.max(cw / iw, ch / ih);
  return [cw / (s * iw), ch / (s * ih)];
};

const LiquidRevealHero = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return undefined;

    let rafId = 0;
    let disposed = false;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!gl) return undefined;

    const trail = document.createElement('canvas');
    const trailCtx = trail.getContext('2d');

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

    const head = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let hasSized = false;

    let program;
    let uniforms = {};
    let images = null;
    const blobs = [];

    const resize = () => {
      const rect = section.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      trail.width = Math.max(2, Math.round(w * SETTINGS.trailScale));
      trail.height = Math.max(2, Math.round(h * SETTINGS.trailScale));
      trailCtx.clearRect(0, 0, trail.width, trail.height);

      if (program && images) {
        gl.uniform2f(uniforms.trailRes, trail.width, trail.height);
        gl.uniform2fv(
          uniforms.baseFit,
          coverFit(w, h, images.base.naturalWidth, images.base.naturalHeight)
        );
        gl.uniform2fv(
          uniforms.chromeFit,
          coverFit(w, h, images.chrome.naturalWidth, images.chrome.naturalHeight)
        );
        gl.activeTexture(gl.TEXTURE2);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, trail);
      }

      if (!hasSized) {
        const minSide = Math.min(w, h);
        head.x = target.x = w * SETTINGS.faceX + minSide * SETTINGS.orbitRx;
        head.y = target.y = h * SETTINGS.faceY;
        hasSized = true;
      }
    };

    const stampBrush = (x, y, radius, alpha) => {
      const s = SETTINGS.trailScale;
      const grad = trailCtx.createRadialGradient(x * s, y * s, 0, x * s, y * s, radius * s);
      grad.addColorStop(0, `rgba(255,255,255,${0.95 * alpha})`);
      grad.addColorStop(SETTINGS.hardness, `rgba(255,255,255,${0.7 * alpha})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      trailCtx.fillStyle = grad;
      trailCtx.beginPath();
      trailCtx.arc(x * s, y * s, radius * s, 0, Math.PI * 2);
      trailCtx.fill();
    };

    const start = async () => {
      let base;
      let chrome;
      try {
        [base, chrome] = await Promise.all([loadImage(BASE_SRC), loadImage(CHROME_SRC)]);
      } catch {
        return;
      }
      if (disposed) return;
      images = { base, chrome };

      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
      gl.useProgram(program);

      const buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      const aPos = gl.getAttribLocation(program, 'a_pos');
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      uniforms = {
        trailRes: gl.getUniformLocation(program, 'u_trailRes'),
        baseFit: gl.getUniformLocation(program, 'u_baseFit'),
        chromeFit: gl.getUniformLocation(program, 'u_chromeFit'),
      };
      gl.uniform1i(gl.getUniformLocation(program, 'u_base'), 0);
      gl.uniform1i(gl.getUniformLocation(program, 'u_chrome'), 1);
      gl.uniform1i(gl.getUniformLocation(program, 'u_trail'), 2);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      createTexture(gl, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, base);
      createTexture(gl, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, chrome);
      createTexture(gl, 2);

      resize();
      window.addEventListener('resize', resize);
      section.classList.add('lrh-active');

      const frame = (now) => {
        if (disposed) return;
        const radius = Math.min(w, h) * SETTINGS.radiusFactor;
        const minSide = Math.min(w, h);
        const t = now / 1000;
        const angle = t * SETTINGS.orbitSpeed;

        // Continuous ellipse around the face — no pointer input.
        target.x = w * SETTINGS.faceX + Math.cos(angle) * minSide * SETTINGS.orbitRx;
        target.y = h * SETTINGS.faceY + Math.sin(angle) * minSide * SETTINGS.orbitRy;

        head.x += (target.x - head.x) * SETTINGS.momentum;
        head.y += (target.y - head.y) * SETTINGS.momentum;

        const spawn = (x, y) => {
          blobs.push({ x, y, r: radius, born: now });
          if (blobs.length > SETTINGS.maxBlobs) blobs.shift();
        };
        const last = blobs[blobs.length - 1];
        if (!last) {
          spawn(head.x, head.y);
        } else {
          const d = Math.hypot(head.x - last.x, head.y - last.y);
          const step = radius * 0.18;
          if (d > step) {
            const n = Math.min(Math.floor(d / step), 12);
            for (let i = 1; i <= n; i++) {
              spawn(last.x + ((head.x - last.x) * i) / n, last.y + ((head.y - last.y) * i) / n);
            }
          } else {
            spawn(head.x, head.y);
          }
        }
        while (blobs.length && now - blobs[0].born > SETTINGS.lifeMs) blobs.shift();

        trailCtx.clearRect(0, 0, trail.width, trail.height);
        trailCtx.globalCompositeOperation = 'lighter';
        for (const b of blobs) {
          const age = (now - b.born) / SETTINGS.lifeMs;
          const alpha = Math.pow(1 - age, 1.35);
          stampBrush(b.x, b.y, b.r * (1 + age * 0.35), alpha);
        }
        trailCtx.globalCompositeOperation = 'source-over';

        gl.activeTexture(gl.TEXTURE2);
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, gl.RGBA, gl.UNSIGNED_BYTE, trail);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        rafId = requestAnimationFrame(frame);
      };
      rafId = requestAnimationFrame(frame);
    };

    start();

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="lrh-hero" id="home" ref={sectionRef}>
      <img className="lrh-fallback" src={BASE_SRC} alt="Portrait of Mohamed Riyaz Ahamed" />
      <canvas className="lrh-canvas" ref={canvasRef} aria-hidden="true" />

      <header className="lrh-top">
        <span className="lrh-brand">
          Mohamed Riyaz<span className="lrh-dot">.</span>
        </span>
        <a className="lrh-contact" href="mailto:riyazahmedff@gmail.com">
          Contact
        </a>
      </header>

      <div className="lrh-bottom">
        <p className="lrh-tagline">
          Full-stack &amp; AI systems engineer.
          <br />
          Shipping web, mobile, and LLM products.
        </p>
        <span className="lrh-scroll">Scroll</span>
      </div>
    </section>
  );
};

export default LiquidRevealHero;
