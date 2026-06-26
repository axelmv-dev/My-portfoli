import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import './Projects.css';

// Import project images
import fastvidyImg from '../Projet/FastVidy.png';
import timaImg from '../Projet/TIMA.png';

const projects = [
  {
    id: 1,
    title: 'FastVidy',
    category: 'Web App',
    image: fastvidyImg,
    description:
      "FastVidy est une plateforme web innovante qui permet de télécharger des vidéos depuis les réseaux sociaux les plus populaires, directement à partir d'un simple lien.",
    highlights: [
      'Téléchargement depuis TikTok, Facebook, Snapchat, X, Instagram et plus',
      'Choix de la résolution — 360p, 720p, 1080p, 4K',
      'Entièrement gratuit — aucun abonnement ni frais caché',
      'Compatible toutes plateformes — mobile, tablette et desktop',
      'Interface rapide — collez le lien, choisissez, téléchargez',
    ],
    tags: ['React', 'API', 'Responsive', 'Gratuit'],
  },
  {
    id: 2,
    title: 'TIMA Sécurité',
    category: 'Site Vitrine',
    image: timaImg,
    description:
      "TIMA Sécurité est une plateforme professionnelle dédiée aux services de gardiennage et de sécurité privée. Elle connecte les entreprises, les particuliers et les organisateurs d'événements avec des agents qualifiés.",
    highlights: [
      "Recrutement d'agents de sécurité certifiés — missions ponctuelles ou permanentes",
      'Brigade cynophile (maître-chien) pour la surveillance renforcée',
      "Sécurisation d'événements — concerts, conférences, mariages, festivals",
      'Gardiennage résidentiel — maisons, villas et résidences',
      'Sécurité entreprises — bureaux, commerces, chantiers, entrepôts',
    ],
    tags: ['Sécurité', 'Recrutement', 'B2B', 'Services'],
  },
];

function ProjectCard({ project, index, totalCards }) {
  const cardRef = useRef(null);
  const isLast = index === totalCards - 1;

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.2]);

  return (
    <div ref={cardRef} className="project-slot">
      <motion.div
        className="project-sticky-wrapper"
        style={{
          zIndex: index + 1,
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
        }}
      >
        <div className="project-card">
          {/* Left — Text content */}
          <div className="project-card-text">
            <span className="project-category">{project.category}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <ul className="project-highlights">
              {project.highlights.map((item, idx) => (
                <li key={idx}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="check-icon"
                  >
                    <path
                      d="M15 5L7 13L3 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Screenshot in device frame */}
          <div className="project-card-visual">
            <div className="device-frame">
              <div className="device-topbar">
                <span className="device-dot"></span>
                <span className="device-dot"></span>
                <span className="device-dot"></span>
              </div>
              <div className="device-screen">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header-wrapper">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03</span>
            Mes Projets
          </h2>
          <p className="section-subtitle">
            Des solutions concrètes à des problèmes réels
          </p>
        </div>
      </div>

      <div className="projects-stack">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
