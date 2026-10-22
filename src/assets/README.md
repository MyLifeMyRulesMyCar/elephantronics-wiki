# Logo assets

`logo.png` and `public/favicon.png` use the **official Elephantronics
elephant-circuit mark**, recovered from the article assets supplied with the
source pages. The mark is navy and cyan on a white background.

It was cropped to remove excess white margin and resized; it was **not**
recoloured or redrawn.

## Files

- `src/assets/logo.png` — header logo, 256 × 256, white background.
- `public/favicon.png` — square favicon, 128 × 128, derived from the same mark.

Both are referenced from `astro.config.mjs` (`logo.src` and `favicon`).

## Replacing the artwork

If Elephantronics supplies a new official logo:

1. Put the new file in this folder, for example `logo.png` or `logo.svg`.
2. Update `logo.src` and `logo.alt` in `astro.config.mjs` if the filename changes.
3. Replace `public/favicon.png` with a square version of the new mark.
4. Keep the original colours and aspect ratio. Do not stretch, recolour, or
   redraw the mark to fit the template.

## Light and dark variants

The current mark has a white background and is legible on both themes. If a
transparent or dark-background variant becomes available, use Starlight's
variant configuration:

```js
logo: {
  light: './src/assets/logo-light.png',
  dark: './src/assets/logo-dark.png',
  alt: 'Elephantronics',
},
```

## Recommended formats

- **Header logo:** square or compact mark, at least 128 px, with the official
  clear space preserved.
- **Favicon:** square, at least 32 × 32 px, readable at small sizes; PNG or SVG.
- **Source artwork:** keep the original file outside the repository if it is very
  large, and commit only the display-sized asset.
