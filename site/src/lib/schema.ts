import { SITE } from '../config/site.ts';
import type { LandingContent } from '../i18n/types.ts';

const c = SITE.company;
const ct = SITE.contact;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: c.street,
  addressLocality: c.city,
  addressRegion: c.region,
  postalCode: c.postalCode,
  addressCountry: c.country,
};

const contactPoint = {
  '@type': 'ContactPoint',
  contactType: 'sales',
  email: c.email,
  telephone: ct.phone,
  availableLanguage: ['de', 'en'],
};

/** ProfessionalService node — reused on every page. */
export function professionalService(lang: 'de' | 'en') {
  return {
    '@type': 'ProfessionalService',
    name: c.legalName,
    image: new URL('/assets/brand/logo-black.png', SITE.baseUrl).href,
    url: SITE.baseUrl + (lang === 'en' ? '/en/' : '/'),
    email: c.email,
    telephone: ct.phone,
    priceRange: lang === 'en' ? '$$$' : '€€€',
    address: postalAddress,
    areaServed: ['DE', 'AT', 'CH', 'US'],
    foundingDate: c.founded,
    contactPoint,
    description:
      lang === 'de'
        ? 'Google Ads Management für B2B, das auf Pipeline-Value statt Cost-per-Lead optimiert. HubSpot Solutions Partner.'
        : 'Google Ads management for B2B that optimizes for pipeline value instead of cost-per-lead. HubSpot Solutions Partner.',
  };
}

/** Organization node — for About / legal pages. */
export function organization() {
  return {
    '@type': 'Organization',
    name: c.legalName,
    legalName: c.legalName,
    email: c.email,
    telephone: ct.phone,
    url: SITE.baseUrl,
    logo: new URL('/assets/brand/logo-black.png', SITE.baseUrl).href,
    address: postalAddress,
    foundingDate: c.founded,
    contactPoint,
  };
}

/** FAQPage node built from the current locale's FAQ items. */
export function faqPage(content: LandingContent) {
  return {
    '@type': 'FAQPage',
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** Full landing-page graph: ProfessionalService + FAQPage. */
export function landingGraph(content: LandingContent) {
  return {
    '@context': 'https://schema.org',
    '@graph': [professionalService(content.lang), faqPage(content)],
  };
}
