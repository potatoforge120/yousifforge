# p-Root — Terminal-style Portfolio

A multi-page static personal site for **Yousif Mohammed Al-Nuaimi**,
built with the [WebTUI](https://webtui.ironclad.sh/) CSS library to look and feel
like a terminal / TUI. Pure HTML + CSS + vanilla JavaScript — **no build step**.

## Features
- **4 pages**: `index.html` (Home), `projects.html`, `blog.html`, `contact.html`.
- **Tree-style sidebar** navigation (directory-tree glyphs), duplicated per page so
  it works with JavaScript disabled.
- **Theme switcher** (hover dropdown) cycling **Dark / Nord / Light / Catppuccin
  Mocha**, wired into the WebTUI theme plugins and saved in `localStorage`.
- **Language toggle** English ⇄ Arabic with automatic **RTL** layout, saved in
  `localStorage`.
- **Colourful highlight badges** (the pink "Showcase"-style accent) for skills/tags.
- **Nerd Font icons** throughout (loaded locally).
- **Local fonts only** — no CDN for text: Space Mono (English), Kawkab Mono
  (Arabic).
- Project **documentation modals**, and a **contact form** that opens the visitor's
  email client (`mailto:`).

## Run it
It's a static site — serve the folder with anything:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
(Serving over HTTP is recommended so the local fonts load correctly.)

## Project structure
```
index.html / projects.html / blog.html / contact.html   # pages
css/style.css      # our custom layer: @font-face, themes, layout, RTL, icons
js/main.js         # theme + language + mobile nav + modals + contact form + blog
fonts/             # LOCAL fonts (Space Mono, Kawkab Mono, Nerd Font)
blog/              # Markdown blog posts + posts.json manifest (see below)
vendor/            # WebTUI library + plugins (vendored so the site is offline-safe)
  full.css            # @webtui/css base + utils + components
  theme-nord.css      # Nord theme plugin
  theme-catppuccin.css# Catppuccin theme plugin
  plugin-nf.css       # Nerd Font plugin (points at fonts/SymbolsNerdFont-Regular.woff2)
  marked.min.js       # local Markdown parser for the blog (MIT)
```

## Writing blog posts (Markdown)
Posts live in `blog/` as Markdown files — no HTML editing needed.

1. Create `blog/YYYY-MM-DD-my-slug.md` with front-matter at the top:
   ```markdown
   ---
   title: My post title
   date: 2026-01-31
   excerpt: One-line teaser shown in the feed.
   ---

   Your **Markdown** body: ## headings, lists, `code`, > quotes, [links](url).
   ```
2. Add it to `blog/posts.json` (newest first): `{ "file": "2026-01-31-my-slug.md" }`

**Optional bilingual post:** make two files (`my-slug.en.md`, `my-slug.ar.md`) and
list them together — the right one loads with the language toggle:
`{ "en": "my-slug.en.md", "ar": "my-slug.ar.md" }`. Single-language posts show
as-is in both EN and AR; you only translate when you want to.

> The blog fetches these files at runtime, so the site must be served over HTTP
> (`python3 -m http.server 8000`) — opening `blog.html` as a bare `file://`
> can't load the posts.

## Customising (all details are in the code comments)
- **Personal info / content** → edit the `.main` section of each HTML page.
- **Add a theme** → import its plugin CSS in every `<head>`, add its value to the
  `THEMES` array in `js/main.js`, and add a `<button data-theme="…">` row in the
  sidebar theme menu.
- **Translations** → each translatable element has `data-i18n="key"`; add the
  key with `en`/`ar` strings to the `DICT` object in `js/main.js`.
- **Your email** → change `MY_EMAIL` in `js/main.js`. To use a real backend
  instead of `mailto:`, swap `handleContact()` for a `fetch()` POST (e.g. Formspree).
- **Icons** → use HTML entities like `&#xf015;` inside `<span class="nf">`; find
  codepoints on the [Nerd Fonts cheat-sheet](https://www.nerdfonts.com/cheat-sheet).

## Credits & licenses
- [WebTUI](https://webtui.ironclad.sh/) — MIT.
- Space Mono — SIL OFL (Google Fonts).
- Kawkab Mono — SIL OFL (see `fonts/KawkabMono-OFL.txt`).
- Symbols Nerd Font — MIT / OFL (Nerd Fonts project).
