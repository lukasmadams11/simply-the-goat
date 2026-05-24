export default function SectionHeader({
  eyebrow,
  title,
  lede,
  align = 'left',
  tone = 'cream',
}) {
  const alignment =
    align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = tone === 'forest' ? 'text-cream' : 'text-forest'
  const ledeColor = tone === 'forest' ? 'text-cream/80' : 'text-slate/80'

  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow && (
        <p className="font-sans text-sm font-semibold uppercase tracking-widest text-ochre mb-4 [text-shadow:0_1px_3px_rgba(254,250,224,0.95)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.45)] [paint-order:stroke_fill]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-4xl md:text-5xl leading-tight ${titleColor}`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 font-sans text-lg leading-relaxed ${ledeColor}`}>
          {lede}
        </p>
      )}
    </div>
  )
}
