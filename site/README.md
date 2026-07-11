# Fillcart — Landingpage

Production implementation of the **Fillcart Google Ads Landingpage** (Deep Navy + Signal
Orange), built with [Astro](https://astro.build). Ported pixel-for-pixel from the Claude Design
prototype in `../project/`.

Bilingual (DE main on `/`, EN under `/en/`) with the About / Impressum / Datenschutz subpages,
the animated "cart fills with deals" hero, the 12-month ROAS timeline, an interactive ROI
calculator, the USP comparison table, FAQ accordion, and the audit form + HubSpot calendar slot.

## Getting started

```bash
npm install
npm run dev      # local dev server (http://localhost:4321)
npm run build    # static build → dist/
npm run preview  # serve the built site
```

The output is a fully static site (`dist/`) — deploy it to any static host (Netlify, Vercel,
Cloudflare Pages, S3, nginx …). Set `SITE.baseUrl` in `src/config/site.ts` to the production
origin so canonical URLs, `hreflang` tags and the sitemap are correct.

## Wiring the real integrations

Everything third-party reads from **one file: `src/config/site.ts`**. Fill these in and rebuild —
no other file needs to change. Each is a no-op until its id is present (so the site works as-is
with the designed placeholders):

| What | Field in `INTEGRATIONS` |
|------|-------------------------|
| HubSpot form (real lead capture replaces the placeholder form) | `hubspot.portalId`, `hubspot.formId`, `hubspot.region` |
| HubSpot Meetings calendar (replaces the mock calendar) | `hubspot.meetingUrl` |
| Google Tag Manager | `gtm.containerId` |
| Google Ads conversion (fired after consent) | `googleAds.conversionId`, `googleAds.conversionLabel` |
| Cookie-consent CMP (loads **before** GTM — DE market = mandatory) | `consent.provider`, `consent.id` |

Until `hubspot.portalId`/`formId` are set, the styled placeholder form is shown (with the
"under €5,000" budget-qualifier logic). Until `hubspot.meetingUrl` is set, the mock calendar is
shown. Company/legal data (address, entity id, email) also lives in `SITE.company`.

## Structure

```
src/
  config/site.ts        # ★ company data + all integration IDs (edit this)
  i18n/
    types.ts            # LandingContent shape
    de.ts / en.ts       # all page copy, per language
  lib/schema.ts         # JSON-LD (ProfessionalService, FAQPage, Organization)
  layouts/BaseLayout.astro   # <head>, meta, hreflang, fonts, GTM + consent, schema
  components/
    Header.astro Footer.astro Landing.astro Subpage.astro Behaviors.astro
    sections/           # Hero, Problem, Deal, Timeline, RoiCalculator,
                        # Usp, Services, Proof, Faq, FinalCta
  pages/
    index.astro                     # DE landing (/)
    ueber-fillcart / impressum / datenschutz .astro
    en/index.astro                  # EN landing (/en/)
    en/about / legal-notice / privacy .astro
  styles/global.css     # design tokens, keyframes, shared utilities, prose
public/assets/          # logos, icons, portrait, Google Partner badge
```

## Notes

- **Fonts are self-hosted** (`@fontsource` — Space Grotesk + Inter) rather than loaded from the
  Google Fonts CDN, which is the GDPR-safe choice for the DE market.
- **Animations respect `prefers-reduced-motion`**: the hero cart shows a static filled state and
  reveal-on-scroll / count-up effects are disabled.
- The legal pages (Impressum / Datenschutz and their EN counterparts) are **drafts** carried over
  from the copy deck and flagged as such — have them reviewed by a lawyer before go-live.
```
