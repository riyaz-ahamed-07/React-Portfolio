import { useState, useEffect } from 'react';
import { Zap, Mail, ArrowDownRight, Clock } from 'lucide-react';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="neo-section" id="home" style={{ marginTop: '20px' }}>
      <div className="neo-hero-card">
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px' }}>
          <span className="neo-hero-eyebrow" style={{ margin: 0 }}>
            ⚡ FULL STACK & AI SYSTEMS ENGINEER
          </span>
          <span
            className="neo-badge neo-badge-cyan"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
          >
            <Clock size={14} /> IST: {currentTime || 'LOADING...'}
          </span>
        </div>

        <h1>Mohamed Riyaz Ahamed</h1>
        <p className="neo-hero-lead">
          I architect & ship high-impact products across web, mobile, and AI systems —
          fusing React, Node.js, Spring Boot, and LLM orchestration into cutting-edge digital experiences.
        </p>

        <div className="neo-btn-group">
          <a className="neo-btn neo-btn-primary" href="#projects">
            <Zap size={18} /> INITIATE_PROJECTS
          </a>
          <a className="neo-btn neo-btn-secondary" href="mailto:riyazahmedff@gmail.com">
            <Mail size={18} /> CONNECT_MAIL
          </a>
          <a className="neo-btn" href="#experience" style={{ background: '#FFFFFF' }}>
            <ArrowDownRight size={18} /> WORK_LOG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;