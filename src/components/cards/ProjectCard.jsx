import { useState } from 'react';
import { ExternalLink, Code2, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, github, demo, badge, imageUrl, images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const imageList = Array.isArray(images) && images.length > 0 
    ? images 
    : (Array.isArray(imageUrl) ? imageUrl : (imageUrl ? [imageUrl] : []));

  const hasMultiple = imageList.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="neo-image-card">
      <div className="neo-image-slot">
        {imageList.length > 0 ? (
          <>
            <img
              src={imageList[currentIdx]}
              alt={`Preview screenshot of ${title} (${currentIdx + 1}/${imageList.length})`}
              loading="lazy"
            />
            {hasMultiple && (
              <>
                <button
                  className="neo-carousel-btn neo-carousel-prev"
                  onClick={handlePrev}
                  aria-label="Previous project screenshot"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="neo-carousel-btn neo-carousel-next"
                  onClick={handleNext}
                  aria-label="Next project screenshot"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="neo-carousel-dots">
                  {imageList.map((_, idx) => (
                    <span
                      key={idx}
                      className={`neo-carousel-dot ${idx === currentIdx ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIdx(idx);
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </>
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