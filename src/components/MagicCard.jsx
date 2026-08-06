import { useRef } from 'react';
import './MagicCard.css';

const MagicCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} className={`magic-card ${className}`} onMouseMove={handleMouseMove}>
      <div className="magic-card-glow" aria-hidden="true" />
      <div className="magic-card-content">{children}</div>
    </div>
  );
};

export default MagicCard;
