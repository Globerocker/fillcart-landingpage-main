// Build entrypoint used by Vercel (`npm run build`).
//   1. content lint on the sources (employer names, dashes, formal address)  → fails the build
//   2. OG images (brand template)                                             → warns only
//   3. TinaCMS admin build when credentials exist                             → falls back to site-only
//   4. astro build
//   5. content lint on dist (employer names, EIN pattern, unapproved cases)   → fails the build
import { execSync } from 'node:child_process';

const run = (cmd) => execSync(cmd, { stdio: 'inherit' });

run('node scripts/lint-content.mjs src');

try {
  run('node scripts/og.mjs');
} catch {
  console.warn('⚠ OG image generation failed; pages fall back to /og/default.png if present.');
}

const hasTina = !!(process.env.TINA_TOKEN && process.env.PUBLIC_TINA_CLIENT_ID);
if (hasTina) {
  try {
    console.log('→ TinaCMS credentials found: building the /admin editor…');
    run('tinacms build');
  } catch {
    console.warn('⚠ tinacms build failed. Falling back to a SITE-ONLY build so the deploy still succeeds. See docs/CMS-ACCESS.md.');
  }
} else {
  console.log('→ TinaCMS credentials not set: building the site only (/admin skipped).');
}

console.log('→ Building the Astro site…');
run('astro build');

run('node scripts/lint-content.mjs dist');
