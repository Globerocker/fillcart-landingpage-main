/**
 * Central site configuration.
 *
 * This is the ONE place to drop real integration credentials. Everything
 * (layout, tracking, forms, calendar embed) reads from here. Values that are
 * still placeholders are marked with `TODO` — replace them and rebuild.
 */

export const SITE = {
  /** Canonical production origin (no trailing slash). Used for hreflang + sitemap. */
  baseUrl: 'https://fillcart.de',

  company: {
    legalName: 'FILLCART LLC',
    email: 'info@fillcart.de',
    street: '254 Chapman Rd Ste 208',
    city: 'Newark',
    region: 'DE',
    postalCode: '19702',
    country: 'US',
    countryLabel: 'USA',
    entityId: '2023-001346077',
    registeredIn: 'Wyoming, USA',
    naics: '541810',
    founded: '2023-10-16', // formation date (Wyoming) — matches the Ads API design doc
    formationState: 'Wyoming',
    managingMember: 'Andre Schüler',
  },

  contact: {
    /** Human-readable phone, shown on the page. */
    phone: '+49 15678 471378',
    /** tel: href (no spaces). */
    phoneHref: 'tel:+4915678471378',
    /** wa.me link (country code + number, no + or spaces). */
    whatsapp: '4915678471378',
    whatsappHref: 'https://wa.me/4915678471378',
    /** Pre-filled WhatsApp message (URL-encoded at use site). */
    whatsappText: 'Hi Andre, ich hätte gern den kostenlosen Google-Ads-Audit.',
    whatsappTextEn: 'Hi Andre, I’d like the free Google Ads audit.',
  },
} as const;

/**
 * Third-party integration configuration.
 *
 * === Fill these in to go live ===
 *  - HubSpot form:     portalId + formId + region
 *  - HubSpot meetings: the /embed meeting URL
 *  - GTM:              container id (GTM-XXXXXXX)
 *  - Google Ads:       conversion id/label (fired after consent)
 *  - Consent:          which CMP loads before GTM
 */
export const INTEGRATIONS = {
  hubspot: {
    /** HubSpot Hub / Portal ID, e.g. "26xxxxxx". */
    portalId: '', // TODO: real portal id
    /** Marketing form GUID. */
    formId: '', // TODO: real form id
    /** Data-center region: "eu1" | "na1" | "na2" ... */
    region: 'eu1',
    /**
     * HubSpot Meetings embed link, e.g.
     * "https://meetings-eu1.hubspot.com/andre-schueler/audit?embed=true".
     */
    meetingUrl: '', // TODO: real meeting embed url
  },
  /**
   * Lead delivery for the built-in audit form (used until the HubSpot form
   * above is wired). Order of preference at submit time:
   *   1. Web3Forms  → server-side email to `deliverTo`, no backend needed.
   *      Get a free access key in 60s at https://web3forms.com (enter
   *      info@fillcart.de, confirm, paste the key here). Delivers straight to
   *      the inbox; nothing is ever silently dropped.
   *   2. mailto fallback → if no key is set, submit opens a pre-filled email to
   *      `deliverTo`. Not pretty, but the lead always reaches you.
   * See docs/LEADS.md for the self-hosted Vercel-function alternative.
   */
  leadForm: {
    web3formsKey: '', // TODO: paste Web3Forms access key
    deliverTo: 'info@fillcart.de',
  },
  /**
   * Google Calendar Appointment Scheduling. This is live — the booking
   * embed + share link the client provided.
   */
  googleCalendar: {
    embedUrl:
      'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3MYDE5zpevF55HcKg6DGHyVR_DeBMGu2AhxVIOEHjIRP_hCk2BfMM0BoggfDdy0TQlRa8iIQzP?gv=true',
    bookingUrl: 'https://calendar.app.google/Uyj8ffN6re5qJJYs6',
  },
  gtm: {
    /** Google Tag Manager container id, e.g. "GTM-XXXXXXX". */
    containerId: '', // TODO: real GTM container id
  },
  googleAds: {
    /** Conversion id, e.g. "AW-123456789". Fired only after marketing consent. */
    conversionId: '', // TODO
    /** Conversion label for the "audit request" event. */
    conversionLabel: '', // TODO
  },
  consent: {
    /**
     * Cookie-consent management platform. Must load BEFORE GTM (DE market =
     * legally required). Options handled by BaseLayout: "cookiebot" |
     * "usercentrics" | "none".
     */
    provider: 'none' as 'cookiebot' | 'usercentrics' | 'none',
    /** Cookiebot CBID or Usercentrics settings id. */
    id: '',
  },
} as const;

/** True once all mandatory integration IDs are present. */
export const HUBSPOT_FORM_READY =
  !!INTEGRATIONS.hubspot.portalId && !!INTEGRATIONS.hubspot.formId;
/** True once the built-in form can deliver server-side (Web3Forms key set). */
export const LEAD_FORM_READY = !!INTEGRATIONS.leadForm.web3formsKey;
export const HUBSPOT_MEETING_READY = !!INTEGRATIONS.hubspot.meetingUrl;
export const GOOGLE_CALENDAR_READY = !!INTEGRATIONS.googleCalendar.embedUrl;
export const GTM_READY = !!INTEGRATIONS.gtm.containerId;
