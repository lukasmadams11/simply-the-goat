# Simply the GOAT — Live Site Copy Snapshot

This doc captures **exactly what's rendered on simplythegoat.com right now**, page by page. Mark up anything you want changed and hand it back.

> Each section shows the on-page copy in a quote block, with the source file path so we can jump straight to it.

_Generated 2026-05-21._

---

## Global — appears on every page

### Navigation (`web/src/layout/Navigation.jsx`)
- Wordmark: **Simply the GOAT**
- Links: Home · Results · About · Pricing · Contact

### Footer (`web/src/layout/Footer.jsx`)
> Simply the GOAT
> © {year} — Defensible space, naturally.

---

## 1. Home — `/` (`web/src/pages/Home.jsx`)

### Hero
- Eyebrow: **Wildfire Mitigation**
- Headline: **Nature's Solution to a Modern Crisis.**
- Sub: _Professional wildfire mitigation through targeted, heartfelt grazing._
- Buttons: **Request a Deployment** → `/contact` · **See the Science** → `/results`

### Mission band
- Eyebrow: **Our Mission**
- Title: **Fire safety rooted in animal husbandry.**
- Body:
  > We partner with working herds to reduce wildfire risk on the landscapes where people live and work. Every acre we clear advances two goals at once — defensible space for our clients, and a dignified life for our animals.

### Three Pillars
- Eyebrow: **Why Goats**
- Title: **Three pillars of responsible mitigation.**

| # | Title | Body |
|---|---|---|
| 1 | **Defensible Space** | Targeted fuel load reduction around homes, powerlines, and critical infrastructure — the exact perimeter fire departments and insurers look for. |
| 2 | **Ecological Restoration** | No sparks, no herbicides, no soil compaction. Our herds leave behind natural fertilizer and healthier native plant communities. |
| 3 | **Ethical Partnership** | Our goats are partners, not tools. Low-stress handling and daily welfare checks are non-negotiable on every deployment. |

### Stat strip
| Value | Label |
|---|---|
| **20yrs** | Field Experience |
| **0** | Sparks Generated |
| **0** | Gallons of Fuel Burned |

### Closing CTA
- Headline: **Is your property fire-ready?**
- Sub:
  > Tell us your acreage, vegetation, and terrain. We'll return a scoped deployment plan within two business days.
- Buttons: **Start an Assessment** → `/contact` · **View Pricing** → `/pricing`

---

## 2. Results — `/results` (`web/src/pages/Results.jsx`)

### Page header
- Eyebrow: **The Science**
- Title: **Measured outcomes, not marketing.**
- Lede:
  > Every deployment is scoped with site analysis, tracked in-field, and verified with post-graze fuel-load checks. The figures below reflect our inaugural deployment; multi-season totals will follow as our portfolio grows.

### Eco-Impact Tracker (`web/src/components/EcoImpactTracker.jsx`)
- Eyebrow: **Eco-Impact Tracker**
- Title: **What you avoid matters as much as what you clear.**
- Lede:
  > Mechanical mitigation burns fuel, emits carbon, and saturates neighborhoods with noise. Goat grazing does none of that.

| Metric | Value | Sub |
|---|---|---|
| **Carbon Offset** | Zero direct emissions | Gas-powered brush mowers and chainsaws emit roughly 20 lbs of CO₂ per equipment-hour (EPA non-road gasoline emission factors). Our herds emit none. |
| **Noise Reduction** | ~95 dB → ~45 dB | Brush mowers and chainsaws routinely exceed 95 dB at the operator (OSHA above-threshold for hearing protection). Grazing herds sit near pasture ambient — around 45 dB. |

### Methodology footer
> **Methodology.** Deployments are documented to standards aligned with CAL FIRE defensible-space guidance. Carbon comparisons reference EPA emission factors for equivalent gas-powered equipment hours. Fuel-load methodology will follow Brown's transect sampling as our portfolio scales.

---

## 3. About — `/about` (`web/src/pages/About.jsx`)

### Page header
- Eyebrow: **About**
- Title: **A fire-safety company that happens to raise goats.**
- Lede:
  > Simply the GOAT was founded on a simple observation: the landscapes most at risk from wildfire are the ones mechanical crews struggle to reach. Our herds don't.

