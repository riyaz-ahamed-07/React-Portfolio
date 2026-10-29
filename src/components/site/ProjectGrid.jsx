import { projects, links } from '../../data/profile';
import ProjectCard from './ProjectCard';
import ExternalLink from './ExternalLink';
export default function ProjectGrid() { return <div className="more-projects"><h3>More projects</h3><div className="project-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div><ExternalLink className="text-link" href={links.github}>More on GitHub</ExternalLink></div>; }
