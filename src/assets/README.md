# Logo assets

`logo.svg` and `public/favicon.svg` are **placeholders**, not the official
Elephantronics logo. They exist so the header, browser tab, and social previews
have a clean mark while the real artwork is unavailable.

## Replace the placeholder

1. Put the official artwork in this folder, for example `logo.svg` (or `.png`).
2. Update `logo.src` in `astro.config.mjs` if the filename changes.
3. Update `logo.alt` in `astro.config.mjs` with a short description of the mark.
4. Replace `public/favicon.svg` with a square version of the official mark
   (`.svg`, `.png`, `.ico`, `.gif`, or `.jpg`). Update `favicon` in
   `astro.config.mjs` if the filename changes.

## Recommended formats

- **Header logo:** horizontal lockup on a transparent background, around 40 px
  tall, with enough clear space around the mark. SVG is preferred.
- **Favicon:** square, at least 32 × 32 px, readable at small sizes.
- **Light/dark variants:** if the official artwork needs different files per
  theme, use Starlight's variant config instead of `src`:

  ```js
  logo: {
    light: './src/assets/logo-light.svg',
    dark: './src/assets/logo-dark.svg',
    alt: 'Elephantronics',
  },
  ```

Do not stretch, recolour, or redraw the official logo to fit the template. If
only a raster file is available, use it at its natural aspect ratio.
