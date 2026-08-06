# Hamdi Hassan — AI Product Builder

A warm, editorial one-page portfolio for Hamdi Hassan. Built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Install and run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

No separate formatter is configured.

## Edit portfolio content

All personal information, page copy, project descriptions, links, skills, availability text, image paths, and the production site URL are centralized in [`data/portfolio.ts`](data/portfolio.ts). Search that file for `TODO` to find values that still need to be supplied.

## Add project screenshots

Place screenshots in `public/projects/` using these names:

- `hamdi-os-dashboard.png`
- `mnmuslim.png`
- `mnhalal.png`
- `by-hamdi.png`

The page shows a neutral fallback automatically while a file is missing. Screenshots are displayed with their original proportions preserved inside a 16:10 product frame, so a 1600 × 1000 PNG, WebP, or AVIF is recommended. Avoid screenshots narrower than 1400 pixels.

The featured Hamdi OS layout can later support additional screenshots for Dashboard, History, Measurements, and Reviews without requiring a redesign.

## Replace the resume

Add the final PDF at:

`public/resume/hamdi-hassan-resume.pdf`

After adding it, set `portfolio.resumeUrl` in `data/portfolio.ts` to `"/resume/hamdi-hassan-resume.pdf"`. Until then, the visible header button remains intentionally disabled rather than sending visitors to a broken file.

## Add project and demo links

In `data/portfolio.ts`:

- Replace `null` in the Hamdi OS **Watch Demo** action with the Loom URL.
- Replace `null` in each **Visit Website** action with the final live URL.
- Add **View GitHub** URLs only for repositories that are public.
- Keep private repository URLs out of the file.

Actions with missing URLs render as non-clickable “Coming soon” labels, avoiding broken `#` links.

## Hamdi OS case study

The functional placeholder route is at `/projects/hamdi-os`. Its editable project text comes from `data/portfolio.ts`; route-specific metadata lives in `app/projects/hamdi-os/page.tsx`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected Next.js defaults.
4. Deploy. No environment variables are required.
5. Update `siteConfig.url` in `data/portfolio.ts` if the final domain differs.

## Content still needed

- [ ] Hamdi OS dashboard screenshot
- [ ] MNMuslim screenshot
- [ ] MNHalal screenshot
- [ ] By Hamdi screenshot
- [ ] Hamdi OS demo link
- [ ] Final project URLs
- [ ] Final public GitHub URLs
- [ ] Resume PDF
- [x] Twitter/X URL
- [ ] Optional LinkedIn URL
