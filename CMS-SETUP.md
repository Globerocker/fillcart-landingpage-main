# Visual editing with TinaCMS

TinaCMS lets you (or anyone non-technical) edit the site's content in a browser — no code, no
AI. It's **Git-backed**: every edit is a commit to the GitHub repo, which triggers a Vercel
redeploy. Nothing can silently break; every version is recoverable in Git history.

## What you can edit today

Out of the box, Tina manages the two Markdown content types — the stuff that actually grows:

- **Wissen (Artikel)** — all 18 blog articles: title, description, category, dates, tags,
  the highlight stat, draft flag, and the full body text. **Create new articles** here too.
- **Referenzen (Cases)** — all 10 case studies: client, market, industry, focus chips, the
  real **KPI slots** (drop in your account/Search-Console numbers), and the story.

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

## One-time setup (≈ 10 minutes)

1. **Create a free Tina project** at <https://app.tina.io> and connect your GitHub `fillcart` repo.
2. Tina gives you a **Client ID** and a **Token**. Add them to Vercel:
   - Vercel → Project → **Settings → Environment Variables**
   - `PUBLIC_TINA_CLIENT_ID` = your client id
   - `TINA_TOKEN` = your token
3. Change the Vercel **Build Command** to:
   ```
   npm run build:cms
   ```
   (this builds the `/admin` app, then the site). Redeploy.
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

`/admin` → **Wissen (Artikel)** → *Create New* → pick the category, fill title/description/date,
set the highlight stat, write the body, Save. It lands in `site/src/content/blog/<category>/`,
Vercel rebuilds, and it appears on `/wissen/` and its category page automatically.

## Config

Everything is in **`site/tina/config.ts`** (the collections + fields). Media uploads go to
`site/public/assets/`. Generated files (`tina/__generated__/`, `public/admin/`) are git-ignored
and rebuilt on deploy.
