/**
 * Central site configuration: company facts, contact routes and feature flags.
 * Copy lives in src/i18n/, integrations (env-driven) in src/config/env.ts.
 *
 * Every value here comes from the website briefing (23 Oct 2026), the audit
 * proposal or the October 2026 price menus. Do not add facts that are not in
 * one of those sources.
 */

export const SITE = {
  /** Canonical production origin, no trailing slash. */
  baseUrl: 'https://fillcart.de',

  person: {
    name: 'Andre Schüler',
    /** ASCII variant used in URLs/handles. */
    nameAscii: 'Andre Schuler',
    jobTitleEn: 'Fractional Head of Marketing & RevOps',
    jobTitleDe: 'Fractional Head of Marketing & RevOps',
    linkedin: 'https://www.linkedin.com/in/andre-sch%C3%BCler-35b439209',
    upwork: 'https://www.upwork.com/freelancers/~018b33dcc97c65f2d4',
    fiverr: 'https://www.fiverr.com/andre_schueler',
    hubspotCerts: [
      'https://app.hubspot.com/academy/achievements/hh6rxfcy/en/1/andre-schuler/sales-enablement',
      'https://app.hubspot.com/academy/achievements/gnsml5vh/de/1/andre-schuler/solutions-partner-zertifizierung',
    ],
  },

  brand: {
    /** Legal / billing entity and brand mark. */
    name: 'FILLCART',
    siteName: 'Andre Schüler · FILLCART',
  },

  company: {
    legalName: 'FILLCART LLC',
    street: '254 Chapman Rd Ste 208',
    city: 'Newark',
    region: 'DE',
    postalCode: '19702',
    country: 'US',
    countryLabel: 'USA',
    registeredIn: 'Wyoming, USA',
    /** Wyoming filing ID (public register number). This is NOT the EIN; the EIN is never published. */
    entityId: '2023-001346077',
    managingMember: 'Andre Schüler',
  },

  contact: {
    email: 'info@fillcart.de',
    /** Shown on German pages (number from the DE price card and the current fillcart.de). */
    phoneDe: { label: '+49 156 78471378', href: 'tel:+4915678471378' },
    /** Shown on English pages (number from the EN price menu). */
    phoneUs: { label: '+1 442 732 2693', href: 'tel:+14427322693' },
    whatsapp: 'https://wa.me/4915678471378',
  },

  /** Google Calendar appointment page: the primary CTA everywhere. */
  booking: 'https://calendar.app.google/8L4fmaoGieEE9HbdA',

  /** External links used on the site (all from the briefing's link inventory). */
  links: {
    appart: 'https://appart.agency',
    americurial: 'https://www.americurial.com/about',
    capturepilot: 'https://www.capturepilot.com/',
    lekjaw: 'https://lekjaw.com',
  },

  /**
   * Feature flags. Flip here, rebuild, done.
   */
  flags: {
    /** Show the fixed prices from the October 2026 price menu on the services pages. */
    showMenuPrices: true,
    /** Name past employers on the About timeline (Matrix42, CIXON, NX Digital, Bloom Rocket). Off until approved. */
    nameEmployers: false,
    /** Show phone numbers on the contact page and footer. */
    showPhone: true,
    /** Show the WhatsApp link on German pages. */
    showWhatsApp: true,
  },
} as const;

export type Locale = 'en' | 'de';
