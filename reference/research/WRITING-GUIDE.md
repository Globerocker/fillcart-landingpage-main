# Fillcart Article Writing Guide (read before writing)

You write ONE long-form German B2B article and save it as a Markdown file. Fillcart is a
boutique Google Ads agency for B2B (DACH + USA) that optimizes on **pipeline value in the CRM**,
not cost-per-lead. HubSpot Solutions Partner. Founder/author: **Andre Schüler**.

## Output location & filename
Save to: `site/src/content/blog/<category>/<slug>.md`
- `<category>` is one of: `google-ads`, `seo-aeo`, `hubspot`
- `<slug>` = the kebab-case slug from your assigned brief in the dossier.
Create the folder if needed (`mkdir -p`).

## Frontmatter (exact keys)
```yaml
---
title: "…"                     # compelling, specific, ≤ 65 chars where possible
description: "…"               # 140–160 chars, meta description, contains the core promise
category: google-ads           # google-ads | seo-aeo | hubspot
publishDate: 2026-06-12        # pick a date between 2026-05-05 and 2026-07-09, vary per article
author: "Andre Schüler"
tags: ["…", "…", "…"]          # 3–6 German tags
featured: false                # set true ONLY if told you are the pillar/featured article
heroStat:                      # the single most striking stat from your brief
  value: "58 %"
  label: "weniger Klicks bei AI Overviews"
---
```

## Voice (this is non-negotiable)
- German, **Du**-Ansprache, B2B. The voice of a sharp operator who has run the accounts — direct,
  confident, a little frech, zero agency-fluff. Short sentences. Strong verbs. Real opinions.
- Write like a human with a point of view. Vary sentence length and rhythm. It's fine to be blunt
  ("Das ist Unsinn.") or wry. Do NOT write listicle-bot filler, do NOT hedge everything, do NOT
  add deliberately broken grammar.
- Never claim fabricated client results. Illustrative numbers must be clearly framed
  ("Beispielrechnung", "typischer B2B-Fall").
- **Cite your sources inline** — after a stat, add "(Quelle: Ahrefs, 2025)" or similar. Secondary
  or vendor figures: frame as "laut X" / "eine Studie von X berichtet". Use ONLY facts from the
  dossier; do not invent statistics. This citing-of-sources is also what gets you cited by AI
  engines — practice what we preach.

## Structure & length
- **1900–2600 words.** Follow the H2/H3 outline in your brief (adapt if you find it better).
- Open with a 2–4 sentence, self-contained answer/hook — no throat-clearing. Front-load the payoff.
- Use `##` for sections and `###` for subsections (these build the clickable table of contents —
  keep H2 titles clear and scannable).
- Include **at least one comparison table** (Markdown `|` tables) OR one checklist, ideally both.
- Include **2–3 pull-out stats** and **one "Key Takeaways" box** near the end.
- One **mid-article inline CTA** and let the layout add the end CTA (don't duplicate the end one).
- End with a short **## Quellen** section listing the sources you cited (name + URL + year).

## Authoring components (raw HTML you can drop into the Markdown — pre-styled)
Pull-out stat:
```html
<div class="a-stat"><div class="a-stat-num">58 %</div><p class="a-stat-txt">weniger Klicks auf das Top-Ergebnis, wenn eine AI Overview erscheint (Ahrefs, Dez. 2025).</p></div>
```
Callout (variants: default, `warn`, `tip`):
```html
<div class="a-callout tip"><span class="a-callout-title">Kurz gesagt</span><p>…</p></div>
```
Key takeaways:
```html
<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul><li>…</li><li>…</li></ul></div>
```
Checklist (also fine as a plain list with class):
```html
<ul class="a-checklist"><li>…</li><li>…</li></ul>
```
Inline CTA band (use ONCE, mid-article):
```html
<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, wo bei dir Pipeline liegen bleibt?</strong> Wir nehmen dein Konto kostenlos auseinander.</p><a href="/#audit">Kostenlosen Audit sichern</a></div>
```
Normal Markdown tables render as styled tables — use them for comparisons.

## Internal links (use 2–4 naturally)
- `/#audit` (free audit), `/#rechner` (ROI calculator), `/ueber-fillcart` (about),
  `/wissen/<category>/` (category hub). Where your brief lists sibling articles, link them by their
  slug: `/wissen/<category>/<sibling-slug>/`.

## Quality bar
Deeply useful, specific, current (2025–2026). A B2B marketing lead should finish it thinking
"these people actually know Google Ads / SEO / HubSpot." Sharp, honest, quotable.
