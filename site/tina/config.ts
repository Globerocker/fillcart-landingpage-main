import { defineConfig } from 'tinacms';

// Branch Tina reads/writes. On Vercel this is the deploy branch; locally "main".
const branch = process.env.TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main';

const topicOptions = [
  { value: 'crm', label: 'CRM' },
  { value: 'paid', label: 'Paid' },
  { value: 'seo', label: 'SEO & GEO' },
  { value: 'revops', label: 'RevOps' },
  { value: 'automation', label: 'Automation' },
  { value: 'story', label: 'Story' },
];

const metricFields = [
  { type: 'string' as const, name: 'value', label: 'Value (e.g. "3 → 1")' },
  { type: 'string' as const, name: 'label', label: 'Label' },
  { type: 'string' as const, name: 'definition', label: 'Definition (what exactly was measured)' },
];

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'assets', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'insights',
        label: 'Insights (articles)',
        path: 'src/content/insights',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Meta description', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'lang', label: 'Language', required: true, options: [{ value: 'en', label: 'English' }, { value: 'de', label: 'Deutsch' }] },
          { type: 'datetime', name: 'publishDate', label: 'Published', required: true },
          { type: 'datetime', name: 'updatedDate', label: 'Updated' },
          { type: 'string', name: 'author', label: 'Author' },
          { type: 'string', name: 'topic', label: 'Topic', options: topicOptions },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'number', name: 'readingTime', label: 'Reading time (min, optional)' },
          { type: 'object', name: 'heroStat', label: 'Hero stat', fields: [{ type: 'string', name: 'value', label: 'Value' }, { type: 'string', name: 'label', label: 'Label' }] },
          { type: 'boolean', name: 'featured', label: 'Featured' },
          { type: 'boolean', name: 'draft', label: 'Draft (not published)' },
          { type: 'string', name: 'originalUrl', label: 'Original URL (migrated posts)' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'work',
        label: 'Case studies',
        path: 'src/content/work',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'summary', label: 'Summary (card + meta)', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'client', label: 'Client (anonymised label)', required: true },
          { type: 'string', name: 'industry', label: 'Industry', required: true },
          { type: 'string', name: 'services', label: 'Services', list: true },
          { type: 'string', name: 'stack', label: 'Stack', list: true },
          { type: 'string', name: 'role', label: 'Role', required: true },
          { type: 'string', name: 'period', label: 'Period' },
          { type: 'object', name: 'heroMetric', label: 'Hero metric', fields: metricFields },
          { type: 'object', name: 'metrics', label: 'Metrics', list: true, ui: { itemProps: (item) => ({ label: item?.value || 'Metric' }) }, fields: metricFields },
          { type: 'boolean', name: 'approved', label: 'Approved for publication' },
          { type: 'boolean', name: 'featured', label: 'Featured on home' },
          { type: 'number', name: 'order', label: 'Order' },
          { type: 'string', name: 'source', label: 'Source (internal)' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'projects',
        label: 'Projects & ventures',
        path: 'src/content/projects',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Name', isTitle: true, required: true },
          { type: 'string', name: 'role', label: 'Role', required: true },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'object', name: 'links', label: 'Links', list: true, fields: [{ type: 'string', name: 'label', label: 'Label' }, { type: 'string', name: 'href', label: 'URL' }] },
          { type: 'string', name: 'status', label: 'Status' },
          { type: 'boolean', name: 'approved', label: 'Show on site' },
          { type: 'number', name: 'order', label: 'Order' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'partners',
        label: 'Partners',
        path: 'src/content/partners',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Name', isTitle: true, required: true },
          { type: 'string', name: 'person', label: 'Person' },
          { type: 'string', name: 'url', label: 'URL' },
          { type: 'string', name: 'kind', label: 'Kind', options: [{ value: 'agency', label: 'Agency' }, { value: 'venture', label: 'Venture' }, { value: 'person', label: 'Person' }] },
          { type: 'string', name: 'description', label: 'Description', required: true, ui: { component: 'textarea' } },
          { type: 'boolean', name: 'approved', label: 'Partner approved listing' },
          { type: 'number', name: 'order', label: 'Order' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
    ],
  },
});
