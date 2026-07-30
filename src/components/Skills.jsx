import { 
  Code, Cpu, Layers, Database, Sparkles, Terminal, Globe, Server, 
  Bot, Flame, Box, ShieldCheck, Zap, Layout
} from 'lucide-react';

const skillsData = [
  { name: 'Java', category: 'Languages', icon: Code },
  { name: 'Python', category: 'Languages', icon: Terminal },
  { name: 'JavaScript', category: 'Languages', icon: Globe },
  { name: 'TypeScript', category: 'Languages', icon: Code },
  { name: 'SQL', category: 'Languages', icon: Database },
  { name: 'React', category: 'Frameworks', icon: Layout },
  { name: 'React Native', category: 'Frameworks', icon: Layout },
  { name: 'Node.js', category: 'Frameworks', icon: Server },
  { name: 'Express.js', category: 'Frameworks', icon: Server },
  { name: 'FastAPI', category: 'Frameworks', icon: Zap },
  { name: 'Spring Boot', category: 'Frameworks', icon: Box },
  { name: 'PostgreSQL', category: 'Databases & Cloud', icon: Database },
  { name: 'MySQL', category: 'Databases & Cloud', icon: Database },
  { name: 'GCP', category: 'Databases & Cloud', icon: Server },
  { name: 'Supabase', category: 'Databases & Cloud', icon: ShieldCheck },
  { name: 'Vercel', category: 'Databases & Cloud', icon: Globe },
  { name: 'LLM Integration', category: 'AI & ML', icon: Bot },
  { name: 'Prompt Engineering', category: 'AI & ML', icon: Sparkles },
  { name: 'RAG', category: 'AI & ML', icon: Cpu },
  { name: 'Semantic Search', category: 'AI & ML', icon: Flame },
  { name: 'TensorFlow', category: 'AI & ML', icon: Layers },
  { name: 'Pandas', category: 'AI & ML', icon: Code },
];

const Skills = () => {
  // Duplicate skills list for seamless infinite looping animation
  const carouselItems = [...skillsData, ...skillsData];

  return (
    <section className="neo-section" id="skills">
      <div className="neo-section-header" style={{ background: '#00E5FF', color: '#121212' }}>
        <Cpu size={24} />
        <h2>Tech Stack & Skills</h2>
      </div>

      <div className="skills-carousel-wrapper">
        <div className="skills-carousel-track">
          {carouselItems.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div key={`${skill.name}-${index}`} className="skill-carousel-card">
                <div className="skill-icon-box">
                  <IconComponent size={22} />
                </div>
                <div>
                  <h4 className="skill-info-name">{skill.name}</h4>
                  <span className="skill-info-cat">{skill.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;