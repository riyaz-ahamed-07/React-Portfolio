import { useState } from 'react';
import { Mail, Code2, Globe, Copy, Check, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'riyazahmedff@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="neo-section" id="contact">
      <div className="neo-section-header" style={{ background: '#FF5376', color: '#FFFFFF' }}>
        <MessageSquare size={24} />
        <h2>Get In Touch</h2>
      </div>

      <div className="neo-card" style={{ background: '#FFFDF5' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, margin: '0 0 12px 0', letterSpacing: '-0.02em' }}>
          Let’s Build Something Exceptional Together ⚡
        </h3>
        <p style={{ fontSize: '1.1rem', color: '#2D3748', lineHeight: 1.6, marginBottom: '24px' }}>
          Whether you have an exciting full-stack engineering role, an AI product opportunity, or want to discuss scalable system design — my inbox is always open.
        </p>

        <div className="neo-btn-group" style={{ marginBottom: '32px' }}>
          <a
            className="neo-btn neo-btn-primary"
            href={`mailto:${email}`}
            style={{ fontSize: '1.05rem', padding: '14px 24px' }}
          >
            <Send size={18} /> Send Direct Email
          </a>
          <button
            className="neo-btn"
            onClick={handleCopyEmail}
            style={{ background: copied ? '#00E676' : '#FFFFFF', fontSize: '1.05rem', padding: '14px 24px' }}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Email Copied!' : 'Copy Email Address'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '3px solid #121212', paddingTop: '24px' }}>
          <a
            className="neo-btn"
            href="https://github.com/riyaz-ahamed-07"
            target="_blank"
            rel="noreferrer"
            style={{ background: '#FFFFFF', padding: '10px 18px', fontSize: '0.92rem' }}
          >
            <Code2 size={18} /> GitHub Profile
          </a>
          <a
            className="neo-btn"
            href="https://linkedin.com/in/riyaz-ahamed-07"
            target="_blank"
            rel="noreferrer"
            style={{ background: '#432DD7', color: '#FFFFFF', padding: '10px 18px', fontSize: '0.92rem' }}
          >
            <Globe size={18} /> LinkedIn Profile
          </a>
          <a
            className="neo-btn"
            href={`mailto:${email}`}
            style={{ background: '#FDC800', padding: '10px 18px', fontSize: '0.92rem' }}
          >
            <Mail size={18} /> {email}
          </a>
        </div>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '40px', padding: '20px 0', borderTop: '2.5px solid #121212' }}>
        <p style={{ fontWeight: 800, fontSize: '0.92rem', color: '#4A5568', margin: 0 }}>
          © {new Date().getFullYear()} Mohamed Riyaz Ahamed · Built with React & Neobrutalism Design System.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
