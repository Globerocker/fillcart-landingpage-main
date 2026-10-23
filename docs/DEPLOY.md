# Deploying fillcart.de

The site is a static Astro app in **`site/`**. It builds to static HTML and can be hosted
anywhere. Recommended: **GitHub → Vercel** (auto-deploy on every push + preview URLs).

---

## 0. Before you go live (compliance — from the brief)

- [ ] **Remove the `fillcart.de → andreschuler.com` redirect.** Nothing else matters until
      `fillcart.de` serves its own page. This is Google-Ads-API compliance item #1.
- [ ] Confirm `info@fillcart.de` is reachable (it's shown on the site + in schema).
- [ ] Have the Impressum / Datenschutz drafts reviewed by a lawyer (they're flagged as drafts).

## 1. Put the code on GitHub

From your machine (this sandbox can't push for you):

```bash
# in the repo root
git remote add origin https://github.com/<you>/fillcart.git
git push -u origin main   # or push the feature branch, then merge to main
```

> If you only have the exported bundle, create an empty GitHub repo first, then run the two
> commands above pointing at it.

## 2. Import into Vercel (once)

1. Vercel → **Add New… → Project** → import the `fillcart` GitHub repo.
2. **Root Directory: `site`** ← important (the app is in the subfolder).
3. Framework preset: **Astro** (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. You get a `*.vercel.app` URL immediately.

From now on: **every push to `main` auto-deploys**; every branch/PR gets its own preview URL.

## 3. Custom domain

Vercel → Project → **Settings → Domains** → add `fillcart.de` (and `www`). Follow the DNS
records Vercel shows (A / CNAME) at your registrar. Set `SITE.baseUrl` in
`site/src/config/site.ts` to `https://fillcart.de` so canonical URLs + sitemap are correct
(already set).

## 4. Turn on the marketing integrations (when ready)

Environment variables on Vercel (Project → Settings → Environment Variables), then redeploy:
- `PUBLIC_GTM_ID` loads Google Tag Manager with Consent Mode v2 (everything denied until the visitor accepts the built-in banner).
- `PUBLIC_HUBSPOT_PORTAL_ID` + `PUBLIC_HUBSPOT_FORM_ID` (+ `PUBLIC_HUBSPOT_REGION`) switch the contact form to the HubSpot Forms API. `PUBLIC_WEB3FORMS_KEY` is the email fallback. See `docs/LEADS.md`.
- `PUBLIC_SHOW_DRAFTS` / `PUBLIC_SHOW_TODOS` are set to `true` for the Preview environment only.
- Company facts, booking link and feature flags live in `site/src/config/site.ts`.
- Redirects from the old URLs (`/wissen`, `/referenzen`, `/en/...`, andreschuler.com post slugs) are in `site/vercel.json`.

## 5. Enable the visual editor (TinaCMS)

See **`docs/CMS-ACCESS.md`** (full walkthrough) or `CMS-SETUP.md`. Short version: create a free
project at app.tina.io, add `PUBLIC_TINA_CLIENT_ID` + `TINA_TOKEN` to Vercel's env, redeploy → edit
at `fillcart.de/admin`. No build-command change needed — the build auto-detects the env vars.

---

## Alternatives (if you don't want Vercel)

- **Netlify** — same flow; set Base directory `site`, build `npm run build`, publish `site/dist`.
- **Cloudflare Pages** — root `site`, build `npm run build`, output `dist`.
- **Any static host** — run `cd site && npm ci && npm run build` and upload `site/dist/`.
