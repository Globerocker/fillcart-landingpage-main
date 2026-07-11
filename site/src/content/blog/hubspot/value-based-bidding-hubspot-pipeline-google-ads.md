---
title: "Value-based Bidding: HubSpot-Deal-Werte an Google Ads senden"
description: "So bietet Google Ads auf echte Pipeline statt auf billige Formulare: HubSpot-Deal-Werte, Target ROAS und der Umstieg von Maximize Conversions."
category: hubspot
publishDate: 2026-06-09
author: "Andre Schüler"
tags: ["Value-based Bidding", "Google Ads", "HubSpot", "Target ROAS", "Pipeline-Attribution"]
featured: false
heroStat:
  value: "+14 %"
  label: "mehr Conversion-Value beim Wechsel von Target CPA zu Target ROAS (laut Google)"
---

Maximize Conversions ist eine Maschine, die möglichst billige Leads kauft. In B2B heißt das: möglichst schlechte Leads. Die Lösung ist keine neue Keyword-Strategie, sondern eine simple Frage — weiß Google, was ein Deal wert ist? Fließt der Closed-Won-Wert aus HubSpot zurück an Google Ads, hört Target ROAS auf, auf Formular-Fills zu optimieren, und fängt an, auf Pipeline zu optimieren. Dieser Artikel zeigt die Verkabelung und den Payoff.

## Das B2B-Problem mit "Maximize Conversions"

Smart Bidding ist gut in genau einer Sache: das zu wiederholen, was es als Erfolg gelernt hat. Fütterst du den Algorithmus mit "Formular abgeschickt" als einzigem Signal, wird er exzellent darin, Formular-Fills zu produzieren. Ob aus diesen Fills jemals ein Sales Qualified Lead, eine Opportunity oder ein zahlender Kunde wird, sieht Google nicht — und kann es deshalb auch nicht belohnen oder bestrafen.

Das Ergebnis kennst du, wenn du B2B-Konten führst: CPLs sinken, das Dashboard sieht großartig aus, und Vertrieb beschwert sich gleichzeitig, dass die Leads nichts taugen. Beides stimmt. Der Algorithmus tut exakt, wofür er gebaut wurde — er optimiert auf das billigste verfügbare Signal, nicht auf das wertvollste. Ohne CRM-Rückkopplung ist "Lead" in Google Ads eine Zahl ohne Substanz.

Das ist kein Kampagnenproblem, das sich mit besseren Anzeigentexten lösen lässt. Es ist ein Datenproblem: Google kann nur auf Werte optimieren, die es tatsächlich bekommt (F15). Bekommt es nur eine binäre "Conversion ja/nein", optimiert es auf Volumen. Bekommt es echten Deal-Wert, optimiert es auf Umsatz.

Das Tückische daran: Niemand merkt es sofort. Die Kampagne läuft, die Zahlen im Dashboard sehen gut aus, das Budget wird sogar noch ausgeweitet, weil "es ja funktioniert". Erst wenn Vertrieb nach ein paar Monaten fragt, warum der Forecast nicht zum gemeldeten Lead-Volumen passt, wird sichtbar, dass Marketing und Google Ads seit Wochen aneinander vorbeioptimieren. Der Fix ist nicht, weniger zu werben oder die Zielgruppe enger zu fassen — der Fix ist, dem Algorithmus die richtige Zielgröße zu geben.

## Was value-based Bidding ist

Value-based Bidding ist der Teil von Google Smart Bidding, der nicht auf Conversion-Anzahl, sondern auf Conversion-Wert optimiert (Quelle: Google Ads Help, 2026). Zwei Strategien stehen zur Wahl, und der Unterschied ist mehr als Semantik.

| Strategie | Was optimiert wird | Passt für |
|---|---|---|
| Maximize Conversion Value | Höchstmöglicher Gesamtwert, ohne Effizienz-Vorgabe | Konten mit wenig historischen Wertdaten, Lernphase |
| Target ROAS (tROAS) | Wert bei einer festgelegten Effizienz-Zielgröße | Konten mit stabiler, ausreichend großer Wert-Historie |

Ab Juni 2026 benennt Google diese Strategien um: "Maximize Conversions with a Target CPA" wird zu "Target CPA", "Maximize Conversion Value with a Target ROAS" wird schlicht zu "Target ROAS" (F14). Inhaltlich ändert sich nichts — aber wenn du im Juli 2026 in der Oberfläche nach dem alten Namen suchst, wirst du ihn nicht mehr finden.

Der praktische Unterschied: Maximize Conversion Value lässt dem Algorithmus freie Hand, um überhaupt erst genug Wert-Daten zu sammeln. Target ROAS zäumt das Pferd danach ein, sobald du eine belastbare Zielgröße kennst. Wer direkt mit tROAS startet, ohne die Lernphase durchlaufen zu haben, bremst den Algorithmus aus, bevor er überhaupt gelernt hat, was ein guter Deal ist.

