export default function StatCard({ value, label, sub, tone = 'cream' }) {
  const bg = tone === 'forest' ? 'bg-forest' : 'bg-cream'
  const valueColor = tone === 'forest' ? 'text-cream' : 'text-forest'
  const labelColor =
    tone === 'forest' ? 'text-ochre' : 'text-ochre'
  const subColor =
    tone === 'forest' ? 'text-cream/70' : 'text-slate/70'
  const border =
    tone === 'forest' ? 'border-cream/10' : 'border-forest/10'

  return (
    <article
      className={`${bg} border ${border} px-8 py-10 flex flex-col`}
    >
      <p className={`font-sans text-xs font-semibold uppercase tracking-widest ${labelColor}`}>
        {label}
      </p>
      <p
        className={`mt-4 font-serif text-5xl md:text-6xl leading-none ${valueColor}`}
      >
        {value}
      </p>
      {sub && (
        <p className={`mt-4 font-sans text-sm ${subColor} leading-relaxed`}>
          {sub}
        </p>
      )}
    </article>
  )
}
