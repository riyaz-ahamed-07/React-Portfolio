import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Cradle Communities Inc. (Gatherly)',
    period: 'Mar 2026 – Present',
    location: 'Remote · Canada / Global',
    badge: 'Current Role',
    badgeClass: 'neo-badge-purple',
    points: [
      'Delivered 40+ merged PRs across mobile (React Native), Node.js backend, and marketing web surfaces for a live platform.',
      'Architected reusable UI components, AI integrations, and backend logic for lease-based comparison and filtering workflows.',
      'Optimized system performance and user onboarding experience across web and mobile.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'Altruisty Innovation Pvt Ltd',
    period: 'Jul 2025 – Aug 2025',
    location: 'Hybrid',
    badge: 'Internship',
    badgeClass: 'neo-badge-yellow',
    points: [
      'Led development of Portfolia, an AI-powered portfolio builder using FastAPI, PostgreSQL, and React + TypeScript.',
      'Integrated GitHub repository importing and dual-pane editor experience for rapid personal portfolio publishing.'
    ]
  }
];

const Experience = () => {
  return (
    <section className="neo-section" id="experience">
      <div className="neo-section-header">
        <Briefcase size={24} />
        <h2>Work Experience</h2>
      </div>

      {experiences.map((exp, idx) => (
        <div key={idx} className="neo-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <h3 className="neo-card-role-title">{exp.role}</h3>
              <div className="neo-card-meta" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span><strong>{exp.company}</strong></span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} /> {exp.period}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> {exp.location}
                </span>
              </div>
            </div>
            <span className={`neo-badge ${exp.badgeClass}`}>{exp.badge}</span>
          </div>

          <ul style={{ margin: '14px 0 0 0', paddingLeft: '20px' }}>
            {exp.points.map((pt, i) => (
              <li key={i} style={{ marginBottom: '8px', fontSize: '0.98rem', fontWeight: 600, color: '#2D3748' }}>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
