import { Award } from 'lucide-react';
import CertificateCard from './cards/CertificateCard';
import oracleJavaImg from '../assets/oracle-java-21.png';
import oracleJavaBadgeImg from '../assets/oracle-java-21-badge.jpg';
import byteblazeCertImg from '../assets/byteblaze-cert.jpg';
import byteblazeStageImg from '../assets/byteblaze-stage.jpg';
import byteblazeTrophyImg from '../assets/byteblaze-trophy.jpg';
import energizeCertImg from '../assets/energize-cert.jpg';
import energizeStageImg from '../assets/energize-stage.jpg';
import energizePrizeImg from '../assets/energize-prize.jpg';
import oracleAiFoundationsImg from '../assets/oracle-ai-foundations.png';
import oracleGenAiImg from '../assets/oracle-genai-pro.png';
import uipathDevImg from '../assets/uipath-automation-developer.png';

const credentialsAndAwards = [
  {
    title: 'Oracle Certified Professional: Java SE 21 Developer',
    issuer: 'Oracle',
    year: 'Dec 2025',
    credentialLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9025743946E3CD3A472FFF005C39D572595C822D4549691EA7E1F1B973F7AAA5',
    badge: 'Oracle Pro',
    images: [oracleJavaImg, oracleJavaBadgeImg],
  },
  {
    title: '1st Place Winner — ENERGIZE 2026 Hackathon',
    issuer: 'RIT Chennai',
    year: 'Apr 2026',
    credentialLink: '#',
    badge: '1st Place Award',
    images: [energizeCertImg, energizeStageImg, energizePrizeImg],
  },
  {
    title: '1st Place Winner — Byte Blaze National Level Hackathon',
    issuer: 'SIMATS Engineering',
    year: 'Jul 2026',
    credentialLink: '#',
    badge: '1st Place Award',
    images: [byteblazeCertImg, byteblazeTrophyImg, byteblazeStageImg],
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: 'Oct 2025',
    credentialLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DD2BD59DE4EA6FC66E51EA9DE380B9032AEE6B3D8102B16B82376D9FFB4AA3BE',
    badge: 'Oracle GenAI',
    images: [oracleGenAiImg],
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    year: 'May 2026',
    credentialLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8B2AA1256A1CA2DBAB0E6D805D75255126B6C3D545FD37F9FE1F0C426D90C348',
    badge: 'Oracle AI',
    images: [oracleAiFoundationsImg],
  },
  {
    title: 'UiPath Academic Alliance Student Automation Developer Associate',
    issuer: 'UiPath',
    year: 'May 2025',
    credentialLink: 'https://credentials.uipath.com/2144972d-cc2c-4bca-831f-be4cdd19f40b#acc.qFi3h0Bl',
    badge: 'UiPath Associate',
    images: [uipathDevImg],
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