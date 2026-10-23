# Andre Schüler × FILLCART — fillcart.de

Personal-brand plus consultancy site for **Andre Schüler** (Fractional Head of Marketing & RevOps
for B2B SaaS) and **FILLCART LLC**. Built from the website briefing of 23 Oct 2026, the audit
proposal and the October 2026 price menus. English is the default language (`/`), German lives under
`/de/`. Built with **Astro 7 + Tailwind v4 + MDX**, deployed on **Vercel**.

## Repo layout

```text
.
├── site/         ← the website (Astro). Vercel deploys ONLY this folder (Root Directory = site).
├── docs/         ← guides: deploy, leads/forms, CMS, Google Ads API, and the open-inputs list
├── reference/    ← source material, not shipped (old design handoff, chats, research)
└── README.md
```

Inside `site/`:

```text
src/
├── pages/              routes. EN at /, DE under /de/ (thin wrappers around components/pages/*)
├── components/pages/   one assembly per page type (Home, About, Services, Audit, Sprint, …), locale-agnostic
├── components/         Header, Footer, Logo (F monogram), cards, MenuGroup, ContactForm, RoiCalculator, …
├── layouts/            BaseLayout (head, meta, hreflang, JSON-LD, Consent Mode + GTM), Article/Case/Legal layouts
├── i18n/en.ts, de.ts   ALL copy. Edit text here, never in components. routes.ts maps EN↔DE paths.
├── config/site.ts      company facts, contact, booking link, feature flags
├── config/env.ts       env-driven integrations (GTM, HubSpot form, Web3Forms, preview flags)
├── content/            work/ (case studies, approved gate) · insights/en + insights/de · projects/ · partners/
├── data/               German interactive checklists (/de/checklisten)
├── lib/                i18n, content queries (approved/draft gates), SEO schema builders
└── styles/global.css   design tokens (@theme), textures (.bg-dots / .bg-lines), components
public/brand/           F monogram (SVG + PNG icons), dot-grid and line tiles
scripts/                build.mjs (lint → OG → astro build → lint), lint-content.mjs, og.mjs, brand.mjs
```

## Develop

```bash
cd site
npm install
npm run dev            # http://localhost:4321 (drafts + TODO callouts visible in dev)
npm run build          # production build incl. content lint and OG images
npm run preview        # serve the build locally
npm run check          # astro type check
npm run lint:content   # content rules on src/ and dist/
```

Requires Node ≥ 20 (Vercel uses 24.x).

## Deploy

Vercel, **Root Directory = `site`**, framework Astro. Every push to `main` auto-deploys to
fillcart.de; every other branch gets a preview URL (login required, SSO protection is on for
`*.vercel.app`). Preview deploys have `PUBLIC_SHOW_DRAFTS=true` and `PUBLIC_SHOW_TODOS=true`, so
unapproved case studies and the open-input callouts are visible there and only there.
Full guide: [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Content rules (enforced by the build)

`scripts/lint-content.mjs` fails the build if copy breaks the briefing's rules:
no past-employer names or brands, no em/en dashes, no formal "Sie" in German copy, no EIN,
and no `approved: false` case study in a production build. See `docs/REDESIGN-TODO.md` for
everything that still needs Andre's input.

## Guides

| Topic | Doc |
|-------|-----|
| Open inputs, approvals and flags | [`docs/REDESIGN-TODO.md`](docs/REDESIGN-TODO.md) |
| Deploying, env vars, redirects | [`docs/DEPLOY.md`](docs/DEPLOY.md) |
| Contact form delivery (HubSpot / Web3Forms) | [`docs/LEADS.md`](docs/LEADS.md) |
| Visual editor (TinaCMS) | [`docs/CMS-SETUP.md`](docs/CMS-SETUP.md), [`docs/CMS-ACCESS.md`](docs/CMS-ACCESS.md) |
| Google Ads API token resubmission | [`docs/GOOGLE-ADS-API.md`](docs/GOOGLE-ADS-API.md) |
