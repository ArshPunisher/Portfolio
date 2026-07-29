# Arsh Ramgarhia — Portfolio

Personal portfolio site built with Next.js 15 (App Router), React 19, TypeScript
and Tailwind CSS v4.

**Live:** https://portfolioarsh.vercel.app

## Getting started

```bash
yarn install
yarn dev
```

Open http://localhost:3000.

The app builds and runs with **no environment variables**. They are only needed
for the contact form to deliver mail — copy `.env.example` to `.env.local` and
fill in your Resend credentials if you want that working locally.

## Scripts

| Script           | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `yarn dev`       | Dev server                                     |
| `yarn build`     | Production build                               |
| `yarn start`     | Serve the production build                     |
| `yarn typecheck` | `tsc --noEmit`                                 |
| `yarn lint`      | ESLint                                         |
| `yarn test`      | Vitest unit tests                              |
| `yarn format`    | Prettier write                                 |
| `yarn verify`    | typecheck → lint → test → build (what CI runs) |

## Project structure

```
src/
  app/                 Routes, metadata, sitemap/robots, API
    api/contact/       Contact form endpoint
  assets/              Images and SVGs imported by components
  components/
    common/            Button, Loading, SocialMedia
    layout/            Navbar, SplashScreen
    lottie/            LottiePlayer
    sections/          Home, Skills, Experience, Projects, Contact
  data/                portfolio.ts — all site content, and its types
  hooks/               useHideOnScroll
  lib/                 mail, rateLimit
  utils/               contactSchema, escapeHtml
public/
  animations/          Lottie JSON, fetched at runtime (never bundled)
```

## Editing content

Everything shown on the site lives in **`src/data/portfolio.ts`** — greeting,
skills, experience, projects, contact details. It is fully typed against
`src/data/types.ts`, so a mistyped field is a compile error rather than a
silently blank section.

Adding a project means adding one entry with an imported image:

```ts
import myProjectImg from "@/assets/imgs/my-project.webp";

export const projects: Project[] = [
  {
    image: myProjectImg,
    projectName: "My Project",
    projectDesc: "…",
    url: "https://…",
  },
];
```

## Notable implementation details

- **Content is server-rendered.** The splash screen is a CSS-driven overlay, not
  a gate — every section is in the initial HTML, so crawlers and link unfurlers
  see real content. The overlay also clears without JS.
- **Animations are not bundled.** Lottie JSON is fetched from `/public` only
  when a player scrolls near the viewport, keeping several hundred KB out of the
  page bundle.
- **Contact endpoint** validates with Zod, escapes all user input before it
  reaches the HTML email, rate-limits per IP, and never returns internal error
  detail to the client.
- **Reduced motion** is respected throughout — splash, marquee, card tilt, wave
  and Lottie playback.

## Deployment

Deploys to Vercel from `master`. Set `RESEND_API_KEY`, `MAIL_FROM` and `MAIL_TO`
in the project's environment variables for the contact form; optionally
`GOOGLE_SITE_VERIFICATION` for Search Console.
