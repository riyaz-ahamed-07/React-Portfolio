import { useEffect, useRef, useState } from "react";
import "./App.css";

const skills = ["Java", "Python", "TypeScript", "React", "Spring Boot", "FastAPI", "PostgreSQL", "RAG", "Semantic Search", "LLM Systems"];
const projects = [
  { n: "01", title: "Portfolia", tag: "PRODUCT / FULL-STACK", copy: "An AI-powered portfolio builder with GitHub repository imports and a dual-pane editor for reviewing and refining generated content.", meta: "REACT + FASTAPI + POSTGRESQL", accent: "violet", github: "https://github.com/riyaz-ahamed-07/Portfolia", demo: "https://portfolia-ai.vercel.app/" },
  { n: "02", title: "Voltify", tag: "AI / ENERGY", copy: "An award-winning energy intelligence platform that estimates bills, forecasts usage, spots anomalies, and reads utility bills with LLM-powered OCR.", meta: "2× NATIONAL HACKATHON WINNER", accent: "lime", github: "https://github.com/riyaz-ahamed-07/Voltify", demo: "https://voltify-ai.vercel.app/" },
  { n: "03", title: "Offline Candidate Ranker", tag: "ML / SEARCH", copy: "A six-stage semantic ranking pipeline built to process 100,000+ candidate profiles—fully offline, on CPU, in 45 seconds.", meta: "<100MB MEMORY", accent: "blue", github: "https://github.com/riyaz-ahamed-07/Offline-Candidate-Ranker", demo: null },
  { n: "04", title: "Agentic Sales Intake", tag: "RAG / FULL-STACK", copy: "A conversational qualification agent that understands intent, scores leads, and retrieves the right case studies in real time.", meta: "SPRING BOOT + REACT", accent: "coral", github: "https://github.com/riyaz-ahamed-07/Agentic-Sales-Intake-Qualification-Agent", demo: null },
];

