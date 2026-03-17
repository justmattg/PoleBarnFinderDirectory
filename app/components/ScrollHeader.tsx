'use client';

import { useEffect } from 'react';

export default function ScrollHeader() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run on mount in case page loads scrolled
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
