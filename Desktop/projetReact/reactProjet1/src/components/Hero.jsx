import React from 'react';
import './Hero.css';
import TextType from './TextType';
import profilePhoto from '../assets/Maphoto.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow"></div>
      <div className="hero-bg-glow-2"></div>
      <div className="container">
        <div className="hero-content">
          {/* Photo circulaire à gauche */}
          <div className="hero-photo-side">
            <div className="hero-photo-container">
              <div className="hero-photo-ring"></div>
              <div className="hero-photo-ring-inner"></div>
              <img 
                src={profilePhoto} 
                alt="Yeo Gozie Ousmane Axel" 
                className="hero-photo"
              />
            </div>
          </div>

          {/* Texte à droite */}
          <div className="hero-text-side">
            <p className="hero-greeting">Hey, je suis</p>

            <h1 className="hero-name">
              <TextType
                text={[
                  "Yeo Gozie Ousmane Axel",
                  "Futur Ingénieur Big Data",
                  "Étudiant MIAGE"
                ]}
                typingSpeed={80}
                deletingSpeed={60}
                pauseDuration={1200}
                initialDelay={600}
                showCursor={true}
                cursorCharacter="|"
                className="hero-name-typing"
                textColors={['#fafafa', '#818cf8', '#a78bfa']}
                loop={true}
              />
            </h1>

            <p className="hero-description">
              Passionné par la technologie et l'analyse de données, 
              je me spécialise en gestion et informatique pour devenir 
              ingénieur en Big Data.
            </p>

            <div className="hero-tags">
              <span className="hero-tag">MIAGE</span>
              <span className="hero-tag-separator">|</span>
              <span className="hero-tag">Big Data</span>
              <span className="hero-tag-separator">|</span>
              <span className="hero-tag">Dev Web</span>
              <span className="hero-tag-separator">|</span>
              <span className="hero-tag">Cybersécurité</span>
            </div>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToNext}
              >
                <span>Découvrir mon parcours</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
