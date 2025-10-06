import { useRef, useEffect } from 'react';
import './GlobalSpotlight.css';

const GlobalSpotlight = ({ children, spotlightColor = 'rgba(255, 255, 255, 0.08)' }) => {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const isMouseMoving = useRef(false);
  const animationFrameRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current || !spotlightRef.current) return;

    // Throttle les mises à jour pour améliorer les performances
    if (animationFrameRef.current) return;
    
    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Mettre à jour les variables CSS directement
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      
      // Activer l'effet spotlight
      spotlightRef.current.style.opacity = '0.6';
      
      animationFrameRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current || !spotlightRef.current) return;
    
    // Désactiver l'effet quand la souris quitte la zone
    spotlightRef.current.style.opacity = '0';
  };

  useEffect(() => {
    const container = containerRef.current;
    
    if (container) {
      // Throttle les événements pour de meilleures performances
      let ticking = false;
      const throttledMouseMove = (e) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleMouseMove(e);
            ticking = false;
          });
          ticking = true;
        }
      };
      
      container.addEventListener('mousemove', throttledMouseMove, { passive: true });
      container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
      
      return () => {
        container.removeEventListener('mousemove', throttledMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="global-spotlight-container"
      style={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
        '--spotlight-color': spotlightColor
      }}
    >
      {/* Spotlight effect overlay */}
      <div 
        ref={spotlightRef}
        className="spotlight-overlay"
      />
      
      {/* Content */}
      <div className="spotlight-content">
        {children}
      </div>
    </div>
  );
};

export default GlobalSpotlight;
