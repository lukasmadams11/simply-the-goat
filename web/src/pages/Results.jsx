import SectionHeader from '../components/SectionHeader'
import EcoImpactTracker from '../components/EcoImpactTracker'
import Seo from '../components/Seo'

export default function Results() {
  return (
    <>
      <Seo
        title="Results"
        path="/results"
        description="Measured wildfire mitigation through targeted goat grazing. Zero direct emissions, near-silent operations, and methodology aligned with CAL FIRE defensible-space guidance."
      />
      <section className="bg-cream border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            eyebrow="The Science"
            title="Measured outcomes, not marketing."
            lede="Every deployment is scoped with site analysis, tracked in-field, and verified with post-graze fuel-load checks. The figures below reflect our inaugural deployment; multi-season totals will follow as our portfolio grows."
          />
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

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="font-sans text-sm text-slate/70 leading-relaxed">
            <span className="font-semibold text-forest">Methodology.</span>{' '}
            Deployments are documented to standards aligned with CAL FIRE
            defensible-space guidance. Carbon comparisons reference EPA emission
            factors for equivalent gas-powered equipment hours. Fuel-load
            methodology will follow Brown&rsquo;s transect sampling as our
            portfolio scales.
          </p>
        </div>
      </section>
    </>
  )
}
