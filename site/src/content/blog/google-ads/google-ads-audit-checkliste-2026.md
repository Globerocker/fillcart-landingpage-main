---
title: "Google-Ads-Audit 2026: Die vollständige Checkliste"
description: "Das durchschnittliche Google-Ads-Konto verschwendet 26 % des Budgets. Die komplette B2B-Audit-Checkliste: Tracking, KPI, Struktur, Keywords, Gebote, PMax."
category: google-ads
publishDate: 2026-05-05
author: "Andre Schüler"
tags: ["Google Ads Audit", "Wasted Spend", "Konto-Check", "B2B Google Ads", "Tracking", "Kampagnenstruktur"]
featured: false
heroStat:
  value: "26 %"
  label: "Budget-Waste im durchschnittlichen Google-Ads-Konto"
---

Das durchschnittliche Google-Ads-Konto verschwendet 26 % seines Budgets an Suchanfragen, die nie eine Chance auf Conversion hatten (Quelle: groas.ai, 2026). Bei 20.000 € Monatsbudget sind das über 62.000 € im Jahr — Geld, das in kaputtes Tracking, falsche KPIs und ungepflegte Negative-Listen fließt. Dieser Artikel ist die vollständige, priorisierte Audit-Checkliste, mit der du diese Lecks findest. Und zwar in der Reihenfolge, in der sie wirklich Geld kosten.

Der Fillcart-Twist dabei: Ein B2B-Audit prüft nicht nur, ob die Struktur sauber ist. Es prüft, ob das Konto überhaupt auf Pipeline statt auf Formulare optimiert. Ein Konto mit perfekter Struktur, das auf die falsche KPI biddet, ist trotzdem kaputt.

## Warum die meisten Konten Geld verlieren — und es niemand merkt

Der Grund, warum Waste so lange unentdeckt bleibt, ist simpel: Die Dashboards sehen gut aus. CTR stimmt, CPL liegt im Rahmen, Conversions kommen rein. Aber „gut aussehen" und „Geld verdienen" sind zwei verschiedene Dinge — vor allem, wenn das Tracking selbst schon lügt.

„Wenn das Tracking falsch ist, optimiert Smart Bidding aufs Falsche, und jeder Report lügt" (Quelle: northcountrygrowth.com, 2026). Das ist der Satz, mit dem jedes Audit anfangen sollte. Denn ein Algorithmus, der auf verzerrten Signalen lernt, wird über Wochen hinweg systematisch die falschen Entscheidungen treffen — und das Reporting zeigt dabei scheinbar stabile, vertrauenerweckende Zahlen an.

Die 26 % Waste sind kein Einzelfall und keine Übertreibung, sondern der Durchschnitt über tausende geprüfte Konten (Quelle: groas.ai, 2026). Digitalapplied geht in seiner Audit-Referenz sogar noch weiter und listet über 100 einzelne Prüfpunkte auf, die ein vollständiges Google-Ads-Audit abdecken sollte (Quelle: digitalapplied.com, 2026). Diese 100+ Punkte lassen sich für B2B auf acht Kernbereiche verdichten — und genau die arbeiten wir hier durch.

<div class="a-stat"><div class="a-stat-num">26 %</div><p class="a-stat-txt">des Budgets verschwendet das durchschnittliche Google-Ads-Konto an nie-konvertierenden Traffic. Bei 20.000 €/Monat sind das 5.200 € — jeden Monat (Quelle: groas.ai, 2026).</p></div>

Bevor du eine einzige Kampagne anfasst: Ein Audit ist keine Bestandsaufnahme zum Selbstzweck. Es ist die Grundlage für die Priorisierung, welche Baustelle du zuerst schließt — denn nicht jeder Fund kostet gleich viel.

## Audit-Bereich 1: Conversion-Tracking & Datenqualität

Das teuerste Versteck für Waste ist nicht die Kampagnenstruktur. Es ist das Tracking. Ein Konto kann strukturell makellos sein und trotzdem jeden Monat Geld verbrennen, wenn die Zahlen, auf die es optimiert, falsch sind.

