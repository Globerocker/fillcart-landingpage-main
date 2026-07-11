# Fillcart — fillcart.de

Marketing site for **FILLCART LLC**, a boutique Google Ads agency for B2B (DACH + USA) that
optimizes on pipeline value, not cost-per-lead. German is the primary language (`/`), English lives
under `/en/`. Built with **Astro**, content-managed with **TinaCMS**, deployed on **Vercel**.

## Repo layout

```text
.
├── site/         ← the website (Astro). Vercel deploys ONLY this folder.
├── docs/         ← how-to guides (deploy, CMS access, leads, Google Ads API)
├── reference/    ← source material, not shipped: original design handoff, chats, research dossiers
└── README.md
```

Inside `site/`:

```text
src/
├── pages/            routes — DE at /, EN under /en/; blog = /wissen, cases = /referenzen
├── components/
│   └── sections/     the landing-page blocks (Hero, Deal, Roi, Timeline, Proof, Faq, …)
├── i18n/de.ts,en.ts  ALL landing-page copy (edit copy here, not in components)
├── config/site.ts    the one control panel: company data + every integration toggle
├── content/          Markdown the CMS edits: blog/ (articles) + cases/ (references)
├── lib/schema.ts     JSON-LD structured data
└── layouts/          BaseLayout (head/meta/OG/tracking) + ArticleLayout
public/assets/        images — see public/assets/README.md for what goes where
```

## Develop

```bash
cd site
npm install
npm run dev            # http://localhost:4321
npm run dev:cms        # same, with the TinaCMS editor at /admin (local mode)
npm run build          # production build (auto-includes /admin if Tina env vars are set)
npm run preview        # serve the build locally
```

Requires Node ≥ 20 (Vercel uses 24.x).

## Deploy

Vercel, **Root Directory = `site`**, framework Astro. Every push to `main` auto-deploys.
Full guide: [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Configure (one file)

`site/src/config/site.ts` holds company details and every integration:
- **Lead form** delivery — [`docs/LEADS.md`](docs/LEADS.md)
- HubSpot form, GTM, Google Ads conversion, cookie-consent — all toggles, all here
- WhatsApp + Google Calendar booking are already live

## Guides

| Topic | Doc |
|-------|-----|
| Log into the CMS (why /admin 404s, the fix) | [`docs/CMS-ACCESS.md`](docs/CMS-ACCESS.md) |
| CMS overview (what's editable) | [`docs/CMS-SETUP.md`](docs/CMS-SETUP.md) |
| Deploying | [`docs/DEPLOY.md`](docs/DEPLOY.md) |
| Lead-form delivery | [`docs/LEADS.md`](docs/LEADS.md) |
| Google Ads API token resubmission | [`docs/GOOGLE-ADS-API.md`](docs/GOOGLE-ADS-API.md) |
