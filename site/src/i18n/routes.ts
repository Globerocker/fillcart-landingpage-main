import type { Locale } from '../config/site.ts';

/**
 * EN path → DE path for pages that exist in both languages.
 * Everything else is EN-only (case studies, projects, partners) or DE-only
 * (German articles, checklists) and gets no hreflang cluster.
 */
export const ROUTE_PAIRS: Record<string, string> = {
  '/': '/de',
  '/about': '/de/ueber-mich',
  '/services': '/de/leistungen',
  '/services/audit': '/de/leistungen/audit',
  '/services/sprint': '/de/leistungen/sprint',
  '/services/fractional': '/de/leistungen/fractional',
  '/insights': '/de/insights',
  '/contact': '/de/kontakt',
  '/roi': '/de/roi',
  '/imprint': '/de/impressum',
  '/privacy': '/de/datenschutz',
  '/terms': '/de/agb',
};

const DE_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_PAIRS).map(([en, de]) => [de, en])
);

/** Normalise a path: no trailing slash except for root. */
export function clean(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path || '/';
}

/** Path of the same page in the other language, if it exists. */
export function altPath(path: string, lang: Locale): string | undefined {
  const p = clean(path);
  return lang === 'en' ? ROUTE_PAIRS[p] : DE_TO_EN[p];
}

/** Resolve an EN route key to the path for the given locale (falls back to the EN path). */
export function localePath(lang: Locale, enPath: string): string {
  const p = clean(enPath);
  if (lang === 'en') return p;
  return ROUTE_PAIRS[p] ?? p;
}

/** Home path per locale. */
export const homePath = (lang: Locale) => (lang === 'en' ? '/' : '/de');

/** Does the given EN route have a DE counterpart? */
export const hasDe = (enPath: string) => !!ROUTE_PAIRS[clean(enPath)];
