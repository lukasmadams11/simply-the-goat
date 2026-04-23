import { Wind, Volume2 } from 'lucide-react'

const metrics = [
  {
    icon: Wind,
    value: '14,200 lbs',
    label: 'Carbon Offset',
    sub: 'CO₂ equivalent avoided vs. gas-powered brush mowers over the last 12 months.',
  },
  {
    icon: Volume2,
    value: '92 dB → 45 dB',
    label: 'Noise Reduction',
    sub: 'Typical job-site ambient vs. chainsaw/mower crews — quiet enough for residential neighborhoods and livestock.',
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
            <p className="font-sans text-xs uppercase tracking-widest text-ochre">
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
