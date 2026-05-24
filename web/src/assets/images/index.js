// Auto-detects image and video files dropped into this folder.
// Drop a file named e.g. "hero.jpg" or "archery-before.jpg" and it gets picked
// up automatically — no code edits needed. If a slot's file isn't here, the
// site falls back to a placeholder or hides the photo gracefully.

const imageModules = import.meta.glob(
  './*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' }
)

const videoModules = import.meta.glob(
  './*.{mp4,webm,mov,m4v,MP4,WEBM,MOV,M4V}',
  { eager: true, import: 'default' }
)

const IMAGE_EXTS = [
  'jpg', 'jpeg', 'png', 'webp', 'avif',
  'JPG', 'JPEG', 'PNG', 'WEBP', 'AVIF',
]

const VIDEO_EXTS = [
  'mp4', 'webm', 'mov', 'm4v',
  'MP4', 'WEBM', 'MOV', 'M4V',
]

function findImage(basename) {
  for (const ext of IMAGE_EXTS) {
    const key = `./${basename}.${ext}`
    if (imageModules[key]) return imageModules[key]
  }
  return null
}

function findVideo(basename) {
  for (const ext of VIDEO_EXTS) {
    const key = `./${basename}.${ext}`
    if (videoModules[key]) return { src: videoModules[key], ext: ext.toLowerCase() }
  }
  return null
}

// ---- Image slots ---------------------------------------------------------
// Home hero background still photo (used as poster if a hero video is present)
export const hero = findImage('hero')

// Madera Archery Range — Results page "Recent Project" card.
// Drop both to enable the drag-to-reveal before/after slider; drop only one
// to show it as a single image.
export const archeryBefore = findImage('archery-before')
export const archeryAfter = findImage('archery-after')

// ---- Video slots ---------------------------------------------------------
// Home hero background video (overrides hero image when present)
export const heroVideo = findVideo('hero')

// ---- Manifest used by the /assets preview page ---------------------------
// Every drop slot the site knows about, with where it appears.
export const assetSlots = [
  {
    key: 'hero',
    label: 'Home hero background',
    page: 'Home — top hero',
    accepts: ['image', 'video'],
    filenames: ['hero.mp4', 'hero.jpg'],
    recommended: 'Compressed looping video (≤ 10 MB, ~10s, muted, H.264). Drop a hero.jpg too — it shows as the still poster on slow connections and on devices that block autoplay.',
    image: hero,
    video: heroVideo,
  },
  {
    key: 'archery-before',
    label: 'Madera Archery Range — BEFORE',
    page: 'Results — Recent Project card (before)',
    accepts: ['image'],
    filenames: ['archery-before.jpg'],
    recommended: '≥ 1200×800, landscape (16:9). Same framing as the after photo so the slider lines up cleanly.',
    image: archeryBefore,
  },
  {
    key: 'archery-after',
    label: 'Madera Archery Range — AFTER',
    page: 'Results — Recent Project card (after)',
    accepts: ['image'],
    filenames: ['archery-after.jpg'],
    recommended: '≥ 1200×800, landscape (16:9). Same framing as the before photo so the slider lines up cleanly.',
    image: archeryAfter,
  },
]
