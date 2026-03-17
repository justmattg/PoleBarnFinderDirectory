'use client';

import { useEffect, useState } from 'react';

export default function ScrollBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        backgroundColor: '#D99B31',
        zIndex: 10000,
        width: `${scrollProgress}%`,
        transition: 'width 0.1s ease-out'
      }}
    />
  );
}
