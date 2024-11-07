import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, 
      easing: (t: number) => t * (2 - t), 
      smoothWheel: true, 
    });

    const animate = (time: number) => {
      lenis.raf(time); 
      requestAnimationFrame(animate); 
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
