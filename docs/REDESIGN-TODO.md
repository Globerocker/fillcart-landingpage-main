# Redesign: open inputs, approvals and switches

Status after the October 2026 rebuild (branch `redesign-2026`). Everything below renders as a visible
`TODO` callout in `npm run dev` and on Vercel preview deploys, and is hidden in production.

## How the gates work

| Gate | Where | Effect |
|------|-------|--------|
| `approved: false` on a case study | `site/src/content/work/*.md` | Page is not built in production. Set `approved: true` to publish. |
| `approved: false` on a partner / project | `site/src/content/partners/*.md`, `projects/*.md` | Card hidden in production. |
| `SITE.flags.showMenuPrices` | `site/src/config/site.ts` | `false` replaces every menu price with "Scoped after the audit". |
| `SITE.flags.nameEmployers` | `site/src/config/site.ts` | `true` names Matrix42, CIXON, NX Digital, Bloom Rocket on the About timeline. |
| `SITE.flags.showPhone` | `site/src/config/site.ts` | Hides phone numbers in footer and contact page. |
| `PUBLIC_SHOW_DRAFTS` / `PUBLIC_SHOW_TODOS` | Vercel env (Preview only) | Show drafts and TODO callouts on preview deploys. |

## Decisions taken in the build (reverse if wrong)

1. **Audit price**: the free audit is gone; the site sells the 500 EUR Revenue & Marketing Audit from the proposal PDF.
2. **Menu prices**: taken from the October 2026 price menus (USD on English pages, EUR on German pages). The briefing had said "scoped after the audit" until numbers exist; the menus are those numbers. Flip `showMenuPrices` to hide.
3. **Fractional notice period**: "monthly notice" (price menu) rather than "two months" (briefing). Terms page says "notice to the end of the following month unless the offer states otherwise".
4. **Proof bar figures**: the six numbers from the price menus (3 years Head of Marketing, 75 implementations, 55,000 contacts, $40 per lead / 56% accepted, +133% inbound, 53 Fiverr reviews at 4.7). "5 years" / "6+ years" / "20+ certifications" are not used.
5. **CPL figure**: $40 (price menu and Upwork). LinkedIn About still says EUR 20 to 30; align LinkedIn or change the site.
6. **Language default**: English at `/`, German at `/de/` as the briefing specifies. The old German URLs redirect (see `site/vercel.json`).
7. **Insights**: the 18 German articles from the old site were kept (voice changed to first person, dashes removed, links rewritten); the 3 andreschuler.com posts were migrated to English.
8. **Old references** (10 agency client cases) were not carried over; they are in git history on `main`.
9. **Contact**: `info@fillcart.de` everywhere. German pages show the +49 number, English pages the +1 number.
10. **Portrait**: the old site's cut-out photo is used until the final photo arrives.

## Still needed from Andre

| # | Input | Where it lands |
|---|-------|----------------|
| 1 | Primary domain and the andreschuler.com redirect (DNS to Vercel, add domain in Vercel). Old post paths are already redirected in `vercel.json`. | Vercel → Domains |
| 2 | Approve each case study and its numbers (8 drafts, all `approved: false`). Fill `period`, review "What did not work". | `site/src/content/work/` |
| 3 | Permission to name CIXON, Matrix42, NX Digital, Bloom Rocket, EnBW, DEKRA | `nameEmployers` flag; CS-06 copy |
| 4 | Final portrait and working shots | `site/src/assets/andre.png` (replace file) |
| 5 | Sergio: confirm role line, photo, link | `site/src/content/partners/americurial.md` |
| 6 | Phil: approval, headshot/logo, preferred link | `site/src/content/partners/appart.md` |
| 7 | LEKJAW: role wording, show or hide | `site/src/content/projects/lekjaw.md` |
| 8 | Testimonials: none on the site yet. Quote block styling exists; add real quotes only. | copy + a `<blockquote>` in the relevant page |
| 9 | Contact email (fillcart.de vs andreschuler.com) and whether to show phone/WhatsApp | `site/src/config/site.ts` |
| 10 | GTM container ID, HubSpot portal ID + form GUID (or a Web3Forms key as fallback) | Vercel env vars, see `docs/DEPLOY.md` |
| 11 | Legal pages reviewed by a lawyer (draft note is shown on each page) | `site/src/pages/{imprint,privacy,terms}.astro` and `de/` |
| 12 | Links for the remaining certificates (Google Ads, Google Partner, LinkedIn, Shopify) | `site/src/i18n/en.ts` / `de.ts` → `about.certs` |
| 13 | Shipping timeline entry: dates and wording | `about.timeline.items` in both dictionaries |
| 14 | LinkedIn headline / location / CPL alignment (briefing §10) | LinkedIn |

## Acceptance criteria (briefing §13) status

- [x] All EN pages exist; DE exists for Home, About, Services (+ Audit, Sprint, Fractional), Contact, ROI, Insights, legal.
- [x] No past-employer name anywhere in `src/` or `dist/` (build fails otherwise).
- [x] No em/en dash in copy (build fails otherwise).
- [x] No location of Andre stated.
- [x] German copy uses "du".
- [x] No `approved: false` case study in the production build (build fails otherwise).
- [x] Booking CTA in the header on every page and at the end of every page.
- [ ] HubSpot form + GA4 events verified in GTM preview: needs the IDs (events are wired: `cta_book_click`, `form_submit`, `audit_view`, `case_study_read`, `lang_switch`, `consent_update`).
- [x] Lighthouse mobile (local preview of the production build): Home 99/100/100/100, Services 99/98→100 after heading fix/100/100, article 99/100/100/100.
- [x] Dot grid on light sections, line texture on dark sections, tokens from §8.
- [x] F monogram as header lockup, favicon (32/180/512), OG images (generated at build).
- [x] 301 redirects for the old URLs (`site/vercel.json`).
- [x] Legal pages show FILLCART LLC, no EIN.
