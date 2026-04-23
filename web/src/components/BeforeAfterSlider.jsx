import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
}) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = Math.max(
      0,
      Math.min(100, ((clientX - rect.left) / rect.width) * 100)
    )
    setPos(pct)
  }

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const endDrag = (e) => {
    dragging.current = false
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPos((p) => Math.max(0, p - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPos((p) => Math.min(100, p + 5))
    }
  }

  return (
    <figure className="space-y-3">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="relative aspect-[16/9] w-full overflow-hidden select-none cursor-ew-resize bg-forest/5 border border-forest/10"
      >
        <div className="absolute inset-0">{before}</div>
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          {after}
        </div>

        <span className="absolute top-3 left-3 bg-forest/85 text-cream font-sans text-[10px] font-semibold uppercase tracking-widest px-2 py-1">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 bg-ochre text-cream font-sans text-[10px] font-semibold uppercase tracking-widest px-2 py-1">
          {afterLabel}
        </span>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-cream"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <button
            type="button"
            role="slider"
            aria-label="Reveal before and after"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            onKeyDown={onKeyDown}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream border-2 border-ochre flex items-center justify-center text-ochre focus:outline-none focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            <ChevronLeft size={14} />
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      {caption && (
        <figcaption className="font-sans text-sm text-slate/70">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
