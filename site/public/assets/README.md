# Image assets — what goes where

All images the site serves live here, organized by purpose. Paths are stable — drop a file in with
the **exact name** below and it appears on the site (no code change). Client & partner logos
**auto-upgrade**: the moment a real `.png` exists, the build uses it instead of the placeholder `.svg`.

```
assets/
├── brand/      Fillcart's own logo & icons
├── team/       photos of you / the team
├── clients/    client & reference company logos   ← drop real PNGs here
├── partners/   certification / partner badges       ← drop real PNGs here
└── og/         social-share preview image
```

## brand/ — Fillcart identity  ✅ real
| File | Used for | Notes |
|------|----------|-------|
| `logo-white.png` | header + footer (on dark) | real |
| `logo-black.png` | schema.org logo, article header | real |
| `icon-white.png` | favicon, USP mark | real |
| `icon-black.png` | apple-touch-icon | real |

## team/ — photos of Andre  ⚠️ replace when you have a better shot
| File | Used for | Recommended |
|------|----------|-------------|
| `andre.png` | About page + Proof section portrait | Transparent-bg or clean portrait, **≥ 720×1024**, cropped tight. The current file is ~440 KB — a 300–500 px-wide WebP/optimized PNG would load faster. Add more team photos here as `andre-2.png` etc. and tell me where to place them. |

## clients/ — reference company logos  🔺 placeholders now (auto-upgrade with PNG)
The site currently shows **hand-drawn SVG wordmarks** as placeholders. Drop the official logo as a
transparent **PNG** with these exact names and it replaces the placeholder automatically:
| Drop this file | Company | Display height |
|----------------|---------|----------------|
| `septeo.png` | Septeo (stp.one) | ~26 px → export ~2× (≈ 52 px tall) |
| `matrix42.png` | Matrix42 | ~22 px |
| `cixon.png` | CIXON | ~24 px |

> Want to show **more** client logos than these three? Add the PNGs here and tell me — I'll wire them
> into the Proof / Referenzen sections (they're a fixed list in code).

## partners/ — certification badges
| File | Status | Notes |
|------|--------|-------|
| `google-partner.png` | ✅ real | Only display if the Google Partner status is **current** for the applying account (see `docs/GOOGLE-ADS-API.md`). |
| `hubspot-partner.svg` | 🔺 placeholder | Drop `hubspot-partner.png` (official badge) to replace it. |

## og/ — social share image  ✅ generated
| File | Used for | Notes |
|------|----------|-------|
| `og-default.png` | Open Graph + Twitter card (1200×630) | Branded, auto-generated. Replace the file to customize; keep it 1200×630. Per-page override: pass `ogImage="/assets/og/your-image.png"` to `BaseLayout`. |

---

**CMS uploads:** images uploaded via TinaCMS (`/admin`) land in `public/assets/` by default — move
them into the folders above to keep things tidy.

**Formats:** prefer transparent **PNG** for logos, **WebP or optimized PNG/JPG** for photos. Keep
logo files small (they're shown tiny). For retina crispness, export logos at ~2× the display height.
