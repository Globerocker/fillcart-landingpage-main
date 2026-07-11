// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.baseUrl,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: { de: 'de-DE', en: 'en-US' },
      },
    }),
  ],
  build: {
    // Inline small stylesheets so the landing page ships with minimal
    // render-blocking requests (helps LCP < 2.5s per the brief).
    inlineStylesheets: 'auto',
  },
});
