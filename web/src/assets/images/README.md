# Drop your images here

This folder is an **automatic drop zone**. You don't edit any code — just drop a file with one of the exact names below and the site will start using it.

If a file isn't here, the site falls back to the generated SVG placeholder you already see. You can drop files one at a time and preview each change in your browser (the dev server hot-reloads).

## Expected filenames

| Drop a file named… | Where it appears | Recommended size |
|---|---|---|
| `hero.jpg` | Home page hero background | ≥ 1920×1080, landscape (16:9 or wider) |
| `before.jpg` | Results page "before" slider image | ≥ 1600×900 (16:9) |
| `after.jpg` | Results page "after" slider image | ≥ 1600×900 (16:9), same framing as before |
| `goat-1.jpg` | First goat bio on About page (currently "Juniper") | ≥ 800×800, square |
| `goat-2.jpg` | Second goat bio ("Atlas") | ≥ 800×800, square |
| `goat-3.jpg` | Third goat bio ("Sable") | ≥ 800×800, square |

## Rules

- **Supported extensions:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` (case-insensitive).
- **Exact names matter.** `hero.jpg` works; `Hero.jpg` works; `hero photo.jpg` does not.
- **One file per slot.** If you drop both `hero.jpg` and `hero.png`, the first wins (order: jpg → jpeg → png → webp → avif).
- **File size:** under ~500 KB each is ideal. Larger files work but slow the page. Tools like [squoosh.app](https://squoosh.app) (free, in-browser) compress images well.
- **Same framing for before/after.** The slider assumes the two images are shot from the same spot; otherwise the compare won't read.

## Tips

- Landscape hero photos work best. The top of the image gets a slight cream overlay at the bottom for text readability, so keep key detail away from the very bottom edge.
- Goat portraits look best as tight head-and-shoulders crops. The card shows them at square aspect ratio.
- You can swap in a new photo at any time — just replace the file. The dev server picks up the change without a restart.

## Want more image slots?

Say the word and I'll wire up:
- Team member portraits (`team-1.jpg`, `team-2.jpg`, `team-3.jpg`)
- Case study card images on the Results page (`case-1.jpg`, `case-2.jpg`, `case-3.jpg`)
- A small logo mark for the nav in place of the text wordmark

None of those are wired up yet — only the six files in the table above.
