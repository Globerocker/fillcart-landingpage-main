// Build entrypoint used by Vercel (`npm run build`).
//
// If the TinaCMS Cloud credentials are present in the environment, we build the
// visual editor (/admin) first, then the site. If they are NOT present, we just
// build the site — so the deploy never breaks while Tina is being set up.
//
// This means enabling the CMS requires ONLY adding two env vars in Vercel
// (PUBLIC_TINA_CLIENT_ID + TINA_TOKEN) — no build-command change. See
// docs/CMS-ACCESS.md.
import { execSync } from 'node:child_process';

const hasTina = !!(process.env.TINA_TOKEN && process.env.PUBLIC_TINA_CLIENT_ID);

const cmd = hasTina ? 'tinacms build && astro build' : 'astro build';
console.log(
  hasTina
    ? '→ TinaCMS credentials found: building the /admin editor + site.'
    : '→ TinaCMS credentials not set: building the site only (/admin skipped). See docs/CMS-ACCESS.md.'
);
execSync(cmd, { stdio: 'inherit' });
