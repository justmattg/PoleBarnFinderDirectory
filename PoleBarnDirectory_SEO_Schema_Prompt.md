# PoleBarnDirectory.com — SEO, Schema & Meta Tags Prompt for Antigravity

## CONTEXT

This is a 5-page static affiliate content site on an 11-year-old domain. It is NOT the main directory (that's PoleBarnFinder.com). Every page needs proper meta tags, schema markup, Open Graph tags, and technical SEO foundations. This is a separate task from the design revision — it can be done in parallel.

---

## 1. TITLE TAGS & META DESCRIPTIONS (unique per page)

```
PAGE: Homepage (/)
Title: Pole Barn Directory — Find Builders, Compare Costs, Browse Plans
Description: Your starting point for pole barn and barndominium projects. Compare 2,100+ builders, get 2026 cost estimates, browse floor plans, and explore financing options.

PAGE: Cost Guide (/cost-guide)
Title: How Much Does a Pole Barn Cost in 2026? | Prices by State & Size
Description: Pole barn costs range from $15,000 to $180,000. See 2026 pricing by size, build type, and state. Shell-only vs turnkey comparison included.

PAGE: Floor Plans (/floor-plans)
Title: Barndominium & Pole Barn Floor Plans — Browse 500+ Designs
Description: Compare barndominium, workshop, equestrian, and agricultural floor plans from top providers. Plans starting at $699 with full construction sets available.

PAGE: Financing (/financing)
Title: How to Finance a Pole Barn or Barndominium in 2026 | Loans & Grants
Description: Construction loans, USDA rural development, HELOCs, and REAP grants for pole barn projects. Learn why traditional mortgages often don't cover post-frame construction.

PAGE: Checklist (/checklist)
Title: 8 Questions to Ask Before Hiring a Pole Barn Builder | Free Checklist
Description: Avoid budget blowouts and bad contractors. These 8 questions protect your money on any pole barn, barndominium, or post-frame construction project. Free printable PDF.
```

**Implementation:** Each page's `<head>` must contain:
```html
<title>[TITLE]</title>
<meta name="description" content="[DESCRIPTION]">
<link rel="canonical" href="https://polebarndirectory.com/[PATH]">
```

Canonical tags are self-referencing on every page. Do NOT cross-canonical to polebarnfinder.com — we want this domain to build its own index authority independently.

---

## 2. OPEN GRAPH & TWITTER CARDS (every page)

```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Pole Barn Directory">
<meta property="og:title" content="[SAME AS TITLE TAG]">
<meta property="og:description" content="[SAME AS META DESCRIPTION]">
<meta property="og:url" content="https://polebarndirectory.com/[PATH]">
<meta property="og:image" content="https://polebarndirectory.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[SAME AS TITLE TAG]">
<meta name="twitter:description" content="[SAME AS META DESCRIPTION]">
<meta name="twitter:image" content="https://polebarndirectory.com/og-image.jpg">
```

**OG Image:** Create a single 1200×630px image with the site name "Pole Barn Directory" and the hero barndominium photo as background. This is the social preview when anyone shares a link. Save as `/public/og-image.jpg`.

---

## 3. SCHEMA MARKUP (JSON-LD in <head> of each page)

### Homepage — Organization + WebSite + ItemList

```json
<script type="application/ld+json">
{
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
}
</script>
```

### Cost Guide — Article + FAQPage + BreadcrumbList

```json
<script type="application/ld+json">
{
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
}
</script>
```

### Floor Plans — Article + BreadcrumbList

```json
<script type="application/ld+json">
{
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
}
</script>
```

### Financing — Article + FAQPage + BreadcrumbList

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://polebarndirectory.com/financing/#article",
      "headline": "Pole Barn & Barndominium Financing Guide",
      "description": "How to finance a pole barn or barndominium in 2026. Covers construction-to-permanent loans, USDA programs, HELOCs, and REAP grants.",
      "datePublished": "2026-03-13",
      "dateModified": "2026-03-13",
      "author": { "@id": "https://polebarndirectory.com/#organization" },
      "publisher": { "@id": "https://polebarndirectory.com/#organization" },
      "mainEntityOfPage": "https://polebarndirectory.com/financing"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a mortgage for a barndominium?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but not from most conventional lenders. Barndominiums require specialized construction lenders because they lack comparable sales for appraisals, and many counties classify them differently than traditional homes. Construction-to-permanent loans from lenders experienced with post-frame buildings are the most common path."
          }
        },
        {
          "@type": "Question",
          "name": "What is a USDA REAP grant for pole barns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The USDA Rural Energy for America Program (REAP) provides grants and loan guarantees for rural small businesses and agricultural producers. If your pole barn is for agricultural or commercial use in a qualifying rural area, you may be eligible for grants covering up to 25% of project costs."
          }
        },
        {
          "@type": "Question",
          "name": "How much down payment do I need for a pole barn construction loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most construction-to-permanent lenders require 10-20% down for a pole barn or barndominium. USDA Rural Development loans may allow as little as 0% down for qualifying borrowers in eligible rural areas. Personal or home equity loans may not require a down payment if you have sufficient collateral."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://polebarndirectory.com" },
        { "@type": "ListItem", "position": 2, "name": "Financing", "item": "https://polebarndirectory.com/financing" }
      ]
    }
  ]
}
</script>
```

### Checklist — Article + FAQPage + BreadcrumbList

```json
<script type="application/ld+json">
{
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
}
</script>
```

---

## 4. ROBOTS.TXT

Create at `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://polebarndirectory.com/sitemap.xml
```

---

## 5. SITEMAP.XML

Create at `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://polebarndirectory.com/</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://polebarndirectory.com/cost-guide</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://polebarndirectory.com/floor-plans</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://polebarndirectory.com/financing</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>quarterly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://polebarndirectory.com/checklist</loc>
    <lastmod>2026-03-13</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## 6. ADDITIONAL HEAD TAGS (every page)

