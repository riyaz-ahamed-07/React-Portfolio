import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section className="neo-section" id="education">
      <div className="neo-section-header" style={{ background: '#00E5FF' }}>
        <GraduationCap size={24} />
        <h2>Education</h2>
      </div>

      <div className="neo-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, margin: '0 0 6px 0' }}>
              Saveetha Engineering College
            </h3>
            <div className="neo-card-meta">
              B.Tech in Artificial Intelligence and Machine Learning
            </div>
          </div>
          <span className="neo-badge neo-badge-purple" style={{ fontSize: '0.85rem' }}>
            CGPA: 8.93 / 10
          </span>
        </div>

        <p style={{ marginTop: '16px', fontWeight: 600, color: '#2D3748', lineHeight: 1.6 }}>
          Focused on core Computer Science, Deep Learning, Natural Language Processing, System Architecture, and AI Application Engineering.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
          <span className="neo-badge neo-badge-yellow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Award size={14} /> High Academic Distinction
          </span>
          <span className="neo-badge neo-badge-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={14} /> AI & ML Specialization
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;
