# Drop your images and videos here

This folder is an **automatic drop zone**. You don't edit any code — drop a file with one of the exact names below and the site picks it up.

If a file isn't here, the site falls back to a placeholder or hides the photo gracefully. You can drop files one at a time and preview each change in your browser (the dev server hot-reloads).

> **Tip:** open the site at **`/assets`** to see a visual map of every slot, what page it appears on, and which slots are still empty. That page is hidden from the public nav — it's just for you.

## Expected filenames

| Drop a file named… | Type | Where it appears | Recommended size |
|---|---|---|---|
| `hero.jpg` | image | Home hero background (also used as the video poster) | ≥ 1920×1080, landscape |
| `hero.mp4` | **video** | Home hero background — overrides `hero.jpg` when present | 16:9, ≤ 10 MB, ~10s loop, muted |
| `archery-range.jpg` | image | Results page — Madera Archery Range "Recent Project" card | ≥ 1200×800 landscape (3:2 or 16:9) |
| `team-jim.jpg` | image | About page — Jim Guggenhime team card | ≥ 600×600, square, shoulders-up |
| `team-ethan.jpg` | image | About page — Ethan Wenter team card | ≥ 600×600, square |
| `team-ryan.jpg` | image | About page — Ryan Bartusek team card | ≥ 600×600, square |
| `team-luke.jpg` | image | About page — Luke Adams team card | ≥ 600×600, square |
| `goat-cam.mp4` | **video** | About page Goat Cam block | 16:9, ≤ 20 MB, muted loop |

## Rules

- **Image extensions:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` (case-insensitive).
- **Video extensions:** `.mp4`, `.webm`, `.mov`, `.m4v` (case-insensitive). `.mp4` (H.264) is safest cross-browser.
- **Exact names matter.** `hero.mp4` works; `Hero Video.mp4` does not.
- **One file per slot.** If you drop both `hero.jpg` and `hero.png`, the first wins (jpg → jpeg → png → webp → avif).
- **Video file size:** keep under 10 MB for the hero. Compress with [Handbrake](https://handbrake.fr/) or [ffmpeg](https://ffmpeg.org/) — target ~2 Mbps bitrate, 1080p, no audio track.

## How hero video + image interact

If you drop both `hero.jpg` and `hero.mp4`:
- The **video plays** as the hero background (autoplay, muted, looping).
- The **image is used as the video poster** — what the user sees for the split second before the video starts, and on devices that block autoplay.

So drop both. The image is your safety net.

## Team headshots

Team cards show photos as a circular crop on the left side of each card. If a `team-*.jpg` file is missing for a person, that card just shows the text-only version (clean, no broken-image icon).

You can drop all four at once or one at a time — they're independent.

## Tips

- Landscape hero photos and videos work best. The bottom of the frame fades to cream for text readability — keep key detail away from the very bottom edge.
- Headshots look best as tight head-and-shoulders crops at square aspect ratio. Centered, neutral background, good lighting.
- For the archery range photo: a wide shot showing the cleared parcel, the herd at work, or a before/after composition all work. The card renders it at 3:2 (landscape).
- You can swap in a new file at any time — replace it with the same filename. Dev server picks up the change without a restart.
- Visit **`/assets`** in your browser to see live previews of every slot side-by-side.

## Want more slots?

Say the word and I'll wire up:
- A logo mark for the nav
- A footer background photo
- A separate before/after pair for the archery range
- Additional looping videos (e.g. a Results page atmosphere clip)
