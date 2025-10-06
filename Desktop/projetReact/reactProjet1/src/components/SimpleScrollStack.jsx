import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SimpleScrollStack = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialiser Lenis pour un scroll fluide
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="simple-scroll-container">
      {children}
    </div>
  );
};

export default SimpleScrollStack;