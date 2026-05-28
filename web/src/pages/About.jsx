import { ArrowUpRight, Flame, Heart, Video } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import Seo from '../components/Seo'

const comparison = [
  {
    trait: 'Ignition Risk',
    goats: '0% — Zero spark or exhaust hazard',
    mowers: 'High — Blade-on-rock sparks, hot exhaust on dry brush',
  },
  {
    trait: 'Environmental Runoff',
    goats: 'Zero chemical footprint',
    mowers: 'High risk — petrochemical leaks, VOC emissions',
  },
  {
    trait: 'Soil Impact on Slopes',
    goats: 'Micro-aeration — hoof action promotes soil health',
    mowers: 'Severe compaction — rutting and topsoil displacement',
  },
  {
    trait: 'Post-Clearing Byproduct',
    goats: 'Organic fertilizer — deposits nutrient-rich matter',
    mowers: 'Dry thatch — leaves dead plant material, acting as future fuel',
  },
  {
    trait: 'Topographical Limits',
    goats: '60°+ grade — safe access to near-vertical inclines',
    mowers: '<20° grade — severe rollover risk on steep terrain',
  },
  {
    trait: 'Acoustic Output',
    goats: 'Ambient (<60 dB) — no neighborhood disruption',
    mowers: 'Hazardous (90–105 dB) — requires hearing PPE, highly disruptive',
  },
]

const founder = {
  name: 'Jim Guggenhime',
  role: 'Founder & Director of Operations',
  body: `Jim is a California native who brings a wealth of hands-on experience in targeted goat grazing for fire mitigation, brush clearing, and weed management. His dedication to sustainable land management began while teaching in East Africa, where he observed how hardy goats naturally cleared dense overgrowth, inspiring a lifelong mission to deploy their grazing instincts as a powerful tool for community wildfire resilience. Following his time abroad, Jim graduated from the University of Colorado and launched his first goat grazing business near his alma mater in 2002. He went on to spearhead complex hazardous fuel reduction and targeted weed management projects for private landowners, high-profile institutions like University of Colorado Boulder, and public agencies including Colorado Highway Services and Boulder Parks and Recreation. His environmentally conscious approach to vegetation management and fire prevention earned him recognition in major publications, including the LA Times. After pausing his grazing career to raise his family in Colorado, Jim watched California's escalating wildfire crisis from afar and knew it was time to return. He is now back in his home state with a clear mission: to help fortify communities against the devastating threat of wildfire by deploying traditional grazing practices and modern land-management technologies across California's vulnerable landscapes.`,
}

const team = [
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
            eyebrow="Our Mission"
            title="A wildfire mitigation firm that happens to employ goats."
            lede="Simply the GOAT was founded to solve a critical logistical failure in land management: the complex, high-risk terrains most vulnerable to wildfire are often completely inaccessible to heavy machinery. Our herds secure the zones that mechanical crews can't reach."
          />
        </div>
      </section>

      <section className="bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12">
          <article>
            <Flame size={32} className="text-ochre" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-3xl text-forest">
              Precision Wildfire Mitigation
            </h2>
            <p className="mt-5 font-sans text-slate/80 leading-relaxed">
              We approach defensible space not as a landscaping task, but as a
              critical engineering challenge. Every deployment is strictly
              driven by data, beginning with comprehensive parcel-level fuel
              modeling, topographical slope analysis, and a rigidly defined
              scope of work. In the face of unpredictable fire behavior, we
              leave zero room for improvisation or shortcuts.
            </p>
          </article>
          <article>
            <Heart size={32} className="text-ochre" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-3xl text-forest">
              Partners in Mitigation: Our Ethical Commitment
            </h2>
            <p className="mt-5 font-sans text-slate/80 leading-relaxed">
              Our goats are the heartbeat of our operation &mdash; valued
              partners, not mere equipment. We honor their natural instincts by
              allowing them to selectively forage, dictate their own rest
              periods, and seamlessly transition back to open pasture after
              every project. Our commitment to their health, autonomy, and
              welfare is uncompromising.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-forest text-cream">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="Goats vs. Mowers"
            title="Equipment vs. ecosystem — a specification comparison."
            tone="forest"
          />
          <div className="mt-12 border border-cream/15">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] font-sans text-xs font-semibold uppercase tracking-widest bg-cream/5">
              <div className="px-5 py-4 text-cream/70">Mitigation Parameter</div>
              <div className="px-5 py-4 text-ochre border-t md:border-t-0 md:border-l border-cream/10">
                Targeted Grazing (The Herd)
              </div>
              <div className="px-5 py-4 text-cream/60 border-t md:border-t-0 md:border-l border-cream/10">
                Mechanical Mowing (Heavy Machinery)
              </div>
            </div>
            {comparison.map(({ trait, goats, mowers }) => (
              <div
                key={trait}
                className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1.4fr] font-sans text-sm border-t border-cream/10"
              >
                <div className="px-5 py-4 font-semibold text-cream/90">
                  {trait}
                </div>
                <div className="px-5 py-4 text-cream/85 leading-relaxed border-t md:border-t-0 md:border-l border-cream/10">
                  {goats}
                </div>
                <div className="px-5 py-4 text-cream/60 leading-relaxed border-t md:border-t-0 md:border-l border-cream/10">
                  {mowers}
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
          <article className="mt-12 bg-cream border border-forest/15 p-8 md:p-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
              {founder.role}
            </p>
            <h3 className="mt-2 font-serif text-3xl text-forest">
              {founder.name}
            </h3>
            <p className="mt-4 font-sans text-slate/80 leading-relaxed">
              {founder.body}
            </p>
            <a
              href="https://www.latimes.com/archives/la-xpm-2003-jul-20-na-goats20-story.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-forest hover:text-ochre transition-colors"
            >
              Read the LA&nbsp;Times feature
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </article>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
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

