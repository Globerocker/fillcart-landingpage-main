import { getCollection, type CollectionEntry } from 'astro:content';
import { ENV } from '../config/env.ts';
import type { Locale } from '../config/site.ts';

/** Last path segment of a collection id, without extension. */
export const slugOf = (id: string) => id.split('/').pop()!.replace(/\.(md|mdx)$/, '');

export type WorkEntry = CollectionEntry<'work'>;
export type InsightEntry = CollectionEntry<'insights'>;
export type ProjectEntry = CollectionEntry<'projects'>;
export type PartnerEntry = CollectionEntry<'partners'>;

/** Case studies. Unapproved ones only when drafts are enabled (dev / PUBLIC_SHOW_DRAFTS=true). */
export async function getWork(): Promise<WorkEntry[]> {
  const all = await getCollection('work', (e) => ENV.showDrafts || e.data.approved);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getInsights(lang: Locale): Promise<InsightEntry[]> {
  const all = await getCollection('insights', (e) => e.data.lang === lang && (ENV.showDrafts || !e.data.draft));
  return all.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
}

export async function getProjects(): Promise<ProjectEntry[]> {
  const all = await getCollection('projects', (e) => ENV.showDrafts || e.data.approved);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getPartners(): Promise<PartnerEntry[]> {
  const all = await getCollection('partners', (e) => ENV.showDrafts || e.data.approved);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export function readingTime(body: string | undefined, explicit?: number): number {
  if (explicit) return explicit;
  const words = (body || '').trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function fmtDate(d: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

/** Up to n related articles: same topic first, then recent others. */
export function related(all: InsightEntry[], current: InsightEntry, n = 3): InsightEntry[] {
  const others = all.filter((p) => p.id !== current.id);
  const same = others.filter((p) => p.data.topic === current.data.topic);
  const rest = others.filter((p) => p.data.topic !== current.data.topic);
  return [...same, ...rest].slice(0, n);
}
