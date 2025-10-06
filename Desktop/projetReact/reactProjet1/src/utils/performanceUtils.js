// Performance utilities
export const isLowPerformance = () => {
  // Détecter les appareils à faible performance
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isOldBrowser = /msie|trident/i.test(userAgent);
  
  // Détecter les navigateurs avec accélération matérielle limitée
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const hasWebGL = !!gl;
  
  return isMobile || isOldBrowser || !hasWebGL;
};

export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const getPerformanceMode = () => {
  if (isLowPerformance() || shouldReduceMotion()) {
    return 'low';
  }
  return 'high';
};
