import { Plus } from 'lucide-react'

export default function FAQ({ items }) {
  return (
    <div className="divide-y divide-forest/10 border-y border-forest/10">
      {items.map(({ q, a }) => (
        <details key={q} className="group py-5 px-1">
          <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
            <span className="font-serif text-lg text-forest">{q}</span>
            <Plus
              size={20}
              className="shrink-0 text-ochre transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 font-sans text-slate/80 leading-relaxed">{a}</p>
        </details>
      ))}
    </div>
  )
}