const credentials = [
  { type: "CERTIFICATION", date: "DEC 2025", title: "Oracle Certified Professional: Java SE 21 Developer", issuer: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9025743946E3CD3A472FFF005C39D572595C822D4549691EA7E1F1B973F7AAA5" },
  { type: "CERTIFICATION", date: "OCT 2025", title: "OCI 2025 Generative AI Professional", issuer: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DD2BD59DE4EA6FC66E51EA9DE380B9032AEE6B3D8102B16B82376D9FFB4AA3BE" },
  { type: "CERTIFICATION", date: "MAY 2026", title: "OCI 2025 AI Foundations Associate", issuer: "Oracle", href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8B2AA1256A1CA2DBAB0E6D805D75255126B6C3D545FD37F9FE1F0C426D90C348" },
  { type: "CERTIFICATION", date: "MAY 2025", title: "Student Automation Developer Associate", issuer: "UiPath Academic Alliance", href: "https://credentials.uipath.com/2144972d-cc2c-4bca-831f-be4cdd19f40b#acc.qFi3h0Bl" },
  { type: "AWARD · 1ST PLACE", date: "APR 2026", title: "ENERGIZE 2026 Hackathon", issuer: "RIT Chennai", href: null },
  { type: "AWARD · 1ST PLACE", date: "JUN 2026", title: "Byte Blaze National Level Hackathon", issuer: "SIMATS Engineering", href: null },
];

export default function Home() {
  const [time, setTime] = useState("");
  const glow = useRef(null);
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date()) + " IST");
    update(); const timer = setInterval(update, 30000); return () => clearInterval(timer);
  }, []);
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    glow.current?.style.setProperty("--x", `${e.clientX-r.left}px`); glow.current?.style.setProperty("--y", `${e.clientY-r.top}px`);
  };
  return <main>
    <nav><a className="brand" href="#top">MR<span>®</span></a><div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div><a className="availability" href="mailto:riyazahmedff@gmail.com"><i/>Available for opportunities</a></nav>

    <section id="top" className="hero" onPointerMove={move}>
      <div className="grid"/><div className="orb" ref={glow}/>
      <div className="eyebrow reveal">SOFTWARE ENGINEER · AI BUILDER · CHENNAI</div>
      <h1 className="reveal delay1">Mohamed<br/><em>Riyaz</em> Ahamed.</h1>
      <div className="hero-bottom reveal delay2"><p>I build useful products where<br/>clean engineering meets <strong>practical AI.</strong></p><div className="hero-actions"><a className="button dark" href="#work">See my work <span>↘</span></a><a className="textlink" href="/Mohamed_Riyaz_Ahamed_Resume.pdf" target="_blank">View résumé ↗</a></div></div>
      <div className="scroll">SCROLL TO EXPLORE <b>↓</b></div><div className="local">LOCAL TIME<br/><b>{time}</b></div>
    </section>

    <div className="ticker"><div>{[...skills,...skills].map((s,i)=><span key={i}>{s} <b>✦</b></span>)}</div></div>

    <section id="work" className="work"><div className="section-head"><div><span>01 / SELECTED WORK</span><h2>Things I’ve<br/>shipped.</h2></div><p>Systems that solve real problems—<br/>built with care, tested in the wild.</p></div>
      <div className="projects">{projects.map((p,i)=><article className={`project ${p.accent}`} key={p.title}>
        <div className="project-top"><span>{p.n}</span><small>{p.tag}</small></div><div className="project-art"><div className="terminal"><i/><i/><i/><code>{i===0?"> import --github repositories\n✓ AI draft generated\neditor ready":i===1?"> forecast --next-month\n✓ anomaly model online\n₹ 2,840 predicted":i===2?"> rank --profiles 100000\n████████████ 100%\n✓ completed in 45.2s":"> qualify --lead incoming\nintent: enterprise\n✓ case study retrieved"}</code></div></div><div className="project-copy"><h3>{p.title}</h3><p>{p.copy}</p><strong>{p.meta}</strong><div className="project-links">{p.demo&&<a href={p.demo} target="_blank" rel="noreferrer">Live ↗</a>}<a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
      </article>)}</div>
    </section>

    <section id="about" className="about"><div><span>02 / ABOUT</span><h2>Curious by default.<br/><em>Reliable</em> by design.</h2></div><div className="about-copy"><p>I’m a software engineer and AI/ML student who likes turning ambitious ideas into dependable products. From mobile experiences used across Canada to offline inference over 100k profiles, I care about the last mile—the part where it actually works.</p><div className="stats"><div><b>40+</b><small>MERGED PRs AT GATHERLY</small></div><div><b>8.93</b><small>CGPA / 10</small></div><div><b>2×</b><small>NATIONAL HACKATHON WINNER</small></div></div></div></section>

    <section className="experience"><span>03 / EXPERIENCE</span><div className="role"><b>2026—NOW</b><h3>Software Engineer Intern</h3><p>CRADLE COMMUNITIES · GATHERLY</p><i>React Native / Node.js / TypeScript</i></div><div className="role"><b>2025</b><h3>Web Development Intern</h3><p>ALTRUISTY INNOVATION · PORTFOLIA</p><i>FastAPI / PostgreSQL / React</i></div></section>

    <section className="credentials" id="credentials"><div className="credentials-head"><span>04 / CREDENTIALS</span><h2>Proof of work,<br/><em>on paper.</em></h2><p>Industry credentials and competition wins—earned, not collected.</p></div><div className="credential-grid">{credentials.map((item,i)=>{const card=<article className="credential-card"><div><span>{String(i+1).padStart(2,"0")}</span><small>{item.date}</small></div><b>{item.type}</b><h3>{item.title}</h3><p>{item.issuer}</p>{item.href&&<strong>Verify credential ↗</strong>}</article>;return item.href?<a key={item.title} href={item.href} target="_blank" rel="noreferrer">{card}</a>:<div key={item.title}>{card}</div>})}</div></section>

    <section id="contact" className="contact"><span>05 / LET’S TALK</span><h2>Have a hard problem?<br/><em>I’m listening.</em></h2><a className="mail" href="mailto:riyazahmedff@gmail.com">riyazahmedff@gmail.com <b>↗</b></a><footer><p>© 2026 MOHAMED RIYAZ AHAMED</p><div className="footer-links"><a href="https://github.com/riyaz-ahamed-07" target="_blank" rel="noreferrer"><i>GH</i> GitHub</a><a href="https://linkedin.com/in/riyaz7" target="_blank" rel="noreferrer"><i>in</i> LinkedIn</a><a href="/Mohamed_Riyaz_Ahamed_Resume.pdf" target="_blank" rel="noreferrer"><i>↓</i> Résumé</a></div><p>CHENNAI, INDIA</p></footer></section>
  </main>;
}
