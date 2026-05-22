import { Wind, Volume2 } from 'lucide-react'

const metrics = [
  {
    icon: Wind,
    value: 'Zero direct emissions',
    label: 'Carbon Offset',
    sub: 'Gas-powered brush mowers and chainsaws emit roughly 20 lbs of CO₂ per equipment-hour (EPA non-road gasoline emission factors). Our herds emit none.',
  },
  {
    icon: Volume2,
    value: '45 dB (down from 92 dB)',
    label: 'Acoustic Profile',
    sub: 'We replace the hazardous 92+ dB output of heavy chainsaws and mowers with a conversational 45 dB ambient baseline. Whisper-quiet mitigation that ensures zero disruption to dense residential zones, local wildlife, and community well-being.',
  },
]

export default function EcoImpactTracker() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {metrics.map(({ icon: Icon, value, label, sub }) => (
        <article
          key={label}
          className="bg-cream border border-forest/10 p-8 flex gap-6"
        >
          <div className="shrink-0 w-12 h-12 rounded-full bg-forest/5 text-ochre flex items-center justify-center">
            <Icon size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
              {label}
            </p>
            <p className="mt-2 font-serif text-3xl text-forest leading-tight">
              {value}
            </p>
            <p className="mt-3 font-sans text-sm text-slate/80 leading-relaxed">
              {sub}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
