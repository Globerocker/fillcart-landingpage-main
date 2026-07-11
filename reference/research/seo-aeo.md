# Research Dossier — SEO & AEO/GEO for B2B (DACH), 2025–2026

> For Fillcart article writers. All figures below are from real, cited sources. Where a
> figure is secondary/aggregator or was revised by its own publisher, it is flagged —
> present those as "reported by X (date)", never as fact. WebFetch was blocked in the
> research environment, so decimals should be spot-checked against the live source before
> publishing exact numbers in a client deliverable.

## Current developments (synthesis)

- **AI Overviews are now everywhere and they suppress clicks.** Semrush (10M+ keywords) tracked AIO on 6.49% of queries in Jan 2025, peaking 24.61% in Jul 2025, settling ~15.7% in Nov 2025. Advanced Web Ranking saw AIO on 49.92% of tracked SERPs by Q4 2025. Pew (Jul 2025): with an AI summary users click a traditional result only 8% of the time vs 15% without (~47% relative drop); only 1% click a link inside the summary. Ahrefs (Dec 2025, 300k keywords): AIO correlates with **58% lower CTR** for the top page (revised up from 34.5% in Apr 2025). Seer (Nov 2025): organic CTR on AIO queries fell 61% (1.76%→0.61%), paid 68%.
- **Zero-click is the norm.** SparkToro/Datos (2024): 58.5% of US / 59.7% of EU Google searches end with no click; only ~360 of every 1,000 US searches reach the open web. SparkToro (2026): less than one third of Google searches still send a click; Search Engine Land reports ~68% zero-click in early 2026.
- **AI search is small in volume but high in intent.** Semrush (Jun 2025): the average AI-search visitor is ~4.4× as valuable (by conversion) as a traditional organic visit. Seer: ChatGPT referrals converted ~15.9% vs 1.76% for Google organic. Microsoft Clarity (via Digiday): LLM-referred visitors signed up at 1.66% vs 0.15% from search. But total AI referral traffic is still ~1% of most sites' traffic (Conductor/Digiday) — it complements, doesn't replace, organic.
- **Being cited ≠ ranking.** Ahrefs found the top-10 overlap with AIO citations dropped from 76% (Jul 2025) to 38% (late 2025) after a Gemini upgrade; only ~12% of AI-cited URLs rank in Google's top 10 for the original prompt. Citation is a distinct visibility layer. Seer: brands cited in AIOs earn 35% more organic and 91% more paid clicks than uncited brands.
- **How to earn citations (Princeton GEO study, KDD 2024, arXiv 2311.09735):** across ~10,000 queries, the three highest-impact tactics were **Cite Sources, add Quotations, add Statistics** — each lifting generative-engine visibility by up to ~40%; the citation tactic lifted a position-#5 page by +115.1%. Keyword stuffing *hurt*. LLMs prefer self-contained 40–75-word passages (cited ~3.1× more per NAV43), listicles and tables (tables ~2.5× more citations per kime.ai), and clear non-promotional language (Semrush: clarity +32.83% correlation, promotional language −26.19%).
- **Brand mentions beat backlinks for AI visibility.** Ahrefs (75k brands, 2025): branded web mentions correlate ~0.66 with AIO presence vs ~0.22 for backlinks; YouTube mentions ~0.74. ~82% of AI citations are "earned media" (third-party mentions). Most-cited domains across engines: Wikipedia, YouTube, Reddit, LinkedIn.
- **Schema's AEO value is genuinely contested — present both sides.** Google's structured-data engineer (Ryan Levering) and Microsoft (Mar 2025) both said schema feeds their generative systems; vendor studies claim 2.5–2.7× more citations with schema. BUT Ahrefs (Jun 2026) tracked 1,885 pages adding schema and found citations "barely moved." Honest take: schema still helps machines *parse* your entity precisely; treat rich-result gains skeptically. Note: **Google fully retired FAQ rich results (~May 2026)** and HowTo (2023) — the markup stays valid and harmless, just no visual SERP feature.
- **Technical reality that favors SSR/SSG:** major AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) do **not** execute JavaScript (Vercel/MERJ, 500M+ GPTBot fetches). Only Gemini (Googlebot WRS) renders JS. Client-rendered SPA content is invisible to most AI crawlers → server-render anything you want cited. Core Web Vitals 2026: LCP ≤2.5s, INP ≤200ms (replaced FID Mar 2024), CLS ≤0.1.
- **llms.txt is not used by Google** (Illyes/Mueller, Jul 2025; Mueller compared it to the keywords meta tag); Ahrefs log study found ~97% of llms.txt files got zero AI-bot traffic. Frame skeptically.
- **E-E-A-T & topical authority:** Google's QRG (dated 11 Sep 2025) says Trust is the most important element; "Experience" was added Dec 2022. March 2024 introduced the scaled-content-abuse spam policy (kills thin programmatic pages). Author bylines/credentials + `sameAs` entity links + topical clusters (HubSpot's pillar-cluster model) are the durable levers. Freshness matters: ~85% of AIO citations were published within 2 years (SEOcrawl).

