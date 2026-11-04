# Javad Ebrahimi — Product Portfolio

A Persian-first portfolio with an English translation, built as static HTML, CSS and vanilla JavaScript. Doran and the English display font are self-hosted; all paths work under a GitHub Pages project URL such as `/portfolio/`.

## Run locally

From this folder, start any static server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages

After merging the desired changes, choose **Settings → Pages → Deploy from a branch**, select `main` and the `/ (root)` folder, then save. No build step or framework is required.

## Editing

- `index.html`: page structure, project links and Persian default content.
- `script.js`: Persian and English copy, language toggle, mobile menu and reading progress.
- `styles.css`: responsive layout, colors, local fonts and reduced-motion behavior.
- `assets/portfolio-v3/`: the cropped portrait, privacy-edited project images and the supplied Persian resume PDF. Both language versions currently link to the same Persian PDF.

Project links open the original products directly. Their availability depends on the visitor's network and the destination websites.

DM Serif Display is distributed under the included SIL Open Font License. Doran is the font provided in the owner's existing repository.
