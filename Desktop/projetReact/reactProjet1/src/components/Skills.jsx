import { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skillsData = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 85, color: '#e34f26' },
        { name: 'CSS', level: 50, color: '#1572b6' },
        { name: 'JavaScript', level: 40, color: '#f7df1e' },
        { name: 'React', level: 2, color: '#61dafb' }
      ]
    },
    {
      category: 'Outils & Design',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 60, color: '#f05032' },
        { name: 'Figma', level: 75, color: '#f24e1e' },
        { name: 'Tailwind CSS', level: 48, color: '#06b6d4' },
        { name: 'VS Code', level: 90, color: '#007acc' }
      ]
    },
    {
      category: 'En cours d\'apprentissage',
      icon: '🚀',
      skills: [
        { name: 'Node.js', level: 2, color: '#339933' },
        { name: 'Python', level: 20, color: '#3776ab' }
      ]
    }
  ];

  const projects = [
    {
      title: 'Portfolio Personnel',
      description: 'Site web portfolio avec design moderne et responsive',
      technologies: ['React', 'CSS3', 'JavaScript'],
      status: 'En cours'
    },
    {
      title: 'Projets MIAGE',
      description: 'Applications de gestion développées dans le cadre de mes études',
      technologies: ['Gestion', 'Informatique', 'Base de données'],
      status: 'Terminé'
    },
    {
      title: 'Analyse de Données',
      description: 'Projets d\'analyse et traitement de données avec Python',
      technologies: ['Python', 'Pandas', 'NumPy'],
      status: 'En cours'
    }
  ];

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02</span>
            Compétences & Projets
          </h2>
          <p className="section-subtitle">
            Mes compétences techniques et mes projets réalisés
          </p>
        </div>

        <div className="skills-content">
          <div className="skills-grid">
            {skillsData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="skill-category"
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color
                          }}
                        >
                          <div className="progress-glow"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="projects-section">
            <h3 className="projects-title">
              <span className="title-icon">💼</span>
              Mes Projets
            </h3>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="project-card"
                >
                  <div className="project-header">
                    <h4 className="project-title">{project.title}</h4>
                    <span className={`project-status status-${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-glow"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="learning-path">
            <h3 className="learning-title">
              <span className="title-icon">📚</span>
              Mon Parcours d'Apprentissage
            </h3>
            
            <div className="learning-timeline">
              <div className="learning-item">
                <div className="learning-dot"></div>
                <div className="learning-content">
                  <h4>Formation Académique</h4>
                  <p>Licence 2 MIAGE - Apprentissage des bases de l'informatique de gestion</p>
                  <div className="learning-tags">
                    <span className="learning-tag">Algorithmique</span>
                    <span className="learning-tag">Base de données</span>
                    <span className="learning-tag">Gestion de projet</span>
                  </div>
                </div>
              </div>
              
              <div className="learning-item">
                <div className="learning-dot"></div>
                <div className="learning-content">
                  <h4>Big Data & Analytics</h4>
                  <p>Développement de compétences en analyse de données et traitement</p>
                  <div className="learning-tags">
                    <span className="learning-tag">Python</span>
                    <span className="learning-tag">Pandas</span>
                    <span className="learning-tag">SQL</span>
                  </div>
                </div>
              </div>
              
              <div className="learning-item">
                <div className="learning-dot"></div>
                <div className="learning-content">
                  <h4>Gestion & Management</h4>
                  <p>Approfondissement des compétences en gestion d'entreprise</p>
                  <div className="learning-tags">
                    <span className="learning-tag">Management</span>
                    <span className="learning-tag">Processus</span>
                    <span className="learning-tag">Optimisation</span>
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

export default Skills;
