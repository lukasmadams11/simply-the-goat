// Auto-detects image files you've dropped into this folder.
// Supported extensions: jpg, jpeg, png, webp, avif.
// Drop a file named e.g. "hero.jpg" and it gets exported as `hero` below —
// no code edits needed. If the file isn't there, the export is `null` and
// the site falls back to the generated SVG placeholder.

const modules = import.meta.glob(
  './*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true, import: 'default' }
)

function find(basename) {
  for (const ext of [
    'jpg', 'jpeg', 'png', 'webp', 'avif',
    'JPG', 'JPEG', 'PNG', 'WEBP', 'AVIF',
  ]) {
    const key = `./${basename}.${ext}`
    if (modules[key]) return modules[key]
  }
  return null
}

// Home hero background (16:9 or wider landscape recommended)
export const hero = find('hero')

// Featured before/after slider on the Results page (each ~16:9)
export const before = find('before')
export const after = find('after')

// Three goat portraits on the About page (1:1 square recommended)
export const goat1 = find('goat-1')
export const goat2 = find('goat-2')
export const goat3 = find('goat-3')
