# Drop your images and videos here

This folder is an **automatic drop zone**. You don't edit any code — drop a file with one of the exact names below and the site picks it up.

If a file isn't here, the site falls back to the generated SVG placeholder. You can drop files one at a time and preview each change in your browser (the dev server hot-reloads).

> **Tip:** open the site at **`/assets`** to see a visual map of every slot, what page it appears on, and which slots are still empty. That page is hidden from the public nav — it's just for you.

## Expected filenames

| Drop a file named… | Type | Where it appears | Recommended size |
|---|---|---|---|
| `hero.jpg` | image | Home hero background (also used as the video poster) | ≥ 1920×1080, landscape |
| `hero.mp4` | **video** | Home hero background — overrides `hero.jpg` when present | 16:9, ≤ 10 MB, ~10s loop, muted |
| `before.jpg` | image | Results "before" slider frame | ≥ 1600×900 (16:9) |
| `after.jpg` | image | Results "after" slider frame | ≥ 1600×900, same framing as before |
| `goat-1.jpg` | image | First goat bio (Juniper) | ≥ 800×800, square |
| `goat-2.jpg` | image | Second goat bio (Atlas) | ≥ 800×800, square |
| `goat-3.jpg` | image | Third goat bio (Sable) | ≥ 800×800, square |
| `goat-cam.mp4` | **video** | About page Goat Cam block | 16:9, ≤ 20 MB, muted loop |

## Rules

- **Image extensions:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif` (case-insensitive).
- **Video extensions:** `.mp4`, `.webm`, `.mov`, `.m4v` (case-insensitive). `.mp4` (H.264) is safest cross-browser.
- **Exact names matter.** `hero.mp4` works; `Hero Video.mp4` does not.
- **One file per slot.** If you drop both `hero.jpg` and `hero.png`, the first wins (jpg → jpeg → png → webp → avif).
- **Video file size:** keep under 10 MB for the hero. Compress with [Handbrake](https://handbrake.fr/) or [ffmpeg](https://ffmpeg.org/) — target ~2 Mbps bitrate, 1080p, no audio track.
- **Same framing for before/after.** The slider assumes the two photos are shot from the same spot.

## How hero video + image interact

If you drop both `hero.jpg` and `hero.mp4`:
- The **video plays** as the hero background (autoplay, muted, looping).
- The **image is used as the video poster** — what the user sees for the split second before the video starts, and on devices that block autoplay.

So drop both. The image is your safety net.

## Tips

- Landscape hero photos and videos work best. The bottom of the frame fades to cream for text readability — keep key detail away from the very bottom edge.
- Goat portraits look best as tight head-and-shoulders crops at square aspect ratio.
- You can swap in a new file at any time — replace it with the same filename. Dev server picks up the change without a restart.
- Visit **`/assets`** in your browser to see live previews of every slot side-by-side.

## Want more slots?

Say the word and I'll wire up:
- Team member portraits (`team-1.jpg`, `team-2.jpg`, `team-3.jpg`)
- Case study card images on Results (`case-1.jpg`, `case-2.jpg`, `case-3.jpg`)
- A logo mark for the nav
- Additional looping videos (e.g. a Results page atmosphere clip)

None of those are wired up yet — only the slots in the table above.
