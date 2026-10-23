import { SITE, type Locale } from '../config/site.ts';

export const abs = (path: string) => new URL(path, SITE.baseUrl).href;

const PERSON_ID = abs('/#person');
const ORG_ID = abs('/#org');

export function personSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.person.name,
    jobTitle: SITE.person.jobTitleEn,
    url: abs('/'),
    sameAs: [SITE.person.linkedin, SITE.person.upwork, SITE.person.fiverr],
    worksFor: { '@id': ORG_ID },
    knowsLanguage: ['en', 'de', 'es'],
    knowsAbout: ['Revenue operations', 'HubSpot', 'Google Ads', 'LinkedIn Ads', 'B2B SaaS marketing'],
  };
}

export function orgSchema() {
  const c = SITE.company;
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: c.legalName,
    alternateName: SITE.brand.name,
    url: abs('/'),
    logo: abs('/brand/A-icon-512.png'),
    email: SITE.contact.email,
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.street,
      addressLocality: c.city,
      addressRegion: c.region,
      postalCode: c.postalCode,
      addressCountry: c.country,
    },
    sameAs: [SITE.person.linkedin],
  };
}

export function websiteSchema(lang: Locale) {
  return {
    '@type': 'WebSite',
    '@id': abs('/#website'),
    url: abs(lang === 'en' ? '/' : '/de'),
    name: SITE.brand.siteName,
    inLanguage: lang === 'en' ? 'en-US' : 'de-DE',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  published: Date;
  modified?: Date;
  lang: Locale;
  keywords?: string[];
  section?: string;
}) {
  return {
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: a.lang === 'en' ? 'en-US' : 'de-DE',
    datePublished: a.published.toISOString(),
    dateModified: (a.modified ?? a.published).toISOString(),
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: abs(a.path),
    articleSection: a.section,
    keywords: a.keywords?.join(', '),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function serviceSchema(s: { name: string; description: string; path: string; price?: string; currency?: string }) {
  return {
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: abs(s.path),
    provider: { '@id': ORG_ID },
    ...(s.price
      ? { offers: { '@type': 'Offer', price: s.price, priceCurrency: s.currency ?? 'EUR', url: abs(s.path) } }
      : {}),
  };
}

export const graph = (...nodes: Record<string, unknown>[]) => ({ '@context': 'https://schema.org', '@graph': nodes });
