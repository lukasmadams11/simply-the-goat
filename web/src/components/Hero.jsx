import HillsideSVG from './HillsideSVG'
import { hero as heroPhoto } from '../assets/images'

export default function Hero({ eyebrow, headline, sub, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {heroPhoto ? (
          <img
            src={heroPhoto}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <HillsideSVG className="w-full h-full" />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-ochre mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-forest">
            {headline}
          </h1>
          {sub && (
            <p className="mt-6 font-sans text-lg md:text-xl leading-relaxed text-slate max-w-2xl">
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
