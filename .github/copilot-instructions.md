# Portfolio development

This is James Hartley's personal portfolio, using Next.js 16, React 19, and Tailwind CSS 4. It is not a generic portfolio template.

- Run `npm ci`, `npm run dev`, and `npm run build` using Node.js 22 or newer. No GitHub token is required for the core site.
- Preserve verified career facts in `data.json`; do not invent employment, outcomes, project status, or metrics.
- Maintain curated public project content in `lib/projects.js` and images in `public/projects/`.
- Keep the core pages independent of external APIs. `/search` and `?customUsername=` provide an optional public GitHub repository browser with graceful failure handling.
- Preserve the shared header/footer, mobile navigation, keyboard focus styles, skip link, reduced-motion support, and résumé print layout.
- Keep secrets in `.env.local` or deployment-host settings and never commit them.
- Validate a production build and check the changed UI at desktop and mobile sizes. There is no configured test or lint runner.
- Production source lives in `jdbhartley/portfolio_james`. Preserve hosting configuration and verify `jameshartley.dev` after pushing to `main`.
