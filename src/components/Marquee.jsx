import './Marquee.css';

const ROW_ONE = [
  'React', 'Node.js', 'Spring Boot', 'TypeScript', 'FastAPI',
  'React Native', 'PostgreSQL', 'Express.js', 'Java', 'Python',
];

const ROW_TWO = [
  'LLM Integration', 'RAG', 'Prompt Engineering', 'Semantic Search',
  'TensorFlow', 'Supabase', 'GCP', 'Vercel', 'MySQL', 'Pandas',
];

const Row = ({ items, reverse }) => {
  // Content duplicated back-to-back; the 0% -> -50% keyframe loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className={`marquee-track${reverse ? ' reverse' : ''}`}>
        {doubled.map((item, i) => (
          <span className="marquee-item" key={`${item}-${i}`}>
            {item}
            <span className="marquee-bullet" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

const Marquee = ({ direction = 'left' }) => {
  const reversed = direction === 'right';
  return (
    <section
      className={`marquee-section${reversed ? ' is--reversed-marquee' : ''}`}
      aria-label="Skills marquee"
    >
      <img className="marquee-portal left" src="/nether-portal.png" alt="" aria-hidden="true" />
      <img className="marquee-portal right" src="/nether-portal.png" alt="" aria-hidden="true" />
      <Row items={ROW_ONE} reverse={reversed} />
      <Row items={ROW_TWO} reverse={!reversed} />
    </section>
  );
};

export default Marquee;
