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

- `hamdi-os-dashboard.png` and `hamdi-os-demo.mp4` (already supplied)
- `mnmuslim-preview.mp4` and `mnmuslim-poster.png` (already supplied)
- `mnhalal-preview.mp4` and `mnhalal-poster.png` (already supplied)
- `by-hamdi-preview.mp4` and `by-hamdi-poster.png` (already supplied)

The page shows a neutral fallback automatically while a file is missing. Screenshots are displayed with their original proportions preserved inside a 16:10 product frame, so a 1600 × 1000 PNG, WebP, or AVIF is recommended. Avoid screenshots narrower than 1400 pixels.

The featured Hamdi OS layout is prepared for sanitized media showing Dashboard, Measurements, Recaps, Settings, Current Season, time-based planning, and Life Areas.

The MNMuslim, MNHalal, and By Hamdi recordings are lightweight and load only when their project frames approach the viewport. They pause when scrolled away. Small mobile screens, reduced-motion preferences, and data-saver connections receive static posters instead.

## Resume

The current resume is stored at:

`public/resume/hamdi-hassan-resume.pdf`

To replace it, overwrite that file while keeping the same filename. If the filename changes, update `portfolio.resumeUrl` in `data/portfolio.ts`.

## Hamdi OS screenshot and demo video

Add sanitized Hamdi OS media at:

- `public/projects/hamdi-os-dashboard.png`
- `public/projects/hamdi-os-demo.mp4`

The screenshot is the default media and the video is detected automatically. The video uses the same lazy, viewport-aware, muted playback behavior as the other project previews. If it is ever removed, no broken video element is rendered.

Use only demo-account or explicitly approved data for Hamdi OS portfolio screenshots and videos.

Never record a real personal account. Hamdi OS can contain private goals, religious routines, health information, financial information, family information, and personal measurements.

### Suggested demo account

Create the demo account inside Hamdi OS—not in this portfolio—with fully fictional information:

- Name: Amina
- Current Season: Growth
- Life Areas: Health, Career, Learning, Finance, Family
- Health: Exercise, drink water, weekly weigh-in
- Career: Complete portfolio update, apply to three opportunities
- Learning: Read 20 minutes, complete a course lesson
- Finance: Weekly budget review, save toward an emergency fund
- Family: Call family, plan a family visit

## Add project links

In `data/portfolio.ts`:

- Update live project URLs in each project’s `actions` array.
- Add **View GitHub** actions only for repositories that are public.
- Keep private repository URLs out of the file.

Actions with missing URLs are hidden, avoiding broken or misleading links.

## Hamdi OS case study

The first case-study version is at `/projects/hamdi-os`. Its editable project and case-study text comes from `data/portfolio.ts`; route-specific metadata and layout live in `app/projects/hamdi-os/page.tsx`.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected Next.js defaults.
4. Deploy. No environment variables are required.
5. Update `siteConfig.url` in `data/portfolio.ts` if the final domain differs.

## Content still needed

- [x] Hamdi OS dashboard screenshot
- [x] MNMuslim product preview video and poster
- [x] MNHalal product preview video and poster
- [x] By Hamdi product preview video and poster
- [x] Sanitized Hamdi OS demo video
- [x] MNMuslim, MNHalal, and By Hamdi live URLs
- [ ] Any future public GitHub URLs
- [x] Resume PDF
- [x] Twitter/X URL
- [ ] Optional LinkedIn URL
