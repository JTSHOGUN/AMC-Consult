# DESIGN.md: tokens and component rules

Brand tokens are sampled from the AMC Company Profile 2025 brand pages (raster extract).
When the brand designer's vector file is available, re-sample and update `app/globals.css` only.

## Colour

| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#334269` | Structure, headings, primary buttons, footer |
| `--color-ink-deep` | `#242f4d` | Hover on primary buttons |
| `--color-accent` | `#4196cf` | Large elements, icons, number accents (never white text on this: 3.3:1) |
| `--color-accent-soft` | `#dcebfa` | Tag and soft chip backgrounds |
| `--color-link` | `#3e6cab` | Text links and small accent text (5:1 on paper) |
| `--color-paper` | `#f6f8fb` | Page background |
| `--color-fore` | `#22262e` | Body text (no pure black) |

One accent family for brand elements. No rainbow icons. Primary buttons are navy with white text.

### Interaction palette (hover/press feedback)

Nine light rich washes (`hov-mint, sky, aqua, lavender, peach, rose, lemon, sage, sand`) with
matching deep tones (`deep-teal, blue, cyan, plum, terra, rose, gold, olive, sand`) live in
`lib/palette.ts`. Every interactive surface takes its own wash instead of one global hover colour:

- Each of the six services has a fixed identity colour (mint, sky, aqua, lavender, peach, rose)
  used on its rows, section, tags and detail page.
- Sectors, credentials rows, activities, FAQs, work cards, nav links, phases and team names rotate
  through the nine washes (`hoverCycle`, `groupDeepCycle`, `washFillCycle`).
- Washes are light and desaturated; deep tones carry text at AA contrast on their wash.

These are interaction feedback colours, not brand accents: links, CTAs and icons stay on the
brand accent/ink system.

## Typography

- Display: Plus Jakarta Sans 700/800 (`next/font`, self-hosted).
- Body: Source Sans 3 400/600.
- No Inter, no serif. Emphasis stays in-family.

## Shape

- Radius: 12px cards and inputs, pill buttons and tags.
- Arch mask (`.arch`) is the signature for photos and portraits.
- Scallop texture (`.scallop-band`) sits above the footer only.

## Motion

- Scroll reveals (`.reveal`) via CSS scroll-driven animations where supported.
- `prefers-reduced-motion` disables all of it. No marquees, no custom cursors.

## Copy rules

- No em-dashes in site copy.
- No "seamless", "elevate", "unleash".
- One label per intent. The contact CTA is always "Request a proposal".

## Content rules

- Numbers come from `content/profile-extracted.md` (the facts register) only.
- Project statuses carry a year range; refresh quarterly.
- Client logos need permission and correct lockups before launch.
