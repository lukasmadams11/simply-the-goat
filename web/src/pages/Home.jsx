import { Shield, Leaf, Heart, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'
import HillsideSVG from '../components/HillsideSVG'
import { hero as heroPhoto, heroVideo, heroVideoAv1 } from '../assets/images'

const pillars = [
  {
    icon: Shield,
    title: 'Engineered Defensible Space',
    body: 'We execute precision fuel load reduction surrounding residential zones, utility corridors, and critical infrastructure. Our targeted mitigation establishes the exact defensible footprint mandated by fire authorities and required by insurance underwriters.',
  },
  {
    icon: Leaf,
    title: 'Regenerative Fuel Reduction',
    body: 'We secure the perimeter without degrading the ecosystem. By eliminating the spark hazards, chemical runoff, and severe soil compaction associated with heavy machinery, our deployments actively rehabilitate the terrain. Our herds leave behind micro-aerated topsoil and nutrient-rich organic deposits, engineering a more resilient native landscape.',
  },
  {
    icon: Heart,
    title: 'Systematic Animal Welfare',
    body: 'We view our herd as active operational partners, not expendable assets. Low-stress handling protocols and rigorous daily welfare monitoring are strictly enforced across every deployment.',
  },
]

const stats = [
  { value: '5yrs', label: 'Field Experience' },
  { value: '50%', label: 'Fuel Load Reduction' },
  { value: '0', label: 'Gallons of Fuel Burned' },
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Simply the GOAT — professional wildfire mitigation through targeted goat grazing. Defensible space, ecological restoration, ethical herd care."
      />

      {/* Page-wide fixed video backdrop. Stays put while content scrolls. */}
      <div
        aria-hidden="true"
        className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {heroVideo || heroVideoAv1 ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={heroPhoto || undefined}
          >
            {/* AV1/WebM first (smaller); browsers that can't decode it fall back to H.264. */}
            {heroVideoAv1 && <source src={heroVideoAv1.src} type="video/webm" />}
            {heroVideo && (
              <source
                src={heroVideo.src}
                type={`video/${heroVideo.ext === 'mov' ? 'quicktime' : heroVideo.ext}`}
              />
            )}
          </video>
        ) : heroPhoto ? (
          <img src={heroPhoto} alt="" className="w-full h-full object-cover" />
        ) : (
          <HillsideSVG className="w-full h-full" />
        )}
        {/* Subtle global cream wash so text in every section stays readable. */}
        <div className="absolute inset-0 bg-cream/25" />
      </div>

      {/* All content sits above the fixed backdrop. */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Hero
          eyebrow="Wildfire Mitigation & Ecosystem Restoration"
          headline={
            <>
              Nature&rsquo;s Solution
              <br className="hidden md:block" /> to a Modern Crisis.
            </>
          }
          sub="Professional wildfire mitigation through targeted, heartfelt grazing."
        >
          <Button to="/contact">
            Request a Consultation <ArrowRight size={16} />
          </Button>
          <Button
            href="https://www.facebook.com/reel/814240840109080/?mibextid=ZZyLBr"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            See the Science
          </Button>
        </Hero>

        <section className="bg-cream/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <SectionHeader
              align="center"
              eyebrow="Our Mission"
              title="Fire safety rooted in animal husbandry."
              lede="We deploy biological mitigation units to systematically engineer defensible space across high-risk, inaccessible terrains. Every acre we manage achieves a strict dual mandate: uncompromising fire defense for our communities and the highest standard of ethical welfare for our working herd."
            />
          </div>
        </section>

        <section className="bg-forest/90 backdrop-blur-sm text-cream">
          <div className="max-w-6xl mx-auto px-6 py-24">
            <SectionHeader
              eyebrow="Operational Framework"
              title="The architecture of engineered mitigation."
              tone="forest"
            />
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, body }) => (
                <article key={title} className="flex flex-col">
                  <Icon size={32} className="text-ochre" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl text-cream">
                    {title}
                  </h3>
                  <p className="mt-3 font-sans text-cream/80 leading-relaxed">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream/85 backdrop-blur-sm border-y border-forest/10">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-5xl md:text-6xl text-forest">
                  {value}
                </p>
                <p className="mt-3 font-sans text-sm font-semibold uppercase tracking-widest text-slate/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-cream/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
              Secure Your Defensible Space.
            </h2>
            <p className="mt-5 font-sans text-lg text-slate max-w-2xl mx-auto">
              Submit your parcel parameters &mdash; including acreage, primary fuel
              load, and topographical grade. Our team will engineer a precise,
              GIS-backed deployment scope tailored to your property. Response
              times vary with active field deployments &mdash; we follow up as
              soon as our crews are off the hillside.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact">
                Start an Assessment <ArrowRight size={16} />
              </Button>
              <Button to="/pricing" variant="secondary">
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
