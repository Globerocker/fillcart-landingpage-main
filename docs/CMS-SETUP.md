# Visual editing with TinaCMS

TinaCMS lets you (or anyone non-technical) edit the site's content in a browser — no code, no
AI. It's **Git-backed**: every edit is a commit to the GitHub repo, which triggers a Vercel
redeploy. Nothing can silently break; every version is recoverable in Git history.

## What you can edit today

Out of the box, Tina manages the four Markdown content types:

- **Insights (articles)**: English and German articles (`src/content/insights/en/` and `de/`): title, description, language, topic, dates, tags, hero stat, draft flag, body.
- **Case studies** (`src/content/work/`): anonymised client label, services, stack, role, period, metrics with definitions, and the `approved` switch that controls publication.
- **Projects & ventures** and **Partners** (`src/content/projects/`, `src/content/partners/`), each with an `approved` switch.

> The landing page's micro-copy (hero headline, section titles) currently lives in
> `site/src/i18n/de.ts` / `en.ts`. If you want those editable in Tina too, say the word and I'll
> move them into a Tina "global" — it's a mechanical conversion.

## How the editing feels (Astro specifics — honest version)

TinaCMS gives you an admin at **`/admin`** with a clean form editor **and a live preview pane**
beside it — change a field, watch it update. In Astro this is the admin-panel + preview flow
(rich, no-code, Git-versioned) rather than the full click-anywhere-on-the-page inline editing
you get in Next.js. It's exactly what you asked for — edit text and details yourself — just via
the side panel.

⚠️ The articles use a few **styled boxes** (stat callouts, CTA bands, checklists) written as
small HTML snippets in the body. Edit the surrounding text freely; if you ever mangle one of
those boxes, Git history has every version and it's a one-line fix. (Want them as click-in
components instead of HTML? That's a follow-up upgrade.)

## One-time setup (≈ 5 minutes)

> **Full step-by-step (tailored to your Vercel project): [`docs/CMS-ACCESS.md`](docs/CMS-ACCESS.md).**

1. **Create a free Tina project** at <https://app.tina.io> and connect your GitHub `fillcart` repo.
2. Tina gives you a **Client ID** and a **Token**. Add them to Vercel:
   - Vercel → Project → **Settings → Environment Variables**
   - `PUBLIC_TINA_CLIENT_ID` = your client id
   - `TINA_TOKEN` = your token
3. **Redeploy.** No build-command change needed — the build script (`site/scripts/build.mjs`)
   auto-detects the two env vars and builds the `/admin` app when they're present.
4. Go to **`https://fillcart.de/admin`**, log in with GitHub, and edit. Saves commit to `main`
   and redeploy automatically.

## Editing locally (optional, no cloud needed)

```bash
cd site
npm install
npm run dev:cms      # Astro + Tina local server
# open http://localhost:4321/admin  → edits write to your local Markdown files
```

## Adding a new article (example)

`/admin` → **Insights (articles)** → *Create New* → set the language, topic, title/description/date,
write the body, Save. Put the file under `site/src/content/insights/en/` or `de/`; Vercel rebuilds and
it appears on `/insights` or `/de/insights`. Case studies only go live once `approved` is switched on.

## Config

Everything is in **`site/tina/config.ts`** (the collections + fields). Media uploads go to
`site/public/assets/`. Generated files (`tina/__generated__/`, `public/admin/`) are git-ignored
and rebuilt on deploy.
