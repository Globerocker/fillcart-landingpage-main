# Fillcart Ads Manager — Design Documentation (reference copy)

> Text reference of the Google Ads API Basic Access design doc, kept in the repo so the website can
> be kept in sync with it. **The actual PDF is what you upload to Google (application Q8)** — keep
> this and the PDF consistent. Version 1.0 | July 2026.

## 1. Company profile & identity
- Legal entity: **FILLCART LLC**
- Registered address: **254 Chapman Rd Ste 208, Newark, DE 19702, US**
- Formation state / date: **Wyoming, USA | October 16, 2023**
- Entity ID: **2023-001346077** · EIN: **30-1376268** · Status: Active / Good Standing
- NAICS: **541810 — Advertising Agencies**
- Corporate website: **https://www.fillcart.de** · Email domain: **@fillcart.de** · API contact: **info@fillcart.de**
- Business model: agency retained by clients to plan/build/manage/optimize Google Ads + reporting.
  Revenue = management fees. Does **not** sell/license the tool or monetize API data.

## 2. Tool overview — "Fillcart Ads Manager"
- **Internal-use only**; 1 internal user (owner/account manager). No public sign-up, no third-party access.
- Stack: Python 3.12, official `google-ads` client library, pandas. Runs on company workstation + private VPS.
- Interface: CLI + scheduled (cron) jobs; output as PDF/spreadsheet client reports.
- Accounts: client production accounts linked to the FILLCART LLC **MCC**, plus dev test accounts.
- Requested permissible use: **Ad creation/management and Reporting**.

## 3. Features → Google Ads API services
| # | Feature | API services |
|---|---|---|
| F1 | Performance reporting | GoogleAdsService.SearchStream / Search (GAQL, read-only) |
| F2 | Campaign creation | CampaignService, CampaignBudgetService, CampaignCriterionService |
| F3 | Ad group & ad management | AdGroupService, AdGroupAdService, AssetGroupService, AssetService |
| F4 | Keyword management | AdGroupCriterionService |
| F5 | Search-term mining & negatives | GoogleAdsService.Search, CampaignCriterionService, SharedSetService, SharedCriterionService |
| F6 | Budget pacing & bid adjustments | CampaignBudgetService, CampaignService |
| F7 | Recommendations review | RecommendationService |
| F8 | Change auditing | GoogleAdsService.Search (change_event, read-only) |
| F9 | Client report generation | none (local processing of F1 data) |

- Campaign types managed/reported: Search, Performance Max, Shopping, Display, Video (YouTube),
  Demand Gen, App. **Creation via API focuses on Search + Performance Max.**
- **Human oversight:** all mutates (F2–F7) run dry-run → manual confirm before the mutate is sent.
  Scheduled jobs are read-only. No autonomous bidding/budget changes.

## 4. Architecture & auth
- OAuth 2.0 installed-app flow; refresh token for the account that administers the MCC. Consent
  screen configured under the same company identity.
- Developer token stored as an env var on the runtime host; never in source control; not shared.
- Scope: `https://www.googleapis.com/auth/adwords` only. Operates only on accounts in the MCC.
- Volumes well within Basic Access daily limit (15,000 ops): typically < 2,000 mutates/day, peak < 8,000.
- Retry with exponential backoff on rate limits; every request/failure logged with request-id.

## 5. Data handling & compliance
- Data: Google Ads performance + account-structure data of managed accounts. **No end-user personal data.**
- Storage: local encrypted, company-controlled hardware, single-user access.
- Retention: report caches up to 24 months; deleted on contract termination/request.
- Policy: internal-use only (RMF for external tools N/A), accurate & consistent identity, client
  authorization via MCC linking, no data misuse/resale, transparency via change audit (F8).
- §6.3: the corporate website describes the services and contains About, physical address, Privacy
  Policy, and **Terms of Service** pages. → see `docs/GOOGLE-ADS-API.md` for the site mapping.

## 6. Contact
Andre Schüler — Owner / Account Manager, FILLCART LLC · info@fillcart.de · https://www.fillcart.de
