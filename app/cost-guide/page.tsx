import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ReadNextCards from '@/app/components/ReadNextCards';

export const metadata: Metadata = {
  title: 'How Much Does a Pole Barn Cost in 2026? | Pole Barn Directory',
  description: 'Pole barn costs range from $15,000 to $180,000. See 2026 pricing by size, build type, and state. Shell-only vs turnkey comparison included.',
  alternates: {
    canonical: 'https://polebarndirectory.com/cost-guide',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pole Barn Directory',
    title: 'How Much Does a Pole Barn Cost in 2026? | Pole Barn Directory',
    description: 'Pole barn costs range from $15,000 to $180,000. See 2026 pricing by size, build type, and state. Shell-only vs turnkey comparison included.',
    url: 'https://polebarndirectory.com/cost-guide',
    images: [{
      url: 'https://polebarndirectory.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Pole Barn Cost in 2026? | Pole Barn Directory',
    description: 'Pole barn costs range from $15,000 to $180,000. See 2026 pricing by size, build type, and state. Shell-only vs turnkey comparison included.',
    images: ['https://polebarndirectory.com/og-image.jpg'],
  },
};

export default function CostGuidePage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://polebarndirectory.com/cost-guide/#article",
        "headline": "How Much Does a Pole Barn Cost in 2026?",
        "description": "Comprehensive pole barn pricing guide covering shell-only vs turnkey costs, state-by-state modifiers, and kit vs custom build comparisons.",
        "datePublished": "2026-03-13",
        "dateModified": "2026-03-13",
        "author": { "@id": "https://polebarndirectory.com/#organization" },
        "publisher": { "@id": "https://polebarndirectory.com/#organization" },
        "mainEntityOfPage": "https://polebarndirectory.com/cost-guide"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a 30x40 pole barn cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A 30x40 pole barn (1,200 sq ft) costs between $15,000 and $25,000 for a shell-only build, or $30,000 to $50,000 for a turnkey build with insulation, electrical, and concrete flatwork."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between shell-only and turnkey pole barn pricing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shell-only includes the structural frame, roof, and exterior siding — essentially a weather-tight shell. Turnkey includes everything needed to use the building: insulation, electrical, plumbing, concrete floors, overhead doors, and interior finishing. Turnkey typically costs 2x to 2.5x more than shell-only."
            }
          },
          {
            "@type": "Question",
            "name": "Is a pole barn kit cheaper than a custom build?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pole barn kits start at around $699 for plans and can save 10-20% on materials, but you still need to hire labor for assembly, pour concrete, and handle permits. A custom builder handles everything but charges a premium for project management. Total cost difference is often smaller than the kit price suggests."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://polebarndirectory.com" },
          { "@type": "ListItem", "position": 2, "name": "Cost Guide", "item": "https://polebarndirectory.com/cost-guide" }
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
      <Breadcrumbs currentPage="Cost Guide 2026" />
      <header className="page-header hero-pattern">
        <div className="container">
          <h1 className="animate-fade-up">Pole Barn Cost Guide (2026)</h1>
          <p className="animate-fade-up delay-1">
            The average pole barn costs between $15,000 and $120,000 depending on size, use, and location. Here&apos;s exactly how to estimate yours.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '4rem' }}>
          <article className="content-wrapper">
          <h2>Cost by Size (National Averages)</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Shell Only</th>
                <th>Turnkey</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>24×30 (720 sq ft)</td>
                <td>$10,000–$18,000</td>
                <td>$22,000–$35,000</td>
              </tr>
              <tr>
                <td>30×40 (1,200 sq ft)</td>
                <td>$15,000–$25,000</td>
                <td>$30,000–$50,000</td>
              </tr>
              <tr>
                <td>40×60 (2,400 sq ft)</td>
                <td>$25,000–$42,000</td>
                <td>$55,000–$90,000</td>
              </tr>
              <tr>
                <td>40×80 (3,200 sq ft)</td>
                <td>$32,000–$55,000</td>
                <td>$70,000–$120,000</td>
              </tr>
              <tr>
                <td>60×100 (6,000 sq ft)</td>
                <td>$50,000–$85,000</td>
                <td>$100,000–$180,000</td>
              </tr>
            </tbody>
          </table>

          <h2>8 Core Cost Factors</h2>
          <div className="coming-soon-block">
            <p className="coming-soon-text">Detailed guide content coming soon.</p>
          </div>

          <h2>State-by-State Cost Modifiers</h2>
          <div className="coming-soon-block">
            <p className="coming-soon-text">Detailed guide content coming soon.</p>
          </div>

          <h2 id="kit-vs-custom">Kit vs. Custom Build</h2>
          <p>
            While many look to pole barn kits to save money, it&apos;s important to weigh the labor savings against potential challenges. 
            Kit plans start at as little as $699. <Link href="/floor-plans">Browse our floor plan directory</Link> to explore options, making them incredibly attractive. 
          </p>
          <div className="coming-soon-block">
            <p className="coming-soon-text">Detailed guide content coming soon.</p>
          </div>

          <h2>Permits & Engineering</h2>
          <p>
          </p>
          <div className="coming-soon-block">
            <p className="coming-soon-text">Detailed guide content coming soon.</p>
          </div>
          <p>
            <br/><br/>
            Builders: Make sure your crew is compliant. <a href="https://360training.com" target="_blank" rel="noopener sponsored">Get your OSHA-10 certification here →</a>
          </p>

          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--color-stone)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--color-border)' }}>
            <h3 style={{ marginTop: 0 }}>Ready to get a firm price?</h3>
            <p className="mb-2">Talk to local builders who know regional pricing and requirements.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="https://polebarnfinder.com" target="_blank" rel="noopener" className="btn">
                Get free quotes from builders in your area →
              </Link>
              <Link href="/floor-plans" className="btn btn-secondary">
                Browse floor plans →
              </Link>
            </div>
          </div>
          <ReadNextCards />
        </article>

        <aside>
          <div className="card" style={{ position: 'sticky', top: '120px' }}>
            <div className="card-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>🏦</div>
            <h3 className="card-title">Need Financing?</h3>
            <p className="card-text">Construction loans with rates from 7-9%. Pre-qualify in 5 minutes without affecting your credit score.</p>
            <a href="https://hfsfinancial.com" target="_blank" rel="noopener sponsored" className="btn" style={{ width: '100%', padding: '0.75rem' }}>
              Check Rates Today
            </a>
          </div>
        </aside>
      </div>
    </section>
    </>
  );
}
