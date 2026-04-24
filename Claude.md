# Simply the GOAT — Execution Plan

A premium marketing site for a professional wildfire mitigation company that uses goat grazing. Built from the brief in `Prompt.md`.

## 1. Project Goals

- Ship a production-quality, five-page React marketing site.
- Express "Sleek Tradition" — modern minimalism grounded in rural, earthy materials.
- Position the business as a **safety company** (defensible space, fuel load reduction), not a novelty farm.
- Balance two tones: authoritative on fire safety, warm on animal husbandry.

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **React 18** via **Vite** | Fast dev server, clean build, no Next.js overhead needed for a static marketing site. |
| Styling | **Tailwind CSS** | Matches brief; utility-first fits the design-token approach below. |
| Icons | **lucide-react** | Matches brief; clean, consistent stroke weight. |
| Routing | **react-router-dom** | Five pages, client-side nav. |
| Fonts | **Playfair Display** (serif) + **Inter** (sans) via `@fontsource` or Google Fonts | Matches brief. |
| Deployment | **Vercel** or **Netlify** | Zero-config for Vite + React. |

No backend in phase 1. The contact form posts to a form service (Formspree / Netlify Forms) — decided in Phase 4.

## 3. Design System

Codified as Tailwind theme extensions in `tailwind.config.js` so every component pulls from the same tokens.

**Colors**
- `forest` — `#1B4332` (primary)
- `ochre` — `#BC6C25` (secondary / accent on fire-risk context)
- `cream` — `#FEFAE0` (page background — never pure white)
- `slate` — `#2B2D42` (data/professional sections, body text on cream)

**Typography**
- `font-serif` → Playfair Display — headings, hero, section titles
- `font-sans` → Inter — body, nav, buttons, data labels

**Spacing / Layout**
- Generous vertical rhythm (`py-24`, `py-32` on sections)
- Max content width `max-w-6xl` centered
- No stark white cards — cream (`bg-cream`) or forest (`bg-forest text-cream`) only

## 4. Site Map

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hero + mission + 3 pillars + CTA |
| `/results` | The Science | Data dashboard, before/after, case studies |
| `/about` | Our Herd | Team + goat bios, "why goats over mowers" |
| `/pricing` | Investment | Three tiers + cost-factor explainer |
| `/contact` | Deployment | Intake form (acreage, vegetation, slope) |

## 5. Component Architecture

```
src/
  main.jsx
  App.jsx                    // <Router> + <Layout>
  layout/
    Layout.jsx               // Nav + <Outlet/> + Footer
    Navigation.jsx
    Footer.jsx
  pages/
    Home.jsx
    Results.jsx
    About.jsx
    Pricing.jsx
    Contact.jsx
  components/
    Hero.jsx                 // reusable hero w/ optional video bg
    SectionHeader.jsx        // eyebrow + serif title + lede
    StatCard.jsx             // big number + label (Acres, Fuel Tons, Soil Index)
    BeforeAfterSlider.jsx    // drag-to-reveal image compare
    PricingTier.jsx          // card for one tier
    CostFactor.jsx           // icon + terrain/density/location
    GoatBio.jsx              // portrait + name + role + blurb
    EcoImpactTracker.jsx     // carbon offset + noise reduction
    ContactForm.jsx
    Button.jsx               // primary (forest) / secondary (ochre outline)
  assets/
    images/                  // hero video poster, hillside shots, goat portraits
  styles/
    index.css                // Tailwind directives + font imports
tailwind.config.js           // color + font tokens
```

## 6. Page-Level Content Plan

### Home (`/`)
- **Hero**: full-bleed video (goats on a golden hillside) with cream overlay at bottom. Headline: *"Nature's Solution to a Modern Crisis."* Sub: *"Professional wildfire mitigation through targeted, heartfelt grazing."* Two CTAs: *Request a Deployment* (forest) / *See the Science* (ochre outline).
- **Mission statement band**: one paragraph bridging fire safety + animal husbandry.
- **Three pillars**: Defensible Space · Ecological Restoration · Ethical Partnership (icon + 2-line blurb each).
- **Featured stat strip**: pulls three headline numbers from Results.
- **Closing CTA**: "Is your property fire-ready?"

### Results (`/results`) — "Data Dashboard" feel
- Top row: three `StatCard`s — **Acres Managed**, **Fuel Tons Removed**, **Soil Health Index**.
- `EcoImpactTracker`: Carbon Offset (vs. gas mowers) + Noise Pollution reduction. *(Competitive-edge recommendation from the brief.)*
- Case study grid (3–4 cards): client name, acreage, before/after slider, 1-line outcome.
- Methodology footnote — lends credibility.

