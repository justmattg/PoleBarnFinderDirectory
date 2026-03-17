import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ReadNextCards from '@/app/components/ReadNextCards';
import ChecklistForm from '../components/ChecklistForm';

export const metadata: Metadata = {
  title: 'Builder Checklist: 8 Questions to Ask | Pole Barn Directory',
  description: 'Avoid budget blowouts and bad contractors. These 8 questions protect your money on any pole barn, barndominium, or post-frame construction project. Free printable PDF.',
  alternates: {
    canonical: 'https://polebarndirectory.com/checklist',
  },
  openGraph: {
    type: 'website',
    siteName: 'Pole Barn Directory',
    title: 'Builder Checklist: 8 Questions to Ask | Pole Barn Directory',
    description: 'Avoid budget blowouts and bad contractors. These 8 questions protect your money on any pole barn, barndominium, or post-frame construction project. Free printable PDF.',
    url: 'https://polebarndirectory.com/checklist',
    images: [{
      url: 'https://polebarndirectory.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builder Checklist: 8 Questions to Ask | Pole Barn Directory',
    description: 'Avoid budget blowouts and bad contractors. These 8 questions protect your money on any pole barn, barndominium, or post-frame construction project. Free printable PDF.',
    images: ['https://polebarndirectory.com/og-image.jpg'],
  },
};

export default function ChecklistPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://polebarndirectory.com/checklist/#article",
        "headline": "8 Questions to Ask Before Hiring a Pole Barn Builder",
        "description": "Protect your budget and avoid bad contractors with these 8 critical questions for any pole barn, barndominium, or post-frame construction project.",
        "datePublished": "2026-03-13",
        "dateModified": "2026-03-13",
        "author": { "@id": "https://polebarndirectory.com/#organization" },
        "publisher": { "@id": "https://polebarndirectory.com/#organization" },
        "mainEntityOfPage": "https://polebarndirectory.com/checklist"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much should I put down on a pole barn before work starts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Industry standard is 10-20% deposit upfront, with progress payments tied to milestones (foundation complete, framing complete, dried-in, final). A 10% holdback until the punch list is done protects you. Any builder requesting 50% or more upfront is a red flag."
            }
          },
          {
            "@type": "Question",
            "name": "Should my pole barn builder pull the permits?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Licensed builders should pull their own permits and handle all inspection scheduling. If a builder tells you to pull the permits yourself, that is a yellow flag — it may indicate they lack proper licensing in your jurisdiction or are trying to avoid accountability for code compliance."
            }
          },
          {
            "@type": "Question",
            "name": "What does a pole barn warranty actually cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most pole barn warranties only cover materials (manufacturer warranty on steel, trusses, etc.) but NOT labor. Ask for a written warranty document that specifies exactly what is and isn't covered, what actions void the warranty, and the process for filing a claim."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://polebarndirectory.com" },
          { "@type": "ListItem", "position": 2, "name": "Builder Checklist", "item": "https://polebarndirectory.com/checklist" }
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
      <Breadcrumbs currentPage="Builder Checklist" />
      <header className="page-header hero-pattern">
        <div className="container">
          <h1 className="animate-fade-up">The Pole Barn Builder Checklist</h1>
          <p className="animate-fade-up delay-1">
            Avoid change orders and delays. Ask these 8 critical questions before signing a post-frame construction contract.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <article className="content-wrapper">
            <div className="card mb-3" style={{ padding: '3rem' }}>
              <h2 className="mt-0">1. &quot;Are you licensed and insured in my state?&quot;</h2>
              <p><strong>Why it matters:</strong> Unlicensed builders can&apos;t pull permits. If something goes wrong, you have no recourse. Ask for: license number, proof of general liability insurance ($1M minimum), workers&apos; comp certificate.</p>

              <h2 className="mt-3">2. &quot;Can I see 3 completed projects similar to mine?&quot;</h2>
              <p><strong>Why it matters:</strong> A builder who&apos;s done 50 hay barns may not know how to build a barndominium to residential code. Ask for: photos, addresses (drive by if local), and owner references.</p>

              <h2 className="mt-3">3. &quot;What&apos;s included in your quote — and what&apos;s NOT?&quot;</h2>
              <p><strong>The shell-only trap:</strong> Get a line-item breakdown: foundation, framing, roofing, siding, insulation, electrical rough-in, plumbing rough-in, concrete flatwork, overhead doors, entry doors, windows, gutters, permits, engineering stamp.</p>

              <h2 className="mt-3">4. &quot;Who pulls the permits?&quot;</h2>
              <p>If the builder says &quot;you do,&quot; that&apos;s a yellow flag. Licensed builders pull their own permits. Ask: &quot;Will you handle all permit applications and inspections?&quot;</p>

              <h2 className="mt-3">5. &quot;What&apos;s your warranty — and what does it actually cover?&quot;</h2>
              <p>Most pole barn warranties cover materials (manufacturer warranty) but NOT labor. Ask for: written warranty document, what&apos;s excluded, what voids it. <em>(Builders: Manage your warranty claims efficiently with <a href="https://shedsuite.com" target="_blank" rel="noopener sponsored">ShedSuite</a>.)</em></p>

              <h2 className="mt-3">6. &quot;What&apos;s your realistic timeline — and what causes delays?&quot;</h2>
              <p>Get it in writing. Ask: &quot;What&apos;s the start date, estimated completion date, and what happens if you go over?&quot; Weather clauses are normal. Open-ended timelines are not.</p>

              <h2 className="mt-3">7. &quot;How do you handle change orders?&quot;</h2>
              <p>Change orders are the #1 source of budget blowouts. Ask: &quot;What&apos;s your change order process? Is there a markup on changes? Do I approve in writing before work starts?&quot;</p>

              <h2 className="mt-3">8. &quot;What&apos;s your payment schedule?&quot;</h2>
              <p><strong>Red flag:</strong> any builder who wants 50%+ upfront. Industry standard: 10–20% deposit, progress payments tied to milestones (foundation complete, framing complete, dried-in, final), 10% holdback until punch list is done.</p>
            </div>

            <ChecklistForm />

            <div className="text-center">
              <p className="mb-1" style={{fontWeight: 600}}>Ready to start comparing builders?</p>
              <Link href="https://polebarnfinder.com" target="_blank" rel="noopener" className="btn btn-secondary">
                Find builders in your state on PoleBarnFinder.com →
              </Link>
            </div>
            <ReadNextCards />
          </article>
        </div>
      </section>
    </>
  );
}
