import { FolderGit2 } from 'lucide-react';
import ProjectCard from './cards/ProjectCard';
import voltifyImg from '../assets/Voltify.png';
import rankerImg from '../assets/Ranker.png';
import salesAgentImg from '../assets/sales-agent.png';
import heroImg from '../assets/hero.png';

const projects = [
  {
    title: 'Portfolia',
    description: 'AI-powered portfolio builder with dual-pane editing and automated GitHub repository importing.',
    technologies: 'React, FastAPI, PostgreSQL, TypeScript',
    github: 'https://github.com/riyaz-ahamed-07/Portfolia',
    demo: 'https://portfolia-ai.vercel.app/',
    badge: 'Product Build',
    imageUrl: heroImg,
  },
  {
    title: 'Voltify',
    description: 'AI energy platform for appliance-level bill estimation, forecasting, and anomaly detection. 1st Place Winner at Energize 2026 & Byte Blaze.',
    technologies: 'React, Node.js, PostgreSQL, LLMs',
    github: 'https://github.com/riyaz-ahamed-07/Voltify',
    demo: 'https://voltify-ai.vercel.app/',
    badge: 'Hackathon Winner',
    imageUrl: voltifyImg,
  },
  {
    title: 'Offline Candidate Ranker',
    description: 'Offline candidate scoring & semantic ranking engine processing 100K+ profiles in 45s under 100MB RAM.',
    technologies: 'Python, Sentence Transformers, PyTorch',
    github: 'https://github.com/riyaz-ahamed-07/Offline-Candidate-Ranker',
    demo: '#',
    badge: 'High-Scale AI',
    imageUrl: rankerImg,
  },
  {
    title: 'Agentic Sales Intake Agent',
    description: 'Full-stack AI sales intake platform leveraging RAG to qualify leads and generate automated prospect replies.',
    technologies: 'Spring Boot, React, PostgreSQL, RAG',
    github: 'https://github.com/riyaz-ahamed-07/Agentic-Sales-Intake-Qualification-Agent',
    demo: '#',
    badge: 'AI Workflow',
    imageUrl: salesAgentImg,
  },
];

const Projects = () => {
  return (
    <section className="neo-section" id="projects">
      <div className="neo-section-header" style={{ background: '#FDC800', color: '#121212' }}>
        <FolderGit2 size={24} />
        <h2>Featured Projects</h2>
      </div>

      <div className="grid-2col">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
