export default function CostFactor({ icon: Icon, title, body }) {
  return (
    <article className="flex gap-5">
      <div className="shrink-0 w-12 h-12 rounded-full bg-forest/5 text-ochre flex items-center justify-center">
        <Icon size={22} aria-hidden="true" />
      </div>
      <div>
        <h3 className="font-serif text-xl text-forest">{title}</h3>
        <p className="mt-2 font-sans text-sm text-slate/80 leading-relaxed">
          {body}
        </p>
      </div>
    </article>
  )
}