---

## Article briefs (6)

### A. AEO/GEO erklärt: Wie du in ChatGPT, Perplexity & Google AI Overviews zitiert wirst
- **EN gloss:** How to get cited in ChatGPT, Perplexity & AI Overviews.
- **Slug:** `aeo-geo-in-ki-suchen-zitiert-werden`
- **Intent/keywords:** informational; "AEO", "GEO", "Generative Engine Optimization", "in ChatGPT zitiert werden", "AI Overviews Optimierung".
- **Angle:** The rules of getting *cited* are different from ranking — and mostly older than you think (structure, sources, statistics). A practical playbook grounded in the Princeton GEO study, not hype.
- **Outline:** H2 Was ist AEO/GEO (Abgrenzung SEO) · H2 Warum es zählt (Zero-Click + 4,4× Conversion) · H2 Die Princeton-GEO-Studie: was messbar wirkt [table of tactics + % lift] · H2 Content so strukturieren, dass LLMs zitieren [H3 40–75-Wort-Passagen, H3 Tabellen/Listen, H3 Statistiken & Zitate] · H2 Entität & Marke aufbauen (Mentions > Backlinks) · H2 Technik: SSR, Schema, Crawlability [best-practices box] · H2 Messen: Share of Voice in AI-Suchen · H2 Checkliste [checklist].
- **Facts:** Princeton +40% / +115.1% at #5 (KDD 2024); NAV43 40–75-word 3.1×; kime.ai tables 2.5×; Semrush clarity +32.83% / promo −26.19%; Ahrefs brand mentions 0.66 vs backlinks 0.22; Seer cited-brand +35%/+91%.
- **Mistakes:** writing walls of promo copy; hiding answers below the fold; JS-rendered content; no author/entity signals; keyword stuffing (hurts citations).
- **Best practices:** lead with a crisp self-contained answer; add a stat + source per key claim; use tables/lists; server-render; build unlinked brand mentions.
- **Featured stat:** "Cite-sources tactic: +115,1% Sichtbarkeit für eine Seite auf Position 5 (Princeton, KDD 2024)."
- **CTA hooks:** free audit (we check your AEO readiness), ROI calculator. Pillar candidate — link to B, C, F.
- **Words:** 2400–2800.

### B. AI Overviews & der Klick-Rückgang — was B2B jetzt ändern muss
- **EN gloss:** AI Overviews and the click collapse — what B2B must change.
- **Slug:** `ai-overviews-klick-rueckgang-b2b`
- **Intent/keywords:** "AI Overviews Traffic", "Klickrückgang Google", "Zero-Click SEO B2B".
- **Angle:** The blue-link era is ending; stop measuring success by rankings and start measuring citations, branded demand, and pipeline. Data-heavy wake-up call with a B2B response plan.
- **Outline:** H2 Was AI Overviews sind & wie oft sie erscheinen · H2 Die Zahlen zum Klickverlust [table: Pew/Ahrefs/Seer/AWR] · H2 Warum B2B besonders betroffen ist (informational queries) · H2 Was das für dein Reporting bedeutet (weg von CTR) · H2 Der B2B-Reaktionsplan [H3 Bottom-of-funnel & Brand, H3 Owned/Ads, H3 AEO] · H2 Wie du Pipeline statt Klicks misst · H2 Best practices [box].
- **Facts:** Semrush prevalence 6.49→24.61→15.69%; Pew 8% vs 15%; Ahrefs 58%; Seer 61%/68%; SparkToro 68% zero-click 2026; Semrush informational 91.3%→57.1%.
- **Mistakes:** doubling down on thin informational blog posts; judging SEO by position alone; ignoring branded search; no first-party data.
- **Best practices:** invest in brand + demand; move budget toward bottom-funnel & Ads; build cited assets; measure pipeline in CRM.
- **Featured stat:** "Mit AI Overview klicken Nutzer nur noch in 8% der Fälle auf ein klassisches Ergebnis — statt 15% (Pew, Jul 2025)."
- **CTA hooks:** audit, ROI calc. Link to A, F, and Google-Ads cluster.
- **Words:** 2000–2400.

