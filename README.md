# MIRAH — Strategic Technology Advisory

Production website for [MIRAH](https://www.linkedin.com/company/wearemirah/), a strategic technology advisory firm. Single-page, bilingual (PT/EN), no backend.

**Stack:** Vite 5 · React 18 · TypeScript 5 · plain CSS custom properties

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Type-check + build to `dist/` |
| `npm run preview` | Serve the `dist/` build locally |

## Project structure

```text
src/
  App.tsx          # Root — theme/lang state, SEO, section composition
  copy.ts          # All UI copy (PT + EN) + external URLs
  index.css        # Design tokens + all styles
  components/      # One component per page section
public/
  mirah-logo.png   # Full wordmark
  mirah-mark.png   # Mark icon
  og-image.jpg     # Open Graph image
  robots.txt
  sitemap.xml
```

## External links

| Purpose | URL |
| --- | --- |
| Book a call | `https://calendar.app.google/RCGVv4dGDy5QMXtX8` |
| WhatsApp | `https://wa.me/5551993262403` |
| LinkedIn | `https://www.linkedin.com/company/wearemirah/` |

These are exported from `src/copy.ts` as `BOOK_URL`, `WA_URL`, and `LI_URL`.
