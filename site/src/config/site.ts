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
    founded: '2023',
    managingMember: 'Andre Schüler',
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
export const HUBSPOT_MEETING_READY = !!INTEGRATIONS.hubspot.meetingUrl;
export const GTM_READY = !!INTEGRATIONS.gtm.containerId;