### About (`/about`)
- Dual-mission section: two columns — *Serious Wildfire Prevention* / *Ethical Herd Care*.
- "Why goats beat mowers" comparison table: sparks, chemicals, soil compaction, fertilizer, terrain access.
- Team bios (humans) + lead goat bios. Portraits, not cartoons.
- Optional "Goat Cam" placeholder block *(brief's recommendation)* — reserved slot, labeled "coming soon" if no feed yet.

### Pricing (`/pricing`)
- Three `PricingTier` cards: **Residential Perimeter** · **Acreage Management** · **Community Wildfire Protection**.
- Each card: scope, typical acreage, what's included, "Request Quote" button (no fixed prices — grazing is variable).
- *Factors that Influence Cost* section: Slope Gradient · Vegetation Density · Location/Access. Icon + short paragraph each.
- FAQ accordion: insurance, timing, herd size, fencing.

### Contact (`/contact`)
- Two-column: form left, "What to expect" right (3-step: Assess → Deploy → Report).
- Form fields: Name, Email, Phone, Property Address, **Acreage**, **Vegetation Type** (select: grass / brush / mixed / heavy chaparral), **Slope** (flat / moderate / steep), Notes.
- Post-submit: cream thank-you screen with next-steps timeline.

## 7. Build Phases

### Phase 1 — Scaffold (est. 1 session)
1. `npm create vite@latest simply-the-goat -- --template react`
2. Install: `tailwindcss postcss autoprefixer react-router-dom lucide-react @fontsource/playfair-display @fontsource/inter`
3. Init Tailwind, wire color + font tokens in `tailwind.config.js`.
4. Set up router, `Layout`, `Navigation`, `Footer` stubs.
5. Confirm `bg-cream`, `text-forest`, `font-serif` all resolve.

### Phase 2 — Home + Navigation (matches brief's "start here")
1. Build `Button`, `SectionHeader`, `Hero` primitives.
2. Build Home with placeholder imagery (solid-color SVGs ok for now).
3. Responsive pass: mobile nav drawer, hero text reflow.

### Phase 3 — Supporting pages
1. Results (StatCard, BeforeAfterSlider, EcoImpactTracker).
2. About (GoatBio, comparison table).
3. Pricing (PricingTier, CostFactor, FAQ accordion).
4. Contact (ContactForm — local state only, wiring comes in Phase 4).

### Phase 4 — Polish & Ship
1. Real imagery swap (hero video, hillside shots, goat portraits).
2. Copy pass — enforce tone split (authoritative vs. warm); strip any punny language.
3. Form backend: Formspree or Netlify Forms.
4. SEO: `<title>`, meta description, OG image per route (react-helmet-async).
5. Accessibility sweep: color contrast on ochre, focus rings, alt text, reduced-motion for hero video.
6. Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO.
7. Deploy to Vercel/Netlify; custom domain.

## 8. Copy Tone Guardrails

- **Do**: "fuel load reduction", "defensible space", "ecological restoration", "our partners", "low-impact".
- **Don't**: "GOAT-ally awesome", "kidding around", "baaa-d news for brush" — no puns, no cute.
- Fire-safety copy: short, declarative, data-anchored.
- Herd copy: warm, grounded, specific (names, ages, temperaments) — not saccharine.

## 9. Open Questions for You

Before Phase 2, I'll need from you:
1. **Business details** — real company name confirmation, service area (state/region), phone/email for footer + contact.
2. **Real stats** — acres managed, fuel tons removed, years operating. Placeholders otherwise.
3. **Imagery** — do you have photos of the actual herd and past job sites, or should I use licensed stock for now?
4. **Goat Cam** — is a live feed realistic for launch, or treat as "coming soon"?
5. **Form destination** — email inbox to receive contact submissions, or a CRM/Zapier endpoint?
6. **Domain** — registered yet? Affects deployment + SEO config.

Placeholders are fine for #1–3 to keep Phase 2 unblocked; answers for #5–6 are only needed at Phase 4.

## 10. Success Criteria

- All five pages render at `/`, `/results`, `/about`, `/pricing`, `/contact`.
- Every section uses only the four brand colors — no stray greys, no pure white.
- Serif on every heading, sans on every paragraph.
- Mobile (375px) through desktop (1440px+) all read cleanly.
- Contact form submits to a real destination and sends a confirmation.
- Lighthouse ≥ 95 across the board.
- A stranger lands on the site and, within 10 seconds, understands: *this is a serious fire-safety company that happens to use goats.*
