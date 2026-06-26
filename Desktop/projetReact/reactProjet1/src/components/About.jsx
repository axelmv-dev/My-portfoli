import { useEffect, useState, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveCard(prev => (prev + 1) % 3), 3000);
    return () => clearInterval(interval);
  }, []);

  const aboutCards = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: 'Formation',
      description: 'Étudiant en Licence 2 MIAGE (Méthodes Informatiques Appliquées à la Gestion d\'Entreprise)',
      details: 'Formation pluridisciplinaire combinant informatique, gestion et management'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <defs><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
          <path d="M18 20V10M12 20V4M6 20v-6"/>
        </svg>
      ),
      title: 'Big Data',
      description: 'Passionné par l\'analyse et le traitement de grandes volumes de données',
      details: 'Apprentissage des technologies d\'analyse de données et d\'intelligence artificielle'
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="url(#grad3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <defs><linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: 'Gestion & Informatique',
      description: 'Spécialisation en gestion et informatique appliquée',
      details: 'Formation en MIAGE combinant gestion d\'entreprise et technologies informatiques'
    }
  ];

  const timelineItems = [
    {
      year: '2023',
      title: 'Début des études',
      description: 'Entrée en Licence MIAGE'
    },
    {
      year: '2024',
      title: 'Développement des compétences',
      description: 'Apprentissage intensif en gestion et analyse de données'
    },
    {
      year: '2025',
      title: 'Spécialisation Big Data',
      description: 'Approfondissement des technologies de traitement de données'
    }
  ];

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01</span>
            À propos de moi
          </h2>
          <p className="section-subtitle">
            Découvrez mon parcours, mes motivations et ma vision
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Qui suis-je ?</h3>
              <p>
                Je suis <strong>Yeo Gozie Ousmane Axel</strong>, un étudiant passionné par l'informatique 
                et la gestion. Actuellement en Licence 2 MIAGE, je me spécialise dans la gestion et 
                l'informatique pour devenir ingénieur en Big Data.
              </p>
            </div>

            <div className="about-mission">
              <h3>Ma mission</h3>
              <p>
                Mon objectif est de devenir un ingénieur en Big Data expert capable d'analyser et 
                interpréter de vastes volumes de données pour créer des solutions intelligentes. 
                Je crois fermement que les données sont la clé de l'innovation et de l'amélioration 
                des processus d'entreprise.
              </p>
            </div>

            <div className="about-values">
              <h3>Mes valeurs</h3>
              <ul>
                <li>
                  <span className="value-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
                  </span>
                  <span>Analyse précise et interprétation des données</span>
                </li>
                <li>
                  <span className="value-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                  </span>
                  <span>Apprentissage continu et veille technologique</span>
                </li>
                <li>
                  <span className="value-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </span>
                  <span>Collaboration et travail d'équipe</span>
                </li>
                <li>
                  <span className="value-icon-wrapper">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                  </span>
                  <span>Gestion efficace et optimisation des processus</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-visual">
            <div className="cards-container">
              {aboutCards.map((card, index) => (
                <div
                  key={index}
                  className={`about-card ${activeCard === index ? 'active' : ''}`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="card-icon-wrapper">{card.icon}</div>
                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-description">{card.description}</p>
                  <div className="card-details">{card.details}</div>
                </div>
              ))}
            </div>

            <div className="timeline">
              <h4>Mon parcours</h4>
              <div className="timeline-line"></div>
              {timelineItems.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-description">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Années d'études</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5</div>
              <div className="stat-label">Projets réalisés</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Technologies apprises</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Détermination</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
