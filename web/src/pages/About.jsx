import { Flame, Heart, Check, X, Video } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'

const comparison = [
  { trait: 'Ignition risk (sparks, hot exhaust)', goats: false, mowers: true },
  { trait: 'Herbicide or fuel runoff', goats: false, mowers: true },
  { trait: 'Soil compaction on slopes', goats: false, mowers: true },
  { trait: 'Leaves natural fertilizer behind', goats: true, mowers: false },
  { trait: 'Handles terrain >30° grade', goats: true, mowers: false },
  { trait: 'Noise over 85 dB', goats: false, mowers: true },
]

const team = [
  {
    name: 'Jim Guggenhime',
    role: 'Founder & Director of Operations',
    body: `Jim brings a wealth of hands-on wildland management experience to the field, having built his career protecting some of Colorado's most valued landscapes. With deep roots in the Front Range, Jim has spearheaded complex mitigation projects for high-profile institutions, including securing the campus perimeters at the University of Colorado Boulder and the Boulder Researchers Center. His expertise in biological land management has been trusted by civic organizations like Boulder Parks and Recreation and Colorado Highway Services to manage large-scale civic fuel reduction. Beyond his institutional work, Jim is deeply dedicated to safeguarding private Boulder homes — a commitment to community safety that has earned his methods recognition in several regional magazines.`,
  },
  {
    name: 'Ethan Wenter',
    role: 'Animal Whisperer',
    body: `Serving as our "eagle in the sky," Ethan maintains continuous, round-the-clock overwatch of our deployments. With deep intuition and a watchful eye, he monitors the herd closely day and night to ensure their safety and operational success.`,
  },
  {
    name: 'Ryan Bartusek',
    role: 'sUAS Data Collector',
    body: `Ryan architects the aerial intelligence network that drives our deployments. Operating between our hubs in the Colorado Front Range and the Sierra Nevada foothills, he specializes in Drone-in-a-Box (DiaB) operations, geospatial analysis, and custom Python-driven AI modeling. By processing real-time LiDAR and photogrammetry, Ryan ensures our biological mitigation units are deployed with exact, mathematically verified precision.`,
  },
  {
    name: 'Luke Adams',
    role: 'sUAS Data Collector & Biological Operations Lead',
    body: `Luke bridges the critical gap between aerial telemetry and ground-level execution. While he engineers the same advanced drone mapping and geospatial modeling as the rest of the sUAS team, Luke's expertise extends directly into the herd. He serves as our hands-on tactical liaison, ensuring our biological mitigation units move in perfect synchronization with our topographic data.`,
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="A fire-safety company that happens to raise goats. Meet the team behind Simply the GOAT's wildfire mitigation deployments."
      />
      <section className="bg-cream border-b border-forest/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            eyebrow="About"
            title="A fire-safety company that happens to raise goats."
            lede="Simply the GOAT was founded on a simple observation: the landscapes most at risk from wildfire are the ones mechanical crews struggle to reach. Our herds don’t."
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <article>
            <Flame size={32} className="text-ochre" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-3xl text-forest">
              Serious wildfire prevention.
            </h2>
            <p className="mt-5 font-sans text-slate/80 leading-relaxed">
              We treat defensible space as an engineering problem. Every
              deployment begins with parcel-level fuel modeling, slope analysis,
              and a written scope. No improvisation, no shortcuts — the terrain
              doesn&rsquo;t forgive either.
            </p>
          </article>
          <article>
            <Heart size={32} className="text-ochre" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-3xl text-forest">
              Ethical herd care.
            </h2>
            <p className="mt-5 font-sans text-slate/80 leading-relaxed">
              The goats are partners, not equipment. They graze the plants they
              choose to graze, rest when they need to rest, and return to
              pasture after every job. A licensed veterinarian oversees their
              welfare year-round.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Goats vs. Mowers"
            title="Why the herd beats the machine."
            tone="forest"
          />
          <div className="mt-12 border border-cream/15">
            <div className="grid grid-cols-[1fr_auto_auto] font-sans text-xs font-semibold uppercase tracking-widest bg-cream/5">
              <div className="px-5 py-4 text-cream/70">Trait</div>
              <div className="px-5 py-4 text-center text-ochre">Goats</div>
              <div className="px-5 py-4 text-center text-cream/60">Mowers</div>
            </div>
            {comparison.map(({ trait, goats, mowers }, i) => (
              <div
                key={trait}
                className={`grid grid-cols-[1fr_auto_auto] items-center font-sans text-sm ${
                  i !== 0 ? 'border-t border-cream/10' : ''
                }`}
              >
                <div className="px-5 py-4 text-cream/90">{trait}</div>
                <div className="px-5 py-4 text-center">
                  <Cell ok={goats} good={goats} />
                </div>
                <div className="px-5 py-4 text-center">
                  <Cell ok={mowers} good={!mowers} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="The Team"
            title="People who answer the phone."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {team.map((m) => (
              <article
                key={m.name}
                className="bg-cream border border-forest/10 p-8"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                  {m.role}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-forest">
                  {m.name}
                </h3>
                <p className="mt-4 font-sans text-slate/80 leading-relaxed">
                  {m.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream border-t border-forest/10">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="border border-forest/15 p-10 text-center flex flex-col items-center">
            <Video size={28} className="text-ochre" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-2xl text-forest">
              Goat Cam — coming 2026.
            </h3>
            <p className="mt-3 font-sans text-slate/70 max-w-xl leading-relaxed">
              We&rsquo;re wiring up a live pasture feed so clients and neighbors
              can check in on the herd between deployments. Back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function Cell({ ok, good }) {
  const Icon = ok ? Check : X
  const color = good ? 'text-ochre' : 'text-cream/40'
  return (
    <span className={`inline-flex ${color}`}>
      <Icon size={18} aria-hidden="true" />
      <span className="sr-only">{ok ? 'Yes' : 'No'}</span>
    </span>
  )
}
