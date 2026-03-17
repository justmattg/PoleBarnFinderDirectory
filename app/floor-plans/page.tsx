import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ReadNextCards from '@/app/components/ReadNextCards';

export const metadata: Metadata = {
  title: 'Barndominium & Pole Barn Floor Plans | Pole Barn Directory',
  description: 'Compare barndominium, workshop, equestrian, and agricultural floor plans from top providers. Plans starting at $699 with full construction sets available.',
  alternates: {
    canonical: 'https://polebarndirectory.com/floor-plans',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pole Barn Directory',
    title: 'Barndominium & Pole Barn Floor Plans | Pole Barn Directory',
    description: 'Compare barndominium, workshop, equestrian, and agricultural floor plans from top providers. Plans starting at $699 with full construction sets available.',
    url: 'https://polebarndirectory.com/floor-plans',
    images: [{
      url: 'https://polebarndirectory.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Barndominium & Pole Barn Floor Plans | Pole Barn Directory',
    description: 'Compare barndominium, workshop, equestrian, and agricultural floor plans from top providers. Plans starting at $699 with full construction sets available.',
    images: ['https://polebarndirectory.com/og-image.jpg'],
  },
};

export default function FloorPlansPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://polebarndirectory.com/floor-plans/#article",
        "headline": "Pole Barn & Barndominium Floor Plans",
        "description": "Compare barndominium, workshop, equestrian, and agricultural pole barn floor plans from top providers.",
        "datePublished": "2026-03-13",
        "dateModified": "2026-03-13",
        "author": { "@id": "https://polebarndirectory.com/#organization" },
        "publisher": { "@id": "https://polebarndirectory.com/#organization" },
        "mainEntityOfPage": "https://polebarndirectory.com/floor-plans"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://polebarndirectory.com" },
          { "@type": "ListItem", "position": 2, "name": "Floor Plans", "item": "https://polebarndirectory.com/floor-plans" }
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
      <Breadcrumbs currentPage="Floor Plans" />
      <header className="page-header hero-pattern">
        <div className="container">
          <h1 className="animate-fade-up">Pole Barn & Barndominium Floor Plans</h1>
          <p className="animate-fade-up delay-1">
            Whether you&apos;re planning a barndominium, a detached workshop, or an agricultural building, starting with the right floor plan saves thousands in change orders. We&apos;ve curated the best plan sources below.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="card-grid mb-3">
            <a href="https://mybarndominiumplans.com" target="_blank" rel="noopener sponsored" className="card animate-fade-up delay-1">
              <div className="card-icon">🏠</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Barndominium Plans</div>
              <p className="card-text">Open-concept living + shop space. 1,200–4,000 sq ft.</p>
              <span className="btn" style={{width: '100%'}}>Browse Plans →</span>
            </a>

            <a href="https://mybarndominiumplans.com" target="_blank" rel="noopener sponsored" className="card animate-fade-up delay-2">
              <div className="card-icon">🐴</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Equestrian / Arena Plans</div>
              <p className="card-text">Indoor arenas, barn + apartment combos, tack rooms.</p>
              <span className="btn" style={{width: '100%'}}>Browse Plans →</span>
            </a>

            <a href="https://barndominiumplans.com" target="_blank" rel="noopener sponsored" className="card animate-fade-up delay-3">
              <div className="card-icon">🔧</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Workshop & Hobby Shop</div>
              <p className="card-text">Insulated shops, man caves, oversized garages.</p>
              <span className="btn" style={{width: '100%'}}>Browse Plans →</span>
            </a>

            <a href="https://advancedhouseplans.com" target="_blank" rel="noopener sponsored" className="card animate-fade-up delay-1">
              <div className="card-icon">🌾</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Agricultural & Storage</div>
              <p className="card-text">Hay barns, equipment storage, livestock shelters.</p>
              <span className="btn" style={{width: '100%'}}>Browse Plans →</span>
            </a>

            <a href="https://advancedhouseplans.com" target="_blank" rel="noopener sponsored" className="card animate-fade-up delay-2">
              <div className="card-icon">🏗️</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Commercial & Industrial</div>
              <p className="card-text">Warehouses, retail, multi-use buildings.</p>
              <span className="btn" style={{width: '100%'}}>Browse Plans →</span>
            </a>

            <Link href="https://polebarnfinder.com" target="_blank" rel="noopener" className="card animate-fade-up delay-3">
              <div className="card-icon">📐</div>
              <div className="card-title" style={{fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.5rem"}}>Custom Design Services</div>
              <p className="card-text">Need something unique? Work with a plan designer.</p>
              <span className="btn btn-secondary" style={{width: '100%'}}>Find Designers →</span>
            </Link>
          </div>

          <div className="content-wrapper">
          <h2>How to Choose a Floor Plan</h2>
          <ol>
            <li className="mb-1"><strong>Identify your core needs:</strong> Determine strictly required sq ft vs nice-to-haves.</li>
            <li className="mb-1"><strong>Check local zoning:</strong> Some areas limit accessory building footprint.</li>
            <li className="mb-1"><strong>Leave room to grow:</strong> It&apos;s cheaper to build out now than to add on later.</li>
            <li className="mb-1"><strong>Factor in roof style:</strong> Monitor vs gable vs gambrel drastically impact final cost.</li>
            <li><strong>Get quotes from builders who&apos;ve built this plan before →</strong> <Link href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</Link></li>
          </ol>

          <h2 className="mt-3">Compare Plan Providers</h2>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>
                    Advanced House Plans
                    <span className="top-pick-badge">TOP PICK</span>
                  </th>
                  <th>MyBarndominiumPlans.com</th>
                  <th>BarndominiumPlans.com</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Plan count</strong></td>
                  <td>300+ (barndo category)</td>
                  <td>200+</td>
                  <td>150+</td>
                </tr>
                <tr>
                  <td><strong>Price range</strong></td>
                  <td>$1,000–$5,000+</td>
                  <td>$699–$2,500</td>
                  <td>$799–$3,000</td>
                </tr>
                <tr>
                  <td><strong>Includes</strong></td>
                  <td>Full construction set</td>
                  <td>Floor plan + elevation + foundation</td>
                  <td>Floor plan + elevation</td>
                </tr>
                <tr>
                  <td><strong>Best for</strong></td>
                  <td>Complex/custom builds</td>
                  <td>Budget barndo builds</td>
                  <td>Mid-range barndos</td>
                </tr>
                <tr>
                  <td><strong>Link</strong></td>
                  <td><a href="https://advancedhouseplans.com" target="_blank" rel="noopener sponsored" className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>Browse Plans →</a></td>
                  <td><a href="https://mybarndominiumplans.com" target="_blank" rel="noopener sponsored" className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>Browse Plans →</a></td>
                  <td><a href="https://barndominiumplans.com" target="_blank" rel="noopener sponsored" className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>Browse Plans →</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <ReadNextCards />
        </div>
      </div>
    </section>
    </>
  );
}
