import { useEffect, useRef, useState } from 'react';
import { profile, links } from '../../data/profile';

const formatTime = () => new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()) + ' IST';

export default function Hero() {
  const [time, setTime] = useState(formatTime);
  const orb = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(timer);
  }, []);
  function move(event) {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    orb.current.style.transform = `translate(${event.clientX - rect.left - rect.width * .7}px, ${event.clientY - rect.top - rect.height * .4}px)`;
  }
  return <section id="top" className="hero" onPointerMove={move} aria-labelledby="hero-title">
    <div className="hero-grid" aria-hidden="true" />
    <div className="orb" ref={orb} aria-hidden="true" />
    <div className="container hero-content">
      <p className="label">{profile.eyebrow}</p>
      <h1 id="hero-title">Mohamed<br /><span><em>Riyaz</em> Ahamed.</span></h1>
      <p className="hero-lead">{profile.lead}</p>
      <p className="hero-subline">{profile.subline}</p>
      <div className="actions">
        <a className="button primary" href="#work">See my work <span aria-hidden="true">↘</span></a>
        <a className="button" href={links.resume} download>Download resume</a>
        <a className="text-link" href={links.email}>Email me</a>
      </div>
      <ul className="chips proof-chips">{profile.chips.map(chip => <li key={chip}>{chip}</li>)}</ul>
      <div className="hero-foot"><span className="label">Scroll to explore <span aria-hidden="true">↓</span></span><span className="label" aria-live="off">Local time · {time}</span></div>
    </div>
  </section>;
}
