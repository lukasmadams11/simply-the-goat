// Auto-detects image and video files dropped into this folder.
// Drop a file named e.g. "hero.jpg" or "team-jim.jpg" and it gets picked up
// automatically — no code edits needed. If a slot's file isn't here, the
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

// Madera Archery Range — Results page "Recent Project" card
export const archeryRange = findImage('archery-range')

// Team headshots — About page
export const teamJim = findImage('team-jim')
export const teamEthan = findImage('team-ethan')
export const teamRyan = findImage('team-ryan')
export const teamLuke = findImage('team-luke')

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
    key: 'archery-range',
    label: 'Madera Archery Range photo',
    page: 'Results — Recent Project card',
    accepts: ['image'],
    filenames: ['archery-range.jpg'],
    recommended: '≥ 1200×800, landscape (3:2 or 16:9). Before/after, wide shot of the cleared zone, or the herd at work — anything that shows the project.',
    image: archeryRange,
  },
  {
    key: 'team-jim',
    label: 'Headshot — Jim Guggenhime',
    page: 'About — Team card',
    accepts: ['image'],
    filenames: ['team-jim.jpg'],
    recommended: '≥ 600×600, square crop. Shoulders-up, neutral background.',
    image: teamJim,
  },
  {
    key: 'team-ethan',
    label: 'Headshot — Ethan Wenter',
    page: 'About — Team card',
    accepts: ['image'],
    filenames: ['team-ethan.jpg'],
    recommended: '≥ 600×600, square crop.',
    image: teamEthan,
  },
  {
    key: 'team-ryan',
    label: 'Headshot — Ryan Bartusek',
    page: 'About — Team card',
    accepts: ['image'],
    filenames: ['team-ryan.jpg'],
    recommended: '≥ 600×600, square crop.',
    image: teamRyan,
  },
  {
    key: 'team-luke',
    label: 'Headshot — Luke Adams',
    page: 'About — Team card',
    accepts: ['image'],
    filenames: ['team-luke.jpg'],
    recommended: '≥ 600×600, square crop.',
    image: teamLuke,
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
