// One-off: renders favicon / app icon PNGs from the F monogram SVG.
// Run: node scripts/brand.mjs   (outputs are committed in public/brand/)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const svg = readFileSync(fileURLToPath(new URL('../public/brand/A-symbol.svg', import.meta.url)));
const out = (size, name) =>
  sharp(svg, { density: 400 })
    .resize(size, size)
    .png()
    .toFile(fileURLToPath(new URL(`../public/brand/${name}`, import.meta.url)));

await Promise.all([
  out(32, 'A-favicon32.png'),
  out(180, 'A-apple-touch-180.png'),
  out(512, 'A-icon-512.png'),
  out(1024, 'A-symbol@hi.png'),
]);
console.log('brand icons written');
