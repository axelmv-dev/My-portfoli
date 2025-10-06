import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import SimpleScrollStack from './components/SimpleScrollStack';
import GlobalSpotlight from './components/GlobalSpotlight';
import { getPerformanceMode } from './utils/performanceUtils';
import './components/SimpleScrollStack.css';
import './components/GlobalSpotlight.css';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [performanceMode, setPerformanceMode] = useState('high');
  const appRef = useRef(null);

  useEffect(() => {
    setPerformanceMode(getPerformanceMode());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      
      // Calculer le pourcentage de scroll
      const progress = Math.min(scrollPosition / documentHeight, 1);
      setScrollProgress(progress);

      // Déterminer la section active
      for (let i = 0; i < sections.length; i++) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionStart = offsetTop - windowHeight * 0.3;
          const sectionEnd = offsetTop + offsetHeight - windowHeight * 0.3;
          
          if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  const AppContent = (
    <div className="App" ref={appRef}>
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={scrollToSection}
        performanceMode={performanceMode}
      />
        
        <SimpleScrollStack>
          <section className="section" id="hero">
            <Hero />
          </section>
          
          <section className="section" id="about">
            <About />
          </section>
          
          <section className="section" id="skills">
            <Skills />
          </section>
          
          <section className="section" id="contact">
            <Contact />
          </section>
        </SimpleScrollStack>

      <div className="scroll-progress">
        <div 
          className="progress-bar" 
          style={{ transform: `scaleX(${scrollProgress})` }}
        ></div>
      </div>
    </div>
  );

  return performanceMode === 'low' ? AppContent : (
    <GlobalSpotlight spotlightColor="rgba(255, 255, 255, 0.05)">
      {AppContent}
    </GlobalSpotlight>
  );
}

export default App;
