// Auto-detects image and video files dropped into this folder.
// Drop a file named e.g. "hero.jpg" or "hero.mp4" and it gets picked up
// automatically — no code edits needed. If a slot's file isn't here, the
// site falls back to the generated SVG placeholder.

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

// Featured before/after slider on the Results page (each ~16:9)
export const before = findImage('before')
export const after = findImage('after')

// Three goat portraits on the About page (1:1 square recommended)
export const goat1 = findImage('goat-1')
export const goat2 = findImage('goat-2')
export const goat3 = findImage('goat-3')

// ---- Video slots ---------------------------------------------------------
// Home hero background video (overrides hero image when present)
export const heroVideo = findVideo('hero')

// About-page "Goat Cam" placeholder slot — drop goat-cam.mp4 to fill it
export const goatCam = findVideo('goat-cam')

// ---- Manifest used by the /assets preview page ---------------------------
// Every drop slot the site knows about, with where it appears.
export const assetSlots = [
  {
    key: 'hero',
    label: 'Home hero background',
    page: 'Home — top hero',
    accepts: ['image', 'video'],
    filenames: ['hero.jpg', 'hero.mp4', 'hero.webm'],
    recommended: '≥ 1920×1080, landscape (16:9 or wider). Video: ≤ 10 MB, muted, ~10s loop.',
    image: hero,
    video: heroVideo,
  },
  {
    key: 'before',
    label: 'Before/after — "before" frame',
    page: 'Results — comparison slider',
    accepts: ['image'],
    filenames: ['before.jpg'],
    recommended: '≥ 1600×900 (16:9). Same framing as after.',
    image: before,
  },
  {
    key: 'after',
    label: 'Before/after — "after" frame',
    page: 'Results — comparison slider',
    accepts: ['image'],
    filenames: ['after.jpg'],
    recommended: '≥ 1600×900 (16:9). Same framing as before.',
    image: after,
  },
  {
    key: 'goat-1',
    label: 'Goat portrait — Juniper',
    page: 'About — herd grid',
    accepts: ['image'],
    filenames: ['goat-1.jpg'],
    recommended: '≥ 800×800, square crop.',
    image: goat1,
  },
  {
    key: 'goat-2',
    label: 'Goat portrait — Atlas',
    page: 'About — herd grid',
    accepts: ['image'],
    filenames: ['goat-2.jpg'],
    recommended: '≥ 800×800, square crop.',
    image: goat2,
  },
  {
    key: 'goat-3',
    label: 'Goat portrait — Sable',
    page: 'About — herd grid',
    accepts: ['image'],
    filenames: ['goat-3.jpg'],
    recommended: '≥ 800×800, square crop.',
    image: goat3,
  },
  {
    key: 'goat-cam',
    label: 'Goat Cam',
    page: 'About — Goat Cam block',
    accepts: ['video'],
    filenames: ['goat-cam.mp4', 'goat-cam.webm'],
    recommended: '16:9, ≤ 20 MB, muted loop. Falls back to "coming soon" tile if absent.',
    video: goatCam,
  },
]
