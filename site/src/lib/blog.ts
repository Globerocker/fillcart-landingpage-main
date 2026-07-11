import type { CollectionEntry } from 'astro:content';

export type Category = 'google-ads' | 'seo-aeo' | 'hubspot';

export interface CategoryMeta {
  key: Category;
  label: string;
  short: string;
  description: string;
  accent: string; // hex
  accentVar: 'orange' | 'green' | 'sky';
}

export const CATEGORIES: Record<Category, CategoryMeta> = {
  'google-ads': {
    key: 'google-ads',
    label: 'Google Ads',
    short: 'Google Ads',
    description:
      'Pipeline statt Klicks: AI Max, Performance Max, value-based Bidding und sauberes Tracking für B2B.',
    accent: '#F97316',
    accentVar: 'orange',
  },
  'seo-aeo': {
    key: 'seo-aeo',
    label: 'SEO & AEO',
    short: 'SEO & AEO',
    description:
      'Sichtbar bleiben, wenn die Suche zur Antwort wird — klassisches Google und Zitate in ChatGPT, Perplexity & AI Overviews.',
    accent: '#38BDF8',
    accentVar: 'sky',
  },
  hubspot: {
    key: 'hubspot',
    label: 'HubSpot',
    short: 'HubSpot',
    description:
      'CRM-Daten, die deine Kampagnen steuern: Offline-Conversions, Lead Scoring, Attribution und Breeze-KI.',
    accent: '#22C55E',
    accentVar: 'green',
  },
};

export const CATEGORY_ORDER: Category[] = ['google-ads', 'seo-aeo', 'hubspot'];

/** Rough reading time from rendered body length. */
export function readingTime(body: string | undefined, explicit?: number): number {
  if (explicit) return explicit;
  const words = (body || '').trim().split(/\s+/).length;
  return Math.max(3, Math.round(words / 200));
}

export function fmtDate(d: Date, locale = 'de-DE'): string {
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

type BlogEntry = CollectionEntry<'blog'>;

/** Published (non-draft) posts, newest first. */
export function sortPosts(posts: BlogEntry[]): BlogEntry[] {
  return posts
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export function postsByCategory(posts: BlogEntry[], cat: Category): BlogEntry[] {
  return sortPosts(posts).filter((p) => p.data.category === cat);
}

/** Up to `n` related posts: same category first, then recent others. */
export function relatedPosts(posts: BlogEntry[], current: BlogEntry, n = 3): BlogEntry[] {
  const others = sortPosts(posts).filter((p) => p.id !== current.id);
  const sameCat = others.filter((p) => p.data.category === current.data.category);
  const rest = others.filter((p) => p.data.category !== current.data.category);
  return [...sameCat, ...rest].slice(0, n);
}
