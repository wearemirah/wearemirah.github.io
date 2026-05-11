# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is a **Claude Design handoff bundle** for MIRAH — a strategic technology advisory firm. The `project/` directory contains HTML/JSX/CSS prototypes exported from Claude's design tool. Your job is to **implement these designs pixel-perfectly** in a real production stack. Match the visual output; do not copy the prototype's internal structure (CDN React, Babel standalone, no bundler) unless it happens to fit.

## Prototype structure

| File | Role |
|---|---|
| `project/Mirah.html` | Entry point — loads React 18 + Babel via CDN, imports `tweaks-panel.jsx` then `app.jsx` |
| `project/app.jsx` | All page sections + bilingual copy (`COPY.pt` / `COPY.en` objects) |
| `project/tweaks-panel.jsx` | Reusable design-tweak panel (slider, toggle, radio, color picker) — **prototype tooling only, not for production** |
| `project/styles.css` | Design tokens (CSS custom properties) + all component styles |
| `project/assets/` | `mirah-logo.png` and `mirah-mark.png` — real brand assets |

To preview the prototype locally, open `project/Mirah.html` directly in a browser — no build step required.

## Page architecture

Single-page site, top to bottom:

1. **Nav** — sticky with `nav--scrolled` class added at 8px scroll; lang toggle (PT/EN); CTA button
2. **Hero** — display heading, meta card sidebar, marquee ticker (`--brand` diamond separators)
3. **About** — paragraph + numbered bullets list; Founders portrait grid (3-up, placeholder SVGs — real photos drop in)
4. **Services** — 3-column hover-to-open accordion (`service--open` class on `onMouseEnter`)
5. **Approach** — 4-step numbered grid
6. **Contact** — full-bleed `--brand` (#E40046) section
7. **Footer**

## Design tokens (CSS custom properties)

All colors, spacing, and fonts are defined as tokens in `styles.css`. **Never hardcode color values** — always use `var(--token)`. Key tokens:

```
--brand: #E40046           /* red, used for accents, CTA, contact section BG */
--brand-ink: #FFFFFF
--bg / --bg-elev / --bg-alt  /* surface hierarchy */
--fg / --fg-mute / --fg-dim  /* text hierarchy */
--rule / --rule-strong        /* dividers */
--font-sans: 'Geist', ...
--font-mono: 'Geist Mono', ...
--maxw: 1240px
--pad-x: clamp(20px, 5vw, 64px)
```

Dark mode is toggled via `[data-theme="dark"]` on `<html>`.

## i18n / copy

All UI strings live in the `COPY` object in `app.jsx` — two top-level keys: `pt` (default) and `en`. The active copy is selected by `t.lang` tweak. Both sets must stay in sync when adding new copy.

## External URLs

```js
BOOK_URL = "https://calendar.app.google/RCGVv4dGDy5QMXtX8"  // Google Calendar
WA_URL   = "https://wa.me/5551993262403"                     // WhatsApp
LI_URL   = "https://www.linkedin.com/company/wearemirah/"    // LinkedIn
```

## Assets

- `project/assets/mirah-logo.png` — full wordmark
- `project/assets/mirah-mark.png` — mark only (equivalent to the inline `<Mark>` SVG component)
- Founder portrait frames use SVG placeholder patterns; real photos drop in as `<img>` inside `.portrait-frame`

## Implementation notes

- The `Mark` component (double-bracket SVG icon) and `Arrow` component (→ icon) are tiny inline SVGs — keep them inline in production for zero HTTP overhead
- `TweaksPanel` / `useTweaks` are prototype-only design tooling — do not ship to production
- `TWEAK_DEFAULTS` block (`/*EDITMODE-BEGIN*/…/*EDITMODE-END*/`) is a host-rewrite target for Claude Design — irrelevant after handoff
- Responsive breakpoints: 960px (hero grid collapses, services stack), 820px (nav links hide, about grid stacks), 720px (founders 2-col), 560px (steps single-col, footer stacks)
- `@media (prefers-reduced-motion: reduce)` stops the marquee and pulse animations
