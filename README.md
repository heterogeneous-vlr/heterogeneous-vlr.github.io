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
static/images/             figures taken from the paper (Fig. 1-5) and the favicon
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

## Things to fill in

Search `index.html` for `TODO`:

| What | Where |
| --- | --- |
| arXiv / Code / Data / Model Weights URLs | the four buttons under the authors: replace `href="#"` and delete `data-placeholder` |
| Demo video | the `#video` section: replace the placeholder `<div>` with the YouTube `<iframe>` or the `<video>` template in the comment (put a self-hosted file at `static/videos/demo.mp4`) |
| arXiv ID | `#bibtex` section |
