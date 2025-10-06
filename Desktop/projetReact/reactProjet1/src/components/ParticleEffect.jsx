import { useRef, useEffect } from 'react';

const ParticleEffect = ({ 
  targetElement, 
  particleCount = 8, 
  animationTime = 600,
  colors = ['#ffffff', '#cccccc']
}) => {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t) => {
    const distance = [40, 3];
    const start = getXY(distance[0], particleCount - i, particleCount);
    const end = getXY(distance[1], particleCount - i, particleCount);
    
    return {
      start,
      end,
      time: t,
      scale: 0.9,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: 0
    };
  };

  const createParticles = () => {
    if (!containerRef.current || !targetElement) return;

    // Nettoyer les particules existantes
    containerRef.current.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime + noise(300);
      const particle = createParticle(i, t);

      setTimeout(() => {
        const particleElement = document.createElement('div');
        particleElement.className = 'particle';
        
        particleElement.style.setProperty('--start-x', `${particle.start[0]}px`);
        particleElement.style.setProperty('--start-y', `${particle.start[1]}px`);
        particleElement.style.setProperty('--end-x', `${particle.end[0]}px`);
        particleElement.style.setProperty('--end-y', `${particle.end[1]}px`);
        particleElement.style.setProperty('--time', `${particle.time}ms`);
        particleElement.style.setProperty('--scale', `${particle.scale}`);
        particleElement.style.setProperty('--color', particle.color);
        particleElement.style.setProperty('--rotate', `${particle.rotate}deg`);

        containerRef.current.appendChild(particleElement);

        // Supprimer la particule après l'animation
        setTimeout(() => {
          if (particleElement.parentNode) {
            particleElement.parentNode.removeChild(particleElement);
          }
        }, particle.time);
      }, i * 30);
    }
  };

  useEffect(() => {
    if (targetElement) {
      createParticles();
    }
  }, [targetElement]);

  return (
    <div 
      ref={containerRef} 
      className="particle-container"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};

export default ParticleEffect;
