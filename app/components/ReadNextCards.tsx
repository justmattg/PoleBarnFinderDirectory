'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PAGES = [
  {
    title: 'Cost Guide 2026',
    description: 'National averages by size, plus state modifiers',
    href: '/cost-guide',
  },
  {
    title: 'Floor Plans',
    description: 'Compare barndominium, workshop, and ag plan providers',
    href: '/floor-plans',
  },
  {
    title: 'Financing Options',
    description: 'Construction loans, USDA grants, and lender comparison',
    href: '/financing',
  },
  {
    title: 'Builder Checklist',
    description: '8 critical questions before you sign a contract',
    href: '/checklist',
  },
];

export default function ReadNextCards() {
  const pathname = usePathname();
  
  // Normalize pathname to remove trailing slash for comparison
  const normalizedPathname = pathname.replace(/\/$/, '') || '/';
  
  // Filter out the current page
  const filteredPages = PAGES.filter(page => {
    const normalizedHref = page.href.replace(/\/$/, '') || '/';
    return normalizedHref !== normalizedPathname;
  });

  return (
    <section style={{ padding: '3rem 0', borderTop: '1px solid #e5e7eb', marginTop: '3rem' }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ 
            display: 'block', 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em', 
            color: '#71717a', 
            fontWeight: 600, 
            marginBottom: '0.5rem' 
          }}>
            Continue Your Research
          </span>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          overflowX: 'auto',
          paddingBottom: '1rem'
        }}>
          {filteredPages.map((page) => (
            <Link 
              key={page.href}
              href={page.href}
              className="group"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ 
                fontSize: '1.125rem', 
                fontWeight: 'bold', 
                color: '#171717', 
                marginBottom: '0.25rem',
                transition: 'color 0.3s ease'
              }} className="group-hover:text-[#D99B31]">
                {page.title}
              </h3>
              <p style={{ 
                fontSize: '0.875rem', 
                color: '#525252', 
                marginBottom: '1rem',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical'
              }}>
                {page.description}
              </p>
              <span style={{ 
                fontSize: '0.875rem', 
                fontWeight: 600, 
                color: '#D99B31', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem' 
              }}>
                Read →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
