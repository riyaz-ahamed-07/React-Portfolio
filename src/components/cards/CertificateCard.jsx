import { Award, ExternalLink, Image as ImageIcon, Calendar, Building2 } from 'lucide-react';

const CertificateCard = ({ title, issuer, year, credentialLink, badge, imageUrl }) => {
  return (
    <div className="neo-image-card">
      <div className="neo-image-slot" style={{ background: '#F0F5FF' }}>
        {imageUrl ? (
          <img src={imageUrl} alt={`Certificate preview for ${title}`} loading="lazy" />
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