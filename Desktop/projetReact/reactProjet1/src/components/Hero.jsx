import React from 'react';
import './Hero.css';
import TextType from './TextType';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <TextType
                text={[
                  "Salut, je suis Yeo Gozie Ousmane Axel",
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
                textColors={['#ffffff', '#cccccc', '#aaaaaa']}
                loop={true}
              />
            </h1>
            
            <div className="hero-subtitle">
              <span className="subtitle-text">Étudiant en Licence 2 MIAGE</span>
              <div className="subtitle-line"></div>
            </div>
            
            <p className="hero-description">
              Passionné par la technologie et l'analyse de données, 
              je me spécialise en gestion et informatique pour devenir 
              ingénieur en Big Data et créer des solutions d'analyse avancées.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={scrollToNext}
              >
                <span>Découvrir mon parcours</span>
                <div className="btn-arrow">→</div>
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
          
          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-initials">YA</div>
              </div>
              <div className="profile-info">
                <h3>Yeo Gozie</h3>
                <p>Futur Ingénieur Big Data & Étudiant MIAGE</p>
                <div className="profile-stats">
                  <div className="stat">
                    <span className="stat-number">2</span>
                    <span className="stat-label">Années d'expérience</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">6+</span>
                    <span className="stat-label">Technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
