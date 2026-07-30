import { Award } from 'lucide-react';
import CertificateCard from './cards/CertificateCard';

const credentialsAndAwards = [
  {
    title: 'Oracle Certified Professional: Java SE 21 Developer',
    issuer: 'Oracle',
    year: 'Dec 2025',
    credentialLink: 'https://education.oracle.com/',
    badge: 'Oracle Pro',
    imageUrl: '',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: 'Oct 2025',
    credentialLink: 'https://education.oracle.com/',
    badge: 'Oracle GenAI',
    imageUrl: '',
  },
  {
    title: '1st Place Winner — ENERGIZE 2026 Hackathon',
    issuer: 'RIT Chennai',
    year: 'Apr 2026',
    credentialLink: '#',
    badge: '1st Place Award',
    imageUrl: '',
  },
  {
    title: '1st Place Winner — Byte Blaze National Level Hackathon',
    issuer: 'SIMATS Engineering',
    year: 'Jul 2026',
    credentialLink: '#',
    badge: '1st Place Award',
    imageUrl: '',
  },
];

const Certificates = () => {
  return (
    <section className="neo-section" id="certificates">
      <div className="neo-section-header" style={{ background: '#432DD7', color: '#FFFFFF' }}>
        <Award size={24} />
        <h2>Certifications & Awards</h2>
      </div>

      <div className="grid-2col">
        {credentialsAndAwards.map((item) => (
          <CertificateCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;