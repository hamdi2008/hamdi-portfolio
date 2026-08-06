# Hamdi Hassan — Portfolio

A one-page portfolio for Hamdi Hassan, AI Product Builder. Built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Run locally

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Edit text, projects, links, and skills

All portfolio content is centralized in [`data/portfolio.ts`](data/portfolio.ts). Update the project descriptions, button URLs, skills, social links, email address, and resume path there.

The About and Hero copy are in [`app/page.tsx`](app/page.tsx).

## Replace project screenshots

Add four images to `public/projects/` and update each project’s `screenshot` path in `data/portfolio.ts`. Use 1600 × 1200 pixel JPG, PNG, WebP, or AVIF images for the best result. Next.js automatically optimizes raster images through the `Image` component.

## Add the resume

Add the real resume as `public/hamdi-hassan-resume.pdf`, or change `resumeUrl` in `data/portfolio.ts`.

## Checks

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected Next.js defaults.
4. Click **Deploy**.

No environment variables, database, authentication, or CMS are required.
