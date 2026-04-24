import SectionHeader from '../components/SectionHeader'
import StatCard from '../components/StatCard'
import EcoImpactTracker from '../components/EcoImpactTracker'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import BrushPlotSVG from '../components/BrushPlotSVG'
import Seo from '../components/Seo'
import { before as beforePhoto, after as afterPhoto } from '../assets/images'

const BeforeVisual = beforePhoto ? (
  <img
    src={beforePhoto}
    alt="Parcel before goat grazing"
    className="w-full h-full object-cover"
  />
) : (
  <BrushPlotSVG state="before" className="w-full h-full" />
)

const AfterVisual = afterPhoto ? (
  <img
    src={afterPhoto}
    alt="Parcel after goat grazing"
    className="w-full h-full object-cover"
  />
) : (
  <BrushPlotSVG state="after" className="w-full h-full" />
)

const headlineStats = [
  {
    value: '1,240',
    label: 'Acres Managed',
    sub: 'Across residential perimeters, watersheds, and utility corridors.',
  },
  {
    value: '386 tons',
    label: 'Fuel Tons Removed',
    sub: 'Dry biomass converted into natural fertilizer — not smoke.',
  },
  {
    value: '+18%',
    label: 'Soil Health Index',
    sub: 'Average improvement in organic matter on treated parcels, year over year.',
  },
]

const caseStudies = [
  {
    client: 'Sonoma Ridge HOA',
    acres: 42,
    outcome:
      'Cleared a defensible-space perimeter around 38 homes ahead of peak fire season.',
  },
  {
    client: 'Mariposa Watershed District',
    acres: 210,
    outcome:
      'Reduced ladder fuels along 3.2 miles of a critical municipal water supply corridor.',
  },
  {
    client: 'Foothill Vineyards',
    acres: 67,
    outcome:
      'Mitigated fire risk on slopes too steep for mechanical crews — zero soil disturbance.',
  },
]

export default function Results() {
  return (
    <>
      <Seo
        title="Results"
        path="/results"
        description="Measured wildfire mitigation outcomes: 1,240 acres managed, 386 tons of fuel removed, +18% soil health. Verified with Brown's transect sampling and fuel-load assessments."
      />
      <section className="bg-cream border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            eyebrow="The Science"
            title="Measured outcomes, not marketing."
            lede="Every deployment is scoped with GIS imagery, tracked in-field, and verified with post-graze fuel load assessments. The numbers below are rolling 12-month totals."
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-4">
          {headlineStats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Eco-Impact Tracker"
            title="What you avoid matters as much as what you clear."
            lede="Mechanical mitigation burns fuel, emits carbon, and saturates neighborhoods with noise. Goat grazing does none of that."
            tone="forest"
          />
          <div className="mt-12">
            <EcoImpactTracker />
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Case Study"
            title="Sonoma Ridge — 42 acres, 14 days."
            lede="Drag the slider to see the change. Overgrown chaparral converted to a defensible perimeter without a single spark."
          />
          <div className="mt-10">
            <BeforeAfterSlider
              before={BeforeVisual}
              after={AfterVisual}
              caption="Representative rendering — real client photography coming in 2026."
            />
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Case Studies"
            title="A portfolio of defensible space."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {caseStudies.map(({ client, acres, outcome }) => (
              <article
                key={client}
                className="bg-cream border border-forest/10 p-8 flex flex-col"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                  {acres} acres
                </p>
                <h3 className="mt-3 font-serif text-2xl text-forest">
                  {client}
                </h3>
                <p className="mt-4 font-sans text-slate/80 leading-relaxed">
                  {outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="font-sans text-sm text-slate/70 leading-relaxed">
            <span className="font-semibold text-forest">Methodology.</span>{' '}
            Fuel load is measured pre- and post-graze using standard Brown&rsquo;s
            transect sampling. Soil health index is derived from organic-matter
            assays across three random 1m² plots per parcel. Carbon figures
            assume EPA emission factors for equivalent gas-mower hours displaced.
          </p>
        </div>
      </section>
    </>
  )
}
