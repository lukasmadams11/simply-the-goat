import { Shield, Leaf, Heart, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Button from '../components/Button'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'

const pillars = [
  {
    icon: Shield,
    title: 'Defensible Space',
    body: 'Targeted fuel load reduction around homes, powerlines, and critical infrastructure — the exact perimeter fire departments and insurers look for.',
  },
  {
    icon: Leaf,
    title: 'Ecological Restoration',
    body: 'No sparks, no herbicides, no soil compaction. Our herds leave behind natural fertilizer and healthier native plant communities.',
  },
  {
    icon: Heart,
    title: 'Ethical Partnership',
    body: 'Our goats are partners, not tools. Low-stress handling and daily welfare checks are non-negotiable on every deployment.',
  },
]

const stats = [
  { value: '20yrs', label: 'Field Experience' },
  { value: '0', label: 'Sparks Generated' },
  { value: '0', label: 'Gallons of Fuel Burned' },
]

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        description="Simply the GOAT — professional wildfire mitigation through targeted goat grazing. Defensible space, ecological restoration, ethical herd care."
      />
      <Hero
        eyebrow="Wildfire Mitigation"
        headline={
          <>
            Nature&rsquo;s Solution
            <br className="hidden md:block" /> to a Modern Crisis.
          </>
        }
        sub="Professional wildfire mitigation through targeted, heartfelt grazing."
      >
        <Button to="/contact">
          Request a Deployment <ArrowRight size={16} />
        </Button>
        <Button to="/results" variant="secondary">
          See the Science
        </Button>
      </Hero>

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <SectionHeader
            align="center"
            eyebrow="Our Mission"
            title="Fire safety rooted in animal husbandry."
            lede="We partner with working herds to reduce wildfire risk on the landscapes where people live and work. Every acre we clear advances two goals at once — defensible space for our clients, and a dignified life for our animals."
          />
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Why Goats"
            title="Three pillars of responsible mitigation."
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

      <section className="bg-cream border-y border-forest/10">
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

      <section className="bg-cream">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-forest leading-tight">
            Is your property fire-ready?
          </h2>
          <p className="mt-5 font-sans text-lg text-slate max-w-2xl mx-auto">
            Tell us your acreage, vegetation, and terrain. We&rsquo;ll return a
            scoped deployment plan within two business days.
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
    </>
  )
}
