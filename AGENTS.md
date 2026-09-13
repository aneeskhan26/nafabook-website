# Nafabook Project Guide

## Architecture

Nafabook is a single-page fintech marketing site built with React 19 and TanStack Start, styled with Tailwind CSS 4 plus custom global CSS, and deployed on Netlify. The homepage includes all marketing content and a client-side, multi-step business finance application.

## Key directories

- `src/routes/` — file-based TanStack routes. `index.tsx` contains the homepage, inline SVG brand mark, and application flow; `__root.tsx` owns document metadata.
- `src/styles.css` — global design tokens, responsive layouts, animation, and component styles.
- `public/` — static assets. `__forms.html` is the required build-time Netlify Forms registration skeleton and must stay aligned with application fields.
- `netlify.toml` — deployment and local development configuration.

## Conventions

- Use TypeScript and functional React components.
- Keep brand colors as CSS custom properties and preserve the navy, green, warm-neutral visual system.
- Use `Manrope` for display typography and `DM Sans` for body/interface copy.
- Prefer semantic HTML, accessible labels, visible focus states, and reduced-motion support.
- Keep the homepage responsive at the 900px and 620px breakpoints.
- Do not add externally hosted raster imagery when an inline vector or CSS treatment is sufficient.

## Forms

The loan application submits multipart form data to `/__forms.html` so Netlify’s CDN form handler receives it rather than the TanStack SSR route. Every field name must also exist in `public/__forms.html`. Uploaded documents are limited by Netlify Forms’ 8 MB total request limit. Production handling of identity documents should use Netlify’s VGS integration for enhanced protection.

Netlify Forms has been enabled for this site. If application fields change, update both the React form and static skeleton together.
