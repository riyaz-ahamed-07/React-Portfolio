import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import voltifyImg from '../assets/Voltify.png';
import rankerImg from '../assets/Ranker.png';
import salesAgentImg from '../assets/sales-agent.png';
import portfoliaImg from '../assets/hero.png';
import './FeaturedProjects.css';

const projects = [
  {
    title: 'Portfolia',
    description:
      'Portfolio builder with dual-pane editing and automated GitHub repo import.',
    technologies: 'React · FastAPI · PostgreSQL',
    github: 'https://github.com/riyaz-ahamed-07/Portfolia',
    demo: 'https://portfolia-ai.vercel.app/',
    badge: 'Product',
    imageUrl: portfoliaImg,
  },
  {
    title: 'Voltify',
    description:
      'Appliance-level bill estimation, forecasting, and anomaly detection. 1st at Energize 2026 & Byte Blaze.',
    technologies: 'React · Node.js · LLMs',
    github: 'https://github.com/riyaz-ahamed-07/Voltify',
    demo: 'https://voltify-ai.vercel.app/',
    badge: 'Winner',
    imageUrl: voltifyImg,
  },
  {
    title: 'Offline Candidate Ranker',
    description:
      'Semantic ranking engine — 100K+ profiles in 45s under 100MB RAM.',
    technologies: 'Python · Sentence Transformers',
    github: 'https://github.com/riyaz-ahamed-07/Offline-Candidate-Ranker',
    demo: null,
    badge: 'Systems',
    imageUrl: rankerImg,
  },
  {
    title: 'Sales Intake Agent',
    description:
      'RAG-backed lead qualification with automated prospect replies.',
    technologies: 'Spring Boot · React · RAG',
    github: 'https://github.com/riyaz-ahamed-07/Agentic-Sales-Intake-Qualification-Agent',
    demo: null,
    badge: 'Agent',
    imageUrl: salesAgentImg,
  },
];

const VISIBLE_BY_DEFAULT = 2;

const ProjectCard = ({ project }) => (
  <article className="fp-card">
    <div className="fp-thumb-wrap">
      <img className="fp-thumb" src={project.imageUrl} alt={`${project.title} screenshot`} />
      <span className="fp-badge">{project.badge}</span>
    </div>
    <div className="fp-card-body">
      <h3 className="fp-card-title">{project.title}</h3>
      <p className="fp-card-desc">{project.description}</p>
      <p className="fp-card-tech">{project.technologies}</p>
      <div className="fp-card-links">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={14} /> Demo
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer">
          <Code2 size={14} /> Code
        </a>
      </div>
    </div>
  </article>
);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const cloudYUp = useTransform(scrollYProgress, [0, 1], [50, -70]);
  const cloudYDown = useTransform(scrollYProgress, [0, 1], [-50, 70]);

  const visible = projects.slice(0, VISIBLE_BY_DEFAULT);
  const hidden = projects.slice(VISIBLE_BY_DEFAULT);

  const toggle = () => {
    if (expanded) {
      setExpanded(false);
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setExpanded(true);
    }
  };

  return (
    <section className="fp-section" id="projects" ref={sectionRef}>
      <motion.img
        className="fp-cloud fp-cloud-tr"
        src="/voxel-cloud.png"
        alt=""
        aria-hidden="true"
        style={{ y: cloudYUp }}
      />
      <motion.img
        className="fp-cloud fp-cloud-bl"
        src="/voxel-cloud.png"
        alt=""
        aria-hidden="true"
        style={{ y: cloudYDown }}
      />

      <header className="fp-header">
        <div className="fp-heading-row">
          <img className="fp-book" src="/enchanted-book.png" alt="" aria-hidden="true" />
          <h2 className="fp-title">Selected work</h2>
        </div>
        <p className="fp-intro">Things I&apos;ve designed, built, and shipped.</p>
      </header>

      <div className="fp-grid">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
        <AnimatePresence>
          {expanded &&
            hidden.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, delay: i * 0.08, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      <button className="fp-toggle" type="button" onClick={toggle}>
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
};

export default FeaturedProjects;
