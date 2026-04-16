import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/app/components/Breadcrumbs';
import ReadNextCards from '@/app/components/ReadNextCards';

export const metadata: Metadata = {
  title: 'Pole Barn Cost Guide 2026: Prices by Size, State and Type',
  description: 'Get 2026 pole barn cost estimates by size and state. Compare prices for 30x40, 40x60, 50x100 and more, plus regional rates and build factors.',
  alternates: {
    canonical: 'https://polebarndirectory.com/cost-guide',
  },
  openGraph: {
    type: 'article',
    siteName: 'Pole Barn Directory',
    title: 'Pole Barn Cost Guide 2026: Prices by Size, State and Type',
    description: 'Get 2026 pole barn cost estimates by size and state. Compare prices for 30x40, 40x60, 50x100 and more, plus regional rates and build factors.',
    url: 'https://polebarndirectory.com/cost-guide',
    images: [{
      url: 'https://polebarndirectory.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pole Barn Cost Guide 2026: Prices by Size, State and Type',
    description: 'Get 2026 pole barn cost estimates by size and state. Compare prices for 30x40, 40x60, 50x100 and more, plus regional rates and build factors.',
    images: ['https://polebarndirectory.com/og-image.jpg'],
  },
};

export default function CostGuidePage() {
  const faqItems: { q: string; a: string }[] = [
    {
      q: 'How much does a 30x40 pole barn cost in 2026?',
      a: 'A 30x40 pole barn (1,200 sq ft) typically costs $18,000–$40,000 for a basic shell build and $50,000–$135,000 for a fully finished build in 2026. Your final number depends on region, foundation type, insulation level, and door package. Shell prices assume posts, trusses, roof, and siding only.',
    },
    {
      q: 'How much does a 40x60 pole barn cost in 2026?',
      a: 'A 40x60 pole barn (2,400 sq ft) generally runs $36,000–$85,000 shell-only and $100,000–$260,000 finished in 2026. Expect to pay more in coastal, seismic, or heavy-snow regions. Insulated overhead doors, concrete flatwork, and electrical rough-in are the biggest variables at this size.',
    },
    {
      q: 'What is the cheapest size pole barn to build?',
      a: 'Standard stock sizes like 24x30 (720 sq ft) are the cheapest absolute cost, often starting around $12,000 for a basic shell. On a per-square-foot basis, smaller builds are actually more expensive — a 24x30 shell can run $18–$25 per sq ft, while a 40x60 shell runs closer to $15–$20 per sq ft.',
    },
    {
      q: 'How much does it cost to build a pole barn per square foot?',
      a: 'Pole barn cost per square foot generally ranges from $15–$40 for a basic shell and $65–$200 for a fully finished build in 2026. Smaller footprints cost more per sq ft. Finished builds with insulation, electrical, plumbing, and interior finishes sit at the high end of the range.',
    },
    {
      q: 'Is it cheaper to build a pole barn or a traditional barn?',
      a: 'A pole barn is typically 20–30% cheaper than a traditional stick-framed barn of the same size. Post-frame construction uses fewer materials, skips a full concrete footing, and goes up faster, which cuts labor costs. A traditional barn with a full foundation and stud-wall framing costs more per square foot.',
    },
    {
      q: 'How long does it take to build a pole barn?',
      a: 'A basic pole barn shell typically takes 1–3 weeks to erect once the foundation is prepped. Full turnkey builds with concrete, insulation, electrical, and interior finishing run 2–4 months start to finish. Permit timelines, weather, and material lead times can extend schedules by several weeks.',
    },
    {
      q: 'Do I need a permit to build a pole barn?',
      a: 'Most counties require a building permit for any pole barn over 120–200 sq ft, though rules vary widely. Permit fees generally run $150–$2,500 and are often 0.5–2% of total construction cost. Skipping a permit can void insurance, block resale, and trigger demolition orders if the structure is discovered.',
    },
    {
      q: 'How much does a finished pole barn cost vs an unfinished one?',
      a: 'Finished pole barns typically cost 2x to 5x more than shell-only builds. A $20,000 shell can become a $70,000–$100,000 finished building once you add insulation, electrical, plumbing, concrete flatwork, overhead doors, and interior finishing. The finish level drives the gap far more than the shell size does.',
    },
    {
      q: 'What is the average cost of a pole barn in Michigan?',
      a: 'A pole barn in Michigan generally costs $16–$40 per sq ft for a basic shell and $70–$195 per sq ft finished. Snow-load engineering adds modestly to truss packages, but Michigan has a deep post-frame builder network, including strong Amish crews, that keeps labor pricing competitive.',
    },
    {
      q: 'What is the average cost of a pole barn in Wisconsin?',
      a: 'A pole barn in Wisconsin typically runs $17–$40 per sq ft basic and $72–$195 per sq ft finished. Heavy snow-load requirements push truss engineering up by roughly $2,000–$4,000 versus a southern equivalent, but the established post-frame industry keeps labor rates reasonable statewide.',
    },
    {
      q: 'Does a concrete floor add a lot to pole barn cost?',
      a: 'A concrete slab typically adds $4–$12 per sq ft installed. On a 40x60 (2,400 sq ft) build, that is roughly $9,600–$28,800 for flatwork alone. Thickness, reinforcement, and site grading drive the range. A standard 4-inch residential slab sits near the low end; a 6-inch reinforced shop slab sits near the high end.',
    },
    {
      q: 'How much does insulation add to a pole barn build?',
      a: 'Insulation typically adds $0.80–$2.90 per sq ft depending on system. Fiberglass batts run $0.80–$2.60 per sq ft, blown-in runs $0.90–$2.40 per sq ft, and closed-cell spray foam runs $1.15–$2.90 per board foot installed. Spray foam costs more upfront but also acts as a vapor barrier, which matters for climate-controlled builds.',
    },
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://polebarndirectory.com/cost-guide/#article",
        "headline": "Pole Barn Cost Guide 2026: Prices by Size, State and Type",
        "description": "2026 pole barn cost estimates by size and by state, plus the cost factors and finish-level trade-offs that drive final pricing.",
        "datePublished": "2026-03-13",
        "dateModified": "2026-04-16",
        "author": { "@id": "https://polebarndirectory.com/#organization" },
        "publisher": { "@id": "https://polebarndirectory.com/#organization" },
        "mainEntityOfPage": "https://polebarndirectory.com/cost-guide",
        "image": "https://polebarndirectory.com/og-image.jpg"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
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

  // Full 50-state cost estimates for 2026. Ranges are derived from national
  // baseline ($15–$40 basic, $65–$200 finished per sq ft) adjusted for regional
  // labor markets, snow/wind/seismic code requirements, and builder density.
  // All figures are estimates. AK and HI are marked {VERIFY_STATE_DATA} because
  // freight and remote logistics make per-sq-ft ranges unreliable without
  // site-specific quoting.
  const stateRows: { state: string; basic: string; finished: string; notes: string }[] = [
    { state: 'Alabama',       basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor rates; minimal snow/seismic requirements.' },
    { state: 'Alaska',        basic: '{VERIFY_STATE_DATA}', finished: '{VERIFY_STATE_DATA}', notes: 'Freight and remote-site logistics dominate pricing; quote locally.' },
    { state: 'Arizona',       basic: '$16–$40',  finished: '$70–$190',  notes: 'Metro premiums in Phoenix/Tucson; low snow, moderate wind.' },
    { state: 'Arkansas',      basic: '$13–$34',  finished: '$58–$165',  notes: 'Among the lowest-cost states; light code requirements.' },
    { state: 'California',    basic: '$25–$50',  finished: '$95–$250',  notes: 'Seismic engineering, high labor ($65–$85/hr), complex permitting.' },
    { state: 'Colorado',      basic: '$18–$42',  finished: '$75–$195',  notes: 'Snow loads and Front Range labor premium add cost.' },
    { state: 'Connecticut',   basic: '$20–$42',  finished: '$80–$200',  notes: 'NYC/Hartford labor premium; strict permitting.' },
    { state: 'Delaware',      basic: '$18–$40',  finished: '$75–$195',  notes: 'Moderate coastal wind loads; small builder pool.' },
    { state: 'Florida',       basic: '$20–$45',  finished: '$80–$210',  notes: 'Hurricane engineering adds $3,000–$8,000; Miami-Dade is top-tier.' },
    { state: 'Georgia',       basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor rates; minimal snow/seismic requirements.' },
    { state: 'Hawaii',        basic: '{VERIFY_STATE_DATA}', finished: '{VERIFY_STATE_DATA}', notes: 'Freight and import logistics dominate pricing; quote locally.' },
    { state: 'Idaho',         basic: '$16–$40',  finished: '$70–$190',  notes: 'Snow loads add to truss pricing; moderate labor.' },
    { state: 'Illinois',      basic: '$16–$40',  finished: '$70–$190',  notes: 'Chicago metro premium; downstate pricing closer to baseline.' },
    { state: 'Indiana',       basic: '$14–$36',  finished: '$60–$170',  notes: 'One of the cheapest post-frame markets; strong builder density.' },
    { state: 'Iowa',          basic: '$14–$36',  finished: '$60–$170',  notes: 'Deep post-frame tradition keeps pricing competitive.' },
    { state: 'Kansas',        basic: '$14–$36',  finished: '$60–$170',  notes: 'Tornado-zone wind upgrades can add 3–5%.' },
    { state: 'Kentucky',      basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor; moderate code complexity outside metros.' },
    { state: 'Louisiana',     basic: '$16–$38',  finished: '$65–$180',  notes: 'Gulf hurricane zone adds wind premium; moderate labor.' },
    { state: 'Maine',         basic: '$18–$40',  finished: '$75–$195',  notes: 'Heavy snow loads; short build season compresses scheduling.' },
    { state: 'Maryland',      basic: '$19–$40',  finished: '$78–$195',  notes: 'Coastal counties add wind premium; DC-metro labor is higher.' },
    { state: 'Massachusetts', basic: '$22–$45',  finished: '$85–$210',  notes: 'High labor, heavy snow loads, strict permitting.' },
    { state: 'Michigan',      basic: '$16–$40',  finished: '$70–$195',  notes: 'Snow-load engineering; strong Amish builder network keeps labor competitive.' },
    { state: 'Minnesota',     basic: '$18–$42',  finished: '$75–$200',  notes: 'Heaviest snow loads in Lower 48; truss packages cost $2,000–$5,000 more than Texas.' },
    { state: 'Mississippi',   basic: '$13–$34',  finished: '$58–$165',  notes: 'Low labor; minimal code complexity.' },
    { state: 'Missouri',      basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor outside Kansas City and St. Louis metros.' },
    { state: 'Montana',       basic: '$17–$40',  finished: '$72–$190',  notes: 'Snow loads and long mobilization distances add cost.' },
    { state: 'Nebraska',      basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor; moderate wind zone.' },
    { state: 'Nevada',        basic: '$18–$42',  finished: '$75–$195',  notes: 'Las Vegas/Reno metro labor premium; seismic considerations.' },
    { state: 'New Hampshire', basic: '$18–$40',  finished: '$75–$195',  notes: 'Heavy snow loads; short build season.' },
    { state: 'New Jersey',    basic: '$22–$45',  finished: '$85–$210',  notes: 'High labor rates; strict permitting process.' },
    { state: 'New Mexico',    basic: '$15–$38',  finished: '$65–$180',  notes: 'Moderate; low labor outside Albuquerque/Santa Fe.' },
    { state: 'New York',      basic: '$22–$48',  finished: '$85–$220',  notes: 'Metro labor premium; upstate carries heavy snow loads.' },
    { state: 'North Carolina',basic: '$15–$38',  finished: '$65–$180',  notes: 'Coastal counties add wind-zone premium of 5–10%.' },
    { state: 'North Dakota',  basic: '$16–$40',  finished: '$70–$190',  notes: 'Heavy snow and wind loads; limited builder pool in some counties.' },
    { state: 'Ohio',          basic: '$15–$38',  finished: '$65–$180',  notes: 'Moderate snow loads; strong builder pool.' },
    { state: 'Oklahoma',      basic: '$13–$34',  finished: '$58–$165',  notes: 'Among the lowest-cost states; minimal engineering requirements.' },
    { state: 'Oregon',        basic: '$20–$45',  finished: '$80–$205',  notes: 'High labor; seismic and wildfire code requirements.' },
    { state: 'Pennsylvania',  basic: '$18–$40',  finished: '$75–$195',  notes: 'Moderate snow loads; strong Amish builder presence.' },
    { state: 'Rhode Island',  basic: '$20–$42',  finished: '$82–$205',  notes: 'Coastal wind loads; small but experienced builder pool.' },
    { state: 'South Carolina',basic: '$15–$38',  finished: '$65–$180',  notes: 'Coastal counties add wind premium; growing pole-barn market.' },
    { state: 'South Dakota',  basic: '$15–$38',  finished: '$65–$180',  notes: 'Snow and wind loads; low labor rates.' },
    { state: 'Tennessee',     basic: '$14–$36',  finished: '$60–$170',  notes: 'Low labor; minimal code complexity; fast-growing market.' },
    { state: 'Texas',         basic: '$15–$38',  finished: '$65–$180',  notes: 'Baseline. Large builder pool; moderate material costs.' },
    { state: 'Utah',          basic: '$17–$40',  finished: '$72–$190',  notes: 'Snow loads; Wasatch Front labor premium.' },
    { state: 'Vermont',       basic: '$18–$42',  finished: '$78–$195',  notes: 'Heavy snow loads; limited builder pool in some counties.' },
    { state: 'Virginia',      basic: '$16–$38',  finished: '$68–$185',  notes: 'Coastal Virginia adds wind premium; NoVa labor is higher.' },
    { state: 'Washington',    basic: '$22–$48',  finished: '$85–$220',  notes: 'High labor; seismic and coastal code requirements.' },
    { state: 'West Virginia', basic: '$15–$38',  finished: '$65–$180',  notes: 'Lower labor rates; mountain terrain can add site-prep cost.' },
    { state: 'Wisconsin',     basic: '$17–$40',  finished: '$72–$195',  notes: 'Heavy snow-load engineering; competitive labor from established post-frame industry.' },
    { state: 'Wyoming',       basic: '$16–$40',  finished: '$70–$190',  notes: 'High wind zone; small labor pool can stretch timelines.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <Breadcrumbs currentPage="Cost Guide 2026" />
      <header className="page-header hero-pattern">
        <div className="container">
          <h1 className="animate-fade-up">Pole Barn Cost Guide 2026</h1>
          <p className="animate-fade-up delay-1">
            2026 pole barn prices by size, by state, and by finish level — plus the cost factors that move the final number.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container content-with-sidebar">
          <article className="content-wrapper">

          <p>
            A pole barn costs an average of <strong>$15 to $40 per square foot for a basic shell build</strong> and <strong>$65 to $200 per square foot for a fully finished build</strong> in 2026. A common 30x40 comes in around $18,000–$40,000 shell-only and $50,000–$135,000 finished, while a mid-size 40x60 lands near $36,000–$85,000 shell-only and $100,000–$260,000 finished. These ranges reflect current material and labor pricing and assume a standard post-frame structure on a prepared site. Your final number is driven by three things: the size of the building, the state (and sometimes the county) you are building in, and how far past a weather-tight shell you take the finish. This guide covers size-specific costs for nine common footprints, state-by-state pricing across all 50 states, and a detailed breakdown of every line item that moves the bottom line.
          </p>

          <h2>Average Pole Barn Cost in 2026</h2>
          <p>
            The 2026 national average for a basic pole barn shell is <strong>$15 to $40 per square foot</strong>, with most standard-size builds landing between <strong>$15,000 and $85,000</strong>. A fully finished pole barn — with insulation, electrical, plumbing, concrete flatwork, overhead doors, and interior finishing — generally runs <strong>$65 to $200+ per square foot</strong>, or roughly <strong>$45,000 to $260,000</strong> for a common mid-size footprint. Barndominium-grade finishes, custom doors, or heavy engineering requirements can push finished cost above $250 per square foot.
          </p>
          <div style={{ margin: '2rem 0', padding: '2rem', background: 'var(--bg-section-alt)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-warm)' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Quick answer</strong>
            <p style={{ margin: 0 }}>
              In 2026, expect <strong>$15–$40 per sq ft</strong> for a basic shell and <strong>$65–$200 per sq ft</strong> for a finished build. The three biggest cost drivers are <strong>size</strong>, <strong>region</strong>, and <strong>finish level</strong>. Use the size and state tables below to narrow your range, then read the cost-factor section to see exactly what a turnkey number includes.
            </p>
          </div>
          <p>
            These figures reflect 2026 material and labor costs. Post-frame material pricing has stabilized relative to the 2021–2023 volatility, but steel and concrete remain 20–35% higher than pre-2020 baselines. Labor rates have climbed steadily across every region. Permit and engineering fees have also increased in most jurisdictions. Treat any number in this guide as an estimate: real-world site conditions, code requirements, and finish choices shift final pricing by 15–25% in either direction.
          </p>

          <h2>Pole Barn Cost by Size</h2>
          <p>
            Size is the first lever that moves cost. Larger buildings cost more in absolute dollars but almost always cost less <em>per square foot</em>, because fixed costs — permits, engineering, mobilization, crew setup — get spread across more area. Small buildings are the opposite: a 24x30 often runs $18–$25 per sq ft shell-only, while a 40x60 runs closer to $15–$20 per sq ft. The sections below cover nine common footprints with total cost ranges for basic and finished builds, plus the primary cost factors specific to each size. For matching layouts, see our <Link href="/floor-plans">floor plan options for each size</Link>.
          </p>

          <h3>24x30 Pole Barn Cost (720 sq ft)</h3>
          <p>
            A 24x30 pole barn is the most common small-hobby and compact-garage footprint. Basic shell builds typically run <strong>$12,000–$25,000</strong>. A finished 24x30 with insulation, electrical, a concrete slab, and one overhead door generally runs <strong>$35,000–$95,000</strong> depending on finish level. Common uses include a two-car garage with workshop bench space, a small hobby shop, or a backyard storage building for yard equipment and ATVs.
          </p>
          <p>
            At 720 sq ft, this size carries the highest per-square-foot penalty of any footprint on this page. Fixed costs — permit fees, mobilization, crane setup, equipment delivery — get amortized across less area. That is why a small shell can run $18–$25 per sq ft while a 40x60 shell runs $15–$20. The main variables are door count (one vs. two overhead doors), slab thickness (4-inch vs. 6-inch), and whether the building needs any insulation or electrical rough-in. Keep it to a single standard overhead door, one walk-in door, and a simple gravel or 4-inch slab to stay at the low end.
          </p>

          <h3>30x40 Pole Barn Cost (1,200 sq ft)</h3>
          <p>
            A 30x40 is the single most-searched pole barn size and the classic mid-size garage, shop, or combo hobby building. Basic shell builds run <strong>$18,000–$40,000</strong>. Finished builds with insulation, electrical, a concrete slab, and two overhead doors generally run <strong>$50,000–$135,000</strong>. Common uses include a three-bay garage, a small workshop with room for a workbench and compressor, or a feed and tack storage building.
          </p>
          <p>
            At 1,200 sq ft the per-sq-ft number drops meaningfully — shell pricing often sits around $15–$22. The primary variables are the door package (two insulated overhead doors can add $4,000–$8,000 alone), slab thickness, and the insulation system if the building will be heated. Electrical rough-in at this size typically runs $3,500–$7,500 for a 100A panel with lighting and outlets. If you want a climate-controlled shop, plan for spray-foam insulation rather than batts to avoid condensation issues over time.
          </p>

          <h3>30x50 Pole Barn Cost (1,500 sq ft)</h3>
          <p>
            A 30x50 adds 300 sq ft to the classic 30x40 and unlocks real workshop layouts. Basic shell builds run <strong>$22,000–$50,000</strong>. Finished builds with insulation, electrical, a concrete slab, and two overhead doors generally run <strong>$65,000–$180,000</strong>. Common uses include a serious woodworking or metal shop, a livestock barn with tack and feed storage, or a combination garage-plus-workshop with a walled-off bay.
          </p>
          <p>
            Per-square-foot cost at 30x50 lands in the same range as a 30x40, usually $14–$20 shell-only. The extra depth gives you room for an interior wall without cramping the primary bay, which is why this footprint is popular with hobbyists. The main cost drivers are still overhead door count, slab depth, and insulation. Adding a half-bath or utility sink pushes the finished price up by $4,000–$12,000 for basic plumbing rough-in.
          </p>

          <h3>32x40 Pole Barn Cost (1,280 sq ft)</h3>
          <p>
            A 32x40 is a slightly wider alternative to a 30x40 and is popular where vehicle bays need a little more shoulder room. Basic shell builds run <strong>$19,000–$42,000</strong>. Finished builds with insulation, electrical, a concrete slab, and two overhead doors generally run <strong>$55,000–$150,000</strong>. Common uses include a garage for full-size pickups and SUVs, a workshop with enough width for a boat or RV plus a work bench, or a small equestrian tack and grooming building.
          </p>
          <p>
            The 2-foot width bump adds roughly 7% in material and labor over a 30x40, so expect similar per-sq-ft pricing. Cost factors mirror the 30x40: door package, slab specification, and insulation drive the range. If the building will store a boat or RV, specify at least a 10x10 overhead door and plan for 12-foot sidewalls to clear the vehicle without binding.
          </p>

          <h3>40x60 Pole Barn Cost (2,400 sq ft)</h3>
          <p>
            A 40x60 is the classic working pole barn — large enough for real equipment storage, full workshop layouts, or a barndominium footprint. Basic shell builds run <strong>$36,000–$85,000</strong>. Finished builds with insulation, electrical, plumbing, concrete flatwork, and an insulated door package generally run <strong>$100,000–$260,000</strong>. Common uses include a multi-bay equipment barn, a full-size workshop with room for a car lift, a small barndominium layout, or a farm shop with a parts room.
          </p>
          <p>
            Per-sq-ft pricing improves at this size, typically $15–$20 shell-only. The biggest cost variables are the door package (three insulated overhead doors can run $7,500–$15,000), slab specification (a 6-inch reinforced shop slab costs 30–40% more than a 4-inch residential slab), and electrical scope for heavy tools and 220V circuits. This is also the size where a poorly-spec&apos;d insulation system will show up as condensation inside the first winter, so invest in closed-cell spray foam if the building will be heated.
          </p>

          <h3>50x60 Pole Barn Cost (3,000 sq ft)</h3>
          <p>
            A 50x60 gives you real commercial-scale interior space without crossing into engineered-steel territory. Basic shell builds run <strong>$45,000–$105,000</strong>. Finished builds with insulation, electrical, plumbing, concrete flatwork, and a multi-door package generally run <strong>$125,000–$320,000</strong>. Common uses include a commercial workshop, a multi-horse equestrian facility, a small warehouse for a home business, or a barndominium with attached shop.
          </p>
          <p>
            At 50x60 the truss package starts to cost meaningfully more per linear foot because longer clear spans require heavier engineering. Expect the truss line item to climb 15–25% over a 40x60. Labor also increases because the crew spends more days on site. The main cost drivers are truss span, door count (commercial sites often specify three to four overhead doors), and electrical scope. A 50x60 with full commercial wiring, a 200A panel, and multiple 220V circuits can run $8,000–$18,000 in electrical alone.
          </p>

          <h3>50x100 Pole Barn Cost (5,000 sq ft)</h3>
          <p>
            A 50x100 is a large commercial-scale pole barn typically used for agricultural storage, small warehouses, or indoor arenas. Basic shell builds run <strong>$75,000–$175,000</strong>. Finished builds generally run <strong>$200,000–$500,000</strong>, with most commercial projects landing in the middle. Common uses include hay and equipment storage, indoor riding arenas, small manufacturing spaces, and light commercial warehouses.
          </p>
          <p>
            This size unlocks meaningful per-sq-ft savings — shell pricing often lands at $14–$18 — but engineering and permit complexity increase. Truss spans at 50 feet require heavier-duty designs, and county permits at this scale often trigger commercial inspections rather than residential ones. Site preparation also matters more: a 5,000 sq ft footprint requires serious grading and drainage work. Expect $8,000–$25,000 for site prep before the shell goes up.
          </p>

          <h3>60x80 Pole Barn Cost (4,800 sq ft)</h3>
          <p>
            A 60x80 is a wide-span commercial pole barn used for equipment storage, indoor work areas, and mid-size ag operations. Basic shell builds run <strong>$72,000–$165,000</strong>. Finished builds generally run <strong>$190,000–$475,000</strong>. Common uses include combine and tractor storage, small commercial workshops, county shop buildings, and indoor livestock operations.
          </p>
          <p>
            The 60-foot clear span is where truss engineering starts to carry serious weight. Expect truss packages 20–30% more expensive per linear foot than a 40- or 50-foot span. Column spacing and foundation embedment also get stricter. The main cost drivers are span engineering, overhead door count (commercial ag buildings often need one or two oversized 14x14 or 16x14 doors), and site prep. Sidewall height matters too — jumping from 12 to 16 feet adds 15–25% to wall materials and labor.
          </p>

          <h3>80x120 Pole Barn Cost (9,600 sq ft)</h3>
          <p>
            An 80x120 is a large commercial or agricultural building used for machine sheds, indoor arenas, commercial warehouses, and multi-stall livestock facilities. Basic shell builds run <strong>$145,000–$325,000</strong>. Finished builds generally run <strong>$360,000–$900,000</strong>. Common uses include indoor riding arenas, large equipment sheds, commercial warehouses, and event venues.
          </p>
          <p>
            At this size you are firmly in commercial territory. Engineering is required in most jurisdictions, and some counties require engineered stamped drawings regardless of wind or snow zone. Truss spans above 60 feet generally need steel or hybrid wood-steel designs that add $15,000–$50,000 to the shell. Labor timelines stretch to 6–12 weeks for shell-only and several months for finished builds. Site prep, drainage, and access can add another $20,000–$60,000 on a sloped or wooded parcel. At this scale, every bid should itemize engineering, permit, and mobilization separately.
          </p>

          <h2>Pole Barn Cost by State in 2026</h2>
          <p>
            State-level pricing varies by 30–40% across the country in 2026. Four forces drive regional cost variance: <strong>labor rates</strong>, <strong>material shipping costs</strong>, <strong>climate-driven engineering</strong> (snow, wind, and seismic loads), and <strong>permit complexity</strong>. A Minnesota pole barn carries heavier snow-load engineering than the same building in Texas. A Florida pole barn requires hurricane-rated connections that a Michigan build does not. California adds seismic engineering and some of the highest labor rates in the country. The table below covers per-sq-ft estimates for all 50 states. Alaska and Hawaii are marked <code>{'{VERIFY_STATE_DATA}'}</code> because freight and remote-site logistics dominate pricing and ranges are unreliable without site-specific quoting.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Cost per Sq Ft (Basic)</th>
                  <th>Cost per Sq Ft (Finished)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {stateRows.map(row => (
                  <tr key={row.state}>
                    <td><strong>{row.state}</strong></td>
                    <td>{row.basic}</td>
                    <td>{row.finished}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            These are statewide estimates. Site-specific factors can move your real cost 15–25% in either direction. Distance from supplier hubs matters. Site accessibility matters even more, especially if a concrete truck cannot easily reach your property. County code requirements shift quickly once local inspectors review your plans. In parts of the Northeast, site preparation alone — clearing, septic, and well work — can cost $25,000–$40,000 before the building shell arrives.
          </p>

          <h3>Pole Barn Cost in Wisconsin 2026</h3>
          <p>
            A pole barn in Wisconsin typically costs <strong>$17–$40 per sq ft basic</strong> and <strong>$72–$195 per sq ft finished</strong> in 2026. Heavy snow loads are the dominant regional cost driver. Wisconsin&apos;s snow-load requirements push truss engineering up by roughly $2,000–$4,000 compared with a Texas equivalent building, and frost-depth requirements for post embedment typically run 42 inches or deeper, which adds labor to site prep.
          </p>
          <p>
            On the plus side, Wisconsin has one of the deepest post-frame builder markets in the country. Competition keeps labor pricing reasonable, and permit fees outside urban counties are generally modest at $200–$1,200. Dane, Milwaukee, and Waukesha counties run toward the higher end of permit costs and timelines. For heated shops or barndominiums, budget closed-cell spray foam rather than batts to avoid long-term condensation issues in the harsh winter-summer swing. Find Wisconsin pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Michigan 2026</h3>
          <p>
            A pole barn in Michigan typically costs <strong>$16–$40 per sq ft basic</strong> and <strong>$70–$195 per sq ft finished</strong> in 2026. Snow-load engineering is the main regional premium, especially in the Upper Peninsula and the Grand Traverse region, where some counties require heavier truss designs than Lower Michigan. Frost-depth post embedment typically runs 42 inches across the state.
          </p>
          <p>
            Michigan has an unusually strong Amish and Mennonite post-frame builder network across the Thumb, West Michigan, and parts of Northern Michigan. That competition keeps labor pricing competitive. Permit fees vary widely — rural counties often run $150–$600, while metro-Detroit townships can run $1,200–$2,500. Lake-effect snow regions occasionally trigger enhanced truss requirements that most buyers do not see online, so confirm snow-load spec with your builder in writing. Find Michigan pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in South Carolina 2026</h3>
          <p>
            A pole barn in South Carolina typically costs <strong>$15–$38 per sq ft basic</strong> and <strong>$65–$180 per sq ft finished</strong> in 2026. South Carolina has low baseline costs thanks to moderate labor rates and minimal snow-load requirements, but coastal counties — Horry, Charleston, Beaufort, Georgetown — add a wind-zone premium of 5–10% for engineered hurricane connections.
          </p>
          <p>
            Inland counties run at the low end of the state&apos;s range, with permit fees commonly between $200 and $800. Coastal jurisdictions push permitting timelines longer and may require engineered stamped drawings for any enclosed structure above a modest size. Soil conditions in the Lowcountry can also force deeper post embedment or pier foundations on wet sites. Climate humidity makes vapor-barrier placement critical — a botched system causes sweating inside the shell. Find South Carolina pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Florida 2026</h3>
          <p>
            A pole barn in Florida typically costs <strong>$20–$45 per sq ft basic</strong> and <strong>$80–$210 per sq ft finished</strong> in 2026. Hurricane wind zones are the dominant regional cost driver. Statewide wind requirements push engineered connections, heavier post embedment, and stronger uplift protection, which collectively add $3,000–$8,000 over a comparable Texas build.
          </p>
          <p>
            Miami-Dade and Broward counties run the highest pricing in the state due to HVHZ (High Velocity Hurricane Zone) requirements, product-approval documentation, and stricter inspection processes. Panhandle and North Florida counties run closer to the state&apos;s low end. Permit fees range widely — rural inland counties often $500–$1,500, coastal metros $1,500–$4,000. Build season is long, but summer humidity and hurricane-season scheduling can compress timelines. Find Florida pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Minnesota 2026</h3>
          <p>
            A pole barn in Minnesota typically costs <strong>$18–$42 per sq ft basic</strong> and <strong>$75–$200 per sq ft finished</strong> in 2026. Minnesota carries the heaviest snow-load requirements in the Lower 48, which adds the most engineering overhead of any state. Truss packages commonly cost $2,000–$5,000 more than a Texas equivalent, and column embedment depth typically runs 48–60 inches to clear frost.
          </p>
          <p>
            Build seasons are short — most crews target April through October — which compresses scheduling and occasionally pushes permit timelines. Labor rates are moderate outside the Twin Cities metro, where they run above state average. Heated shops and barndominiums should specify spray foam or high-R batt systems with careful vapor barrier placement to handle Minnesota&apos;s aggressive temperature swings. Permit fees vary from rural ($300–$800) to metro ($1,000–$2,500). Find Minnesota pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Ohio 2026</h3>
          <p>
            A pole barn in Ohio typically costs <strong>$15–$38 per sq ft basic</strong> and <strong>$65–$180 per sq ft finished</strong> in 2026. Ohio sits close to the national baseline on most cost drivers. Snow loads are moderate, labor rates are reasonable, and the state has one of the largest post-frame builder pools in the country.
          </p>
          <p>
            Permit fees are generally modest ($200–$1,000 outside metros) and inspection processes are well-established. Rural counties and the Amish counties of eastern and central Ohio offer some of the most competitive pricing in the Midwest. Metro Cleveland, Columbus, and Cincinnati run toward the high end of labor rates. Lake-effect snow along Lake Erie can require enhanced truss specs in Cuyahoga, Lake, and Ashtabula counties. Find Ohio pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Indiana 2026</h3>
          <p>
            A pole barn in Indiana typically costs <strong>$14–$36 per sq ft basic</strong> and <strong>$60–$170 per sq ft finished</strong> in 2026. Indiana is one of the cheapest states in the country for post-frame construction. Strong builder density, moderate labor rates, and minimal code complexity outside the Indianapolis metro keep pricing competitive.
          </p>
          <p>
            Permit fees typically run $200–$1,200. Snow loads are moderate and wind requirements are standard across most of the state. Northern Indiana carries lake-effect snow considerations in a few counties. Rural Indiana — especially central and northern counties with strong Amish builder presence — consistently delivers some of the lowest per-sq-ft pricing in the Midwest. Confirm in writing that your builder is using 26-gauge (not 29-gauge) steel if you expect the building to last 20+ years. Find Indiana pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h3>Pole Barn Cost in Pennsylvania 2026</h3>
          <p>
            A pole barn in Pennsylvania typically costs <strong>$18–$40 per sq ft basic</strong> and <strong>$75–$195 per sq ft finished</strong> in 2026. Pennsylvania has moderate snow loads, slightly above-average labor rates, and one of the strongest Amish builder networks in the country, especially in Lancaster, Lebanon, and central PA counties.
          </p>
          <p>
            Permit costs vary by township more than by county. Rural townships often charge $300–$900, while southeastern PA (Chester, Delaware, Montgomery counties) and the Pittsburgh metro can run $1,200–$2,500. Snow-load requirements get stricter in the Poconos and north-central PA. The Amish builder network is famous for competitive pricing and tight timelines, but lead times can stretch in peak season (April–October). Find Pennsylvania pole barn builders at <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a>.
          </p>

          <h2>What Affects Pole Barn Cost</h2>
          <p>
            Six line items move pole barn cost more than anything else: materials, labor, site preparation, permits, insulation and interior finishing, and the door-and-window package. Every section below covers realistic 2026 cost ranges and what to check before you sign a bid. When a quote looks noticeably cheaper than a competing bid, the difference is almost always hiding in one of these six categories.
          </p>

          <h3>Materials</h3>
          <p>
            The two biggest material decisions are the framing system and the panel package. Post-frame construction with treated wood posts is standard and usually the least expensive route. Steel-framed pole barns cost roughly 10–20% more in materials but offer longer span capacity and better fire performance. For roofing, you will generally choose between 26-gauge and 29-gauge steel panels. The 29-gauge saves money upfront — usually $1,500–$4,000 on a mid-size build — but it dents more easily and tends to deteriorate within a decade. 26-gauge is the industry standard for buildings expected to last 20+ years.
          </p>
          <p>
            Roof profile matters almost as much as gauge. Standing seam roofing costs roughly 2x exposed fastener panels but eliminates leak points and commonly lasts 40–50 years. For siding, steel panels are by far the most common and typically run $3–$6 per sq ft installed. Wood siding costs $5–$12 per sq ft, requires more maintenance, and shows up mostly on barndominium-style builds. In coastal and humid environments, Galvalume coating outperforms standard G90 galvanized because the aluminum-zinc alloy resists corrosion better.
          </p>

          <h3>Labor</h3>
          <p>
            Labor typically accounts for 25–35% of basic shell cost and climbs to 40–60% on turnkey builds with concrete, insulation, and interior finishing. Regional labor rates vary widely. Gulf Coast and Southeast framing crews generally run $35–$55/hr. Midwest post-frame crews typically charge $40–$65/hr. Northeast and West Coast crews commonly run $55–$85/hr, with California, New York, and Seattle crews sitting at the top.
          </p>
          <p>
            DIY labor can save 20–30% on a basic shell if you have the skills, equipment, and time. That typically means renting a telehandler or boom lift, having 2–3 helpers on site, and accepting a 4–8 week timeline instead of 1–3 weeks. DIY almost never makes sense for trusses over 40 feet, which require professional lifting equipment and experienced crews. Rural pricing can fool you — if there are only a few qualified post-frame crews in your area, you lose pricing pressure and gain longer lead times. Crews that drive 90 minutes each way also build fuel, time, and mobilization cost into the bid.
          </p>

          <h3>Site Preparation and Foundation</h3>
          <p>
            Site preparation is the line item most often left out of initial quotes. Basic grading and compaction for a level building pad typically runs $2,000–$8,000. A gravel pad for a standard pole barn footprint usually costs $2,000–$4,000 total; per-square-foot costs range from $1.25 to $10 depending on pad size, with large pads (1,000+ sq ft) landing in the $2–$5 range. Smaller pads cost more per sq ft because mobilization dominates.
          </p>
          <p>
            A concrete slab runs $4–$12 per sq ft installed. A standard 4-inch residential slab sits at the low end; a 6-inch reinforced shop slab with rebar, thickened edges, and vapor barrier sits at the high end. On a 40x60 (2,400 sq ft) build, that is roughly $9,600–$28,800 for flatwork alone. Concrete piers — often the cheapest route for a storage-use pole barn on well-drained soil — run $150–$300 each. If the building is a workshop, barndominium, or any heated structure, the slab is not optional. You need a hard, stable finished floor that handles interior framing, plumbing, and daily use.
          </p>

          <h3>Permits and Inspections</h3>
          <p>
            Most counties require a building permit for any pole barn over 120–200 sq ft, though the threshold varies by jurisdiction. Permit fees generally run <strong>$150–$2,500</strong>, or roughly 0.5–2% of total construction cost. Urban and coastal counties sit at the high end; rural counties and states with light code enforcement sit at the low end. In high-wind, heavy-snow, or seismic regions, structural engineering adds another <strong>$1,200–$4,800</strong> for engineered truss plans, stamped foundation drawings, and load-path calculations.
          </p>
          <p>
            Many states require permits for any enclosed structure regardless of size; others exempt agricultural buildings entirely. Coastal counties almost universally require wind-zone engineering. Mountain and snow-country counties often require snow-load-specific truss designs. Inspection requirements vary — some counties want a single final inspection, others want a footing, framing, and final inspection sequence. Skipping permits looks cheaper only until you try to sell, file an insurance claim, or explain yourself to a county inspector. The small money saved early can become a large bill later.
          </p>

          <h3>Insulation and Interior Finishing</h3>
          <p>
            Insulation is a system, not a single line item. Closed-cell spray foam costs $1.15–$2.90 per board foot installed. Blown-in insulation runs $0.90–$2.40 per sq ft. Fiberglass batts run $0.80–$2.60 per sq ft for standard unfaced batts and up to $4.00 per sq ft for premium vinyl-backed systems with metal liner panels. For a barndominium or climate-controlled workshop, spray foam is nearly non-negotiable because it air-seals, insulates, and acts as a vapor barrier simultaneously. Batts are adequate for unheated storage.
          </p>
          <p>
            Beyond insulation, interior finishing adds quickly. Drywall hangs at $2–$4 per sq ft installed. Electrical rough-in runs $2,800–$10,000+ for a basic 200A panel with lighting and outlets, $5,000–$15,000 for a fully wired workshop with 220V circuits, and up to $30,000 for a complete barndominium with underground service trenching. Plumbing rough-in typically runs $4–$6 per sq ft for new construction. Adding a basic bathroom usually costs $4,000–$12,000 including fixtures. Vapor barrier placement always belongs on the warm side of the wall assembly — getting that wrong traps condensation inside the cavity and rots framing from the inside out.
          </p>

          <h3>Doors, Windows, and Openings</h3>
          <p>
            Overhead doors can quietly blow up a budget. Standard commercial sectional doors run $1,200–$4,000 per unit installed for common sizes — 9x8, 10x10, 12x12. Insulated doors add 30–50%. Oversized doors (14x14, 16x14) run $4,500–$8,500 installed. On a 40x60 shop with three insulated overhead doors, you can easily spend $5,000–$12,000+ on doors alone. For heated buildings, specify at least R-12 insulated doors; anything less leaves a giant heat leak.
          </p>
          <p>
            Walk-in entry doors typically run $400–$1,500 installed for steel exterior doors, with fiberglass and insulated options at the high end. Windows run $300–$900 per unit installed for standard vinyl double-hung windows; larger or specialty windows cost more. A common mistake is pricing the shell and forgetting the openings. A big door is not just a door — it changes framing, hardware, tracks, operators, and often installation labor. On real jobs, overhead doors are usually the second-largest variable cost after the foundation. If a quote looks surprisingly low, check whether the door package is actually included and at what insulation level.
          </p>

          <h2>Pole Barn Cost Per Square Foot</h2>
          <p>
            The national 2026 average is <strong>$15–$40 per sq ft for a basic shell build</strong> and <strong>$65–$200 per sq ft for a fully finished build</strong>. A well-specified standard-size shell in an average market typically lands at $18–$25 per sq ft; a mid-range finished build lands at $85–$150 per sq ft. These ranges assume a standard post-frame structure on a prepared site with no unusual engineering or site constraints.
          </p>
          <p>
            Smaller buildings cost more per square foot than larger ones. Fixed costs — permit fees, mobilization, engineering, crew setup — get amortized across less area on a small footprint. A 24x30 shell often runs $18–$25 per sq ft, while a 40x60 shell runs $15–$20 per sq ft and a 50x100 shell can run $14–$18 per sq ft. If a per-sq-ft quote looks unusually low for a small footprint, confirm what is and is not included.
          </p>
          <p>
            Regional variance is significant. California, Massachusetts, New Jersey, and Washington sit at the top of the range. Oklahoma, Arkansas, Mississippi, and Indiana sit near the bottom. See the state table above for per-sq-ft ranges across all 50 states. Finish level drives the biggest gap: the same 40x60 shell at $20 per sq ft can become $140 per sq ft finished once insulation, electrical, plumbing, concrete, and interior finishing are added. Treat shell-only per-sq-ft quotes and finished per-sq-ft quotes as two different numbers.
          </p>

          <h2>How to Reduce Pole Barn Cost</h2>
          <p>
            Several concrete strategies can shave 10–25% off a pole barn budget without compromising structural integrity.
          </p>
          <ul>
            <li><strong>Choose a standard size over a custom footprint.</strong> Standard sizes (24x30, 30x40, 40x60) let builders source pre-engineered truss packages and standard panel cuts. Custom sizes often add 5–10% in engineering and waste.</li>
            <li><strong>Handle site prep yourself.</strong> Grading, gravel delivery, and pad compaction are DIY-friendly with a rented skid steer and can save $2,000–$6,000 on a mid-size build.</li>
            <li><strong>Skip insulation for storage-only use.</strong> If the building will never be heated, skip insulation and climate control. An uninsulated ag shed can cost 30–40% less than the same footprint with a full insulation and vapor barrier system.</li>
            <li><strong>Build in the off-season.</strong> Late fall and winter bids are often 5–10% lower than peak-season (spring/summer) bids. Crews have more availability and material suppliers discount to move inventory.</li>
            <li><strong>Minimize door and window count.</strong> Each overhead door adds $1,200–$8,500. Each window adds $300–$900. Keeping openings to essentials can save $5,000–$15,000 on a working shop.</li>
            <li><strong>Use 26-gauge steel, but skip standing-seam.</strong> Standing-seam roofing costs roughly 2x exposed-fastener panels. For most pole barns, 26-gauge exposed-fastener steel delivers 20–30 year performance at meaningfully lower cost.</li>
            <li><strong>Pour a 4-inch slab instead of a 6-inch.</strong> If the building is a garage or light workshop, a 4-inch residential slab is adequate and costs 30–40% less than a 6-inch reinforced shop slab.</li>
            <li><strong>Get three bids, not one.</strong> The spread between the lowest and highest bid on the same spec is commonly 20–30%. A second and third bid almost always pays for itself.</li>
            <li><strong>Consider a pre-engineered kit.</strong> Kits can save 10–15% on materials, though you still need labor, foundation, and permits. Kits work best for experienced DIYers willing to coordinate trades.</li>
          </ul>

          <h2>Frequently Asked Questions</h2>
          {faqItems.map((item, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.q}</h3>
              <p style={{ margin: 0 }}>{item.a}</p>
            </div>
          ))}

          <h2>Find a Pole Barn Builder Near You</h2>
          <p>
            Regional pricing variance is significant enough that a quote from a local, experienced post-frame builder will always beat a generic online estimate. The right builder will spec the correct snow-load, wind-zone, and seismic requirements for your county, source materials from a regional supplier hub, and handle permits without surprises. For state-specific quotes and verified local builders across Wisconsin, Michigan, South Carolina, Florida, Minnesota, Ohio, Indiana, Pennsylvania, and every other state, <a href="https://polebarnfinder.com" target="_blank" rel="noopener">PoleBarnFinder.com</a> compares multiple builders in your area and delivers free estimates. You can also <Link href="/">browse all pole barn builders</Link> and related resources from our directory homepage.
          </p>

          <div style={{ marginTop: '3rem', marginBottom: '3rem', padding: '3rem', background: 'var(--bg-section-alt)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-warm)' }}>
            <h3 style={{ marginTop: 0 }}>Metal Building Kit Pricing</h3>
            <p style={{ marginBottom: '1.5rem' }}>Pre-engineered metal building kits can cost significantly less than custom stick-built pole barns. Whitestar Metal Buildings ships kits nationwide with 4–6 week lead times, including engineering. <strong>Plus, receive a $500 credit toward your building purchase!</strong></p>
            <div>
              <a href="https://go.polebarnfinder.com/whitestar" target="_blank" rel="nofollow sponsored" className="btn-primary">
                Get a Free Quote & Claim $500 Credit →
              </a>
            </div>
          </div>

          <div style={{ marginTop: '4rem', padding: '3rem', background: 'var(--bg-section-alt)', borderRadius: 'var(--border-radius-lg)', border: '1px solid var(--border-warm)' }}>
            <h3 style={{ marginTop: 0 }}>Ready to get a firm price?</h3>
            <p className="mb-2">Talk to local builders who know regional pricing and requirements.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="https://polebarnfinder.com" target="_blank" rel="noopener" className="btn-primary">
                Get free quotes from builders in your area →
              </Link>
              <Link href="/floor-plans" className="btn btn-secondary">
                Browse floor plans →
              </Link>
            </div>
          </div>
          <div className="mobile-only" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
            <div className="card">
              <div className="card-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>🏦</div>
              <h3 className="card-title">Need Financing?</h3>
              <p className="card-text">Construction loans with rates from 7-9%. Pre-qualify in 5 minutes without affecting your credit score.</p>
              <a
                href="https://www.lightstream.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: '100%' }}
              >
                Check Rates Today
                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', marginLeft: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
          <ReadNextCards />
        </article>

        <aside className="desktop-only">
          <div className="card sticky-sidebar">
            <div className="card-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>🏦</div>
            <h3 className="card-title">Need Financing?</h3>
            <p className="card-text">Construction loans with rates from 7-9%. Pre-qualify in 5 minutes without affecting your credit score.</p>
            <a
              href="https://www.lightstream.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Check Rates Today
              <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '16px', height: '16px', marginLeft: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </aside>
      </div>
    </section>
    </>
  );
}
