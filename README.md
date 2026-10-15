# James Hartley · Portfolio

Personal portfolio for [jameshartley.dev](https://jameshartley.dev), built with Next.js, React, and Tailwind CSS. Production source lives in [jdbhartley/portfolio_james](https://github.com/jdbhartley/portfolio_james).

## Local development

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` followed by `npm start`.

No environment variables are required for the main portfolio, project filters, project details, résumé, timeline, or contact page. Optional `GH_TOKEN` increases the API rate limit for the repository browser at `/search`. Keep tokens in `.env.local` or the host's secret settings, never in tracked files.

## Updating content

- `data.json`: identity, contact details, résumé, and career timeline.
- `lib/projects.js`: curated public projects, descriptions, technologies, lifecycle notes, and external links.
- `public/projects/`: optimized WebP artwork from the original project repositories.
- `app/page.jsx`: introduction, selected work, experience summary, and about section.
- `global.css`: responsive styles, accessibility, reduced motion, and résumé print layout.

Projects are deliberately curated rather than selected by GitHub star counts. The home page and project details render without external API requests. Do not add invented accomplishments or imply that archived prototypes are current products. Professional work and public personal projects are presented separately.

The résumé's **Print / Save PDF** button uses the browser's print dialog and a dedicated light print stylesheet. Contact links use email, GitHub, and LinkedIn; there is no contact form or submission service.

## Publishing

Push to `main` in `jdbhartley/portfolio_james` for the connected hosting service to deploy. Check the commit's deployment status and verify the content at `jameshartley.dev` after pushing. The domain has been served by Netlify; its build settings and repository connection are managed in the hosting account.

## Verification

Run `npm run build` and `npm audit`. Preview on desktop and a narrow mobile viewport. Check navigation, project filters and search (including no results/reset), project details and outbound links, contact copy feedback, and résumé printing. Check `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and a nonexistent route.

## Credits

Originally based on [jirihofman's portfolio](https://github.com/jirihofman/portfolio), with influences from [chronark](https://chronark.com). Redesigned for James Hartley. Project artwork comes from James's public repositories; third-party assets in Tafl retain their original ownership as noted on its project page. Cal Sans is bundled locally.
