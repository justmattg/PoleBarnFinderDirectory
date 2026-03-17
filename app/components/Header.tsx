'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when route changes
  useEffect(() => {
    if (isMenuOpen) closeMenu();
  }, [pathname, isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span style={{color: 'var(--barn-red)'}}>Pole Barn</span>
            <span style={{color: 'var(--text-primary)'}}>Directory</span>
          </Link>
          <nav className="nav-links">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
            <Link href="/cost-guide" className={pathname === '/cost-guide' ? 'active' : ''}>Cost Guide</Link>
            <Link href="/floor-plans" className={pathname === '/floor-plans' ? 'active' : ''}>Floor Plans</Link>
            <Link href="/financing" className={pathname === '/financing' ? 'active' : ''}>Financing</Link>
            <Link href="/checklist" className={pathname === '/checklist' ? 'active' : ''}>Checklist</Link>
          </nav>
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={(e) => {
        if (e.target === e.currentTarget) closeMenu();
      }}>
        <nav className="mobile-nav-links">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/cost-guide" onClick={closeMenu}>Cost Guide</Link>
          <Link href="/floor-plans" onClick={closeMenu}>Floor Plans</Link>
          <Link href="/financing" onClick={closeMenu}>Financing</Link>
          <Link href="/checklist" onClick={closeMenu}>Checklist</Link>
        </nav>
      </div>
    </>
  );
}
