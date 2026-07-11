# Google Ads API — Basic Access resubmission guide

You've been rejected twice. Google explicitly warns against **identical resubmissions**, so this
attempt has to (a) present a website that matches the design doc and (b) answer the form precisely
and consistently. Below is what the site now provides, the recommended form answers, and the
pre-submit checklist.

---

## 1. Website ↔ design-doc alignment (done on the site)

Your design doc (§6.3) states the website "describes the company's Google Ads management services
and contains an About Us section, the physical business address, and Privacy Policy and Terms of
Service pages." The site now delivers all of that, **in English** (your primary review URL is
`https://www.fillcart.de/en/`):

| Doc requirement | Where on the site |
|---|---|
| Google Ads management service described | `/en/` (services section) + `/en/about` |
| Internal **Fillcart Ads Manager** tool + Google Ads API use described | `/en/about` → "How we work — our internal platform" |
| About Us | `/en/about` |
| Physical business address | footer (every page) + `/en/about` company details |
| Contact email `info@fillcart.de` | footer + About + all legal pages |
| Privacy Policy | `/en/privacy` |
| **Terms of Service** | `/en/terms` ← was missing before; now added |

Identity now matches the doc **exactly** (cross-checked): legal name **FILLCART LLC**, address
**254 Chapman Rd Ste 208, Newark, DE 19702, US**, formation **Wyoming (2023-10-16)**, Entity ID
**2023-001346077**, NAICS **541810**, domain **fillcart.de**, email **info@fillcart.de**. Keep these
byte-identical across the site, the MCC, the Google Cloud project, and this application.

---

## 2. Recommended answers to the application form

Your pasted draft is mostly good. Change the flagged ones so the form matches the design doc.

| # | Question | Recommended answer |
|---|---|---|
| 2 | Google Cloud project ID | `gen-lang-client-0327987210` |
| 3 | Manager account (MCC) ID | `8348982956` |
| 4 | Contact email | `info@fillcart.de` |
| 5 | Ongoing relationship with a Google rep? | **No** (unless you actually have one) |
| 6 | Primary website URL | `https://www.fillcart.de/en/` ✓ |
| 7 | Business model / tool / audience | see improved text below |
| 8 | Design documentation | **Upload the PDF** `FILLCART_Ads_Manager_Design_Documentation.pdf` (you have it) |
| 9 | Who has access? | **Internal users — employees only** (the doc says internal-use-only) |
| 10 | Use token with a tool built by someone else? | **No** (it's your own Python tool) |
| 11 | App Conversion Tracking & Remarketing API? | **No** (the tool doesn't use that specific API) |
| 12 | Campaign types | **Search, Performance Max** ← your draft said only "Search"; the doc's creation focus is Search + PMax. |
| 13 | Capabilities | **Account Management, Campaign Creation, Campaign Management, Reporting** |

**On Q13 — do NOT check:**
- *Account Creation* — you don't create Google Ads accounts; clients own them and link via the MCC.
- *Keyword Planning Services* — that means the KeywordPlanIdeaService (forecasts/ideas). Your doc
  manages keywords via `AdGroupCriterionService` (that's Campaign Management), not the planner. Only
  check it if you actually build keyword-forecasting features.

### Improved Q7 text (matches the doc)
> FILLCART LLC is a US-registered B2B digital advertising agency specializing in Google Ads
> management, with HubSpot CRM integration and performance reporting. We manage our clients' own
> Google Ads accounts, linked to our Google Ads Manager Account (MCC) via the standard account-linking
> process. We operate an internal-use-only tool, "Fillcart Ads Manager" (Python, official google-ads
> client library), used solely by our own team to streamline campaign creation, keyword and negative
> management, budget pacing, reporting, and change auditing across authorized client accounts. The
> tool is not sold, licensed, or made available to any third party. Requested capabilities: campaign
> creation/management and reporting.

---

## 3. Pre-submit checklist

- [ ] **`fillcart.de` and `/en/` load the real site** in a fresh incognito window — no redirect to
      andreschuler.com (this was the original rejection cause; it's fixed, but verify live after deploy).
- [ ] The updated site is **deployed** (About tool section, `/en/terms`, `/agb`) before you submit.
- [ ] **OAuth consent screen** in Google Cloud project `gen-lang-client-0327987210` shows the app
      name / support email under the **FILLCART LLC** identity (`info@fillcart.de`). A mismatched or
      unconfigured consent screen is a common rejection reason.
- [ ] The **PDF design doc** you upload at Q8 matches the live site (tool name, features, address).
- [ ] The **"Google Partner"** badge on the site is a **real, current status** for the MCC you're
      applying with. If it isn't verified yet, remove the badge before submitting (asserting an
      unverified partner status is a risk). Badge shows in the footer + Proof section.
- [ ] Legal name + address are **identical** everywhere (site, MCC, GCP, form).
- [ ] Have counsel glance at the Privacy Policy and Terms (they're solid drafts, not vetted legal text).

---

## 4. What changed since the last rejection (say this if there's a free-text field)

1. `fillcart.de` now serves its **own** website (the redirect to andreschuler.com is removed).
2. Added an explicit description of the **internal Fillcart Ads Manager tool and its Google Ads API
   use** on the About page — the site now matches the design doc.
3. Added the missing **Terms of Service** page and completed the **Privacy Policy** (real providers,
   no placeholders).
4. **Consistent company identity** across the website, MCC, Google Cloud project, and application.
5. Working **contact** (email, phone, WhatsApp, live booking calendar) visible site-wide.

> Note: the design doc correctly states the tool is **internal-use-only**, so the Required Minimum
> Functionality (RMF) rules for external tools don't apply — but the site still presents a complete,
> professional, verifiable business, which is what the manual reviewer checks.
