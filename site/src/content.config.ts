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

/** Downloadable lead magnets / checklists / whitepapers. */
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum(['checklist', 'whitepaper', 'template', 'guide']),
    category: z.enum(['google-ads', 'seo-aeo', 'hubspot', 'general']).default('general'),
    publishDate: z.coerce.date(),
    /** Number of items / pages, shown on the card. */
    metaLabel: z.string().optional(),
    accent: z.enum(['orange', 'green', 'sky']).default('orange'),
    featured: z.boolean().default(false),
  }),
});

/** Case studies / references. Metrics are illustrative unless marked real. */
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    /** Whether the figures are real client data or an illustrative model. */
    illustrative: z.boolean().default(true),
    accent: z.enum(['orange', 'green', 'sky']).default('orange'),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4)
      .default([]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, resources, cases };
