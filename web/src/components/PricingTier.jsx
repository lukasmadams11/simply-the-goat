import { Check } from 'lucide-react'
import Button from './Button'

export default function PricingTier({
  name,
  scope,
  typical,
  features,
  featured = false,
}) {
  const bg = featured ? 'bg-forest text-cream' : 'bg-cream text-slate'
  const eyebrow = featured ? 'text-ochre' : 'text-ochre'
  const title = featured ? 'text-cream' : 'text-forest'
  const body = featured ? 'text-cream/80' : 'text-slate/80'
  const border = featured ? 'border-forest' : 'border-forest/15'
  const divider = featured ? 'border-cream/15' : 'border-forest/10'

  return (
    <article
      className={`${bg} border ${border} p-8 flex flex-col ${
        featured ? 'md:-mt-4 md:mb-4' : ''
      }`}
    >
      <p
        className={`font-sans text-xs uppercase tracking-widest ${eyebrow}`}
      >
        {featured ? 'Most requested' : 'Tier'}
      </p>
      <h3 className={`mt-3 font-serif text-3xl ${title}`}>{name}</h3>
      <p className={`mt-3 font-sans text-sm ${body} leading-relaxed`}>
        {scope}
      </p>

      <div className={`mt-6 pt-6 border-t ${divider}`}>
        <p className={`font-sans text-xs uppercase tracking-widest ${eyebrow}`}>
          Typical engagement
        </p>
        <p className={`mt-2 font-serif text-2xl ${title}`}>{typical}</p>
      </div>

      <ul className={`mt-6 space-y-3 font-sans text-sm ${body}`}>
        {features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check
              size={18}
              className="shrink-0 mt-0.5 text-ochre"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Button to="/contact" variant={featured ? 'secondary' : 'primary'}>
          Request Quote
        </Button>
      </div>
    </article>
  )
}
