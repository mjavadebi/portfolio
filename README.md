# Javad Ebrahimi — Product Portfolio

A Persian-first, bilingual portfolio built with static HTML, CSS and vanilla JavaScript. Doran and the English display font are hosted locally, and all paths work on GitHub Pages under a project URL such as `/portfolio/`.

## Run locally

Start a static server in this folder:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/` for Persian or `http://localhost:8000/en/` for English. The language button updates the URL, so either version can be shared directly.

## GitHub Pages

After merging, choose **Settings → Pages → Deploy from a branch**, select `main` and `/ (root)`, then save. There is no build step.

## Editing

- `index.html`: structure, Persian default copy, accessibility labels, project links, the portrait-led hero and generalist skills.
- `en/index.html`: generated English entry point for `/en/`.
- `script.js`: Persian and English copy, language switch, menu, opening sequence, scroll reveals, count-up metrics and email-copy feedback.
- `motion.js`: portrait spotlight and light switch, magnetic controls, project depth, skill spotlights, reading progress and scroll-driven details. Pointer effects run only with a fine pointer and without reduced motion.
- `scripts/build-english.mjs`: run `node scripts/build-english.mjs` after editing `index.html` or translated copy in `script.js` to refresh the English static page.
- `styles.css`: layout, type, brand colors, motion and responsive behavior.
- `assets/portfolio-v3/`: the cropped portrait, privacy-edited project images and the supplied Persian résumé PDF. Both language modes link to the same Persian PDF.

The portfolio links directly to the original products. The images shown are screenshots, not live embedded sites, so the presentation does not depend on the products allowing iframes. Product availability depends on the destination and the visitor’s network.

The opening sequence and nonessential motion respect the visitor’s reduced-motion preference. The portfolio remains usable when JavaScript is unavailable.

DM Serif Display is distributed under the included SIL Open Font License. Doran is the font provided in the owner's existing repository.

## Motion

Move across the hero to reveal the portrait with a soft spotlight, or use **Lights on** to keep it illuminated. The same keyboard-accessible toggle works on touchscreens. Project covers respond with shallow 3D depth and a moving view arrow; skills and the quote card pick up the pointer light. Buttons have a small magnetic pull, headings enter line by line, and the learning cycle highlights its steps once when it comes into view. A slim reading-progress line and scroll-driven stars follow normal scrolling.

No animation libraries, third-party scripts, or remote assets are required. The portrait layers reuse the same cached image. Nonessential motion follows `prefers-reduced-motion`, including changes made while the page is open; the light switch remains usable.
