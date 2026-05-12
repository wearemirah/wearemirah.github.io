# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Production website for **MIRAH** — a strategic technology advisory firm. Built with Vite + React 18 + TypeScript. Single-page, bilingual (PT/EN), no backend.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # tsc + vite build → dist/
npm run preview   # Preview the dist/ build locally
```

There are no tests. TypeScript is the only automated check (`tsc` runs as part of `build`).

## Architecture

```text
src/
  main.tsx          # React root, mounts <App />
  App.tsx           # Theme + lang state, SEO side-effects, section composition
  copy.ts           # All UI strings (PT + EN), external URLs, TypeScript interfaces
  index.css         # Design tokens + all component styles (single flat file)
  components/       # One file per section: Nav Hero About Services Approach Contact Footer
                    # Plus Mark.tsx (SVG icon) and Arrow.tsx (→ icon)
public/             # Static assets: mirah-logo.png, mirah-mark.png, og-image.jpg, robots.txt, sitemap.xml
```

### State — App.tsx

Two pieces of state live at the root and flow down as props:

- `theme: 'light' | 'dark'` — read from `localStorage` + `prefers-color-scheme`, applied as `data-theme` on `<html>`. Currently read-only (no toggle UI).
- `lang: 'pt' | 'en'` — read from `localStorage` + `navigator.language`, toggled in Nav. Changing it swaps `document.title` and the `<meta name="description">` for SEO.

Every component receives `L: Lang` (the resolved copy object for the current language).

### Copy — src/copy.ts

All UI strings are in a single `COPY` object keyed by `LangKey` (`'pt' | 'en'`). The `Lang` interface enforces that both languages stay in sync. When adding copy, update **both** `COPY.pt` and `COPY.en` and add the field to the `Lang` interface.

External URLs (`BOOK_URL`, `WA_URL`, `LI_URL`) are exported from the same file.

### Styles — src/index.css

Single flat CSS file — no modules, no preprocessor. All values go through CSS custom properties. **Never hardcode color values** — always use `var(--token)`.

Key tokens:

```css
--brand: #E40046        /* red — CTA, accents, contact section BG */
--brand-ink: #FFFFFF
--bg / --bg-elev / --bg-alt   /* surface hierarchy */
--fg / --fg-mute / --fg-dim   /* text hierarchy */
--rule / --rule-strong         /* dividers */
--font-sans / --font-display / --font-mono
--maxw: 1240px
--pad-x: clamp(20px, 5vw, 64px)
```

Dark mode: `[data-theme="dark"]` overrides the root tokens. No JS per-element — just the attribute on `<html>`.

### Responsive breakpoints

| Breakpoint | What changes |
| --- | --- |
| 960px | Hero grid collapses; services stack; approach steps 2×2 |
| 820px | Nav links hide; about grid stacks |
| 720px | Founders portrait 2-col (3rd centered full-width) |
| 560px | Approach steps single-col; footer stacks |

`@media (prefers-reduced-motion: reduce)` stops the marquee and pulse animations.

### Section-specific behavior

- **Nav** — adds `.nav--scrolled` (border + tighter padding) at `scrollY > 8px`
- **Services** — hover/focus toggles `.service--open` (background swap) per card
- **Hero** — marquee ticker uses CSS `animation: marquee` on a doubled track (`translateX(-50%)`)
- **Portrait** — `data-accent="1"` on the first frame applies brand-color background

## Assets

Brand assets are in `public/` and served at root:

- `/mirah-logo.png` — full wordmark
- `/mirah-mark.png` — mark only (same shape as the inline `<Mark>` SVG component)

The `<Mark>` and `<Arrow>` components are tiny inline SVGs — keep them inline.
