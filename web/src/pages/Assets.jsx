import { Image as ImageIcon, Film, CheckCircle2, Circle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { assetSlots } from '../assets/images'

function StatusPill({ filled }) {
  return filled ? (
    <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-forest">
      <CheckCircle2 size={14} />
      Filled
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
      <Circle size={14} />
      Empty — using placeholder
    </span>
  )
}

function MediaPreview({ slot }) {
  if (slot.video) {
    return (
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={slot.image || undefined}
      >
        <source
          src={slot.video.src}
          type={`video/${slot.video.ext === 'mov' ? 'quicktime' : slot.video.ext}`}
        />
      </video>
    )
  }
  if (slot.image) {
    return (
      <img
        src={slot.image}
        alt={slot.label}
        className="w-full h-full object-cover"
      />
    )
  }
  return (
    <div className="w-full h-full bg-forest/5 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-forest/40">
          Drop zone
        </p>
        <p className="mt-2 font-serif text-xl text-forest/60">
          {slot.filenames[0]}
        </p>
      </div>
    </div>
  )
}

export default function Assets() {
  const filledCount = assetSlots.filter((s) => s.image || s.video).length

  return (
    <div className="bg-cream">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeader
          eyebrow="Asset drop zone"
          title="Where each file lands on the site"
          lede="Drop a file with one of the exact names below into web/src/assets/images/ and it will appear automatically. This page is a private map — it isn't linked from the public navigation."
        />

        <div className="mt-10 inline-flex items-center gap-3 bg-forest text-cream font-sans text-sm px-5 py-3">
          <span className="font-semibold">{filledCount}</span>
          <span className="opacity-80">of</span>
          <span className="font-semibold">{assetSlots.length}</span>
          <span className="opacity-80">slots filled</span>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {assetSlots.map((slot) => {
            const filled = Boolean(slot.image || slot.video)
            const isVideoSlot = slot.accepts.includes('video')
            const Icon = isVideoSlot && !slot.image ? Film : ImageIcon

            return (
              <article
                key={slot.key}
                className="bg-cream border border-forest/15 overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] w-full bg-forest/5 relative">
                  <MediaPreview slot={slot} />
                  <div className="absolute top-3 left-3 bg-cream/95 px-2.5 py-1 inline-flex items-center gap-1.5">
                    <Icon size={12} className="text-forest" />
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-forest">
                      {slot.accepts.join(' / ')}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-ochre">
                        {slot.page}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl text-forest">
                        {slot.label}
                      </h3>
                    </div>
                    <StatusPill filled={filled} />
                  </div>

                  <dl className="mt-5 space-y-3 text-sm font-sans text-slate/80">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-forest/60">
                        Filename
                      </dt>
                      <dd className="mt-1 flex flex-wrap gap-2">
                        {slot.filenames.map((fn) => (
                          <code
                            key={fn}
                            className="bg-forest/10 text-forest px-2 py-0.5 text-xs"
                          >
                            {fn}
                          </code>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-forest/60">
                        Recommended
                      </dt>
                      <dd className="mt-1 leading-relaxed">{slot.recommended}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-16 bg-forest text-cream p-8 md:p-10">
          <h3 className="font-serif text-2xl">How to drop a file</h3>
          <ol className="mt-5 space-y-3 font-sans text-sm leading-relaxed text-cream/85 list-decimal list-inside">
            <li>
              Open <code className="bg-cream/10 px-1.5 py-0.5">web/src/assets/images/</code> in your file explorer.
            </li>
            <li>
              Drop a file with one of the exact filenames shown on the cards above (case doesn't matter).
            </li>
            <li>
              The dev server hot-reloads — refresh this page and the slot flips to "Filled".
            </li>
            <li>
              To replace a file, just drop a new one with the same name. To revert to the placeholder, delete the file.
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
