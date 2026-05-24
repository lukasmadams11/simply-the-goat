export default function Hero({ eyebrow, headline, sub, children }) {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-5">
              <span className="inline-block px-4 py-2 bg-cream/50 backdrop-blur-sm font-sans text-sm font-semibold uppercase tracking-widest text-ochre [text-shadow:0_1px_3px_rgba(254,250,224,0.95)] [-webkit-text-stroke:0.5px_rgba(0,0,0,0.45)] [paint-order:stroke_fill]">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-forest [text-shadow:0_2px_10px_rgba(254,250,224,0.95),0_0_4px_rgba(254,250,224,0.85)] [-webkit-text-stroke:1px_rgba(0,0,0,0.35)] [paint-order:stroke_fill]">
            {headline}
          </h1>
          {sub && (
            <p className="mt-6 font-sans text-lg md:text-2xl font-semibold leading-relaxed text-forest max-w-2xl [text-shadow:0_1px_4px_rgba(254,250,224,0.95)]">
              {sub}
            </p>
          )}
          {children && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
