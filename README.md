# Elephantronics Wiki

A technical knowledge base for practical electronics, embedded Linux, robotics,
and edge AI. Built with [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/), deployed as a static site to GitHub
Pages at **https://wiki.elephantronics.lk**.

> **Status:** initial foundation. No deployment has been performed from this
> repository yet, and the tutorials are marked as drafts until they are
> bench-tested.

## Requirements

- Node.js **22.23.4 or newer** (developed with Node 24)
- npm (the lockfile is `package-lock.json`)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:4321>. Starlight's search index is generated at build
time, so use the preview server to test search:

```bash
npm run build
npm run preview
```

## Checks

```bash
npm run check   # Astro + TypeScript diagnostics
npm run build   # production build into dist/
```

## Structure

```text
.github/workflows/deploy.yml   GitHub Pages deployment
public/
  CNAME                        Custom domain for GitHub Pages
  favicon.svg                  Placeholder favicon
src/
  assets/logo.svg              Placeholder logo (replace — see assets/README.md)
  components/                  Reusable Astro components for MDX
  content/docs/                Markdown and MDX pages
  content/i18n/                Optional UI string overrides
  content.config.ts            Starlight content collection schema
  pages/404.astro              Branded 404 page
  styles/custom.css            Brand tokens and Starlight overrides
astro.config.mjs               Site, sidebar, logo, and integration config
DEPLOYMENT.md                  GitHub Pages and DNS instructions
```

Content sections:

```text
src/content/docs/
├─ index.mdx                              Landing page
├─ getting-started/index.md               Orientation and reading conventions
├─ electronics-fundamentals/index.md      Voltage, current, resistance, power
├─ microcontrollers/
│  ├─ index.md                            Board overview
│  └─ dht22-arduino-uno-oled.mdx          MDX tutorial / component example
├─ circuit-design/index.md                Pre-power checklist
├─ single-board-computers/
│  ├─ index.md                            SBC overview
│  └─ muse-pro-pi/index.md                Muse Pro Pi introduction
├─ robotics/index.md                      Scope and roadmap
└─ troubleshooting/index.md               First-checks routine
```

## Content conventions

- **Every page needs a `title` and `description`.** The content schema enforces
  this because both are used in metadata and search results.
- **Mark verification honestly.** Tutorials use `<TutorialHeader status="draft" />`
  until the circuit has actually been built and checked. Do not label a page
  "reviewed" because it was proofread.
- **Label example values.** Pin numbers, I2C addresses, and component values are
  examples unless the page says they are requirements.
- **Cite sources.** Vendor specifications must be presented as published values,
  with a link, unless they have been independently measured.
- **Do not invent specifications.** If a datasheet or measurement is unavailable,
  say so and leave the value out.

## Adding a page

1. Create `src/content/docs/<section>/<page>.md` (or `.mdx` if it uses
   components).
2. Add frontmatter with at least `title` and `description`.
3. Add the page to `sidebar` in `astro.config.mjs` using its slug, for example
   `slug: 'microcontrollers/dht22-arduino-uno-oled'` for
   `src/content/docs/microcontrollers/dht22-arduino-uno-oled.mdx`.
4. Run `npm run check` and `npm run build`.

## Components

Import components in `.mdx` files:

```mdx
import TutorialHeader from '../../../components/TutorialHeader.astro';
import ComponentCard from '../../../components/ComponentCard.astro';
import WiringTable from '../../../components/WiringTable.astro';
import Callout from '../../../components/Callout.astro';
```

Adjust the depth of `../` if the page lives at a different level under
`src/content/docs/`.

- `TutorialHeader` — difficulty, estimated time, prerequisites, parts, and
  verification status.
- `ComponentCard` — component name, summary, optional part number, and shop link.
- `WiringTable` — accessible pin-to-pin connections with a caption and note.
- `Callout` — `note`, `tip`, or `warning`, wrapped around Starlight's `Aside`.

Prefer Starlight's built-in components (`CardGrid`, `LinkCard`, `Steps`, `Tabs`,
`Aside`) when they already do the job. Code blocks use Starlight's native
Expressive Code features; there is no custom code component.

## Logo

`src/assets/logo.svg` and `public/favicon.svg` are **placeholders**. Replace them
with the official artwork and update `logo.alt` in `astro.config.mjs`. See
[`src/assets/README.md`](src/assets/README.md) for formats and light/dark
variants.

## Deployment

The site is configured for `https://wiki.elephantronics.lk` with no `base` path,
and `public/CNAME` contains the custom domain. The GitHub Actions workflow
deploys on pushes to `main` and supports manual dispatch.

The one-time GitHub and DNS steps are documented in
[DEPLOYMENT.md](DEPLOYMENT.md). They must be completed manually; the repository
does not change DNS or GitHub account settings.
