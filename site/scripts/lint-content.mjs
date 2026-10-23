// Content rules from the website briefing (§2, §13). Usage:
//   node scripts/lint-content.mjs src    checks copy sources (content, i18n, pages, components, layouts, data, public filenames)
//   node scripts/lint-content.mjs dist   checks the built HTML (employer names, EIN pattern, unapproved case studies)
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

const mode = process.argv[2] || 'src';
const root = process.cwd();
const EMPLOYER = /septeo|stp\.one|stp one|advoware|winmacs|amberlo/i;
const DASH = /—|–/; // em dash, en dash
const EIN = /\b\d{2}-\d{7}\b/;
const SPACED_HYPHEN = /\S - \S/;

const walk = (dir, exts) => {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p, exts));
    else if (!exts || exts.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
};

const problems = [];
const report = (file, line, rule, text) => problems.push(`${path.relative(root, file)}:${line}  [${rule}]  ${text.trim().slice(0, 110)}`);

const scan = (file, rules) => {
  const lines = readFileSync(file, 'utf8').split('\n');
  let inCode = false;
  lines.forEach((l, i) => {
    if (/^\s*```/.test(l)) inCode = !inCode;
    if (inCode) return;
    for (const [name, re] of rules) if (re.test(l)) report(file, i + 1, name, l);
  });
};

if (mode === 'src') {
  const copyFiles = [
    ...walk('src/content', ['.md', '.mdx']),
    ...walk('src/i18n', ['.ts']),
    ...walk('src/data', ['.ts']),
    ...walk('src/pages', ['.astro']),
    ...walk('src/components', ['.astro']),
    ...walk('src/layouts', ['.astro']),
  ];
  for (const f of copyFiles) scan(f, [['employer', EMPLOYER], ['dash', DASH]]);
  // spaced hyphen as a pause: copy files only (code uses " - " legitimately)
  for (const f of [...walk('src/content', ['.md', '.mdx']), ...walk('src/i18n', ['.ts'])]) scan(f, [['spaced-hyphen', SPACED_HYPHEN]]);
  // German copy must not use the formal address
  for (const f of [...walk('src/content/insights/de', ['.md', '.mdx']), 'src/i18n/de.ts']) {
    if (existsSync(f)) scan(f, [['formal-Sie', /(^|[^\wäöüÄÖÜ])(Ihnen|Ihrem|Ihrer|Ihren|Ihres)(?=[^\w]|$)/]]);
  }
  for (const f of walk('public')) if (EMPLOYER.test(path.basename(f))) report(f, 0, 'employer-filename', f);
} else {
  const dist = 'dist';
  if (!existsSync(dist)) { console.error('dist/ not found. Run the build first.'); process.exit(2); }
  const html = walk(dist, ['.html']);
  for (const f of html) scan(f, [['employer', EMPLOYER], ['ein', EIN]]);
  // No unapproved case study may be in the production build unless drafts are explicitly enabled.
  if (process.env.PUBLIC_SHOW_DRAFTS !== 'true') {
    for (const f of walk('src/content/work', ['.md', '.mdx'])) {
      const fm = readFileSync(f, 'utf8');
      const approved = /^approved:\s*true/m.test(fm);
      const slug = path.basename(f).replace(/\.(md|mdx)$/, '');
      if (!approved && existsSync(path.join(dist, 'work', `${slug}.html`))) report(f, 0, 'unapproved-in-dist', `dist/work/${slug}.html exists but approved: false`);
    }
  }
  if (!html.length) report(dist, 0, 'empty', 'no html files');
}

if (problems.length) {
  console.error(`\n✖ Content lint (${mode}): ${problems.length} problem(s)\n`);
  for (const p of problems) console.error('  ' + p);
  console.error('');
  process.exit(1);
}
console.log(`✓ Content lint (${mode}): clean`);
