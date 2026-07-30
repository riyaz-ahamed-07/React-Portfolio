import { UserCheck, Sparkles, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section className="neo-section" id="about">
      <div className="neo-section-header" style={{ background: '#FF5376', color: '#FFFFFF' }}>
        <UserCheck size={24} />
        <h2>About Me</h2>
      </div>

      <div className="neo-card">
        <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#121212', lineHeight: 1.6, marginBottom: '16px' }}>
          I’m a product engineer with a background in Artificial Intelligence & Machine Learning who thrives at the intersection of robust engineering systems and high-converting user interfaces.
        </p>
        <p style={{ fontSize: '1rem', color: '#2D3748', lineHeight: 1.6, marginBottom: '16px' }}>
          Currently working as a Full Stack Engineer at Gatherly, I build features across React Native mobile applications, Node.js backend architecture, and web platforms used by thousands across Canada.
        </p>
        <p style={{ fontSize: '1rem', color: '#2D3748', lineHeight: 1.6 }}>
          My core philosophy revolves around shipping production-grade code quickly, maintaining crisp UI clarity, and embedding intelligence into everyday software products.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
          <span className="neo-badge neo-badge-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} /> Product Mindset
          </span>
          <span className="neo-badge neo-badge-purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Terminal size={14} /> Full Stack Architecture
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;