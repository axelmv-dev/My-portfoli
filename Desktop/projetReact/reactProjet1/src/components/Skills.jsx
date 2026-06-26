import { useEffect, useState, useRef } from 'react';
import './Skills.css';

// Import logos
import htmlLogo from '../LogoStack/Html.jpeg';
import cssLogo from '../LogoStack/CSS.jpeg';
import jsLogo from '../LogoStack/javascript.jpeg';
import phpLogo from '../LogoStack/Php.jpeg';
import laravelLogo from '../LogoStack/Laravel.jpeg';
import javaLogo from '../LogoStack/Java.jpeg';
import springbootLogo from '../LogoStack/Springboot.jpeg';
import pythonLogo from '../LogoStack/Python.jpeg';
import flutterLogo from '../LogoStack/flutter.jpeg';
import figmaLogo from '../LogoStack/Figma.jpeg';
import wordpressLogo from '../LogoStack/Wordpress.jpeg';
import rstudioLogo from '../LogoStack/Rstudio.jpeg';
import supabaseLogo from '../LogoStack/supabase.jpeg';
import firebaseLogo from '../LogoStack/Firebase.jpeg';
import gitLogo from '../LogoStack/Git.jpeg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    // Frontend
    { name: 'HTML', logo: htmlLogo, category: 'frontend' },
    { name: 'CSS', logo: cssLogo, category: 'frontend' },
    { name: 'JavaScript', logo: jsLogo, category: 'frontend' },

    // Backend
    { name: 'PHP', logo: phpLogo, category: 'backend' },
    { name: 'Laravel', logo: laravelLogo, category: 'backend' },
    { name: 'Java', logo: javaLogo, category: 'backend' },
    { name: 'Spring Boot', logo: springbootLogo, category: 'backend' },
    { name: 'Python', logo: pythonLogo, category: 'backend' },

    // Mobile
    { name: 'Flutter', logo: flutterLogo, category: 'mobile' },

    // Design & Outils
    { name: 'Figma', logo: figmaLogo, category: 'design' },
    { name: 'WordPress', logo: wordpressLogo, category: 'design' },
    { name: 'Git', logo: gitLogo, category: 'design' },

    // Analyse de données
    { name: 'RStudio', logo: rstudioLogo, category: 'data' },

    // Cloud & BaaS
    { name: 'Supabase', logo: supabaseLogo, category: 'cloud' },
    { name: 'Firebase', logo: firebaseLogo, category: 'cloud' }
  ];


  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02</span>
            Mon Stack
          </h2>
          <p className="section-subtitle">
            Mes outils tech les plus utilisés
          </p>
        </div>

        {/* Grille de technologies */}
        <div className="stack-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`stack-item ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="stack-logo-wrapper">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="stack-logo"
                  loading="lazy"
                />
              </div>
              <span className="stack-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