Typische Fundstellen: doppelt zählende Conversion-Tags (Formular feuert zweimal, GA4 und Google Ads zählen parallel), fehlende Enhanced Conversions, ein Consent-Setup, das für europäische Nutzer:innen kaum noch Signal durchlässt — dazu mehr in unserem Artikel zu [Consent Mode v2 und Enhanced Conversions im DACH-Markt](/wissen/google-ads/consent-mode-v2-enhanced-conversions-dach/). Wer serverseitig über eine Conversions API trackt, bekommt außerdem eine 15–30 % vollständigere Attribution als mit reinem Browser-Pixel (Quelle: optmyzr.com, 2025) — ein Kriterium, das in kaum einem klassischen Audit-Template auftaucht, aber im B2B-Kontext mit langen Sales-Cycles besonders viel Signal rettet.

<ul class="a-checklist">
<li>Feuert jede Conversion-Action genau einmal pro tatsächlicher Handlung (kein Doppel-Tracking über GTM + native Tags)?</li>
<li>Ist zwischen Primary- und Secondary-Conversions sauber getrennt (Smart Bidding lernt nur von Primary)?</li>
<li>Sind Enhanced Conversions aktiv und wird ad_user_data-Consent korrekt gesetzt?</li>
<li>Liegt die Consent-Rate über der Modeling-Schwelle (mind. 20 %, mind. 700 Klicks/7 Tage/Land)?</li>
<li>Ist serverseitiges Tracking (Conversions API) im Einsatz oder zumindest evaluiert?</li>
<li>Stimmen die Conversion-Zahlen in Google Ads mit GA4 und dem CRM überein (Stichprobe von 20 Leads durchklicken)?</li>
<li>Ist das Attributionsmodell (data-driven vs. last-click) bewusst gewählt, nicht Default?</li>
<li>Werden GCLIDs im CRM zuverlässig gespeichert, für spätere Offline-Conversion-Imports?</li>
</ul>

Wenn eine einzige dieser Fragen mit „nein" oder „weiß ich nicht" beantwortet wird, ist das dein erster Fix — vor jeder Struktur- oder Gebotsänderung.

## Audit-Bereich 2: Optimiert das Konto auf die richtige KPI?

Selbst ein technisch perfektes Tracking-Setup hilft nichts, wenn das Konto auf die falsche Zahl optimiert. Das ist der Bereich, den generische Audit-Checklisten fast immer auslassen — weil er keine Google-Ads-Einstellung ist, sondern eine strategische Entscheidung.

