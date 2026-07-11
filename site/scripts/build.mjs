// Build entrypoint used by Vercel (`npm run build`).
//
// When the TinaCMS Cloud credentials are present, build the visual editor
// (/admin) first, then the site. If `tinacms build` fails — e.g. TinaCloud
// hasn't indexed the branch yet — we do NOT fail the whole deploy: we fall back
// to a site-only build so the marketing site always ships. The /admin editor is
// added automatically on the next build once TinaCloud is happy.
//
// Enabling the CMS therefore requires ONLY adding two env vars in Vercel
// (PUBLIC_TINA_CLIENT_ID + TINA_TOKEN) plus a one-time TinaCloud branch index —
// no build-command change. See docs/CMS-ACCESS.md.
import { execSync } from 'node:child_process';

const hasTina = !!(process.env.TINA_TOKEN && process.env.PUBLIC_TINA_CLIENT_ID);

if (hasTina) {
  try {
    console.log('→ TinaCMS credentials found: building the /admin editor…');
    execSync('tinacms build', { stdio: 'inherit' });
  } catch {
    console.warn(
      '⚠ tinacms build failed (see error above). Falling back to a SITE-ONLY build so the ' +
        'deploy still succeeds. /admin will activate on the next build once TinaCloud can index ' +
        'the branch — see docs/CMS-ACCESS.md.'
    );
  }
} else {
  console.log('→ TinaCMS credentials not set: building the site only (/admin skipped). See docs/CMS-ACCESS.md.');
}

console.log('→ Building the Astro site…');
execSync('astro build', { stdio: 'inherit' });