### Dual-mission panels
**Serious wildfire prevention.**
> We treat defensible space as an engineering problem. Every deployment begins with parcel-level fuel modeling, slope analysis, and a written scope. No improvisation, no shortcuts — the terrain doesn't forgive either.

**Ethical herd care.**
> The goats are partners, not equipment. They graze the plants they choose to graze, rest when they need to rest, and return to pasture after every job.

### Goats vs. Mowers comparison
- Eyebrow: **Goats vs. Mowers**
- Title: **Why the herd beats the machine.**

| Trait | Goats | Mowers |
|---|:---:|:---:|
| Ignition risk (sparks, hot exhaust) | ✓ no | ✗ yes |
| Herbicide or fuel runoff | ✓ no | ✗ yes |
| Soil compaction on slopes | ✓ no | ✗ yes |
| Leaves natural fertilizer behind | ✓ yes | ✗ no |
| Handles terrain >30° grade | ✓ yes | ✗ no |
| Noise over 85 dB | ✓ no | ✗ yes |

### Team (`web/src/pages/About.jsx`)
- Eyebrow: **The Team**
- Title: **People who answer the phone.**

**Jim Guggenhime** — _Founder & Director of Operations_
> Jim brings a wealth of hands-on wildland management experience to the field, having built his career protecting some of Colorado's most valued landscapes. With deep roots in the Front Range, Jim has spearheaded complex mitigation projects for high-profile institutions, including securing the campus perimeters at the University of Colorado Boulder and the Boulder Researchers Center. His expertise in biological land management has been trusted by civic organizations like Boulder Parks and Recreation and Colorado Highway Services to manage large-scale civic fuel reduction. Beyond his institutional work, Jim is deeply dedicated to safeguarding private Boulder homes — a commitment to community safety that has earned his methods recognition in several regional magazines.

**Ethan Wenter** — _Animal Whisperer_
> Serving as our "eagle in the sky," Ethan maintains continuous, round-the-clock overwatch of our deployments. With deep intuition and a watchful eye, he monitors the herd closely day and night to ensure their safety and operational success.

**Ryan Bartusek** — _sUAS Data Collector_
> Ryan architects the aerial intelligence network that drives our deployments. Operating between our hubs in the Colorado Front Range and the Sierra Nevada foothills, he specializes in Drone-in-a-Box (DiaB) operations, geospatial analysis, and custom Python-driven AI modeling. By processing real-time LiDAR and photogrammetry, Ryan ensures our biological mitigation units are deployed with exact, mathematically verified precision.

**Luke Adams** — _sUAS Data Collector & Biological Operations Lead_
> Luke bridges the critical gap between aerial telemetry and ground-level execution. While he engineers the same advanced drone mapping and geospatial modeling as the rest of the sUAS team, Luke's expertise extends directly into the herd. He serves as our hands-on tactical liaison, ensuring our biological mitigation units move in perfect synchronization with our topographic data.

### Goat Cam teaser
> **Goat Cam — coming 2026.** We're wiring up a live pasture feed so clients and neighbors can check in on the herd between deployments. Back soon.

---

## 4. Pricing — `/pricing` (`web/src/pages/Pricing.jsx`)

### Page header
- Eyebrow: **Investment**
- Title: **Transparent pricing, scoped to your land.**
- Lede:
  > Grazing isn't priced like lawn service. Every parcel is different — we quote after a site assessment, not before. The tiers below frame what a typical engagement looks like at each scale.

### Tiers
**Residential Perimeter** — _0.5 – 3 acres_
> Defensible-space clearing around single-family homes, outbuildings, and driveways.
- Pre-graze fuel assessment
- Portable fencing and daily water delivery
- Neighborhood notification and scheduling
- Post-graze fuel load report

**Acreage Management** _(featured)_ — _5 – 80 acres_
> Large parcels, ranches, orchards, and vineyards where terrain or scale makes mechanical crews impractical.
- Multi-paddock rotation plan
- GIS mapping of treated zones
- Steep-slope specialist herd
- Quarterly maintenance schedule option
- Dedicated project lead

