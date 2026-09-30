# Quang Minh Nguyen — academic portfolio

Static, dependency-free portfolio site for a PhD candidate in Finance (University of St Andrews).
No build step, no framework, no trackers. Plain HTML + CSS + a small progressive-enhancement script.

## Files

```
index.html            Profile: about, research profile, publications, education, experience, awards, references
research.html         Working paper page with MathJax-rendered equations
assets/css/style.css  All styling (design tokens at the top of the file)
assets/js/main.js     Mobile nav, scroll-spy, footer year
.nojekyll             Tells GitHub Pages to serve files as-is
```

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## Publishing on GitHub Pages

```bash
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.

Naming the repo `<username>.github.io` publishes at `https://<username>.github.io`.
Any other repo name publishes at `https://<username>.github.io/<repo>/` — the site uses
relative links only, so both work without edits.

## Adding equations

Both pages load MathJax v3 (`research.html` today; copy the two `<script>` blocks from its
`<head>` into any new page). Write LaTeX directly in the HTML:

- Inline: `\( \alpha_i = R_i - \beta_i R_m \)` or `$...$`
- Display: `\[ ... \]` or `$$...$$`

Wrap display equations in a `.math-block` for the framed, horizontally scrollable style:

```html
<div class="math-block">
  \[ R_{i,t} = \alpha_i + \beta_i F_t + \varepsilon_{i,t} \]
  <span class="math-note">Notation note goes here.</span>
</div>
```

## Editing the design

Every colour, font, and spacing value is a CSS custom property in the `:root` block at the top
of `assets/css/style.css`. Changing `--navy-800` and `--accent` re-themes the whole site.

## Before publishing — placeholders to replace

- Optional: add a Google Scholar profile link next to LinkedIn and ORCID in `index.html`
- Portrait: save a square photo (~800×800, under 300 KB) as `assets/img/portrait.jpg`.
  Until it exists, a navy circle with initials shows instead.
- CV: `assets/cv/CV_NguyenQuangMinh.pdf` — overwrite with the same filename to update.

The phone number and street address from the CV are deliberately not on the site — a public
page is scraped by bots. Add them only if you want them public.
