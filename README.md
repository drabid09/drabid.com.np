# drabid.com.np

Personal site of Drabid Subedi, served by GitHub Pages at https://drabid.com.np.

It is a static site built with [Astro](https://astro.build). One page, no database, no tracking, no JavaScript framework in the browser.

## Change what the site says

All of the words live in one file: [`src/data/site.ts`](src/data/site.ts). Edit it, commit and push to `main`. The site rebuilds and goes live in a minute or two.

Rule for that file: every number, date, employer and outcome must be one Drabid has confirmed.

## Add photos

The design works without images and has three marked slots, all in `src/data/site.ts`:

| Slot | Field | Where it shows |
|---|---|---|
| Portrait | `site.portrait` | Hero, beside the headline |
| Project screenshots | `image` on each project | Full width above the project |
| Workshop photos | `teaching.photos` | A row above the session list |

Put the files in `public/images/` and fill in `src`, `alt`, `width` and `height`. Each slot stays hidden until it has a photo.

## Run it locally

```
npm install
npm run dev      # live preview at http://localhost:4321
npm run build    # writes the site to dist/
npm run check    # checks the built page (headings, links, meta tags, required files)
```

Needs Node 22 or newer.

## How it is put together

```
src/data/site.ts        every word on the site
src/styles/global.css   colours, type scale and spacing, as tokens
src/components/         one file per section
src/layouts/Base.astro  <head>, structured data, and the small script for the theme switch and menu
src/pages/index.astro   the order of the sections
public/                 files copied as they are (CNAME, icons, sharing image, fallback font)
scripts/check.mjs       checks run after every build
```

Colour and theme: sections pick one of three tones (`tone-page`, `tone-alt`, `tone-band`) and components only read local tokens (`--bg`, `--fg`, `--fg-2`, `--rule`, `--hl`). Light and dark values are both defined in `global.css`. The switch in the nav stores the visitor's choice in their browser.

Type: the system font, which is SF Pro on Apple devices. Other devices load Inter from `public/fonts/` (SIL Open Font License, see `public/fonts/INTER-LICENSE.txt`).

## Deployment

`.github/workflows/deploy.yml` builds, checks and publishes on every push to `main`. In the repository's **Settings → Pages**, the source must be set to **GitHub Actions**. The custom domain is kept in `public/CNAME`.

Pull requests are built and checked but not published.