Beide Strategien sind Teil der Google-Smart-Bidding-Familie und lassen sich für Search- und Shopping-Kampagnen einsetzen (Quelle: Google Ads Help, 2026). Wichtig ist: Value-based Bidding ist keine Alternative zu Smart Bidding, sondern eine Ausprägung davon — du tauschst nicht das System, du tauschst die Zielgröße, auf die es hinoptimiert.

## Warum es ohne CRM-Daten nicht funktioniert

Value-based Bidding ist kein Setting, das du in den Kampagneneinstellungen umlegst und dann vergisst. Es ist so gut wie die Werte, die es bekommt — und die kommen nicht aus Google Ads, sondern aus deinem CRM.

<div class="a-callout warn"><span class="a-callout-title">Garbage in, garbage bids</span><p>Schickst du für jeden Deal denselben Platzhalterwert, kann Google zwei Leads nicht unterscheiden, die in Wahrheit 500 € und 50.000 € Pipeline-Wert bedeuten. Das System optimiert dann de facto wieder auf Volumen — nur mit einem Wert-Label, das Präzision vorgaukelt, die gar nicht da ist.</p></div>

Der Mechanismus ist unbestechlich: Fließt der reale Closed-Won-Wert aus HubSpot zurück, lernt Smart Bidding, welche Signale — Keyword, Anzeigengruppe, Zielgruppe, Uhrzeit — tatsächlich zu werthaltigen Deals führen, und verschiebt das Budget dorthin. Ohne diese Rückkopplung bleibt "value-based" nur ein Name auf dem Dashboard, keine Realität im Bidding.

<div class="a-stat"><div class="a-stat-num">2</div><p class="a-stat-txt">Strategien für value-based Bidding — Maximize Conversion Value und Target ROAS — aber beide sind nur so gut wie die Deal-Werte, die sie aus dem CRM bekommen (Quelle: Google Ads Help, 2026).</p></div>

## Deal-Werte aus HubSpot definieren

Bevor du irgendetwas synchronisierst, musst du eine Entscheidung treffen, die die meisten Teams überspringen: Welcher Wert soll überhaupt an Google gehen?

### Roher Deal-Betrag

Der einfachste Weg: Du schickst den tatsächlichen Deal-Amount, sobald ein Deal auf "Closed Won" wechselt (F3). Das ist ehrlich, nachvollziehbar und für die meisten Konten der richtige Startpunkt.

### Gewichteter Pipeline-Wert

Bei langen Sales-Cycles willst du nicht erst am Ende des Trichters ein Signal senden — das dauert Google zu lange, um daraus zu lernen. Hier hilft ein gewichteter Wert: Pipeline-Wert multipliziert mit einer realistischen Abschlusswahrscheinlichkeit für die jeweilige Stage.

### Stage-Probability-adjustierter Wert mit Predictive Scoring

HubSpots Predictive Lead Scoring gibt eine prozentuale Wahrscheinlichkeit aus, dass ein Kontakt innerhalb von 90 Tagen abschließt ("Likelihood to close"), plus eine Einordnung in Very High/High/Medium/Low ("Contact Priority") (F19). Diese Wahrscheinlichkeit lässt sich direkt als Gewichtungsfaktor nutzen: Ein Deal mit 60.000 € Volumen und 20 % Abschlusswahrscheinlichkeit bekommt einen anderen Signalwert als einer mit 15.000 € und 70 % — und genau diese Differenzierung ist es, die Smart Bidding weiterbringt.

<div class="a-callout tip"><span class="a-callout-title">Beispielrechnung</span><p>Ein typischer B2B-Fall: Deal A hat 40.000 € Volumen bei 25 % Abschlusswahrscheinlichkeit, gewichteter Wert 10.000 €. Deal B hat 12.000 € Volumen bei 80 % Abschlusswahrscheinlichkeit, gewichteter Wert 9.600 €. Ohne Gewichtung sieht Deal A viermal so attraktiv aus wie Deal B. Mit Gewichtung liegen beide fast gleichauf — ein realistischeres Bild für das Bidding.</p></div>

## Von Lifecycle-Stage zu Conversion Value

Der technische Träger dafür ist derselbe Ad-Conversion-Event-Sync, den du für das Offline-Conversion-Tracking ohnehin brauchst (mehr dazu in unserem Artikel [Google Ads mit HubSpot verbinden](/wissen/hubspot/google-ads-hubspot-offline-conversion-sync/)) — nur dass du jetzt zusätzlich zum Lifecycle-Stage-Wechsel den Deal-Wert mitschickst, statt nur ein binäres "Conversion ja/nein" zu übertragen (F3).

