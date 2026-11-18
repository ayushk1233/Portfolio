# Ayush Kumar — Personal Engineering Portfolio

A minimal, static-exported engineering portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Geist Sans, and Geist Mono. Designed around Swiss editorial grids, hairline borders, technical SVG diagrams, and disciplined electric-lime accents.

## Stack

- **Framework:** Next.js (App Router, `output: "export"`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + CSS custom properties
- **Typography:** Geist Sans & Geist Mono (self-hosted via `geist`)
- **Icons:** Lucide React
- **Hosting:** GitHub Pages (zero server runtime required)

## Installation & Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Quality Checks & Production Build

```bash
# Lint
npm run lint

# TypeScript check
npm run typecheck

# Static export build (outputs to ./out and writes ./out/.nojekyll)
npm run build
```

To test a **project-site** subpath build locally (for example, `https://ayushk1233.github.io/portfolio`):

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
npx serve out
```

## GitHub Pages Deployment

The included workflow at [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) automatically handles both **user sites** and **project sites**, as well as **custom domains**:

1. **User site** (`ayushk1233.github.io`): automatically sets `NEXT_PUBLIC_BASE_PATH=""`.
2. **Project site** (`ayushk1233.github.io/<repo-name>`): automatically sets `NEXT_PUBLIC_BASE_PATH="/<repo-name>"`.
3. **Custom domain**: add a `public/CNAME` file containing your domain (e.g., `ayushkumar.dev`); the workflow detects it and builds with root paths (`NEXT_PUBLIC_BASE_PATH=""`).

### First-Time Setup on GitHub

This portfolio is configured for the repository `https://github.com/ayushk1233/Portfolio.git` (deployed to `https://ayushk1233.github.io/Portfolio/`):

1. Push to `main`:
   ```bash
   git push -u origin main
   ```
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to `main` (or trigger the workflow manually under **Actions → Deploy Portfolio to GitHub Pages → Run workflow**).

## Updating Content

All portfolio content is separated from UI components inside `src/data/`:

| File | Controls |
| --- | --- |
| `src/data/site.ts` | Site metadata, contact links, navigation items, and Engineering Highlights metrics |
| `src/data/projects.ts` | Selected Work cards and full `/projects/[slug]` case study pages |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/skills.ts` | `/ TOOLBOX` grouped technical categories |
| `src/data/personal.ts` | `Beyond the Code` cards and photo paths |

### How to Update or Add Projects

Edit `src/data/projects.ts`. Every entry in the `PROJECTS` array automatically:

- Renders as a card in the `/ SELECTED WORK` section on the homepage.
- Generates a static detail page at `/projects/<slug>/` during `npm run build`.
- Appears in the generated `sitemap.xml`.

Set `liveUrl` only if a verified live deployment exists; omit it otherwise.

### How to Update Personal Photographs (`Beyond the Code`)

1. Place images in `public/images/beyond/`.
2. Add or reorder entries in `BEYOND_PHOTOS` inside `src/data/personal.ts` (the first 5 entries appear by default; the rest appear when visitors click **Show All**).
3. Static `basePath` prefixing is handled automatically via `withBasePath()`.

### How to Update Your Resume

Update `resumeViewUrl` and `resumeDownloadUrl` inside `src/data/site.ts`. The navigation `Resume ↗` button opens `resumeViewUrl`, while the Hero and Contact `Download Resume ↓` buttons trigger a direct download via `resumeDownloadUrl`.
