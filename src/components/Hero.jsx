import { Zap, Mail, ArrowDownRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="neo-section" id="home" style={{ marginTop: '20px' }}>
      <div className="neo-hero-card">
        <span className="neo-hero-eyebrow">
          ⚡ FULL STACK & AI SYSTEMS ENGINEER
        </span>
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