### C. Schema.org & strukturierte Daten für AEO — was 2026 noch bringt
- **EN gloss:** Structured data for AEO — what still pays off in 2026.
- **Slug:** `schema-strukturierte-daten-aeo-2026`
- **Intent/keywords:** "Schema.org", "strukturierte Daten", "FAQPage", "Organization Schema", "Rich Snippets 2026".
- **Angle:** FAQ rich results are dead — but schema isn't. Separate the hype (citation multipliers) from what's real (entity precision, Organization/Article). Honest, evidence-both-sides guide.
- **Outline:** H2 Was strukturierte Daten sind · H2 Was 2026 wegfiel (FAQ/HowTo Rich Results) [callout] · H2 Hilft Schema für KI-Zitate? Beide Seiten der Evidenz [table: Levering/Bing pro vs Ahrefs contra] · H2 Die Typen, die zählen [H3 Organization + sameAs, H3 Article + author, H3 Product/Breadcrumb] · H2 Umsetzung ohne Plugin-Wildwuchs · H2 Testen & Validieren · H2 Checkliste [checklist].
- **Facts:** FAQ rich results retired ~May 2026; HowTo 2023; Levering "schema feeds generative AI"; Bing PM Mar 2025; Ahrefs 1,885-page null result (Jun 2026); Organization markup expansion Nov 2023 (logo/sameAs/naics).
- **Mistakes:** expecting FAQ stars back; marking up invisible/inconsistent content; over-plugin conflicts; ignoring Organization/sameAs.
- **Best practices:** Organization + sameAs on home; Article + author on posts; keep JSON-LD server-rendered; validate; don't fake markup.
- **Featured stat:** "Google hat FAQ-Rich-Results ~Mai 2026 abgeschaltet — die Auszeichnung bleibt trotzdem sinnvoll."
- **CTA hooks:** audit (we implement your schema), link to A.
- **Words:** 1800–2200.