**Community Wildfire Protection** — _100+ acres_
> HOAs, watersheds, utility corridors, and municipalities coordinating multi-parcel mitigation.
- Stakeholder coordination across parcels
- Insurance-aligned documentation
- Seasonal deployment windows
- Public communications toolkit
- Fire-department liaison

### Cost factors
- Eyebrow: **Cost Factors**
- Title: **What shapes a quote.**
- Lede:
  > Three variables do most of the work. We'll walk you through each during the site assessment.

| Factor | Body |
|---|---|
| **Slope Gradient** | Steep terrain (>30°) requires specialist handling, reinforced fencing, and slower paddock rotation. It also happens to be where goats outperform every mechanical alternative. |
| **Vegetation Density** | Mature chaparral and heavy ladder fuel take longer to clear than seasonal grass. We scope by biomass, not just acreage. |
| **Location & Access** | Travel time, water availability, and trailer access all affect deployment logistics. Remote sites incur a mobilization fee scoped up front. |

### FAQ
| Q | A |
|---|---|
| **Does insurance accept goat-grazed defensible space?** | Yes. We document every deployment with pre- and post-graze assessments that mirror the CAL FIRE defensible-space checklist and the standards most carriers reference. We can format reports to your insurer's specifications on request. |
| **How long does a typical deployment take?** | Residential perimeters are usually cleared in 3–7 days. Larger acreage jobs run 2–6 weeks depending on density and terrain. We confirm a schedule before deployment and stick to it. |
| **How many goats will show up?** | Herd size is scoped to the job. A residential perimeter might see 40 goats; a community-scale deployment can exceed 250. More goats is not always better — density is calibrated to avoid overgrazing. |
| **Do I need existing fencing?** | No. We bring portable electric fencing sized to your parcel and move it as paddocks rotate. Your existing fencing is never relied on for herd containment. |
| **What happens if a goat gets sick or injured on-site?** | Every deployment includes a herder on-site 24/7. Incidents are rare, but the protocol is established and transparent. |

---

## 5. Contact — `/contact` (`web/src/pages/Contact.jsx`)

### Page header
- Eyebrow: **Deployment**
- Title: **Start a site assessment.**
- Lede:
  > Tell us about your parcel. The more specific the details, the faster we can return a scoped deployment plan.

### "What to expect" sidebar
- Eyebrow: **What to expect**
- Title: **From request to report in three steps.**

| # | Step | Body |
|---|---|---|
| 1 | **Assess** | Within two business days we review your parcel, request any missing details, and schedule an on-site walkthrough. |
| 2 | **Deploy** | Herd, herders, fencing, and water arrive on the agreed date. You'll meet your dedicated project lead on day one. |
| 3 | **Report** | After the graze we send a post-deployment report with fuel-load reduction figures and insurance-ready documentation. |

### Form fields (`web/src/components/ContactForm.jsx`)
- Name, Email, Phone, Property Address, Acreage, Vegetation Type, Slope, Notes
- Vegetation options: Seasonal grass · Mixed brush · Grass + brush mixed · Heavy chaparral
- Slope options: Flat (<10°) · Moderate (10–30°) · Steep (>30°)
- Submit button: **Submit Request**

### Success state
> **Request received.** We'll review your parcel details and respond within two business days with a scoped deployment plan.

---

## Recent copy changes (since brief)

- **Vet/veterinarian references removed** from Home Pillar 3, About "Ethical herd care," and Pricing FAQ (2026-05-21) — business has no on-call vet.
- Direct-line phone removed from Contact (placeholder was inaccurate).
- Fabricated stats and client logos removed; team copy now reflects real people (Jim, Ethan, Ryan, Luke).
- Stat strip on Home shows _20yrs / 0 / 0_ instead of earlier placeholder figures.

---

## How to mark this up

Add a `→ CHANGE:` line under any block you want edited, e.g.:

```
**Ethical Partnership** — Our goats are partners, not tools...
→ CHANGE: tighten to one sentence and drop "non-negotiable"
```

Or just annotate with `→ SKIP` to remove an item entirely.
