import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Blog / knowledge-base articles. One .md file per article under src/content/blog/. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['google-ads', 'seo-aeo', 'hubspot']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Andre Schüler'),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /** Big pull-out stat for cards + article hero. */
    heroStat: z.object({ value: z.string(), label: z.string() }).optional(),
    draft: z.boolean().default(false),
  }),
});

// NOTE: the /ressourcen pages are served from src/data/resources.ts, not a
// content collection — so there is no `resources` collection here (defining one
// for a non-existent folder only produces a build warning).

/** Case studies / references for real, named clients. */
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    /** Public website of the client (shown, not fabricated). */
    website: z.string().optional(),
    /** Market code(s), e.g. "DE", "US", "NL · DE". */
    market: z.string(),
    industry: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    accent: z.enum(['orange', 'green', 'sky']).default('orange'),
    /** Honest, factual descriptors (market, model, deal-value angle) — NOT results. */
    focusChips: z.array(z.string()).max(4).default([]),
    /**
     * Real, approved KPIs only. Leave empty until you drop in real account /
     * Search Console numbers — the UI shows a "Kennzahlen nach Freigabe" note instead.
     */
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4)
      .default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, cases };