```html
<!-- Charset & Viewport -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Favicon -->
<link rel="icon" href="/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Theme Color (for mobile browsers) -->
<meta name="theme-color" content="#1C1917">

<!-- Referrer Policy -->
<meta name="referrer" content="origin-when-cross-origin">

<!-- No Index for staging only — REMOVE before production deploy -->
<!-- <meta name="robots" content="noindex, nofollow"> -->
```

---

## 7. HEADING HIERARCHY AUDIT

Every page must follow strict H1 → H2 → H3 hierarchy. No skipping levels.

```
HOMEPAGE:
  H1: Your Pole Barn Starts Here
  H2: Why PoleBarnDirectory.com?

COST GUIDE:
  H1: Pole Barn Cost Guide (2026)
  H2: Cost by Size (National Averages)
  H2: 8 Core Cost Factors
    H3: Foundation Type
    H3: Steel Gauge & Roofing
    H3: Insulation Package
    H3: [etc.]
  H2: State-by-State Cost Modifiers
  H2: Kit vs. Custom Build
  H2: Permits & Engineering

FLOOR PLANS:
  H1: Pole Barn & Barndominium Floor Plans
  H2: [Category cards — not headings, these are navigational]
  H2: How to Choose a Floor Plan
  H2: Compare Plan Providers

FINANCING:
  H1: Pole Barn & Barndominium Financing Guide
  H2: Why Pole Barn Financing Is Different
  H2: Financing Options Explained
  H2: Barndominium Mortgage: What Lenders Won't Tell You
  H2: Step-by-Step: How to Get Financed

CHECKLIST:
  H1: The Pole Barn Builder Checklist
  H2: 1. "Are you licensed and insured in my state?"
  H2: 2. "Can I see 3 completed projects similar to mine?"
  H2: [etc. — each question is an H2]
  H2: Download the Printable Checklist (PDF)
```

---

## 8. IMAGE ALT TEXT

Every image on the site must have descriptive alt text. Formula:

```
Hero image: alt="Modern barndominium with black metal siding and warm interior lighting at sunset"
Card icons: alt="[Category name] icon" (e.g., alt="Barndominium plans icon")
Sidebar widget icon: alt="Construction financing icon"
```

Do NOT use empty alt tags (`alt=""`) on any meaningful image. Only decorative CSS background images should lack alt text.

---

## 9. AFFILIATE LINK ATTRIBUTES

Every external affiliate link must include:
```html
<a href="[AFFILIATE_URL]" target="_blank" rel="noopener sponsored">Link Text</a>
```

- `noopener` — security (prevents tab hijacking)
- `sponsored` — tells Google this is a paid/affiliate link (required by Google guidelines)
- Do NOT use `nofollow` alone — `sponsored` is the correct attribute for affiliate links per Google's current guidelines

Non-affiliate external links (USDA.gov, etc.) use:
```html
<a href="[URL]" target="_blank" rel="noopener">Link Text</a>
```

The PoleBarnFinder.com links are NOT affiliate — they're editorial cross-links. Use:
```html
<a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>
```

No `sponsored`, no `nofollow` on PBF links. We WANT link equity to flow from this 11-year-old domain to PBF.

---

## 10. POST-IMPLEMENTATION VALIDATION

1. [ ] Run every page through https://validator.schema.org — zero errors on all 5 pages
2. [ ] Run every page through https://search.google.com/test/rich-results — confirm FAQ rich results eligible on cost-guide, financing, and checklist pages
3. [ ] View source on each page — confirm unique `<title>`, unique `<meta description>`, canonical tag present
4. [ ] Confirm `robots.txt` accessible at polebarndirectory.com/robots.txt
5. [ ] Confirm `sitemap.xml` accessible at polebarndirectory.com/sitemap.xml
6. [ ] Confirm OG image loads when pasting any page URL into https://www.opengraph.xyz/
7. [ ] Confirm no `noindex` meta tag exists on any production page
8. [ ] Confirm all affiliate links have `rel="sponsored noopener"` and all PBF links have `rel="noopener"` only
