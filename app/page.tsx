import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Pole Barn Directory — Find Builders, Compare Costs, Browse Plans',
  description: 'Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.',
  alternates: {
    canonical: 'https://polebarndirectory.com/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pole Barn Directory',
    title: 'Pole Barn Directory — Find Builders, Compare Costs, Browse Plans',
    description: 'Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.',
    url: 'https://polebarndirectory.com/',
    images: [{
      url: 'https://polebarndirectory.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pole Barn Directory — Find Builders, Compare Costs, Browse Plans',
    description: 'Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.',
    images: ['https://polebarndirectory.com/og-image.jpg'],
  },
};

export default function HomePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://polebarndirectory.com/#organization",
        "name": "Pole Barn Directory",
        "url": "https://polebarndirectory.com",
        "description": "Curated resources for pole barn and barndominium projects — builder comparisons, cost guides, floor plans, and financing options.",
        "foundingDate": "2014",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://polebarndirectory.com/#website",
        "name": "Pole Barn Directory",
        "url": "https://polebarndirectory.com",
        "publisher": { "@id": "https://polebarndirectory.com/#organization" }
      },
      {
        "@type": "ItemList",
        "name": "Pole Barn Resources",
        "description": "Curated resources for your pole barn project",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Find a Builder", "url": "https://polebarnfinder.com" },
          { "@type": "ListItem", "position": 2, "name": "Cost Guide", "url": "https://polebarndirectory.com/cost-guide" },
          { "@type": "ListItem", "position": 3, "name": "Floor Plans", "url": "https://polebarndirectory.com/floor-plans" },
          { "@type": "ListItem", "position": 4, "name": "Financing Guide", "url": "https://polebarndirectory.com/financing" },
          { "@type": "ListItem", "position": 5, "name": "Builder Checklist", "url": "https://polebarndirectory.com/checklist" }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-inner">
          <h1 className="hero-title">Your Pole Barn Starts Here</h1>
          <p className="hero-subtitle">
            The curated launchpad for your build journey. Find verified builders, compare regional costs, and browse professional floor plans.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid-3-2">
            <Link href="https://polebarnfinder.com" target="_blank" rel="noopener" className="path-card animate-fade-up" style={{animationDelay: '0.1s'}}>
              <div className="card-icon">
                <svg role="img" aria-label="Find a Builder icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              </div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem"}}>Find a Builder</div>
              <p className="card-text">Compare 2,100+ verified pole barn builders in your state with free quotes.</p>
              <span className="btn-secondary" style={{width: '100%', marginTop: 'auto'}}>Get Free Quotes →</span>
            </Link>

            <Link href="/cost-guide" className="path-card animate-fade-up" style={{animationDelay: '0.2s'}}>
              <div className="card-icon">
                <svg role="img" aria-label="Cost Guide icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem"}}>What Will It Cost?</div>
              <p className="card-text">2026 pricing by state, size, and build type. Updated quarterly with real-world data.</p>
              <span className="btn-secondary" style={{width: '100%', marginTop: 'auto'}}>View Cost Guide →</span>
            </Link>

            <Link href="/floor-plans" className="path-card animate-fade-up" style={{animationDelay: '0.3s'}}>
              <div className="card-icon">
                <svg role="img" aria-label="Browse Floor Plans icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 20-20"></path><path d="M22 22 2 2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>
              </div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem"}}>Browse Floor Plans</div>
              <p className="card-text">Barndominium, workshop, and agricultural plans starting at just $699.</p>
              <span className="btn-secondary" style={{width: '100%', marginTop: 'auto'}}>Browse Plans →</span>
            </Link>

            <Link href="/financing" className="path-card animate-fade-up" style={{animationDelay: '0.4s'}}>
              <div className="card-icon">
                <svg role="img" aria-label="Finance Your Build icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"></path><path d="M3 10h18"></path><path d="M5 6l7-3 7 3"></path><path d="M4 10v11"></path><path d="M20 10v11"></path><path d="M8 14v3"></path><path d="M12 14v3"></path><path d="M16 14v3"></path></svg>
              </div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem"}}>Finance Your Build</div>
              <p className="card-text">Construction loans, USDA programs, and barndo mortgages. Pre-qualify in 5 minutes.</p>
              <span className="btn-secondary" style={{width: '100%', marginTop: 'auto'}}>Compare Rates →</span>
            </Link>

            <Link href="/checklist" className="path-card animate-fade-up" style={{animationDelay: '0.5s'}}>
              <div className="card-icon">
                <svg role="img" aria-label="Builder Checklist icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "0.5rem"}}>Builder Checklist</div>
              <p className="card-text">8 critical questions to ask before you sign any contract. Free printable download.</p>
              <span className="btn-secondary" style={{width: '100%', marginTop: 'auto'}}>Get Checklist →</span>
            </Link>

          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <div className="content-wrapper" style={{maxWidth: '800px'}}>
            <h2 style={{marginTop: 0}}>Why PoleBarnDirectory.com?</h2>
            <p className="mb-3" style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
              We&apos;ve been in the pole barn space since 2014. We don&apos;t build barns — we help you find the right builder, plan, and financing. Every recommendation on this site is researched and independently verified.
            </p>
            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem'}}>
              <div style={{textAlign: 'center', padding: '1rem'}}>
                <div style={{fontSize: '2rem', fontWeight: '800', color: 'var(--barn-red)'}}>11+</div>
                <div style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Years Online</div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem'}}>
                <div style={{fontSize: '2rem', fontWeight: '800', color: 'var(--barn-red)'}}>2,100+</div>
                <div style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Verified Builders</div>
              </div>
              <div style={{textAlign: 'center', padding: '1rem'}}>
                <div style={{fontSize: '2rem', fontWeight: '800', color: 'var(--barn-red)'}}>3</div>
                <div style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Plan Sources Compared</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