### D. Topical Authority & Content-Cluster für B2B-SEO 2026
- **EN gloss:** Topical authority & content clusters for B2B SEO.
- **Slug:** `topical-authority-content-cluster-b2b`
- **Intent/keywords:** "Topical Authority", "Content Cluster", "Pillar Page", "Themencluster SEO".
- **Angle:** In an AI-search world, depth beats scattered keywords — but "programmatic at scale" now risks the scaled-content-abuse penalty. How B2B builds real authority.
- **Outline:** H2 Warum Themen statt Keywords · H2 Das Pillar-Cluster-Modell (HubSpot-Ursprung) [diagram/H3] · H2 Cluster für ein B2B-Angebot planen [H3 Pillar wählen, H3 Spokes ableiten, H3 interne Verlinkung] · H2 Entität & E-E-A-T (Autor, sameAs) · H2 Die Grenze: scaled content abuse (März 2024) [callout] · H2 Messen (Sichtbarkeit, interne Links) · H2 Umsetzungs-Checkliste [checklist].
- **Facts:** HubSpot interlinking→rankings research; QRG 11 Sep 2025 (Trust wichtigstes Element); scaled-content-abuse policy Mar 2024; Backlinko 11.8M results (#1 has 3.8× more referring domains); freshness ~85% AIO citations <2y.
- **Mistakes:** publishing isolated posts; thin templated pages at scale; no internal linking; no author entity.
- **Best practices:** one strong pillar + bidirectional links; proprietary data per page; author bios + sameAs; prune thin pages.
- **Featured stat:** "Die #1-Position hat im Schnitt 3,8× mehr verweisende Domains (Backlinko, 11,8 Mio. Ergebnisse)."
- **CTA hooks:** audit, link to A/C/F.
- **Words:** 2000–2400.

### E. E-E-A-T in der KI-Suche: Autorität, die Maschinen zitieren
- **EN gloss:** E-E-A-T for AI search — authority machines cite.
- **Slug:** `eeat-ki-suche-autoritaet`
- **Intent/keywords:** "E-E-A-T", "Trustworthiness Google", "Autoren-Schema", "Markenerwähnungen SEO".
- **Angle:** Google says Trust is #1; AI engines cite brands they "know". E-E-A-T stopped being a fluffy acronym and became the mechanism behind who gets cited.
- **Outline:** H2 Was E-E-A-T wirklich ist (Experience→Trust) · H2 Warum es in der KI-Suche zählt · H2 Marken-Signale: Mentions schlagen Backlinks [table] · H2 Autoren-Autorität operationalisieren [H3 Bylines & Bios, H3 sameAs & Wikidata, H3 Original-Research] · H2 Off-site: Digital PR, Reddit, LinkedIn, YouTube · H2 Was E-E-A-T *nicht* ist (Mythen) · H2 Best practices [box].
- **Facts:** QRG 11 Sep 2025 Trust; Experience added Dec 2022; Ahrefs mentions 0.66 vs backlinks 0.22, YouTube 0.74, ~82% earned media; most-cited: Wikipedia/YouTube/Reddit/LinkedIn; BuzzStream digital PR 89.6% effective for links.
- **Mistakes:** anonymous content; buying links instead of earning mentions; ignoring Reddit/LinkedIn; faking credentials.
- **Best practices:** named authors with real credentials + sameAs; publish original data; earn third-party mentions; be active where AI cites.
- **Featured stat:** "Markenerwähnungen korrelieren ~3× stärker mit KI-Sichtbarkeit als Backlinks (Ahrefs, 75.000 Marken)."
- **CTA hooks:** audit, about page (Andre's authority), link to A/D.
- **Words:** 1900–2300.

### F. AEO-Messung: Sichtbarkeit in AI-Suchen tracken (Tools & Methode) — [PILLAR / lead-magnet hook]
- **EN gloss:** Measuring AI-search visibility — tools & method.
- **Slug:** `ai-suche-sichtbarkeit-messen-tools`
- **Intent/keywords:** "AI Visibility Tracking", "Share of Voice AI", "AI Overviews Search Console", "GEO Tools".
- **Angle:** You can't optimize what you can't measure — and Search Console lumps AI into "Web". Here's a pragmatic measurement stack for B2B, from free (GSC/GA4) to paid (Peec, Semrush, Ahrefs).
- **Outline:** H2 Warum klassische Metriken versagen · H2 Was GSC & GA4 heute zeigen (und nicht) [H3 GSC gen-AI report Jun 2026, H3 GA4 AI-Referral-Regex] · H2 Prompt-Set-Methodik (Mentions vs Citations vs Sentiment) · H2 Tool-Vergleich [big table: Peec, Semrush, Ahrefs Brand Radar, Profound, Otterly, Scrunch — focus + Preis + EU-Datenschutz] · H2 Ein schlankes Setup für B2B · H2 KPIs, die zählen · H2 Checkliste [checklist].
- **Facts:** GSC gen-AI performance reports launched 3 Jun 2026 (data already in aggregate "Web"); GA4 AI-referral regex + native "AI Assistant" channel May 2026 (misses 35–70%); Ahrefs Brand Radar SOV definition, 405M+ prompts, $199–699/mo; Semrush One from $199/mo; Peec AI Berlin/GDPR from ~€89/mo; Bing index powers Copilot + ChatGPT search.
- **Mistakes:** trusting GSC to isolate AI; tracking keywords not prompts; ignoring sentiment; buying enterprise tools too early.
- **Best practices:** define a real buyer prompt set; track mentions + citations + sentiment; add a GA4 AI channel; start free, scale to paid.
- **Featured stat:** "Seit 3. Juni 2026 zeigt die Search Console eigene 'Generative AI'-Reports — die Daten steckten schon vorher im Web-Report."
- **CTA hooks:** the "AEO-Readiness-Checkliste" lead magnet; audit. Pillar — links to A–E.
- **Words:** 2200–2600.

---

### Editorial guardrails
- German "Du" address, sharp operator voice, short sentences. No promotional fluff (it hurts AEO too).
- Every headline stat needs a source in-text (author + year). Flag secondary sources.
- Each article: 1 comparison table OR checklist minimum, 2–3 pull-out stats, one mid-article CTA + end CTA, clear H2/H3 for the ToC.
