import { useEffect, useRef } from 'react';
import ArchitectureDiagram from './ArchitectureDiagram';
import ExternalLink from './ExternalLink';

export default function ProjectPreview({ project, onClose }) {
  const dialog = useRef(null);
  const closeButton = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    closeButton.current.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      if (element.open) element.close();
    };
  }, []);
  return <dialog ref={dialog} className="project-preview" aria-labelledby="preview-title" aria-describedby="preview-summary" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === dialog.current) { const rect = dialog.current.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose(); } }}>
    <div className="preview-bar"><span className="label">Project notes</span><button ref={closeButton} className="preview-close" onClick={onClose} aria-label="Close project preview"><span aria-hidden="true">×</span></button></div>
    <div className="preview-body">
      <p className="label">{project.tag}</p><h2 id="preview-title">{project.title}</h2>
      <p id="preview-summary" className="lead">{project.description}</p>
      {project.problem && <div className="preview-block"><h3>The problem</h3><p>{project.problem}</p></div>}
      {project.steps && <div className="preview-block"><h3>How it works</h3><ol>{project.steps.map(step => <li key={step}>{step}</li>)}</ol></div>}
      {project.nodes && <ArchitectureDiagram project={project} />}
      {project.facts && <ul className="chips preview-facts">{project.facts.map(fact => <li key={fact}>{fact}</li>)}</ul>}
      {project.status && <p className="status-note">{project.status}</p>}
      <div className="preview-block"><h3>Built with</h3><p className="stack">{project.stack}</p></div>
      <div className="actions">{project.live && <ExternalLink className="button primary" href={project.live} label={'View ' + project.title + ' live'}>Live project</ExternalLink>}<ExternalLink className="button" href={project.github} label={project.title + ' source on GitHub'}>GitHub</ExternalLink></div>
    </div>
  </dialog>;
}
