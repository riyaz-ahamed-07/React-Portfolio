import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    institution: 'Saveetha Engineering College',
    degree: 'B.Tech in Artificial Intelligence and Machine Learning',
    period: '2024 – Present',
    grade: 'CGPA: 8.93 / 10',
    description: 'Focused on core Computer Science, Deep Learning, Natural Language Processing, System Architecture, and AI Application Engineering.',
    badges: [
      { text: 'High Academic Distinction', icon: Award, colorClass: 'neo-badge-yellow' },
      { text: 'AI & ML Specialization', icon: BookOpen, colorClass: 'neo-badge-green' },
    ]
  },
  {
    institution: 'Dhanish Matriculation Higher Secondary School',
    location: 'Kambar Nagar',
    degree: 'Higher Secondary · Computer Science',
    period: 'Apr 2022 – Mar 2024',
    grade: 'Grade: 87.8%',
    description: 'Specialized in Computer Science, Mathematics, Physics, and Chemistry with outstanding academic performance.',
    badges: [
      { text: 'Computer Science Stream', icon: CheckCircle2, colorClass: 'neo-badge-cyan' },
      { text: 'HSC Distinction', icon: Award, colorClass: 'neo-badge-purple' },
    ]
  }
];

const Education = () => {
  return (
    <section className="neo-section" id="education">
      <div className="neo-section-header" style={{ background: '#00E5FF' }}>
        <GraduationCap size={24} />
        <h2>Education</h2>
      </div>

      <div className="grid-2col">
        {educationData.map((edu, idx) => (
          <div key={idx} className="neo-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 22px', marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="neo-card-role-title" style={{ margin: '0 0 2px 0', fontSize: '1.2rem', lineHeight: 1.25 }}>
                  {edu.institution}
                </h3>
                <div className="neo-card-meta" style={{ margin: '0 0 4px 0', minHeight: 'auto', fontSize: '0.88rem' }}>
                  {edu.degree}
                </div>
                {edu.period && (
                  <div className="neo-card-meta" style={{ fontSize: '0.8rem', margin: 0, minHeight: 'auto', display: 'flex', gap: '6px', alignItems: 'center', color: '#4A5568' }}>
                    <Calendar size={13} /> {edu.period}
                    {edu.location && <> · <MapPin size={13} /> {edu.location}</>}
                  </div>
                )}
              </div>
              <span className="neo-badge neo-badge-purple" style={{ fontSize: '0.78rem', flexShrink: 0, whiteSpace: 'nowrap' }}>
                {edu.grade}
              </span>
            </div>

            <p style={{ marginTop: '10px', fontSize: '0.92rem', fontWeight: 600, color: '#2D3748', lineHeight: 1.5, flexGrow: 1, marginBottom: 0 }}>
              {edu.description}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
              {edu.badges.map((b, i) => {
                const IconComp = b.icon;
                return (
                  <span key={i} className={`neo-badge ${b.colorClass}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', padding: '3px 8px' }}>
                    <IconComp size={13} /> {b.text}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
