import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const metric = z.object({
  value: z.string(),
  label: z.string(),
  /** One-line definition shown as tooltip / footnote: what exactly was measured. */
  definition: z.string().optional(),
});

/**
 * Case studies (/work). One .mdx per case. `approved: false` keeps a case OUT of
 * the production build (it shows in dev / preview with PUBLIC_SHOW_DRAFTS=true).
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** Card text and meta description. One or two sentences. */
    summary: z.string(),
    /** Anonymised client label, e.g. "European legal-tech software group". */
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    role: z.string(),
    period: z.string().default('TODO'),
    /** The one number on the card. */
    heroMetric: metric.optional(),
    metrics: z.array(metric).max(4).default([]),
    approved: z.boolean().default(false),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    /** Where the facts come from (never published). */
    source: z.string().optional(),
    lang: z.enum(['en', 'de']).default('en'),
    publishDate: z.coerce.date().optional(),
  }),
});

/** Articles (/insights, /de/insights). Folder = language: insights/en/*, insights/de/*. */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['en', 'de']),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Andre Schüler'),
    topic: z.enum(['crm', 'paid', 'seo', 'revops', 'automation', 'story']).default('revops'),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    heroStat: z.object({ value: z.string(), label: z.string() }).optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    /** For migrated posts: the original URL (kept as a note, not shown). */
    originalUrl: z.string().optional(),
  }),
});

/** Own ventures and tools (/projects). */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    status: z.string().optional(),
    approved: z.boolean().default(true),
    order: z.number().default(99),
    lang: z.enum(['en', 'de']).default('en'),
  }),
});

/** Partner network (/partners). `approved` = the partner has OK'd being listed. */
const partners = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    person: z.string().optional(),
    url: z.string().optional(),
    kind: z.enum(['agency', 'venture', 'person']).default('agency'),
    description: z.string(),
    approved: z.boolean().default(false),
    order: z.number().default(99),
    lang: z.enum(['en', 'de']).default('en'),
  }),
});

export const collections = { work, insights, projects, partners };
