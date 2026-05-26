# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

Production website for **MIRAH** — a strategic technology advisory firm. Built with Vite + React 18 + TypeScript. Single-page, bilingual (PT/EN), no backend.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # tsc + vite build → dist/
npm run preview   # Preview the dist/ build locally
npx tsc --noEmit  # Type-check only, no output (faster than a full build)
```

There are no tests. TypeScript is the only automated check (`tsc` runs as part of `build`).

`tsconfig.json` has `noUnusedLocals` and `noUnusedParameters` enabled — unused imports or parameters fail the build.

## Deployment

GitHub Pages repo — served at the custom domain **mirah.me**. Push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` via `actions/deploy-pages`. `public/CNAME` contains `mirah.me` and is copied into the build output automatically by Vite.

**One-time repo setting required:** In GitHub → Settings → Pages → Source, select **GitHub Actions** (not a branch). Without this the workflow upload step succeeds but the deploy step is blocked.

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

Every component receives `L: Lang` (the resolved copy object for the current language). Nav additionally takes `lang: LangKey` and `setLang: (l: LangKey) => void`. Services keeps its own local `open` state (index of the highlighted card) — it is not lifted to App.

### Copy — src/copy.ts

All UI strings are in a single `COPY` object keyed by `LangKey` (`'pt' | 'en'`). The `Lang`, `Service`, and `Step` interfaces are defined here and imported wherever needed. The `Lang` interface enforces that both languages stay in sync. When adding copy, update **both** `COPY.pt` and `COPY.en` and add the field to the `Lang` interface.

External URLs (`BOOK_URL`, `WA_URL`, `LI_URL`) are exported from the same file.

### SEO — where to update what

| What | Where |
| --- | --- |
| `<title>` and `<meta name="description">` (both languages) | `App.tsx` — `useEffect` keyed on `lang` |
| OG tags, Twitter card, JSON-LD structured data | `index.html` — static, PT-only, must be edited directly |
| Keywords, canonical, hreflang, favicon | `index.html` — static, edit directly |

Fonts (Geist Sans, Geist Mono) are loaded from Google Fonts in `index.html`, not from npm.

### Styles — src/index.css

Single flat CSS file — no modules, no preprocessor. All values go through CSS custom properties. **Never hardcode color values** — always use `var(--token)`.

Key tokens:

```css
--brand: #E40046        /* red — CTA, accents, contact section BG */
--brand-ink: #FFFFFF
--bg / --bg-elev / --bg-alt   /* surface hierarchy */
--fg / --fg-mute / --fg-dim   /* text hierarchy */
--rule / --rule-strong         /* dividers */
--card                         /* card surface (white light / #151517 dark) */
--shadow                       /* elevation shadow (light or dark variant) */
--font-sans / --font-display / --font-mono
--maxw: 1240px
--pad-x: clamp(20px, 5vw, 64px)
```

Dark mode: `[data-theme="dark"]` overrides the root tokens. No JS per-element — just the attribute on `<html>`.

Reusable CSS utilities:

| Class | Purpose |
| --- | --- |
| `.section` | Standard page section — `padding` + centered `max-width` container |
| `.section--alt` | Same as `.section` but uses `--bg-alt` background |
| `.section-head` | Two-row header: kicker above, `h2` below |
| `.kicker` | Small mono label with brand dot — used at the top of every section |
| `.kicker--on-brand` | Variant for light text on the brand-red contact section |
| `.btn--primary` | Brand red fill (Nav + Hero + service CTA) |
| `.btn--ghost` | Outlined on default background |
| `.btn--inverse` | White fill for use on dark/brand backgrounds |
| `.btn--ghost-on-brand` | Outlined for use on the brand-red contact section |
| `.btn--lg` | Larger padding/font size modifier for hero-scale CTAs |
| `.mono` | `var(--font-mono)` utility |
| `.dim` | `color: var(--fg-dim)` utility |

Section anchor IDs (used by nav `href` attributes): `#top`, `#about`, `#services`, `#approach`, `#contact`.

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
- **Hero** — marquee ticker uses CSS `animation: marquee` on a doubled track (`translateX(-50%)`). `TICKER_WORDS` are hardcoded in `Hero.tsx` (not in `copy.ts`) and are intentionally English-only
- **About** — founders section exists in `copy.ts` (`foundersKicker`) but is intentionally commented out in `About.tsx` pending real founder content
- **Portrait** — placeholder component: renders an SVG silhouette with a "portrait · drop here" label. `data-accent="1"` applies brand-color background. Real photos are not yet placed

### localStorage keys

- `mirah-theme` — persists `'light' | 'dark'`; falls back to `prefers-color-scheme`
- `mirah-lang` — persists `'pt' | 'en'`; falls back to `navigator.language`

## Assets

Brand assets are in `public/` and served at root:

- `/mirah-logo.png` — full wordmark
- `/mirah-mark.png` — mark only (same shape as the inline `<Mark>` SVG component)

The `<Mark>` and `<Arrow>` components are tiny inline SVGs — keep them inline.
