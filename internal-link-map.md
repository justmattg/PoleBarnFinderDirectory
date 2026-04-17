# Internal Link Map — Cost Guide Expansion 2026

This document records every internal link added or modified as part of the
`cost-guide-expansion-2026` branch. Format: source page → destination page,
anchor text, placement.

## Links added on `/cost-guide/`

| Source | Destination | Anchor text | Placement |
|---|---|---|---|
| /cost-guide/ | /floor-plans/ | "floor plan options for each size" | In-body (Pole Barn Cost by Size section intro) |
| /cost-guide/ | / (homepage) | "browse all pole barn builders" | In-body (Find a Pole Barn Builder Near You closing section) |
| /cost-guide/ | /floor-plans/ | "Browse floor plans →" | In-body CTA module (existing, preserved) |

### External builder links (polebarnfinder.com) — added per spec Phase 4.1

The spec requires linking each of the 8 high-traffic state H3 subsections to
state-level builder index pages. This repository does not contain
`/builder/[state]` or `/builder/[city]` pages — those live on the separate
`polebarnfinder.com` site. Each state H3 therefore links out to
`polebarnfinder.com` with state-specific anchor text.

| Source section | Destination | Anchor text |
|---|---|---|
| /cost-guide/#wisconsin-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Wisconsin pole barn builders at ...") |
| /cost-guide/#michigan-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Michigan pole barn builders at ...") |
| /cost-guide/#south-carolina-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find South Carolina pole barn builders at ...") |
| /cost-guide/#florida-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Florida pole barn builders at ...") |
| /cost-guide/#minnesota-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Minnesota pole barn builders at ...") |
| /cost-guide/#ohio-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Ohio pole barn builders at ...") |
| /cost-guide/#indiana-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Indiana pole barn builders at ...") |
| /cost-guide/#pennsylvania-h3 | https://polebarnfinder.com | "PoleBarnFinder.com" (in "Find Pennsylvania pole barn builders at ...") |
| /cost-guide/ (closing "Find a Builder" section) | https://polebarnfinder.com | "PoleBarnFinder.com" |

## Links added on `/floor-plans/`

| Source | Destination | Anchor text | Placement |
|---|---|---|---|
| /floor-plans/ | /cost-guide/ | "View the Cost Guide →" | In-body module ("Planning your build? Start with costs"), placed above the card grid in the primary content area |

## Links on `/` (homepage) — already present, verified

| Source | Destination | Anchor text | Placement |
|---|---|---|---|
| / | /cost-guide | "Cost Guide" | Primary navigation (Header component) |
| / | /cost-guide | "View Cost Guide →" / "What Will It Cost?" card | Above-the-fold CTA card in top-5 `card-grid-3-2` grid |
| / | /cost-guide | "Cost Guide 2026" | Footer Resources column |

## Links from `/builder/[slug]` pages

Spec Phase 4.4 calls for adding a contextual link to `/cost-guide/` from the
10 highest-content `/builder/[slug]` pages with anchor text
"See [State] pole barn cost estimates".

**Status:** DEFERRED — no `/builder/[slug]` pages exist in this repository.
The routing structure (verified via `app/` directory listing and built
`out/` directory) contains only five routes:

- `/`
- `/cost-guide/`
- `/floor-plans/`
- `/financing/`
- `/checklist/`

Builder-specific pages live on the separate `polebarnfinder.com` site, which
is out of scope for this repository. This deviation is documented in the
PR description.

## ReadNextCards cross-linking — already present, verified

The `ReadNextCards` component (rendered at the bottom of the cost-guide,
floor-plans, financing, and checklist pages) already provides mutual
contextual links between all four long-form pages. No changes required.
