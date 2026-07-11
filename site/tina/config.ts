import { defineConfig } from 'tinacms';

// Branch Tina reads/writes. On Vercel this is the deploy branch; locally "main".
const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // From app.tina.io (free tier). Set as env vars — see CMS-SETUP.md.
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin', // admin SPA served at /admin
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets', // uploads land in public/assets
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      // ---------------- BLOG / WISSEN ----------------
      {
        name: 'blog',
        label: 'Wissen (Artikel)',
        path: 'src/content/blog',
        format: 'md',
        ui: {
          // slug/filename lives in a category subfolder; keep the filename as slug
          filename: { readonly: false },
        },
        fields: [
          { type: 'string', name: 'title', label: 'Titel', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Meta-Beschreibung', required: true, ui: { component: 'textarea' } },
          {
            type: 'string', name: 'category', label: 'Kategorie', required: true,
            options: [
              { value: 'google-ads', label: 'Google Ads' },
              { value: 'seo-aeo', label: 'SEO & AEO' },
              { value: 'hubspot', label: 'HubSpot' },
            ],
          },
          { type: 'datetime', name: 'publishDate', label: 'Veröffentlicht am', required: true },
          { type: 'datetime', name: 'updatedDate', label: 'Aktualisiert am' },
          { type: 'string', name: 'author', label: 'Autor' },
          { type: 'number', name: 'readingTime', label: 'Lesezeit (Min., optional)' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'boolean', name: 'featured', label: 'Hervorgehoben (Pillar)' },
          { type: 'boolean', name: 'draft', label: 'Entwurf (nicht veröffentlichen)' },
          {
            type: 'object', name: 'heroStat', label: 'Highlight-Statistik',
            fields: [
              { type: 'string', name: 'value', label: 'Wert (z. B. „58 %“)' },
              { type: 'string', name: 'label', label: 'Beschriftung' },
            ],
          },
          { type: 'rich-text', name: 'body', label: 'Inhalt', isBody: true },
        ],
      },

      // ---------------- REFERENZEN / CASES ----------------
      {
        name: 'cases',
        label: 'Referenzen (Cases)',
        path: 'src/content/cases',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Case-Titel', isTitle: true, required: true },
          { type: 'string', name: 'client', label: 'Kunde', required: true },
          { type: 'string', name: 'website', label: 'Website (ohne https)' },
          { type: 'string', name: 'market', label: 'Markt (z. B. „DE“, „US“, „NL · DE“)', required: true },
          { type: 'string', name: 'industry', label: 'Branche', required: true },
          { type: 'string', name: 'description', label: 'Kurzbeschreibung', required: true, ui: { component: 'textarea' } },
          { type: 'datetime', name: 'publishDate', label: 'Datum', required: true },
          {
            type: 'string', name: 'accent', label: 'Akzentfarbe',
            options: [
              { value: 'orange', label: 'Orange' },
              { value: 'green', label: 'Grün' },
              { value: 'sky', label: 'Blau' },
            ],
          },
          { type: 'string', name: 'focusChips', label: 'Fokus-Chips (Markt/Modell/Angle)', list: true },
          {
            type: 'object', name: 'metrics', label: 'Kennzahlen (nur echte, freigegebene Zahlen)',
            list: true,
            ui: { itemProps: (item) => ({ label: item?.value || 'Kennzahl' }) },
            fields: [
              { type: 'string', name: 'value', label: 'Wert (z. B. „+34 %“)' },
              { type: 'string', name: 'label', label: 'Beschriftung' },
            ],
          },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'boolean', name: 'featured', label: 'Hervorgehoben' },
          { type: 'rich-text', name: 'body', label: 'Story (Ausgangslage / Ansatz)', isBody: true },
        ],
      },
    ],
  },
});
