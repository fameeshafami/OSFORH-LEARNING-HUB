# Osforh Learning Hub – React site

React 18 + Vite + React Router (HashRouter). Plain JS and plain CSS.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```

## Deploy to GitHub Pages
1. Push this folder to the `main` branch of your repo (e.g. `osforhlearninghub-2026`).
2. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` (npm ci → build → publish `dist/`).

The site is served from `https://<user>.github.io/<repo>/`. `vite.config.js` uses `base: './'` and the app uses
`HashRouter`, so every page (`/#/contact`, `/#/courses/digital-marketing` …) works on Pages with no 404s.
Use `asset('img/...')` from `src/lib/asset.js` for any image in `public/`.

## Structure
```
public/img/            optimised images (WebP/AVIF; course cards in img/cards/)
src/index.css          base styles
src/responsive.css     responsive + accessibility layer (loaded last)
src/App.jsx            routes (pages are lazy-loaded)
src/components/        Nav, Footer (single instance, in Layout), CourseCard, ...
src/pages/             Home, About, Courses, CourseDetail, Testimonial, Contact, NotFound
src/data/              site info, courses, testimonials
```

## Adding real photos
Drop student/faculty photos in `public/img/`, convert to WebP/AVIF (≤ 800px wide) and reference them with `asset('img/your-photo.webp')`
including `width`, `height` and `loading="lazy"` on every image below the fold.
