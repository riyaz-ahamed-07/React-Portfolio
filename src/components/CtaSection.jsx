import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagicCard from './MagicCard';
import './CtaSection.css';

const EMAIL = 'riyazahmedff@gmail.com';

const links = [
  { label: 'Email', href: `mailto:${EMAIL}` },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/riyaz-ahamed-07' },
  { label: 'GitHub', href: 'https://github.com/riyaz-ahamed-07' },
];

const CtaSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const skyY = useTransform(scrollYProgress, [0, 1], ['-10%', '6%']);

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <motion.img
        className="cta-sky"
        src="/night-sky.png"
        alt=""
        aria-hidden="true"
        style={{ y: skyY }}
      />
      <div className="cta-fade-top" aria-hidden="true" />

      <div className="cta-card-wrap">
        <img className="cta-llama" src="/llama-nobg.png" alt="" aria-hidden="true" />
        <MagicCard className="cta-card">
          <span className="cta-eyebrow">Contact</span>
          <h2 className="cta-headline">Got a role, a product, or a hard problem?</h2>
          <p className="cta-copy">
            Write me. I work across full-stack, mobile, and LLM systems.
          </p>
          <div className="cta-links">
            {links.map((link, i) => (
              <span className="cta-link-item" key={link.label}>
                {i > 0 && (
                  <span className="cta-dot" aria-hidden="true">
                    /
                  </span>
                )}
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>
        </MagicCard>
      </div>

      <p className="cta-footer">
        © {new Date().getFullYear()} Mohamed Riyaz Ahamed
      </p>
    </section>
  );
};

export default CtaSection;
