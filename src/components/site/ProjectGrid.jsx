import { useRef, useState, useSyncExternalStore } from 'react';
import { featuredProjects, projects } from '../../data/profile';
import ProjectCard from './ProjectCard';
import ProjectPreview from './ProjectPreview';

const subscribe = callback => { window.addEventListener('resize', callback); return () => window.removeEventListener('resize', callback); };
const pageSize = () => window.innerWidth >= 1024 ? 6 : window.innerWidth >= 768 ? 4 : 2;

export default function ProjectGrid() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const size = useSyncExternalStore(subscribe, pageSize, () => 6);
  const lastTrigger = useRef(null);
  const allProjects = [...featuredProjects, ...projects];
  const pages = Math.ceil(allProjects.length / size);
  const current = Math.min(page, pages - 1);
  const visible = allProjects.slice(current * size, (current + 1) * size);
  function open(project, trigger) {
    lastTrigger.current = trigger;
    setSelected(project);
  }
  function close() {
    setSelected(null);
    requestAnimationFrame(() => lastTrigger.current?.focus());
  }
  return <section id="work" className="section container work-chapter">
    <div className="section-heading compact-heading"><div><p className="label">What I build</p><h2>Ideas into <em>systems.</em></h2></div><p>A quick look at the work. Open a card for the problem, approach, and details.</p></div>
    <div className="project-grid">{visible.map(project => <ProjectCard key={project.title} project={project} onOpen={event => open(project, event.currentTarget)} />)}</div>
    <div className="project-pagination"><p aria-live="polite">{current * size + 1} to {Math.min((current + 1) * size, allProjects.length)} of {allProjects.length} projects</p><div><button type="button" onClick={() => setPage(current - 1)} disabled={current === 0} aria-label="Previous projects"><span aria-hidden="true">←</span></button><button type="button" onClick={() => setPage(current + 1)} disabled={current === pages - 1} aria-label="Next projects"><span aria-hidden="true">→</span></button></div></div>
    {selected && <ProjectPreview project={selected} onClose={close} />}
  </section>;
}
