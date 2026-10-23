// Generates Open Graph images (1200x630) with the brand template into public/og/.
// Runs before `astro build` (see scripts/build.mjs) and via `npm run og`.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'public', 'og');
mkdirSync(outDir, { recursive: true });

const font = (p) => readFileSync(path.join(process.cwd(), 'node_modules', p));
const fonts = [
  { name: 'Space Grotesk', data: font('@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'), weight: 700, style: 'normal' },
  { name: 'Manrope', data: font('@fontsource/manrope/files/manrope-latin-500-normal.woff'), weight: 500, style: 'normal' },
];

const { en } = await import('../src/i18n/en.ts');
const { de } = await import('../src/i18n/de.ts');

const PERSON = 'Andre Schüler';
const ROLE_EN = 'Fractional Head of Marketing & RevOps · B2B SaaS';
const ROLE_DE = 'Fractional Head of Marketing & RevOps · B2B SaaS';

const pages = [
  { key: 'default', title: 'Pipeline you can plan. Not just leads.', eyebrow: ROLE_EN },
  { key: 'home-en', title: 'Pipeline you can plan. Not just leads.', eyebrow: ROLE_EN },
  { key: 'home-de', title: de.home.hero.h1.replace(/<br\s*\/?>/g, ' '), eyebrow: ROLE_DE },
  { key: 'about-en', title: en.about.hero.h1, eyebrow: en.about.hero.eyebrow },
  { key: 'about-de', title: de.about.hero.h1, eyebrow: de.about.hero.eyebrow },
  { key: 'services-en', title: en.services.meta.title, eyebrow: en.services.hero.eyebrow },
  { key: 'services-de', title: de.services.meta.title, eyebrow: de.services.hero.eyebrow },
  { key: 'audit-en', title: en.audit.meta.title, eyebrow: en.audit.hero.eyebrow },
  { key: 'audit-de', title: de.audit.meta.title, eyebrow: de.audit.hero.eyebrow },
  { key: 'sprint-en', title: en.sprint.hero.h1, eyebrow: en.sprint.hero.eyebrow },
  { key: 'sprint-de', title: de.sprint.hero.h1, eyebrow: de.sprint.hero.eyebrow },
  { key: 'fractional-en', title: en.fractional.hero.h1, eyebrow: en.fractional.hero.eyebrow },
  { key: 'fractional-de', title: de.fractional.hero.h1, eyebrow: de.fractional.hero.eyebrow },
  { key: 'work', title: en.work.hero.h1, eyebrow: en.work.hero.eyebrow },
  { key: 'projects', title: en.projects.hero.h1, eyebrow: en.projects.hero.eyebrow },
  { key: 'partners', title: en.partners.hero.h1, eyebrow: en.partners.hero.eyebrow },
  { key: 'insights-en', title: en.insights.hero.h1, eyebrow: en.insights.hero.eyebrow },
  { key: 'insights-de', title: de.insights.hero.h1, eyebrow: de.insights.hero.eyebrow },
  { key: 'contact-en', title: en.contact.hero.h1, eyebrow: en.contact.hero.eyebrow },
  { key: 'contact-de', title: de.contact.hero.h1, eyebrow: de.contact.hero.eyebrow },
  { key: 'roi-en', title: en.roi.hero.h1, eyebrow: en.roi.hero.eyebrow },
  { key: 'roi-de', title: de.roi.hero.h1, eyebrow: de.roi.hero.eyebrow },
  { key: 'checklisten', title: de.checklists.hero.h1, eyebrow: de.checklists.hero.eyebrow },
];

// Content entries: title from frontmatter
const fmTitle = (file) => {
  const src = readFileSync(file, 'utf8');
  const m = src.match(/^title:\s*["']?(.*?)["']?\s*$/m);
  return m ? m[1] : null;
};
const addDir = (dir, prefix, eyebrow) => {
  if (!existsSync(dir)) return;
  for (const f of readdirSync(dir)) {
    if (!/\.(md|mdx)$/.test(f)) continue;
    const t = fmTitle(path.join(dir, f));
    if (t) pages.push({ key: `${prefix}${f.replace(/\.(md|mdx)$/, '')}`, title: t, eyebrow });
  }
};
addDir('src/content/insights/en', 'insight-', 'Insights');
addDir('src/content/insights/de', 'insight-', 'Insights');
addDir('src/content/work', 'work-', 'Case study');
// Checklists
try {
  const src = readFileSync('src/data/resources.ts', 'utf8');
  for (const m of src.matchAll(/slug:\s*'([^']+)',\s*\n\s*title:\s*'([^']+)'/g)) pages.push({ key: `checkliste-${m[1]}`, title: m[2], eyebrow: 'Checkliste' });
} catch {}

const bar = (w) => ({ type: 'div', props: { style: { width: w, height: 22, background: '#ffffff', borderRadius: 4 } } });
const logo = {
  type: 'div',
  props: {
    style: { display: 'flex', flexDirection: 'column', gap: 8, width: 190, height: 190, background: '#1e5b3c', borderRadius: 36, padding: '24px 0 0 36px' },
    children: [bar(118), bar(42), bar(90), bar(42), bar(42)],
  },
};

const render = async (p) => {
  const size = p.title.length > 60 ? 54 : p.title.length > 40 ? 62 : 72;
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', background: '#16181d', color: '#fff', fontFamily: 'Manrope', position: 'relative' },
        children: [
          { type: 'div', props: { style: { position: 'absolute', left: 0, top: 0, width: 1200, height: 10, background: '#1e5b3c' } } },
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '70px 80px 64px', width: 1200, height: 630 },
              children: [
                { type: 'div', props: { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, children: [
                  { type: 'div', props: { style: { fontSize: 22, letterSpacing: 2, textTransform: 'uppercase', color: '#9dbfae', maxWidth: 820 }, children: p.eyebrow } },
                  logo,
                ] } },
                { type: 'div', props: { style: { fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: size, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 1040, display: 'flex' }, children: p.title } },
                { type: 'div', props: { style: { display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#8a9097' }, children: [
                  { type: 'div', props: { children: `${PERSON} · FILLCART` } },
                  { type: 'div', props: { children: 'fillcart.de' } },
                ] } },
              ],
            },
          },
        ],
      },
    },
    { width: 1200, height: 630, fonts }
  );
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  writeFileSync(path.join(outDir, `${p.key}.png`), png);
};

let n = 0;
for (const p of pages) { await render(p); n++; }
console.log(`→ OG images: ${n} written to public/og/`);
