# Audit form — how leads are delivered

The audit form (`#audit`, in `site/src/components/sections/FinalCta.astro`) is the site's primary
conversion. Here's how it delivers, in order of preference. Configure it in
`site/src/config/site.ts`.

> Before this was wired, the form showed "success" but **discarded** the lead. That's fixed — it now
> never shows success unless the lead was actually sent or handed to a mail client.

## Option A — Web3Forms (recommended, no backend, 60-second setup)

Server-side email straight to `info@fillcart.de`, no server code, keeps the site fully static.

1. Go to <https://web3forms.com> → enter **info@fillcart.de** → confirm the email → copy the
   **Access Key**.
2. Put it in `site/src/config/site.ts`:
   ```ts
   leadForm: {
     web3formsKey: 'YOUR-ACCESS-KEY',
     deliverTo: 'info@fillcart.de',
   },
   ```
   (Or, to keep it out of Git, read it from an env var and set `PUBLIC_WEB3FORMS_KEY` in Vercel —
   ask and I'll wire that variant.)
3. Deploy. Submissions now arrive in the inbox. The budget "< €5,000" option still blocks submit
   with the friendly notice, as before.

## Option B — no key set (current state): mailto fallback

If `web3formsKey` is empty, submitting opens the visitor's email client with a pre-filled message to
`deliverTo`. Not pretty, but **the lead is never silently lost**. Fine as a stopgap; switch to A or C
for a smooth experience.

## Option C — HubSpot form (best fit for the pipeline story)

When you have a HubSpot marketing form, fill in `INTEGRATIONS.hubspot` (`portalId`, `formId`,
`region`) in `site/src/config/site.ts`. The component then renders the **real HubSpot embed** instead
of the built-in form, and leads land directly in your CRM (matching the "we optimize on pipeline"
positioning). This takes priority over A/B automatically.

## Option D — self-hosted (leads never touch a third party)

If you'd rather not use a form service, add a Vercel Serverless Function (Astro endpoint with the
`@astrojs/vercel` adapter) that emails via Resend/SMTP. More setup (one API route + one provider
key); ask and I'll implement it.

---

**Also live already:** the Google Calendar booking embed (visitors can book a call directly) and
WhatsApp/phone — so there is always a working conversion path even while the form provider is being
chosen.
