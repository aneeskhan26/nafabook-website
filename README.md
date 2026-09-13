# Nafabook

A premium, responsive fintech website for Nafabook—Digital Hisab Kitab and access to business finance for growing Indian MSMEs.

## Technology

- React 19 and TanStack Start
- TypeScript and Vite
- Tailwind CSS 4 with custom responsive styling
- Netlify Forms for finance applications and document uploads
- Lucide icons and an original inline SVG Nafabook logo

## Run locally

Install dependencies and start the Netlify development environment:

```bash
pnpm install
netlify dev --port 8889
```

Open `http://localhost:8889`. Netlify Forms submissions should be tested on a deployed preview because local development does not fully process form submissions.

## Application flow

The homepage application drawer guides applicants through mobile verification, business details, and document uploads before sending the submission to Netlify Forms. The static field registration file at `public/__forms.html` must match the React form fields.
