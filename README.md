# HVLR project page

Source of <https://heterogeneous-vlr.github.io/>, the project page for
*Unifying Heterogeneous Visual Reasoning in Expressive Latent Space* (HVLR).

Plain HTML + [Bulma](https://bulma.io/) (vendored), no build step. The layout follows the
Nerfies / Video-MME project-page template.

```
index.html                 the page
static/css/bulma.min.css   Bulma 0.9 (vendored)
static/css/index.css       page styles
static/js/index.js         navbar burger, "coming soon" links, BibTeX copy button
static/images/             figures taken from the paper (Fig. 1-6), the video poster and the favicon
static/videos/hvlr_example.mp4 example video (H.264, 1080p, 42 s)
.nojekyll                  tells GitHub Pages to serve the files as-is
```

## Preview locally

```bash
python3 -m http.server 8000   # run in the folder that contains index.html
# open http://localhost:8000
```

## Deployment

This repository is `heterogeneous-vlr/heterogeneous-vlr.github.io`, so GitHub Pages serves it at
`https://heterogeneous-vlr.github.io/`. In **Settings → Pages**, *Source* should be *Deploy from a branch*,
branch `main`, folder `/ (root)`. Every push to `main` redeploys the site within a minute or two.

GitHub Pages only serves public repositories on the free organization plan. While the repository is private the
site is offline and pushes do not deploy. After making it public again, push a commit to `main` (or re-save the
settings in **Settings → Pages**) to build and publish the current version.

## Things to fill in

Search `index.html` for `TODO`:

| What | Where |
| --- | --- |
| arXiv / Code / Model Weights URLs | the four buttons under the authors: replace `href="#"` and delete `data-placeholder` |
| arXiv ID | `#bibtex` section |
