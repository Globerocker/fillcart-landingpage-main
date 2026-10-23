# Logging into the CMS (TinaCMS) — why it doesn't work yet, and the 5-minute fix

## Why you can't log in right now

The editor lives at **`https://fillcart.de/admin`**. Today that URL returns **404** — the admin
app was never built into the deployment. Two things are missing:

1. There is **no TinaCMS Cloud project** yet, so there's no Client ID / Token.
2. Because those aren't set, the build skips the `/admin` app (by design — so the site never breaks
   while Tina is half-configured).

Good news: the code is fully wired. Once the two secrets exist in Vercel, the next deploy builds
`/admin` automatically — **no build-command change needed** (the build script auto-detects them).

## What I could and couldn't do for you

- ✅ Wired the build so `/admin` appears automatically once the env vars are present.
- ❌ I **cannot** create the Tina Cloud project or set the Vercel secrets for you: creating the
  project needs a browser login to app.tina.io (your GitHub account), and Vercel doesn't expose
  secret-writing to me. Those two steps below are yours — they take ~5 minutes.

## The 5-minute setup (do this once)

**1. Create a free Tina Cloud project**
- Go to <https://app.tina.io> → sign in **with GitHub**.
- **Create a project** → connect the GitHub repository that Vercel deploys this site from
  (the `fillcart` repo). Branch: `main`.
- Tina gives you a **Client ID** and lets you generate a **Read-Only/Read-Write Token** —
  choose a token with **content write** access.

**2. Add the two secrets in Vercel**
- Vercel → team **celluiq** → project **`fillcartpage`** → **Settings → Environment Variables**.
- Add (for **Production**, **Preview** and **Development**):
  | Name | Value |
  |------|-------|
  | `PUBLIC_TINA_CLIENT_ID` | your Client ID from Tina |
  | `TINA_TOKEN` | your token from Tina |
- Save.

**3. Redeploy**
- Vercel → **Deployments → ⋯ on the latest → Redeploy** (or just push any commit).
- In the build log you should now see: `→ TinaCMS credentials found: building the /admin editor + site.`

**4. Log in and edit**
- Open **`https://fillcart.de/admin`** → log in with GitHub.
- Every save commits to `main` on GitHub, which triggers an automatic Vercel redeploy.
  Nothing can silently break — every version is in Git history.

## What you can edit

- **Insights (articles)**: EN and DE articles (title, description, language, topic, dates, tags, hero stat,
  draft flag, body). You can also create new articles.
- **Case studies**, **Projects** and **Partners**: each with an `approved` switch that controls publication.
- Media you upload in Tina lands in `site/public/assets/`.

> The landing-page micro-copy (hero headline, section titles) lives in `site/src/i18n/de.ts` /
> `en.ts`, not in Tina. If you want those editable in the CMS too, say so — it's a mechanical
> conversion into a Tina "global".

## Editing locally (optional, no cloud needed)

```bash
cd site
npm install
npm run dev:cms          # Astro + Tina, writes to your local Markdown files
# open http://localhost:4321/admin
```

## Config reference

- Collections + fields: `site/tina/config.ts`
- Build entrypoint (auto-detects the env vars): `site/scripts/build.mjs`
- Generated files (`tina/__generated__/`, `public/admin/`) are git-ignored and rebuilt on deploy.
