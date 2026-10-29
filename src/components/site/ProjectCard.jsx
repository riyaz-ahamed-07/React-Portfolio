export default function ProjectCard({ project, onOpen }) {
  const id = 'project-' + project.title.toLowerCase().replaceAll(' ', '-');
  return <button className="project-card project-trigger" type="button" onClick={onOpen} aria-haspopup="dialog" aria-labelledby={id} aria-describedby={id + '-summary'}>
    <span className="project-topline" aria-hidden="true"><span className="label">{project.category}</span><span className="project-open">↗</span></span>
    <span className="project-name" id={id}><span className="sr-only">Explore </span>{project.title}</span>
    <span className="project-summary" id={id + '-summary'} aria-hidden="true">{project.summary}</span>
    <span className="project-bottom" aria-hidden="true"><span>{project.shortStack}</span><span className="project-hint">Explore +</span></span>
  </button>;
}
