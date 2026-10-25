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
.github/
  workflows/deploy.yml           GitHub Pages deployment
  workflows/ci.yml               Pull request checks
  PULL_REQUEST_TEMPLATE.md
public/
  CNAME                          Custom domain for GitHub Pages
  favicon.png                    Official mark, square favicon
  images/                        Article images, organised by page
src/
  assets/logo.png                Official Elephantronics mark
  components/                    Reusable Astro components for MDX
  content/docs/                  Markdown and MDX pages
  content/i18n/                  Optional UI string overrides
  content.config.ts              Starlight content collection schema
  pages/404.astro                Branded 404 page
  styles/custom.css              Brand tokens and Starlight overrides
astro.config.mjs                 Site, sidebar, logo, fonts, and integration config
CONTRIBUTING.md                  Contributor entry point
DEPLOYMENT.md                    GitHub Pages and DNS instructions
```

Content sections:

```text
src/content/docs/
├─ index.mdx                              Landing page
├─ getting-started/index.md               Orientation and reading conventions
├─ electronics-fundamentals/index.md      Voltage, current, resistance, power
├─ microcontrollers/
│  ├─ index.md                            Board overview
│  └─ dht22-arduino-uno-oled.mdx          DHT22 + OLED tutorial
├─ circuit-design/index.md                Pre-power checklist
├─ single-board-computers/
│  ├─ index.md                            SBC overview
│  ├─ muse-pro-pi/
│  │  ├─ index.mdx                        Introduction and first boot
│  │  ├─ benchmark-deep-dive.mdx          Benchmark results
│  │  └─ object-detection.mdx             YOLOv8 object detection
│  └─ purple-pi-oh2/
│     ├─ index.mdx                        Overview and quick start
│     ├─ gpio.mdx                         GPIO, I2C, UART, SPI
│     ├─ applications/
│     │  ├─ index.mdx                     Application guides
│     │  ├─ docker.mdx
│     │  ├─ node-red.mdx
│     │  ├─ opencv.mdx
│     │  ├─ ros2.mdx
│     │  └─ home-assistant.mdx
│     ├─ industrial-protocols/
│     │  ├─ index.mdx                     Protocol guides
│     │  ├─ modbus.mdx
│     │  ├─ mqtt.mdx
│     │  └─ can-bus.mdx
│     └─ npu.mdx                          NPU and YOLOv5
├─ robotics/
│  ├─ index.md                            Scope and roadmap
│  └─ obstacle-avoidance-car.mdx          Arduino obstacle-avoiding car
├─ troubleshooting/index.md               First-checks routine
└─ contributing/index.mdx                 Contributor guide
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
- **Keep media local.** Put article images under
  `public/images/<article-slug>/`. Use WebP, descriptive alt text, and captions
  where the image needs context. Do not hotlink external images.

## Adding a page

1. Create `src/content/docs/<section>/<page>.md` (or `.mdx` if it uses
   components).
2. Add frontmatter with at least `title` and `description`.
3. Add the page to `sidebar` in `astro.config.mjs` using its slug, for example
   `slug: 'microcontrollers/dht22-arduino-uno-oled'` for
   `src/content/docs/microcontrollers/dht22-arduino-uno-oled.mdx`.
4. Add the page to the relevant index page and, if useful, the homepage.
5. Run `npm run check` and `npm run build`.

## Components

Import components in `.mdx` files:

```mdx
import TutorialHeader from '../../../components/TutorialHeader.astro';
import ComponentCard from '../../../components/ComponentCard.astro';
import WiringTable from '../../../components/WiringTable.astro';
import Callout from '../../../components/Callout.astro';
import Figure from '../../../components/Figure.astro';
import TechTags from '../../../components/TechTags.astro';
```

Adjust the depth of `../` if the page lives at a different level under
`src/content/docs/`.

- `TutorialHeader` — difficulty, estimated time, prerequisites, parts, and
  verification status.
- `ComponentCard` — component name, summary, optional part number, and shop link.
- `WiringTable` — accessible pin-to-pin connections with a caption and note.
- `Callout` — `note`, `tip`, or `warning`, wrapped around Starlight's `Aside`.
- `Figure` - responsive image or animated WebP with alt text, caption, dimensions,
  and a white card backing for charts.
- `TechTags` - topic pills used at the top of board and guide pages.
- `FeaturedCard` - homepage feature card with cover image, tag, and summary.

Prefer Starlight's built-in components (`CardGrid`, `LinkCard`, `Steps`, `Tabs`,
`Aside`) when they already do the job. Code blocks use Starlight's native
Expressive Code features; there is no custom code component.

## Images

Article media lives in `public/images/` with one folder per page:

```text
public/images/
├─ dht22-arduino-uno-oled/
├─ muse-pro-pi/
│  ├─ benchmark/
│  └─ object-detection/
├─ purple-pi-oh2/
│  ├─ overview/
│  ├─ gpio/
│  ├─ applications/
│  ├─ industrial/
│  └─ npu/
├─ robotics/
│  └─ obstacle-avoidance-car/
└─ ...
```

Static images are WebP at quality 82–88, resized to a sensible display width.
Animated demos are animated WebP, not multi-megabyte GIFs, and are referenced with
`loading="lazy"`. Keep original source files outside the repository. See
`CONTRIBUTING.md` for the submission checklist.

## Logo

`src/assets/logo.png` and `public/favicon.png` use the official Elephantronics
elephant-circuit mark recovered from the source article assets. The mark is
navy/cyan on a white background; do not recolour or redraw it. See
[`src/assets/README.md`](src/assets/README.md) for replacement and variant notes.

## Contributing

Fork the repository, create a branch, and open a pull request against `main`.
The short checklist is in [CONTRIBUTING.md](CONTRIBUTING.md); the full
beginner-friendly walkthrough is in
[`src/content/docs/contributing/index.mdx`](src/content/docs/contributing/index.mdx)
and is published at `/contributing/` after deployment.

Before opening a pull request:

```bash
npm run check
npm run build
```

Pull requests run the same checks in GitHub Actions. Small fixes can also be made
directly from the **Edit page** link in the site footer.

## Deployment

The site is configured for `https://wiki.elephantronics.lk` with no `base` path,
and `public/CNAME` contains the custom domain. The GitHub Actions workflow
deploys on pushes to `main` and supports manual dispatch.

The one-time GitHub and DNS steps are documented in
[DEPLOYMENT.md](DEPLOYMENT.md). They must be completed manually; the repository
does not change DNS or GitHub account settings.
