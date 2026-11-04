# Javad Ebrahimi — Portfolio

A bilingual, static portfolio built with HTML, CSS and vanilla JavaScript. Persian is the default; visitors can switch to English. All fonts and images are local, and paths work under a GitHub Pages project URL such as `/portfolio/`.

## Run locally

From this folder, start any static server:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages

Once the desired branch is merged, choose **Settings → Pages → Deploy from a branch**, select the branch and the `/ (root)` folder, then save. No build step or framework is required.

## Editing

- `index.html`: structure and Persian default content.
- `script.js`: Persian and English copy, project URLs, language switch, case-study interaction and live preview dialog.
- `styles.css`: responsive layout, brand colors and local font setup.
- `assets/`: the supplied brand imagery and locally hosted typefaces.

The project preview opens the real external URL in an iframe on request. Some sites can block embedding or require a particular network; the direct link remains available in every project card and preview dialog.

DM Serif Display is distributed under the included SIL Open Font License. Doran is the font provided in the owner's existing repository.
