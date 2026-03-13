# PoleBarnDirectory.com — Satellite Site Build Prompt

## CONTEXT FOR ANTIGRAVITY

PoleBarnDirectory.com is an 11-year-old expired domain (originally registered December 2014) that Matt purchased as a strategic asset for the PoleBarnFinder.com ecosystem. It will function as a **lightweight affiliate content satellite** — not a full directory. Its three jobs:

1. **Monetize independently** through affiliate links (floor plans, financing, tools)
2. **Funnel high-intent traffic** to PoleBarnFinder.com (the real directory)
3. **Build a second indexed property** with 11 years of domain age linking to PBF

This is a **static site** — no database, no Supabase, no dynamic listings. 5 pages total. Deploy on **Cloudflare Pages** or **Vercel** (Matt's choice). Can be plain HTML/CSS/JS or a minimal Next.js static export.

---

## SITE ARCHITECTURE (5 pages)

### Page 1: Homepage — "The Starting Line"
**URL:** `/`
**Title tag:** `Pole Barn Directory — Find Builders, Compare Costs, Get Plans`
**H1:** `Your Pole Barn Starts Here`

**Purpose:** Orientation hub. Not a directory itself — a curated launchpad that routes visitors to the right resource based on where they are in the buying journey.

**Layout — "Choose Your Path" interactive card grid:**

| Card | Headline | Subtext | Links To |
|------|----------|---------|----------|
| 🔍 **Find a Builder** | "Compare verified pole barn builders in your state" | "2,100+ builders. Free quotes." | → polebarnfinder.com (external, follow link) |
| 💰 **What Will It Cost?** | "2026 pricing by state, size, and build type" | "Updated quarterly." | → /cost-guide (internal) |
| 📐 **Browse Floor Plans** | "Barndominium, workshop, and agricultural plans" | "Starting at $699" | → /floor-plans (internal) |
| 🏦 **Finance Your Build** | "Construction loans, USDA programs, barndo mortgages" | "Pre-qualify in 5 minutes" | → /financing (internal) |
| 📋 **Builder Checklist** | "8 questions to ask before you sign a contract" | "Free download" | → /checklist (internal) |

**Below the fold:**
- "Why PoleBarnDirectory.com?" — 3-sentence trust block: "We've been in the pole barn space since 2014. We don't build barns — we help you find the right builder, plan, and financing. Every recommendation on this site is researched and independently verified."
- Footer: link to PoleBarnFinder.com with anchor text "Powered by PoleBarnFinder.com — The National Pole Barn Builder Directory"

**Affiliate placements on this page:** None. This is a routing page. Clean and trust-building.

---

### Page 2: Cost Guide — "The Money Page"
**URL:** `/cost-guide`
**Title tag:** `How Much Does a Pole Barn Cost in 2026? Prices by State & Size`
**H1:** `Pole Barn Cost Guide (2026)`

**Purpose:** Capture the highest-volume informational keyword in the niche ("pole barn cost" / "how much does a pole barn cost"). This is the #1 traffic page.

**Content structure (1,800–2,500 words, written by ChatGPT):**

1. **Opening hook** — "The average pole barn costs between $15,000 and $120,000 depending on size, use, and location. Here's exactly how to estimate yours."

2. **Cost-by-size table:**

| Size | Shell Only | Turnkey |
|------|-----------|---------|
| 24×30 (720 sq ft) | $10,000–$18,000 | $22,000–$35,000 |
| 30×40 (1,200 sq ft) | $15,000–$25,000 | $30,000–$50,000 |
| 40×60 (2,400 sq ft) | $25,000–$42,000 | $55,000–$90,000 |
| 40×80 (3,200 sq ft) | $32,000–$55,000 | $70,000–$120,000 |
| 60×100 (6,000 sq ft) | $50,000–$85,000 | $100,000–$180,000 |

3. **Cost factors breakdown** — 8 factors with 2-3 sentences each:
   - Foundation type (concrete slab vs. piers vs. gravel pad)
   - Steel gauge and roofing material
   - Insulation package
   - Overhead door count and size
   - Electrical and plumbing
   - Permits and engineering
   - Regional labor rates
   - Shell-only vs. turnkey trap (the #1 surprise cost)

4. **State-by-state cost modifier section** — Top 15 states with relative cost index (TX = baseline, adjust for snow loads in MN/WI, wind loads in FL/Gulf Coast, labor premiums in CA/NY)

5. **"Kit vs. Custom Build" comparison mini-section** — 3 paragraphs explaining the difference, with pros/cons

6. **CTA block at bottom:**
   - PRIMARY: "Get free quotes from builders in your area →" button linking to polebarnfinder.com
   - SECONDARY: "Browse barndominium floor plans →" linking to /floor-plans

**Affiliate placements on this page:**
- **Sidebar/inline:** HFS Financial banner ("Pre-qualify for a construction loan — rates from X%") — links to HFS Financial affiliate URL
- **Within "Kit vs. Custom" section:** Mention that kit plans start at $699 → links to /floor-plans page
- **Within "Permits & Engineering" section:** 360Training OSHA link for builders ("Builders: Get your OSHA-10 certification →")

---

### Page 3: Floor Plans — "The Affiliate Engine"
**URL:** `/floor-plans`
**Title tag:** `Barndominium & Pole Barn Floor Plans — Browse 500+ Designs`
**H1:** `Pole Barn & Barndominium Floor Plans`

**Purpose:** Pure affiliate revenue page. This is where the money lives.

**Content structure:**

1. **Intro paragraph** — "Whether you're planning a barndominium, a detached workshop, or an agricultural building, starting with the right floor plan saves thousands in change orders. We've curated the best plan sources below."

2. **Plan category cards** (visual grid, 2×3 or 3×2):

| Category | Description | Affiliate Link Target |
|----------|-------------|----------------------|
| 🏠 **Barndominium Plans** | "Open-concept living + shop space. 1,200–4,000 sq ft." | MyBarndominiumPlans.com (25% commission) |
| 🐴 **Equestrian / Arena Plans** | "Indoor arenas, barn + apartment combos, tack rooms." | MyBarndominiumPlans.com or BarndominiumPlans.com (20%) |
| 🔧 **Workshop & Hobby Shop** | "Insulated shops, man caves, oversized garages." | BarndominiumPlans.com (20%) |
| 🌾 **Agricultural & Storage** | "Hay barns, equipment storage, livestock shelters." | Advanced House Plans (10%, up to $5K+ plans) |
| 🏗️ **Commercial & Industrial** | "Warehouses, retail, multi-use buildings." | Advanced House Plans |
| 📐 **Custom Design Services** | "Need something unique? Work with a plan designer." | Link to PBF's builder directory (filtered for design-build) |

3. **"How to Choose a Floor Plan" mini-guide** — 5 numbered steps (200 words). Step 5 = "Get quotes from builders who've built this plan before → PoleBarnFinder.com"

4. **Comparison table** of the 3 affiliate plan sources:

| | MyBarndominiumPlans.com | BarndominiumPlans.com | Advanced House Plans |
|---|---|---|---|
| **Plan count** | 200+ | 150+ | 300+ (barndo category) |
| **Price range** | $699–$2,500 | $799–$3,000 | $1,000–$5,000+ |
| **Includes** | Floor plan + elevation + foundation | Floor plan + elevation | Full construction set |
| **Best for** | Budget barndo builds | Mid-range barndos | Complex/custom builds |
| **Our link** | [Browse Plans →] | [Browse Plans →] | [Browse Plans →] |

**Affiliate placements:** Every plan category card and every "Browse Plans" button is an affiliate link. This page exists to convert.

---

### Page 4: Financing Guide — "The High-CPC Page"
**URL:** `/financing`
**Title tag:** `How to Finance a Pole Barn or Barndominium in 2026 — Loans, USDA Programs & More`
**H1:** `Pole Barn & Barndominium Financing Guide`

**Purpose:** Targets "barndominium loan" (high CPC) and "pole barn financing" keywords. Monetizes through financial affiliate leads ($50–$300/qualified lead).

**Content structure (1,500–2,000 words):**

1. **"Why Pole Barn Financing Is Different"** — 3 paragraphs. Key point: traditional mortgages often don't cover post-frame construction. Many buyers don't know this until they're deep into the process.

2. **Financing options table:**

| Option | Best For | Typical Rate | Term | Where to Apply |
|--------|----------|-------------|------|----------------|
| **Construction-to-Permanent Loan** | Barndominiums, turnkey builds | 7–9% | 15–30 yr | HFS Financial affiliate link |
| **USDA Rural Development Loan** | Rural properties, first-time buyers | Below market | 30 yr | Direct USDA link (no affiliate, trust signal) |
| **Home Equity Loan / HELOC** | Existing homeowners adding a pole barn | 6–8% | 5–20 yr | LendingTree affiliate link (when approved) |
| **Personal Loan (unsecured)** | Small projects under $50K | 8–15% | 2–7 yr | LightStream affiliate link (when approved) |
| **Contractor Financing** | Builders offering in-house financing | Varies | Varies | "Ask your builder" → PBF link |
| **USDA REAP Grant** | Agricultural/commercial buildings | Grant (free $) | N/A | Direct USDA link |

3. **"Barndominium Mortgage: What Lenders Won't Tell You"** — 4 key gotchas:
   - Appraisal challenges (no comps for barndos)
   - Insurance complications (is it a home or an ag building?)
   - Zoning restrictions in some counties
   - The "certificate of occupancy" trap

4. **Step-by-step: How to get financed** — 6 steps. Step 6 = "Get quotes from builders to finalize your loan application → PoleBarnFinder.com"

5. **CTA block:** "Pre-qualify for a construction loan today" → HFS Financial affiliate link (primary) + "Find builders who offer financing" → PBF link

**Affiliate placements:**
- HFS Financial — primary CTA + inline within construction loan section
- Enhancify — secondary mention in contractor financing section ($200–$650/referral)
- LendingTree / LightStream — in table when affiliate accounts are approved
- USDA links are NOT affiliate — they're trust signals. Government links build credibility.

---

### Page 5: Builder Checklist — "The Lead Magnet"
**URL:** `/checklist`
**Title tag:** `8 Questions to Ask Before Hiring a Pole Barn Builder (Free Checklist)`
**H1:** `The Pole Barn Builder Checklist`

**Purpose:** Dual function — SEO content page targeting "how to choose a pole barn builder" + email capture via downloadable PDF version.

**Content structure:**

**The 8 Questions (full page content, not gated):**

1. **"Are you licensed and insured in my state?"** — Why it matters: unlicensed builders can't pull permits. If something goes wrong, you have no recourse. Ask for: license number, proof of general liability insurance ($1M minimum), workers' comp certificate.

2. **"Can I see 3 completed projects similar to mine?"** — Why it matters: a builder who's done 50 hay barns may not know how to build a barndominium to residential code. Ask for: photos, addresses (drive by if local), and owner references.

3. **"What's included in your quote — and what's NOT?"** — The shell-only trap. Get line-item breakdown: foundation, framing, roofing, siding, insulation, electrical rough-in, plumbing rough-in, concrete flatwork, overhead doors, entry doors, windows, gutters, permits, engineering stamp.

4. **"Who pulls the permits?"** — If the builder says "you do," that's a yellow flag. Licensed builders pull their own permits. Ask: "Will you handle all permit applications and inspections?"

5. **"What's your warranty — and what does it actually cover?"** — Most pole barn warranties cover materials (manufacturer warranty) but NOT labor. Ask for: written warranty document, what's excluded, what voids it.

6. **"What's your realistic timeline — and what causes delays?"** — Get it in writing. Ask: "What's the start date, estimated completion date, and what happens if you go over?" Weather clauses are normal. Open-ended timelines are not.

7. **"How do you handle change orders?"** — Change orders are the #1 source of budget blowouts. Ask: "What's your change order process? Is there a markup on changes? Do I approve in writing before work starts?"

8. **"What's your payment schedule?"** — Red flag: any builder who wants 50%+ upfront. Industry standard: 10–20% deposit, progress payments tied to milestones (foundation complete, framing complete, dried-in, final), 10% holdback until punch list is done.

**Below the 8 questions:**
- **"Download the Printable Checklist (PDF)"** — Simple email capture form. Name + email. Delivers a 1-page PDF with all 8 questions formatted as a checklist with blank lines for notes. This builds an email list.
- **CTA:** "Ready to start comparing builders? → Find builders in your state on PoleBarnFinder.com"

**Affiliate placements on this page:** Minimal. One contextual mention in Question 5 (warranty) linking to ShedSuite for builders who need project management software. The primary monetization here is the email capture + PBF funnel.

---

## DESIGN DIRECTION

**Aesthetic:** Rural-modern. Think Chip and Joanna Gaines meets a clean SaaS landing page. Warm neutrals (cream, warm gray, barn red accent), wood texture subtle background elements, clean sans-serif body type with a slightly rugged display font. NOT a dark techy theme — the audience is homeowners and ranchers, not developers.

**Key design elements:**
- Hero section with a high-quality pole barn/barndominium hero image (use Unsplash or Pexels — search "pole barn" or "barndominium exterior")
- Card-based navigation on homepage (the "Choose Your Path" grid)
- Sticky header with site name + 5-page nav
- Footer with PoleBarnFinder.com attribution link
- Mobile-first — 60%+ of this audience is on phones
- Fast. No JavaScript frameworks needed if doing static HTML. If Next.js static export, keep it minimal.
- Affiliate links open in new tabs, use `rel="noopener sponsored"` attributes
- All affiliate links clearly disclosed: small "Affiliate Disclosure" link in footer + inline disclosure on floor plans and financing pages ("We may earn a commission if you purchase through our links at no extra cost to you.")

---

## AFFILIATE LINK PLACEMENT SUMMARY

| Page | Affiliate Programs | Placement Type |
|------|-------------------|----------------|
| Homepage | None | Clean routing page |
| Cost Guide | HFS Financial, 360Training | Sidebar banner + inline |
| Floor Plans | MyBarndominiumPlans (25%), BarndominiumPlans (20%), Advanced House Plans (10%) | Category cards + comparison table |
| Financing | HFS Financial, Enhancify, LendingTree*, LightStream* | Table + CTA blocks |
| Checklist | ShedSuite (contextual) | Single inline mention |

*LendingTree and LightStream links are placeholders until those affiliate accounts are approved. Use `#` href with a `data-affiliate="pending"` attribute so they can be swapped in later without a rebuild.

---

## TECHNICAL NOTES

- **Domain:** polebarndirectory.com (already purchased, 11-year domain age)
- **Hosting:** Cloudflare Pages (free) or Vercel (Matt already has account)
- **DNS:** Point to hosting provider. Cloudflare preferred for free SSL + CDN.
- **Analytics:** Add the same GA4 Measurement ID used on polebarnfinder.com (track as a separate property or use the same one with cross-domain tracking)
- **No database needed.** All content is static.
- **No CMS needed.** Matt will update content by editing files directly or having Antigravity push updates.
- **Email capture on /checklist:** Use a simple form that POSTs to SendFox (Matt has it from AppSumo stack) or a Supabase edge function on the PBF backend. Keep it dead simple.
- **Robots.txt:** Allow all. Sitemap.xml with all 5 pages.
- **Schema markup:** Organization schema on homepage, Article schema on cost guide / financing / checklist pages, FAQ schema on checklist page.

---

## SEO NOTES

- **Internal linking pattern:** Every page links to at least 2 other internal pages + at least 1 link to polebarnfinder.com
- **External follow links to PBF:** Use descriptive anchor text, not "click here." Examples: "compare pole barn builders in your state," "find verified builders near you," "browse 2,100+ pole barn builders nationwide"
- **Canonical tags:** Self-referencing on all pages (no cross-domain canonical — we WANT this domain to rank independently)
- **Don't duplicate PBF content.** The cost guide and checklist content must be original — not copied from PBF's gated guides. Different angles, different data presentation, different structure.

---

## CONTENT ASSIGNMENT

| Page | Who Writes | Notes |
|------|-----------|-------|
| Homepage | Antigravity (copy is in this prompt) | Card grid text is defined above |
| Cost Guide | ChatGPT | 1,800–2,500 words. Provide the structure above as the prompt. |
| Floor Plans | ChatGPT | 800–1,200 words. Provide the structure above. |
| Financing | ChatGPT | 1,500–2,000 words. Provide the structure above. |
| Checklist | Already written above | The 8 questions section IS the content. Just format it. |

---

## LAUNCH SEQUENCE

1. Matt sends this prompt to Antigravity → Antigravity builds the 5-page static site
2. Matt sends page structures to ChatGPT → ChatGPT writes cost guide, floor plans, financing content
3. Matt (or Antigravity) inserts written content into the built pages
4. Matt configures DNS (polebarndirectory.com → Cloudflare Pages or Vercel)
5. Matt submits sitemap to Google Search Console
6. Matt manually requests indexing on all 5 pages
7. Matt swaps in real affiliate links as accounts are approved (HFS, floor plan programs, etc.)

**Estimated time to live:** 1 weekend if Antigravity and ChatGPT run in parallel.