Zwei Varianten sind in der Praxis üblich: statische Werte (ein fester Betrag pro Lifecycle-Stage, z. B. "jede SQL zählt pauschal 2.000 €") und dynamische Werte (der tatsächliche, individuelle Deal-Betrag oder die gewichtete Zahl aus dem vorigen Abschnitt). Statische Werte sind ein akzeptabler erster Schritt, wenn deine Deal-Beträge noch nicht sauber gepflegt sind. Sobald sie es sind, ist dynamisch immer besser — Google kann sonst nicht lernen, dass ein Enterprise-Deal mehr wert ist als ein Self-Service-Abschluss.

## Gebotsstrategie umstellen — realistisch

Der größte Fehler beim Umstieg ist Ungeduld. Smart Bidding braucht eine Lernphase mit ausreichend Conversion-Volumen und -Wert-Historie, bevor es verlässlich funktioniert. Wer am Montag den Sync aktiviert und am Dienstag auf Target ROAS umstellt, gibt dem Algorithmus keine Chance, überhaupt ein Muster zu erkennen.

Der realistische Weg:

1. Sync aktivieren, Deal-Werte fließen lassen — Kampagne läuft vorerst mit der bisherigen Strategie weiter.
2. Auf Maximize Conversion Value wechseln, sobald genug Wert-Daten vorliegen, und die Lernphase abwarten.
3. Erst wenn die Werte stabil und die Konversionsvolumen ausreichend sind, auf Target ROAS mit einer realistischen Zielgröße wechseln.

Google selbst berichtet einen medianen Anstieg des Conversion-Value um 14 %, wenn Werbetreibende von Target CPA zu Target ROAS wechseln, bei vergleichbarem ROAS (laut Google Ads Help; Median-Wert, im Einzelfall vor Publikation an der aktuellen Google-Quelle zu prüfen). Eine 2025 kursierende Analyse von rund 996 Millionen US-Dollar Google-Ads-Spend über 100 Konsumgütermarken berichtet zudem, dass value-based Strategien (tROAS plus Maximize Conversion Value) inzwischen auf etwa 48 % des Budgets kommen, gegenüber rund 43 % für Maximize Conversions plus Target CPA — eine Zahl, deren Originalquelle noch zu verifizieren ist, aber die den Trend bestätigt, den viele Konten in der Praxis beobachten.

<div class="a-stat"><div class="a-stat-num">48 % vs. 43 %</div><p class="a-stat-txt">Anteil von value-based Strategien gegenüber klassischem Maximize Conversions/Target CPA am Werbebudget, laut einer 2025 kursierenden Analyse über 100 Konten (Originalquelle vor Zitat zu prüfen).</p></div>

Denk außerdem an die Zeitverzögerung: Ein Klick heute führt vielleicht erst in sechs Wochen zu einem Closed-Won-Deal. Bis dahin bewertet Google die Kampagne mit unvollständigen Daten. Das ist normal und kein Grund zur Panik — aber ein Grund, Bidding-Entscheidungen nicht auf Basis der letzten sieben Tage zu treffen.

Ein Praxis-Tipp, der viel Frust erspart: Kommuniziere die Umstellung intern, bevor sie live geht. Nichts sorgt schneller für Panik im Team als ein Kostenanstieg in Woche zwei, während der Algorithmus noch lernt, wie ein guter Deal in eurem Konto aussieht. Wer vorher weiß, dass eine Lernphase von mehreren Wochen normal ist, trifft in dieser Phase auch keine überstürzten Gegenmaßnahmen — etwa das Zurückschalten auf die alte Strategie, kurz bevor sie anfängt zu greifen.

<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, welchen ROAS deine echte Pipeline rechtfertigt?</strong> Wir rechnen es mit dir durch — kostenlos.</p><a href="/#rechner">Pipeline-ROI-Rechner nutzen</a></div>

## Ergebnis messen

ROAS ist nur so ehrlich wie das, worauf er sich bezieht. Ein ROAS auf gewichtete Pipeline-Werte ist ein Frühindikator; ein ROAS auf tatsächlich abgerechneten Umsatz aus HubSpots Revenue-Attribution ist die Wahrheit. Beide Zahlen solltest du nebeneinander berichten, nicht anstelle voneinander.

Für B2B mit mehreren Stakeholdern und langen Zyklen empfiehlt sich dafür ein W-shaped-Attributionsmodell, das Erstkontakt, Lead-Erstellung und Deal-Erstellung gewichtet (F30) — genau die Touchpoints, die zu den Deal-Werten gehören, die du an Google zurückspielst. Wie du das richtige Modell für lange Sales-Cycles auswählst, behandeln wir im Detail in [Attribution in HubSpot](/wissen/hubspot/hubspot-attribution-modell-b2b-lange-sales-cycles/).

