import { ExternalLink, Code2, Image as ImageIcon } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, github, demo, badge, imageUrl }) => {
  return (
    <div className="neo-image-card">
      <div className="neo-image-slot">
        {imageUrl ? (
          <img src={imageUrl} alt={`Preview screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="neo-image-placeholder">
            <ImageIcon size={28} />
            <span>[IMAGE PLACEHOLDER]</span>
          </div>
        )}
      </div>

      <div className="neo-card-body">
        <div className="neo-card-title">
          <span className="neo-title-text">{title}</span>
          <span className="neo-badge neo-badge-purple">{badge}</span>
        </div>

        <p className="neo-card-text">{description}</p>

        <p className="neo-card-meta">
          <strong>Stack:</strong> {technologies}
        </p>

        <div className="neo-btn-group card-actions-footer">
          <a
            className="neo-btn neo-btn-primary"
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            style={{ fontSize: '0.82rem', padding: '7px 12px' }}
          >
            <Code2 size={15} /> Repository
          </a>
          {demo && demo !== '#' ? (
            <a
              className="neo-btn neo-btn-secondary"
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`View live demo of ${title}`}
              style={{ fontSize: '0.82rem', padding: '7px 12px' }}
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;