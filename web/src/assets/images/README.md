# Drop your images and videos here

This folder is an **automatic drop zone**. You don't edit any code — drop a file with one of the exact names below and the site picks it up.

If a file isn't here, the site falls back to a placeholder or hides the photo gracefully. You can drop files one at a time and preview each change in your browser (the dev server hot-reloads).

> **Tip:** open the site at **`/assets`** to see a visual map of every slot, what page it appears on, and which slots are still empty. That page is hidden from the public nav — it's just for you.

## Expected filenames

| Drop a file named… | Type | Where it appears | Recommended size |
|---|---|---|---|
| `hero.mp4` | **video** | Home hero background — looping behind the headline | 16:9, ≤ 10 MB, ~10s loop, muted, H.264 |
| `hero.jpg` | image | Home hero still — shown as the video poster (slow connections, autoplay-blocked devices) | ≥ 1920×1080, landscape |
| `archery-before.jpg` | image | Results page — Madera Archery Range, **before** clearing | ≥ 1200×800 landscape (16:9) |
| `archery-after.jpg` | image | Results page — Madera Archery Range, **after** clearing | ≥ 1200×800 landscape (16:9) |

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

## The Madera Archery before/after

The Results page renders the archery range as a **drag-to-reveal slider** when BOTH `archery-before.jpg` and `archery-after.jpg` are present. The user grabs the divider and sweeps left/right to compare.

- Drop **only one** of the two → the page shows it as a plain single image.
- Drop **neither** → no image, just the text card.

For the slider to look right, the two photos should be framed as close to identically as possible (same camera position, same lens, same crop) — that way only the vegetation visibly changes when you sweep.

## Tips

- Landscape hero photos and videos work best. The bottom of the frame fades to cream for text readability — keep key detail away from the very bottom edge.
- You can swap in a new file at any time — replace it with the same filename. Dev server picks up the change without a restart.
- Visit **`/assets`** in your browser to see live previews of every slot side-by-side.

## Want more slots?

Say the word and I'll wire up:
- Team headshots (Jim, Ryan, Luke) — when you have them
- A live Goat Cam video feed
- A logo mark for the nav
- A footer background photo
- Additional case study photos / videos for new projects