Die entscheidende Kontrollfrage lautet nicht "Ist unser ROAS gestiegen?", sondern "Ist unser ROAS auf echte Pipeline gestiegen, oder haben wir nur gelernt, teurere Formulare zu kaufen?" Nur die Revenue-Attribution in HubSpot beantwortet das zuverlässig.

Ein Reporting-Rhythmus, der sich in der Praxis bewährt: monatlich ROAS auf gewichtete Pipeline und ROAS auf abgerechneten Umsatz nebeneinanderstellen, dazu die Zahl der Deals, die seit der letzten Prüfung von "Opportunity" auf "Closed Won" oder "Closed Lost" gewechselt haben. Klaffen beide ROAS-Werte über mehrere Monate spürbar auseinander, ist das kein Grund, das Bidding sofort zu zerlegen — aber ein sehr guter Grund, die Deal-Wert-Gewichtung noch einmal mit dem Vertrieb durchzusprechen. Oft liegt die Differenz nicht am Algorithmus, sondern daran, dass sich die Definition eines "guten" Deals seit dem letzten Update der Scoring-Kriterien verändert hat.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul>
<li>Maximize Conversions optimiert auf billige Leads — value-based Bidding optimiert auf das, was du ihm fütterst.</li>
<li>Ohne echten CRM-Deal-Wert bleibt "value-based" nur ein Name, keine Funktion.</li>
<li>Starte mit Maximize Conversion Value, wechsle erst nach stabiler Datenlage zu Target ROAS.</li>
<li>Gewichte Werte bei langen Sales-Cycles mit Predictive-Scoring-Wahrscheinlichkeiten.</li>
<li>Reconciliere ROAS regelmäßig gegen HubSpots Revenue-Attribution — sonst optimierst du auf eine Illusion.</li>
</ul></div>

## Fehler & Best Practices

Die meisten Value-based-Bidding-Projekte scheitern nicht an der Google-Ads-Konfiguration, sondern an fünf wiederkehrenden Entscheidungen:

<ul class="a-checklist">
<li>Wechsel zu Target ROAS, bevor genug Conversion-Wert-Daten vorliegen — der Algorithmus rät statt zu lernen.</li>
<li>Ein flacher Pauschalwert für jeden Deal — Google kann nichts mehr differenzieren.</li>
<li>Optimierung auf Pipeline-Wert, der nie abschließt, weil niemand die Abschlusswahrscheinlichkeit einbezieht.</li>
<li>Ignorieren der Sales-Cycle-Länge — Werte kommen Wochen nach dem Klick an, Entscheidungen werden trotzdem täglich getroffen.</li>
<li>Kein Rückkanal zur Attribution, der die Bidding-Ergebnisse validiert.</li>
</ul>

Mach es stattdessen so: Starte mit Maximize Conversion Value, sende differenzierte Deal-Werte nach Segment oder Produkt, gewichte bei langen Zyklen mit Abschlusswahrscheinlichkeit, gib dem Algorithmus ein vollständiges Lernfenster, und reconciliere ROAS regelmäßig gegen HubSpots Revenue-Attribution. Fillcart baut genau diese Verkabelung zwischen HubSpot und Google Ads für B2B-Konten in DACH und den USA — nicht nach Standardvorlage, sondern auf deine Deal-Struktur zugeschnitten. Mehr dazu [über Fillcart](/ueber-fillcart) oder direkt im [kostenlosen Audit](/#audit).

## Quellen

- Google Ads Help, "About Smart Bidding using value-based bidding for Search and Shopping", 2026 — support.google.com/google-ads/answer/15099424
- Google Ads Help, "About Smart Bidding" (Target-ROAS-Median-Steigerung), 2026 — support.google.com/google-ads/answer/7065882
- Google Ads Help, Umbenennung der Gebotsstrategien ab Juni 2026 — support.google.com/google-ads/answer/15099424
- HubSpot Knowledge Base, "Create and sync ad conversion events with your Google Ads account", 2026 — knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account
- HubSpot Knowledge Base, "Determine likelihood to close with predictive lead scoring", 2026 — knowledge.hubspot.com/properties/determine-likelihood-to-close-with-predictive-lead-scoring
- HubSpot, "Turn HubSpot into an ROI Engine — Multi-Touch Attribution", 2026 — hubspot.com/startups/tech-stacks/sales-csx/multi-touch-attribution
- Optmyzr, "Value-Based Bidding: What Is It, Best Practices & Pitfalls", 2025 — optmyzr.com/blog/value-based-bidding-guide
- 2025-Benchmarkanalyse zu Value-based-Bidding-Budgetanteilen (100 Konten, ca. 996 Mio. USD Spend) — Originalquelle vor erneutem Zitat zu verifizieren
