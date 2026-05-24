import SectionHeader from '../components/SectionHeader'
import EcoImpactTracker from '../components/EcoImpactTracker'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import Seo from '../components/Seo'
import { archeryBefore, archeryAfter, galleryPairs } from '../assets/images'

const filledGalleryPairs = galleryPairs.filter((p) => p.before && p.after)

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
            eyebrow="Operational Telemetry"
            title="Empirical outcomes. Uncompromising verification."
            lede="We map with advanced GIS, execute with precision, and verify every deployment with rigorous post-mitigation fuel load analysis. The data below represents our rolling 12-month operational metrics."
          />
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Environmental Telemetry"
            title="Precision clearing with zero ecological compromise."
            lede="Traditional mechanical operations rely on fossil fuels, generate heavy emissions, and introduce severe acoustic disruption. Our biological brush management achieves superior fuel reduction with none of the toxic byproducts."
            tone="forest"
          />
          <div className="mt-12">
            <EcoImpactTracker />
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Recent Project"
            title="Madera Archery Range."
          />
          <div className="mt-12 max-w-2xl mx-auto">
            <article className="bg-cream border border-forest/10 overflow-hidden flex flex-col">
              {archeryBefore && archeryAfter ? (
                <BeforeAfterSlider
                  before={
                    <img
                      src={archeryBefore}
                      alt="Madera Archery Range — before clearing"
                      className="w-full h-full object-cover"
                    />
                  }
                  after={
                    <img
                      src={archeryAfter}
                      alt="Madera Archery Range — after clearing"
                      className="w-full h-full object-cover"
                    />
                  }
                />
              ) : (archeryBefore || archeryAfter) ? (
                <div className="aspect-video bg-forest/5 overflow-hidden">
                  <img
                    src={archeryBefore || archeryAfter}
                    alt="Madera Archery Range — cleared parcel"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
              <div className="p-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                  40 acres
                </p>
                <h3 className="mt-3 font-serif text-2xl text-forest">
                  Madera Archery Range
                </h3>
                <p className="mt-4 font-sans text-slate/80 leading-relaxed">
                  When we rolled up to the Madera Archery Range to tackle 40
                  acres of steep, rocky hills, we knew right away that heavy
                  machinery wasn&rsquo;t going to cut it. The property was just
                  walled in by thick brush, with patches of poison oak waiting
                  down in the riverbeds. Where a tractor would have easily
                  rolled over, our herd took one look at those crazy slopes
                  and saw an all-you-can-eat buffet. They spent the job
                  scrambling up the hillsides, standing on their hind legs to
                  munch down the fire fuels and completely open up the
                  overgrown shooting lanes. It was incredible watching them
                  turn a serious wildfire hazard into a clean, safe range
                  without tearing up a single inch of topsoil. Sometimes the
                  best way to handle wild country is to let Simply the GOAT do
                  what they do best.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {filledGalleryPairs.length > 0 && (
        <section className="bg-cream border-t border-forest/10">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
            <SectionHeader
              eyebrow="Field Gallery"
              title="Before and after."
              lede="A sample of recent deployments. Drag the slider on each image to reveal the transformation."
            />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {filledGalleryPairs.map((pair) => (
                <BeforeAfterSlider
                  key={pair.id}
                  before={
                    <img
                      src={pair.before}
                      alt="Before clearing"
                      className="w-full h-full object-cover"
                    />
                  }
                  after={
                    <img
                      src={pair.after}
                      alt="After clearing"
                      className="w-full h-full object-cover"
                    />
                  }
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="font-sans text-sm text-slate/70 leading-relaxed">
            <span className="font-semibold text-forest">Methodology.</span>{' '}
            Fuel load reduction is verified pre- and post-deployment utilizing
            standardized Brown&rsquo;s transect sampling. Soil vitality is
            quantified via targeted organic-matter assays across randomized 1m²
            parcel matrices. Carbon abatement metrics are calculated using
            baseline EPA emission factors for equivalent displaced petrochemical
            machinery.
          </p>
        </div>
      </section>
    </>
  )
}
