import { Mountain, Trees, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import PricingTier from '../components/PricingTier'
import CostFactor from '../components/CostFactor'
import FAQ from '../components/FAQ'
import Seo from '../components/Seo'

const tiers = [
  {
    name: 'Residential Perimeter',
    scope:
      'Defensible-space clearing around single-family homes, outbuildings, and driveways.',
    typical: '3 – 10 acres',
    features: [
      'Pre-graze fuel assessment',
      'Portable fencing and daily water delivery',
      'Neighborhood notification and scheduling',
      'Post-graze fuel load report',
    ],
  },
  {
    name: 'Acreage Management',
    scope:
      'Large parcels, ranches, orchards, and vineyards where terrain or scale makes mechanical crews impractical.',
    typical: '10 – 100 acres',
    features: [
      'Multi-paddock rotation plan',
      'GIS mapping of treated zones',
      'Steep-slope specialist herd',
      'Quarterly maintenance schedule option',
      'Dedicated project lead',
    ],
    featured: true,
  },
  {
    name: 'Community Wildfire Protection',
    scope:
      'HOAs, watersheds, utility corridors, and municipalities coordinating multi-parcel mitigation.',
    typical: '100+ acres',
    features: [
      'Stakeholder coordination across parcels',
      'Insurance-aligned documentation',
      'Seasonal deployment windows',
      'Public communications toolkit',
      'Fire-department liaison',
    ],
  },
]

const factors = [
  {
    icon: Mountain,
    title: 'Slope Gradient',
    body: 'Steep terrain (>30°) requires specialist handling, reinforced fencing, and slower paddock rotation. It also happens to be where goats outperform every mechanical alternative.',
  },
  {
    icon: Trees,
    title: 'Vegetation Density',
    body: 'Mature chaparral and heavy ladder fuel take longer to clear than seasonal grass. We scope by biomass, not just acreage.',
  },
  {
    icon: MapPin,
    title: 'Location & Access',
    body: 'Travel time, water availability, and trailer access all affect deployment logistics. Remote sites incur a mobilization fee scoped up front.',
  },
]

const faq = [
  {
    q: 'Does insurance accept goat-grazed defensible space?',
    a: 'Yes. We document every deployment with pre- and post-graze assessments that mirror the CAL FIRE defensible-space checklist and the standards most carriers reference. We can format reports to your insurer’s specifications on request.',
  },
  {
    q: 'How long does a typical deployment take?',
    a: 'Residential perimeters are usually cleared in 3–7 days. Larger acreage jobs run 2–6 weeks depending on density and terrain. We confirm a schedule before deployment and stick to it.',
  },
  {
    q: 'How many goats will show up?',
    a: 'Herd size is scoped to the job. A residential perimeter might see 40 goats; a community-scale deployment can exceed 250. More goats is not always better — density is calibrated to avoid overgrazing.',
  },
  {
    q: 'Do I need existing fencing?',
    a: 'No. We bring portable electric fencing sized to your parcel and move it as paddocks rotate. Your existing fencing is never relied on for herd containment.',
  },
]

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing"
        path="/pricing"
        description="Transparent pricing scoped to your land. Three deployment tiers plus the terrain, density, and access factors that shape every quote."
      />
      <section className="bg-cream border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            eyebrow="Investment"
            title="Transparent pricing, scoped to your land."
            lede="Grazing isn’t priced like a suburban lawn service. Every parcel is different — we quote after a site assessment, not before. The tiers below frame what a typical engagement looks like at each scale."
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <PricingTier key={t.name} {...t} />
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Deployment Variables"
            title="The calculus of your mitigation scope."
            lede="Three primary operational metrics dictate the final cost of your project. We define and map each variable alongside you during our initial geospatial site assessment to guarantee total pricing transparency."
            tone="forest"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-10 bg-cream text-slate p-10 md:p-12">
            {factors.map((f) => (
              <CostFactor key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions before a quote."
          />
          <div className="mt-10">
            <FAQ items={faq} />
          </div>
        </div>
      </section>
    </>
  )
}
