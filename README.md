# Conservation x Education Guidance Manual Website

Website for the **Methodological Guidance for African Parks Community Management**.

This project presents the manual in a clear landing experience, provides a full chapter overview, and includes a dedicated Akagera case-study page with map and visual references.

## Live Website

- Target URL: `https://dedtadeas.github.io/conservation-community-outreach-web/`

If the page is not yet visible, check repository settings and make sure GitHub Pages is set to **GitHub Actions**.

## Project Context

The website is based on the manual **The Conservation Constituency Blueprint 2026** and focuses on:

- what the manual is for,
- why it was developed,
- who it helps,
- how the 3E+ framework is structured,
- how the Akagera case demonstrates implementation in practice.

Main downloadable file:

- `public/Guidance PCM_A4_5.pdf`

## Main Pages

- `/` — landing page (project brief, CTA, chapter highlights)
- `/chapters` — one heavy page with all chapter sections (`#part-1` to `#part-6`)
- `/akagera-case-study` — dedicated case-study page with map, figures, and field images

Main navigation is defined in `src/navigation.ts`.

## Key Files

- `src/pages/index.astro` — landing page
- `src/pages/chapters/index.astro` — combined chapter page
- `src/pages/akagera-case-study.astro` — case study page
- `src/data/manual.ts` — manual metadata + chapter content model
- `src/components/CustomStyles.astro` — typography and theme variables
- `src/config.yaml` — site metadata and GitHub Pages base path

## Assets

- Manual PDF: `public/Guidance PCM_A4_5.pdf`
- Website images/figures: `src/assets/images/akagera/`

## Tech Stack

- [Astro](https://astro.build/)
- Tailwind CSS
- AstroWind base template (customized for this project)

## Local Development

From repository root:

```bash
npm install
npm run dev
```

Open:

- `http://localhost:4321/`

Build:

```bash
npm run build
```

Type/content checks:

```bash
npm run check:astro
```

## Deployment (GitHub Pages)

Deployment workflow:

- `.github/workflows/deploy-pages.yml`

Site configuration for Pages:

- `src/config.yaml`
  - `site.site: https://dedtadeas.github.io`
  - `site.base: /conservation-community-outreach-web`

On every push to `main` or `content-updates`, GitHub Actions builds and deploys `dist/` to Pages.

### Content Updates Branch

For team members without technical background:

1. The `content-updates` branch is set up for making content changes
2. When you push commits to this branch, the website automatically rebuilds and deploys
3. Changes appear live at the GitHub Pages URL within a few minutes

To use this branch:
```bash
git checkout content-updates
# Make your changes to content files
git add .
git commit -m "Update content"
git push
```

## Notes

- The website repo intentionally excludes source reference working folders such as `_reference_files`.
- If domain/repo path changes, update `src/config.yaml` (`site.site` and `site.base`).