Die Kernfrage: Optimiert das Konto auf Form-Fills oder auf Pipeline? Wir haben in [„Cost-per-Lead ist die falsche KPI"](/wissen/google-ads/cost-per-lead-falsche-kpi-pipeline-optimierung/) einen realen Fall durchgerechnet, in dem der berichtete CPL bei 127 $ lag — während die tatsächlichen Kosten pro Sales Qualified Lead im CRM bei 1.588 $ lagen. Eine 12,5-fache Lücke (Quelle: strivelabs.ai, 2025/26). Das Ad-Konto sah dabei die ganze Zeit hervorragend aus.

### Der B2B-Sonderfall: Warum ein sauberes Konto trotzdem die falschen Leads kaufen kann

Das ist die Pointe dieses Audit-Bereichs: Struktur, Keywords und Gebote können lehrbuchmäßig sauber sein — wenn das Optimierungsziel „billige Formulare" statt „werthaltige Pipeline" lautet, kauft der Algorithmus systematisch die falschen Menschen. Prüfe deshalb, ob CRM-Pipeline-Stufen als Offline-Conversions zurückgespielt werden, ob Primary/Secondary-Conversions sauber gesetzt sind und ob überhaupt jemand im Team CPL und Cost-per-SQL nebeneinander reportet. Nur 12 % der B2B-SaaS-Unternehmen haben diese vollständige Pipeline-Attribution aufgebaut (Quelle: strivelabs.ai, 2025/26) — der Rest optimiert mehr oder weniger blind.

<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, wo bei dir Pipeline liegen bleibt?</strong> Wir nehmen dein Konto kostenlos auseinander — Tracking, KPI, Struktur, Gebote.</p><a href="/#audit">Kostenlosen Audit sichern</a></div>

## Audit-Bereich 3: Kampagnenstruktur

Der wichtigste Struktur-Check ist unspektakulär, aber entscheidend: Brand vs. Non-Brand. Wenn beide in einer Kampagne vermischt sind, bekommt dein Bidding-Algorithmus verrauschte Daten — Brand-Klicks sind billig und konvertieren gut, weil die Nutzer:innen dich schon kennen, nicht weil deine Anzeige überzeugt hat (Quelle: northcountrygrowth.com, 2026). Das verzerrt jeden ROAS- und CPA-Wert im Konto nach oben und maskiert, wie die Non-Brand-Kampagnen wirklich performen.

Prüfe außerdem die thematische Homogenität deiner Anzeigengruppen. Google Ads bidding funktioniert am saubersten, wenn eine Kampagne ein klar abgegrenztes Themenfeld bearbeitet — nicht fünf Produktlinien gleichzeitig. Je heterogener die Suchintentionen in einer Kampagne, desto schwerer tut sich Smart Bidding, ein konsistentes Muster zu lernen.

## Audit-Bereich 4: Keywords, Match Types & Suchbegriffe

Der Search-Term-Report ist die günstigste Waste-Quelle, die du selbst prüfen kannst — und die am häufigsten vernachlässigt wird. Broad Match ohne engmaschige Kontrolle zieht systematisch thematisch verwandte, aber nicht kaufbereite Anfragen an. Zieh dir die letzten 90 Tage Suchbegriffe, sortiere nach Spend, und prüfe jeden Begriff über 100 € Spend ohne Conversion einzeln.

Typische Muster, die im B2B-Audit auffallen: Suchbegriffe mit Jobsuche-Intention („stellenangebot", „gehalt"), Konkurrenzmarken ohne eigene Kampagnen-Logik dahinter, generische Informationsanfragen, die eher zu einem Blogartikel als zu einer Landingpage passen. Jeder davon frisst Budget, ohne je eine Chance auf Pipeline zu haben.

## Audit-Bereich 5: Negative Keywords & Ausschlüsse

Negative-Keyword-Hygiene ist „der am meisten unterschätzte Hebel" in Google-Ads-Konten — Audits decken hier regelmäßig einen sechsstelligen Jahres-Waste auf, vor allem bei Broad Match und Performance Max (Quelle: groas.ai, 2026). Das Problem: Negatives sind unsichtbare Arbeit. Niemand feiert eine gepflegte Ausschlussliste, aber jeder spürt die Kosten, wenn sie fehlt.

Seit 2026 lassen sich pro Performance-Max-Kampagne bis zu 10.000 Negative Keywords auf Kampagnenebene hinterlegen, die für Search- und Shopping-Inventar gelten (Quelle: strikesocial.com / vulpeads.com, 2026) — ein Kontrollmechanismus, den es davor praktisch nicht gab. Wer PMax fährt, sollte diesen Hebel nutzen, bevor er über schlechte PMax-Performance klagt. Details zur konkreten Umsetzung findest du in [„Performance Max für B2B richtig steuern"](/wissen/google-ads/performance-max-b2b-steuern-guardrails-negatives/).

<div class="a-stat"><div class="a-stat-num">10.000</div><p class="a-stat-txt">Negative Keywords lassen sich seit 2026 auf eine Performance-Max-Kampagne anwenden — bis vor Kurzem praktisch keine (Quelle: strikesocial.com, 2026).</p></div>

## Audit-Bereich 6: Gebotsstrategie

Ein klarer Red Flag, den jedes Audit sofort finden sollte: eine Kampagne mit 30 oder mehr Conversions pro Monat, die immer noch auf „Maximize Clicks" oder manuellem CPC läuft (Quelle: northcountrygrowth.com, 2026). Das ist verschenktes Optimierungspotenzial — genug Signal für Smart Bidding liegt vor, wird aber nicht genutzt.

Die passende Gebotsstrategie hängt vom Conversion-Volumen und vom Optimierungsziel ab. Als Faustregel:

| Conversion-Volumen/Monat | Empfohlene Strategie | Warum |
|---|---|---|
| < 15 | Manuell / Maximize Clicks, Fokus auf Struktur & Tracking aufbauen | Zu wenig Signal für jedes automatisierte Bidding |
| 15–30 | Maximize Conversions (ohne Ziel-CPA) | Erstes Lernen ermöglichen, noch kein festes Ziel |
| ≥ 30 | tCPA | Ausreichend Volumen für stabile Ziel-Optimierung |
| ≥ 45–50 mit Wert-Daten | tROAS | Voraussetzung für Value-based Bidding erreicht |

Der Wechsel von tCPA zu tROAS bringt laut Google-Daten im Median +14 % Conversion-Value bei ähnlichem ROAS (Quelle: groas.com / involvedigital.com, 2026) — aber nur, wenn genug werthaltige Conversions als Trainingssignal vorliegen. Die vollständige Umsetzung inklusive HubSpot-Anbindung beschreiben wir in [„Value-based Bidding mit CRM-Daten"](/wissen/google-ads/value-based-bidding-offline-conversions-hubspot-crm/).

<div class="a-callout warn"><span class="a-callout-title">Häufiger Fehler</span><p>Eine Kampagne mit ausreichend Conversion-Volumen läuft aus Gewohnheit weiter auf manuellem CPC, „weil das schon immer so funktioniert hat". Das ist meistens der schnellste Quick Win im ganzen Audit.</p></div>

## Audit-Bereich 7: Automatisierung — PMax & AI Max Guardrails

Automatisierte Kampagnentypen sind 2026 Standard, nicht Ausnahme. Die Frage im Audit ist nicht mehr „läuft PMax oder AI Max?", sondern: Sind die Guardrails gesetzt? Konkret: Existieren Brand Exclusions, die eigenen Markennamen aus PMax aussteuern? Sind Negative-Listen auf Kampagnen- und Kontoebene gepflegt? Wird bei AI Max das Search-Term-Reporting engmaschig geprüft, bevor Final URL Expansion unkontrolliert auf beliebige Landingpages verweist?

Ohne diese Guardrails blähen Brand-Klicks den ROAS künstlich auf und maskieren echte Performance-Probleme. Die konkreten Einstellungen dafür — Schritt für Schritt — stehen in [„AI Max für Search 2026"](/wissen/google-ads/ai-max-fuer-search-2026-b2b-guide/) und im PMax-Guide.

## Audit-Bereich 8: Anzeigen, Assets & Landingpages

Zuletzt der Kreativ- und Landingpage-Check: Ad Strength auf „Good" oder „Excellent", genug Asset-Vielfalt in den Responsive Search Ads, und vor allem — passt die Landingpage thematisch exakt zur Suchanfrage? Eine generische Startseite als Ziel-URL für eine spezifische Produktsuche ist einer der stillen Conversion-Killer, den kein Bidding-Algorithmus reparieren kann.

## Priorisierung: Was zuerst fixen

Nicht jeder Fund ist gleich dringend. Die Reihenfolge, die sich in der Praxis bewährt: erst die Dinge, die schnell und ohne Risiko umsetzbar sind und sofort Wirkung zeigen, dann die strukturellen Baustellen, die mehr Vorlauf brauchen.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul><li>26 % Budget-Waste ist der Durchschnitt, nicht die Ausnahme (Quelle: groas.ai, 2026) — jedes Konto sollte quartalsweise geprüft werden.</li><li>Tracking zuerst: Wenn die Zahlen falsch sind, optimiert Smart Bidding aufs Falsche, egal wie sauber die Struktur ist.</li><li>Ein B2B-Audit prüft die KPI-Frage (Pipeline vs. Form-Fills) genauso hart wie Struktur und Gebote.</li><li>Negative Keywords sind der am meisten unterschätzte Hebel — bei PMax jetzt mit bis zu 10.000 möglich.</li><li>Kampagnen mit ≥ 30 Conversions/Monat auf manuellem CPC sind ein sofortiger Fix.</li></ul></div>

Google-Ads-Höchstpriorität — die „Fix immediately"-Liste, die in Audits regelmäßig den schnellsten Effekt zeigt: Tracking-Fehler beheben, fehlende Negative Keywords ergänzen, Budget von Low- zu High-Performern umschichten und Keywords mit hohem Spend bei null Conversions pausieren. Die Wirkung ist oft schon nach Tagen sichtbar (Quelle: groas.ai, 2026).

Danach folgen die strukturellen Fixes: Brand/Non-Brand-Trennung, Gebotsstrategie-Wechsel, PMax-Guardrails, CRM-Anbindung. Diese brauchen mehr Vorlauf, liefern aber den nachhaltigeren Effekt. Nutze zur groben Kalkulation, was ein Fix bringen kann, unseren [ROI-Rechner](/#rechner) — er hilft, Impact und Aufwand realistisch gegeneinander abzuwägen, bevor du Ressourcen bindest.

Als Referenzwerte für die Einordnung, ob deine Zahlen im normalen Bereich liegen: Der durchschnittliche CPL lag 2025 branchenübergreifend bei 70,11 $, die durchschnittliche Conversion Rate bei 7,52 % und die CTR bei 6,66 % (Quelle: WordStream, 2025). Weicht dein Konto stark davon ab, ist das ein Hinweis — kein Urteil, aber ein guter Anlass, genauer hinzusehen.

<div class="a-stat"><div class="a-stat-num">100+</div><p class="a-stat-txt">Einzelpunkte umfasst eine vollständige Google-Ads-Audit-Referenz — verdichtet auf die acht Kernbereiche, die im B2B am meisten Wirkung zeigen (Quelle: digitalapplied.com, 2026).</p></div>

## Fazit: Audit ist kein Einmal-Projekt

Ein Google-Ads-Audit ist keine Bestandsaufnahme, die man einmal macht und abhakt. Google ändert Features im Wochentakt, Kampagnen driften, und was letztes Quartal sauber war, ist es heute vielleicht nicht mehr. Wiederhole das Audit vierteljährlich, spiegle die Zahlen gegen Benchmarks, und fang jedes Mal wieder beim Tracking an — nicht bei den Keywords.

Wer bei sich selbst unsicher ist, ob das Konto wirklich auf Pipeline statt auf Formulare optimiert, sollte genau da ansetzen, bevor er an Struktur oder Geboten dreht. Mehr über unsere Herangehensweise und warum wir grundsätzlich auf CRM-Pipeline statt auf CPL optimieren, liest du auch [über Fillcart](/ueber-fillcart).

## Quellen

- groas.ai, Google Ads Account Audit Checklist 2026: Red Flags & Fixes — https://groas.ai/post/google-ads-account-audit-checklist-2026-red-flags-fixes (2026)
- northcountrygrowth.com, Google Ads Account Audit Checklist — https://www.northcountrygrowth.com/blog/google-ads-account-audit-checklist/ (2026)
- digitalapplied.com, Google Ads Audit Checklist (100 Items) — https://www.digitalapplied.com/blog/google-ads-audit-checklist-100-items (2026)
- strivelabs.ai, Google Ads B2B SaaS Pipeline Attribution — https://strivelabs.ai/blog/google-ads-b2b-saas-pipeline-attribution/ (2025/26)
- strikesocial.com, Performance Max Updates and News — https://strikesocial.com/blog/performance-max-updates-and-news/ (2026)
- optmyzr.com, Value-based Bidding Guide — https://www.optmyzr.com/blog/value-based-bidding-guide/ (o. D., zit. 2025)
- WordStream, 2025 Google Ads Benchmarks — https://www.wordstream.com/blog/2025-google-ads-benchmarks (2025)
