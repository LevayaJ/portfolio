# Jayavel K — Portfolio

A premium, minimal, responsive portfolio built with Next.js (App Router), React, Tailwind CSS v4, and plain JavaScript (no TypeScript). Content is generated from Jayavel's resume and kept in structured data files so it can be updated without touching any component code.

## Tech stack

- **Next.js 16** (App Router, static rendering) — no custom backend, no database
- **React 19**, plain JavaScript (no TypeScript, per request)
- **Tailwind CSS v4** (CSS-based config, no `tailwind.config.js` needed)
- **next-themes** for accessible light/dark mode with system-preference detection
- **lucide-react** for icons (GitHub/LinkedIn marks are hand-rolled inline SVGs — lucide-react no longer ships brand/logo icons)
- **@fontsource-variable/inter** — Inter is self-hosted (bundled, no runtime Google Fonts fetch) for reliable builds behind proxies/firewalls
- Optional **Plausible** analytics (cookie-free, off by default)

## Project structure

```
src/
  app/
    layout.js          — root layout, metadata, JSON-LD, theme + analytics wiring
    page.js             — assembles all sections
    globals.css         — design tokens (colors, fonts) for light & dark mode
    sitemap.js           — /sitemap.xml
    robots.js            — /robots.txt
    opengraph-image.js   — social preview image (generated, no static asset needed)
    icon.js / apple-icon.js — generated favicon / apple touch icon
  components/           — one component per section (Hero, About, Skills, …)
  data/                 — ALL editable content lives here (see below)
public/
  resume/Jayavel-K-Resume.pdf  — the downloadable resume (original file, unmodified)
```

## Updating your content

You should never need to edit a component to change what's on the site — just edit the relevant file in `src/data/`:

| To change…                          | Edit…                     |
| ------------------------------------ | -------------------------- |
| Name, title, summary, email, socials | `src/data/profile.js`      |
| Skills / tools, grouped by category  | `src/data/skills.js`       |
| Job history and bullet points        | `src/data/experience.js`   |
| Projects / case studies              | `src/data/projects.js`     |
| Education                            | `src/data/education.js`    |
| Site title, meta description, keywords | `src/data/site.js`       |

### Adding a project

Open `src/data/projects.js` and add an object to the array:

```js
{
  name: "Project Name",
  period: "Company or year",
  description: "What the project is / does.",
  contribution: "What you personally did on it.",
  tech: ["Tag One", "Tag Two"],
  category: "Automation", // used by the filter buttons on the Projects section
  links: [
    // Only add a link if it's real — leave the array empty for private/client work.
    { type: "github", label: "View code", href: "https://github.com/you/repo" },
    { type: "live", label: "Live demo", href: "https://example.com" },
  ],
},
```

### Updating skills

Edit the `items` array under the matching category in `src/data/skills.js`, or add a new `{ category: "...", items: [...] }` block — new categories automatically appear as a new card and (if used consistently in `projects.js`) as a new filter option.

### Changing employment details

Edit `src/data/experience.js`. Each job is an object with `company`, `role`, `period`, `duration`, `current` (boolean — shows the "Current" badge), and a `bullets` array of plain strings.

### Replacing your resume

1. Drop your new PDF into `public/resume/`.
2. Update `profile.resume.href` and `profile.resume.filename` in `src/data/profile.js` to match the new filename (or just keep the same filename and overwrite the file).
3. Rebuild/redeploy.

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Building for production

```bash
npm run build
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in as needed:

- `NEXT_PUBLIC_SITE_URL` — your production URL (for canonical links, sitemap, OG tags). Optional: falls back automatically to the Vercel-provided URL if unset.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — set this to enable privacy-conscious Plausible analytics. Leave blank to keep analytics fully disabled (the default).

## Analytics (optional, off by default)

The site ships with an optional integration for [Plausible Analytics](https://plausible.io) — a cookie-free, privacy-first analytics service that does not collect personally identifiable visitor data and requires no cookie banner under GDPR.

- **Disabled by default.** `src/components/Analytics.jsx` renders nothing unless `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set.
- **To enable:** sign up at plausible.io (or self-host), add your domain, then set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com` in Vercel's Project Settings → Environment Variables, and redeploy.
- **To remove entirely:** delete `src/components/Analytics.jsx` and its import/usage in `src/app/layout.js`.
- No secret/private token is ever used or exposed — only your public domain name.

## Deploying to Vercel

1. **Push this project to a GitHub repository** (see "Git setup" below if it isn't already pushed).
2. Go to https://vercel.com/new and import the GitHub repository.
3. Vercel auto-detects Next.js — no build settings need to change (build command `next build`, output handled automatically).
4. (Optional) Add environment variables from `.env.example` under Project Settings → Environment Variables.
5. Click **Deploy**.
6. Once live, note the production URL. If you want metadata/canonical links to use it explicitly rather than the automatic Vercel fallback, set `NEXT_PUBLIC_SITE_URL` to that URL and redeploy.
7. (Optional) Attach a custom domain under Project Settings → Domains, then update `NEXT_PUBLIC_SITE_URL` to match.

### Git setup (if not already a repo on GitHub)

```bash
git init   # already done for you
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## SEO notes

- `src/app/sitemap.js` and `src/app/robots.js` generate `/sitemap.xml` and `/robots.txt` automatically from `src/data/site.js`.
- Structured data (`schema.org/Person`) is embedded in `src/app/layout.js`.
- Search indexing and ranking depend on Google/Bing actually crawling the site after deployment — this cannot be guaranteed or expedited by the code itself. You can speed up discovery by submitting the sitemap URL in Google Search Console after deploying.

## Accessibility

- Verified with an automated `axe-core` audit (0 violations against WCAG 2A/2AA, in both light and dark mode) plus manual keyboard-navigation and reduced-motion checks during development.
- All interactive controls (theme toggle, mobile menu, project filters) are keyboard-operable and expose correct ARIA attributes.
- Entrance animations are CSS-only (not scroll-triggered), so content is never hidden behind JavaScript/IntersectionObserver timing, and `prefers-reduced-motion` is fully respected.
