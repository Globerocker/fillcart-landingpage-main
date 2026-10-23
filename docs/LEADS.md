# Contact form: how requests are delivered

The contact form lives in `site/src/components/ContactForm.astro` and is shown on `/contact` and
`/de/kontakt`. It never shows "success" unless the request was actually sent or handed to a mail
client. Delivery mode is chosen at build time from environment variables (`site/src/config/env.ts`).

## Option A: HubSpot (target state)

Create a HubSpot form with these field internal names: `firstname`, `email`, `company`, `website`,
`message`, `markets` (single-line text), `budget_range` (single-line text or dropdown), plus optional
`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `page_path`, `language`.
Then set on Vercel (Production + Preview):

```
PUBLIC_HUBSPOT_PORTAL_ID=<portal id>
PUBLIC_HUBSPOT_FORM_ID=<form guid>
PUBLIC_HUBSPOT_REGION=eu1        # or na1
```

The form posts to the HubSpot Forms API from the browser (no server), including the `hutk` cookie
so the contact is tied to its HubSpot tracking record once GTM/HubSpot tracking has consent.

## Option B: Web3Forms (fallback, 60-second setup)

1. Go to <https://web3forms.com>, enter `info@fillcart.de`, confirm, copy the access key.
2. Set `PUBLIC_WEB3FORMS_KEY=<key>` on Vercel and redeploy.

Submissions arrive by email. Used automatically while the HubSpot IDs are missing.

## Option C: nothing set (current state)

Submitting opens the visitor's mail client with a pre-filled message to `info@fillcart.de`.
Works, but is the weakest option. A TODO callout on the form says so in dev/preview.

## Tracking

Every successful submission pushes `form_submit` (with `mode` and `page_path`) to the `dataLayer`.
Booking clicks push `cta_book_click` with a `location`. See `site/src/components/Behaviors.astro`.
