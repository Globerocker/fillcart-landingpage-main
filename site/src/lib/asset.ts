import fs from 'node:fs';
import path from 'node:path';

const pub = path.join(process.cwd(), 'public');

/**
 * Prefer a real PNG dropped into public/assets/<folder>/<base>.png; fall back to
 * the .svg placeholder if the PNG isn't there yet. Resolved at BUILD time, so
 * there are no 404s and no runtime onerror hacks — drop the PNG in and it's used.
 */
export function brandLogo(folder: string, base: string): string {
  return fs.existsSync(path.join(pub, 'assets', folder, `${base}.png`))
    ? `/assets/${folder}/${base}.png`
    : `/assets/${folder}/${base}.svg`;
}
