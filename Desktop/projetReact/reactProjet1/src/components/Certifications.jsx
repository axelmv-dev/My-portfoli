import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import certifGenie from '../certification/myCertifGenieUPB.png';
import certifUdemy from '../certification/Capture d\'écran 2026-06-26 003923.png';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Concours Génie UPB',
    issuer: 'Université Polytechnique de Bingerville',
    date: 'Février 2026',
    description: 'Brillante performance au Concours Génie UPB — Valorisation de l\'excellence académique',
    image: certifGenie,
    badge: '🏆'
  },
  {
    id: 2,
    title: 'Hacking Éthique : Le Cours Complet',
    issuer: 'Udemy — Michel Kartner, Cyberini Formations',
    date: 'Octobre 2025',
    description: 'Certification de fin de formation en Hacking Éthique — 16 heures de formation complète',
    image: certifUdemy,
    badge: '🛡️'
  }
];

const CertificationCard = ({ certification, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 50% 0% 50%)", "inset(0% 0% 0% 0%)"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0, 1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [60, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.92, 1]
  );

  return (
    <motion.div
      ref={ref}
      className="certification-card"
      style={{ opacity, y, scale }}
    >
      {/* Image avec effet clip-path */}
      <motion.div className="cert-image-wrapper" style={{ clipPath }}>
        <img
          src={certification.image}
          alt={`Certification - ${certification.title}`}
          className="cert-image"
          loading="lazy"
        />
      </motion.div>

      {/* Informations */}
      <div className="cert-info">
        <div className="cert-badge">{certification.badge}</div>
        <h3 className="cert-title">{certification.title}</h3>
        <p className="cert-issuer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
          {certification.issuer}
        </p>
        <p className="cert-date">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {certification.date}
        </p>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03</span>
            Certifications
          </h2>
          <p className="section-subtitle">
            Mes certifications et récompenses obtenues au fil de mon parcours
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
