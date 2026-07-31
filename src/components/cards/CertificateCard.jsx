import { useState } from 'react';
import { Award, ExternalLink, Image as ImageIcon, Calendar, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const CertificateCard = ({ title, issuer, year, credentialLink, badge, imageUrl, images }) => {
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
      <div className="neo-image-slot neo-cert-slot">
        {imageList.length > 0 ? (
          <>
            <img
              src={imageList[currentIdx]}
              alt={`Certificate preview for ${title} (${currentIdx + 1}/${imageList.length})`}
              loading="lazy"
            />
            {hasMultiple && (
              <>
                <button
                  className="neo-carousel-btn neo-carousel-prev"
                  onClick={handlePrev}
                  aria-label="Previous certificate image"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="neo-carousel-btn neo-carousel-next"
                  onClick={handleNext}
                  aria-label="Next certificate image"
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
          <div className="neo-image-placeholder" style={{ color: '#432DD7' }}>
            <ImageIcon size={28} />
            <span>[CERTIFICATE / AWARD IMAGE]</span>
          </div>
        )}
      </div>

      <div className="neo-card-body">
        <div className="neo-card-title">
          <span className="neo-title-text">{title}</span>
          <span className="neo-badge neo-badge-yellow">{badge || 'Credential'}</span>
        </div>

        <div className="neo-card-meta" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Building2 size={14} /> <strong>{issuer}</strong>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} /> {year}
          </span>
        </div>

        <div className="card-actions-footer">
          {credentialLink && credentialLink !== '#' ? (
            <a
              className="neo-btn neo-btn-primary"
              href={credentialLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`View verified credential for ${title}`}
              style={{ fontSize: '0.82rem', padding: '7px 12px' }}
            >
              <ExternalLink size={15} /> View Credential / Award
            </a>
          ) : (
            <span className="neo-badge neo-badge-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Award size={14} /> Verified Achievement
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;