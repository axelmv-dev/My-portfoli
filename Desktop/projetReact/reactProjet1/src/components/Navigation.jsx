import { useState, useEffect, useRef } from 'react';
import ParticleEffect from './ParticleEffect';
import './Navigation.css';
import './ParticleEffect.css';

const Navigation = ({ activeSection, onSectionClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const buttonRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleButtonClick = (itemId, index) => {
    setActiveButton(index);
    onSectionClick(itemId);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">YEO GOZIE</span>
          <div className="logo-dot"></div>
        </div>
        
        <div className="nav-menu">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              ref={el => buttonRefs.current[index] = el}
              className={`nav-item nav-button ${activeSection === item.id ? 'active' : ''} ${activeButton === index ? 'particle-active' : ''}`}
              onClick={() => handleButtonClick(item.id, index)}
            >
              <div className="morphing-bg"></div>
              <div className="nav-effect"></div>
              <span className="nav-text">{item.label}</span>
              <div className="nav-indicator"></div>
              
              {activeButton === index && (
                <ParticleEffect 
                  targetElement={buttonRefs.current[index]}
                  particleCount={6}
                  animationTime={700}
                  colors={['#ffffff', '#cccccc']}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
