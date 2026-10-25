# Contributing to the Elephantronics Wiki

Thanks for helping improve the wiki. Contributions can be small — a typo fix, a
corrected pin number, a better photo — or as large as a new tutorial.

The **full beginner walkthrough** is on the wiki at
<https://wiki.elephantronics.com/contributing/>. Its source lives at
[`src/content/docs/contributing/index.mdx`](src/content/docs/contributing/index.mdx).

## Quick start

1. **Fork** <https://github.com/MyLifeMyRulesMyCar/elephantronics-wiki>.
2. **Clone your fork** and track the original repository:

   ```bash
   git clone https://github.com/<your-username>/elephantronics-wiki.git
   cd elephantronics-wiki
   git remote add upstream https://github.com/MyLifeMyRulesMyCar/elephantronics-wiki.git
   ```

3. **Install dependencies.** Node.js 22.23.4 or newer is required.

   ```bash
   npm install
   ```

4. **Create a branch** and start the development server:

   ```bash
   git switch -c docs/your-change
   npm run dev
   ```

   Open <http://localhost:4321>.

5. **Make the change.** Content lives in `src/content/docs/`. Add new pages to
   the `sidebar` in `astro.config.mjs`; pages do not appear automatically.

6. **Check and build:**

   ```bash
   npm run check
   npm run build
   ```

7. **Commit, push, and open a pull request** against `main`:

   ```bash
   git add .
   git commit -m "docs: clarify the DHT22 pull-up note"
   git push -u origin docs/your-change
   ```

## Small fixes in the browser

Every content page has an **Edit page** link in its footer. GitHub will fork the
repository for you, let you edit the file, and open a pull request. No local
setup is needed.

## Before you open a pull request

- [ ] `npm run check` reports zero errors.
- [ ] `npm run build` succeeds.
- [ ] New pages have both `title` and `description` frontmatter.
- [ ] New pages are added to `sidebar` in `astro.config.mjs`.
- [ ] Internal links use root-relative paths such as `/section/page/`.
- [ ] Technical claims are sourced, measured, or clearly marked unverified.
- [ ] Example pin maps and values are labelled as examples.
- [ ] Screenshots and figures are included for visual changes.
- [ ] Images are WebP under `public/images/<page-slug>/` with alt text and captions.
- [ ] Animated demos are optimized WebP, not multi-megabyte GIFs.
- [ ] No secrets, personal data, `node_modules/`, `dist/`, or `.astro/` are committed.

The **Check pull request** workflow runs the type check and production build on
every pull request.

## Images and animation

Article media belongs in `public/images/<page-slug>/`:

- **Static images:** WebP, resized to the display width (maximum around 1400px),
  quality 82–88. Use the `Figure` component with alt text, dimensions, and a
  caption.
- **Animations:** animated WebP at 640–960px, lazy-loaded. Do not commit
  multi-megabyte GIFs; keep the original source file outside the repository.
- **Screenshots:** remove personal data such as Wi-Fi names, passwords, serial
  numbers, email addresses, and location data.
- **Rights:** only upload media you have permission to publish. Do not hotlink
  images from other sites.

## Content rules

- **Do not claim verification you have not done.** New tutorials stay
  `status="draft"` until the circuit has been built and checked.
- **Do not invent specifications.** If a value is unavailable, leave it out.
- **Cite sources.** Vendor specifications are published values, not independent
  measurements, unless stated otherwise.
- **Stay within low-voltage DC.** Mains wiring and high-current battery
  instructions are out of scope.
- **Use original or licensed media.** Do not hotlink or copy copyrighted images.
- **Write for the reader.** One topic per page, clear title, useful description,
  no empty placeholders.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/content/docs/` | Markdown and MDX content |
| `src/components/` | Reusable Astro components |
| `public/images/` | Article images, one folder per page |
| `src/styles/custom.css` | Brand tokens and theme overrides |
| `astro.config.mjs` | Site metadata, sidebar, logo, fonts, custom domain |
| `.github/workflows/deploy.yml` | Deploys `main` to GitHub Pages |
| `.github/workflows/ci.yml` | Checks pull requests |
| `DEPLOYMENT.md` | GitHub Pages and DNS runbook |
| `src/assets/README.md` | Logo and favicon guidance |

## Deployment

Do not deploy manually. Merging a pull request into `main` triggers the GitHub
Pages workflow. Contributors do not need DNS or deployment credentials.

## Questions

Open an
[issue](https://github.com/MyLifeMyRulesMyCar/elephantronics-wiki/issues) with
the page URL, what you expected, and what happened. The full guide covers common
problems such as port conflicts, missing sidebar entries, and MDX import paths.
