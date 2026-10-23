---
title: "Lifecycle Stages & Lead Scoring in HubSpot: Fundament für sauberes Reporting"
description: "Warum jede Pipeline-Zahl nur so gut ist wie deine Lifecycle Stages, und wie du HubSpots Fit-/Engagement-Scoring 2026 richtig aufsetzt, inklusive Migrations-Fahrplan."
lang: de
publishDate: 2026-05-19
author: "Andre Schüler"
topic: crm
tags: ["HubSpot", "Lead Scoring", "Lifecycle Stages", "Pipeline Reporting", "MQL SQL", "RevOps"]
heroStat:
  value: "31.08.2025"
  label: "seit diesem Tag aktualisiert sich der alte HubSpot Score nicht mehr"
featured: false
draft: false
---

Jede Attributionszahl, jeder ROAS, jede Forecast-Slide in deinem Unternehmen steht auf einem Fundament: den Lifecycle Stages und dem Lead Scoring in HubSpot. Ist das Fundament schief, ist alles darüber Deko. Und 2025 hat HubSpot das Fundament neu gegossen: Die alte "HubSpot Score"-Property ist seit dem 31. August 2025 tot. Wer nicht migriert hat, rechnet gerade mit Zahlen, die sich nicht mehr bewegen.

## Warum Reporting an der Datenbasis scheitert

Ein Attributionsmodell ist nur so ehrlich wie die Deal- und Kontaktdaten, die es verarbeitet. Ein Bid-Algorithmus optimiert nur so gut, wie die Conversion-Werte, die er bekommt. Und beides, Attribution wie [Gebotsoptimierung auf echte Pipeline](/de/insights/value-based-bidding-hubspot-pipeline-google-ads), hängt an genau zwei Dingen: sauberen Lifecycle Stages und einem Scoring-Modell, das tatsächlich zwischen "guter Fit" und "hat halt ein Whitepaper geklickt" unterscheidet.

Das Problem ist selten das Modell. Das Problem ist, dass "MQL" in den meisten HubSpot-Portalen alles bedeutet und nichts. Marketing zählt jeden Formular-Fill als MQL, Sales ignoriert die Liste komplett, und am Ende bauen beide Teams ihre eigene Wahrheit in Excel. Genau hier setzt dieser Artikel an: Lifecycle Stages und Lead Scoring so aufsetzen, dass die Zahl "MQL" wieder etwas bedeutet, und jede nachgelagerte Zahl (Attribution, Ads-Sync, Forecast) darauf aufbauen kann.

<div class="a-stat"><div class="a-stat-num">31. Aug 2025</div><p class="a-stat-txt">Tag, an dem HubSpots legacy "HubSpot Score"-Property aufgehört hat, sich zu aktualisieren. Workflows und Listen darauf laufen seither ins Leere (Quelle: HubSpot Community, Releases and Updates, 2025).</p></div>

## Die HubSpot Lifecycle Stages im Überblick

HubSpot definiert acht Standard-Stufen, durch die ein Kontakt wandert, von der ersten Berührung bis zum Fürsprecher. Sie sind das gemeinsame Vokabular zwischen Formularen, Scoring, Ads-Sync und Pipeline-Reporting (Quelle: HubSpot Knowledge Base, Lifecycle-Stage-Dokumentation, 2026).

| Stage | Bedeutung | Wer "besitzt" den Übergang |
|---|---|---|
| Subscriber | Hat sich für Content/Newsletter angemeldet, sonst nichts | Marketing |
| Lead | Hat mindestens eine Aktion mit Kontaktdaten hinterlassen | Marketing |
| Marketing Qualified Lead (MQL) | Erfüllt Fit- und/oder Engagement-Kriterien für Weitergabe | Marketing → Sales |
| Sales Qualified Lead (SQL) | Von Sales geprüft und als bearbeitungswürdig eingestuft | Sales |
| Opportunity | Aktiver Deal in der Pipeline | Sales |
| Customer | Geschlossen gewonnen | Sales/CS |
| Evangelist | Aktiver Fürsprecher, Referenz, Case Study | Customer Success |
| Other | Passt in kein Stadium (z. B. Partner, Bewerber) | Keine Zuordnung |

Der kritische Übergang ist MQL → SQL. Hier entscheidet sich, ob Sales der Liste vertraut oder sie stumm ignoriert. Und genau dieser Übergang wird durch Lead Scoring gesteuert, oder eben durch Bauchgefühl, wenn niemand das Scoring gepflegt hat.

### Der MQL/SQL-Handoff ist ein Prozess, keine Property

Ein häufiger Denkfehler: Lifecycle Stage sei ein technisches Feld, das ein Workflow setzt. Tatsächlich ist es eine Vereinbarung zwischen Teams. Ohne dokumentierte Kriterien wird "MQL" zur Deponie für alles, was Marketing nicht mehr sehen will.

Die Stage "Other" wird dabei gerne unterschätzt. Bewerbungen, Partneranfragen, Presseanfragen: All das landet in echten Portalen im Lead-Funnel, wenn niemand einen sauberen Ausschluss definiert hat. Das Ergebnis: Dein MQL-Zähler wächst, aber die Qualität sinkt, weil er Datensätze enthält, die nie hätten scoren dürfen. Ein sauberes Setup filtert diese Fälle vor dem Scoring heraus, nicht danach.

## Das neue Lead-Scoring-Modell (ab 2025)

HubSpot hat mit dem neuen Lead-Scoring-Tool die alte, eindimensionale Punktzahl durch drei getrennte Scores ersetzt: **Fit Score** (ICP-Merkmale wie Jobtitel, Firmengröße, Umsatz), **Engagement Score** (Verhalten wie Seitenaufrufe, E-Mail-Öffnungen, CTA-Klicks, Formular-Fills) und einen daraus abgeleiteten **Combined Score** (Quelle: HubSpot Knowledge Base, "Understand the lead scoring tool", 2026).

Der Unterschied ist mehr als Kosmetik. Ein Fit Score sagt: "Diese Person passt zu unserem idealen Kundenprofil." Ein Engagement Score sagt: "Diese Person ist gerade aktiv interessiert." Ein Blended Score aus beidem verschleiert, welches der beiden Signale gerade zieht, und genau das führt zu den klassischen False Positives: der Praktikant, der drei Whitepaper heruntergeladen hat, landet vor dem CFO, der nur eine Preisseite angesehen hat.

| Score-Typ | Misst | Typische Kriterien | Risiko bei Ignorieren |
|---|---|---|---|
| Fit Score | Passung zum ICP | Jobtitel, Branche, Firmengröße, Umsatz | Hochscorender Lead, der nie kaufen kann |
| Engagement Score | Aktuelles Verhalten | Seitenaufrufe, E-Mail-Öffnungen, Formular-Fills, CTA-Klicks | Guter Fit wird übersehen, weil "zu leise" |
| Combined Score | Fit × Engagement gewichtet | Kombination beider Scores | Verschleiert, welches Signal treibt |

HubSpots KI kann dabei helfen: Sie analysiert historisch konvertierte Datensätze und schlägt Fit- und Engagement-Kriterien vor, basierend darauf, was bei tatsächlich gewonnenen Deals gemeinsam war (Quelle: HubSpot Knowledge Base + iO Digital, 2025). Das ist ein guter Startpunkt, kein Ersatz für den Sanity-Check durch jemanden, der die Deals wirklich kennt.

<div class="a-callout tip"><span class="a-callout-title">Kurz gesagt</span><p>Trenne Fit und Engagement, bevor du sie kombinierst. Sonst optimierst du am Ende auf Lautstärke statt auf Passung, und genau das frisst später auch deine Google-Ads-Gebotsstrategie, wenn du Deal-Werte zurückspielst.</p></div>

## Legacy "HubSpot Score" ist tot: Migration

Das alte, eindimensionale "HubSpot Score"-Feld wurde am 31. August 2025 endgültig eingefroren (F16, Quelle: HubSpot Community, Releases and Updates, 2025; bestätigt durch Weidert Group, 2025). Workflows, Listen und Automationen, die darauf aufbauen, laufen seitdem mit veralteten, nicht mehr aktualisierten Werten. Sie werfen keinen Fehler, sie frieren nur ein. Das ist das Tückische: Nichts crasht sichtbar. Der Vertrieb bekommt einfach langsam immer schlechtere Listen, ohne dass jemand merkt, warum.

<div class="a-callout warn"><span class="a-callout-title">Best-Practice-Check</span><p>Prüfe jetzt, ob noch Workflows, aktive Listen oder Reports auf der Property "HubSpot Score" (nicht zu verwechseln mit den neuen Fit-/Engagement-/Combined-Scores) basieren. Wenn ja: Migration ist überfällig, nicht optional.</p></div>

**So migrierst du sauber:**

<ul class="a-checklist">
<li>Alle Workflows, Listen und Reports mit Bezug auf "HubSpot Score" identifizieren (Suche in Workflow-Bedingungen und Listen-Filtern)</li>
<li>Fit-Kriterien neu definieren: welche ICP-Merkmale zählen wirklich? (Nicht kopieren, neu denken)</li>
<li>Engagement-Kriterien neu definieren: welche Verhaltenssignale korrelieren mit echten Gewinnen, nicht nur mit viel Traffic?</li>
<li>HubSpots KI-Vorschlag als Ausgangspunkt nutzen, aber gegen 20 bis 30 echte gewonnene Deals gegenprüfen</li>
<li>Betroffene Workflows auf die neuen Score-Properties umstellen, alte Referenzen entfernen</li>
<li>Sales informieren: neue Schwellenwerte, neue Bedeutung von "hoher Score"</li>
</ul>

## Score Decay & Company-Level Scoring

Zwei Fähigkeiten des neuen Modells lohnen besonders in B2B: **Score Decay** und **Scoring auf Firmenebene**.

### Warum Decay kein Nice-to-have ist

Ohne Decay bleibt ein Score, der vor acht Monaten durch drei Webinar-Anmeldungen entstand, für immer hoch, auch wenn der Kontakt seither nichts mehr getan hat. Score Decay reduziert den Engagement-Anteil über Zeit automatisch, sodass "heiße Leads"-Listen tatsächlich heiß bleiben und nicht zum Archiv verjährter Interessensbekundungen werden (Quelle: HubSpot Knowledge Base, "Build lead scores", 2026).

### Scoring auf Konten- statt nur Kontaktebene

Das neue Modell kann sowohl Kontakte als auch Unternehmen scoren. In ABM-Bewegungen ist das entscheidend: Ein einzelner Kontakt mag niedrig scoren, aber wenn fünf Personen aus derselben Zielfirma gleichzeitig aktiv werden, ist das Signal auf Firmenebene relevanter als jedes Einzel-Signal. Wer nur Kontakte scort, verpasst genau dieses Muster.

## Predictive Lead Scoring

Zusätzlich zu Fit und Engagement bietet HubSpot **Predictive Lead Scoring** ("Likelihood to Close"): eine Wahrscheinlichkeit in Prozent, dass ein Kontakt innerhalb von 90 Tagen abschließt. Darauf aufbauend gruppiert "Contact Priority" Kontakte in die Stufen Very High, High, Medium und Low. Verfügbar ist das auf Marketing Hub bzw. Sales Hub Professional und Enterprise (Quelle: HubSpot Knowledge Base, "Determine likelihood to close with predictive lead scoring", 2026).

<div class="a-stat"><div class="a-stat-num">90 Tage</div><p class="a-stat-txt">Zeitfenster, für das HubSpots Predictive Lead Scoring die Abschlusswahrscheinlichkeit eines Kontakts berechnet (Quelle: HubSpot Knowledge Base, 2026).</p></div>

Predictive Scoring ist kein Ersatz für Fit/Engagement, es ist eine dritte, algorithmische Perspektive obendrauf. Nützlich als Tiebreaker, wenn zwei Kontakte ähnlich hoch scoren, aber unterschiedlich wahrscheinlich in den nächsten drei Monaten kaufen.

**Beispielrechnung (illustrativ, kein Benchmark):** Zwei Kontakte landen mit identischem Combined Score bei "High Priority" in deiner Liste. Kontakt A ist Head of Marketing bei einem 200-Personen-Unternehmen, hat gestern die Preisseite besucht und vor drei Wochen ein Demo-Formular abgebrochen, "Likelihood to close" liegt bei 61 % für die nächsten 90 Tage. Kontakt B ist Junior-Marketer bei einem Zwei-Personen-Start-up, hat vor zwei Monaten ein Whitepaper geladen und sich seither nicht mehr gerührt, "Likelihood to close" liegt bei 8 %. Ohne Predictive Scoring bearbeitet Sales beide gleich priorisiert. Mit Predictive Scoring als Tiebreaker landet Kontakt A zuerst auf dem Tisch, dort, wo die 90-Tage-Wahrscheinlichkeit tatsächlich etwas hergibt.

## Scoring an Lifecycle-Stages koppeln

Ein Score, der nirgendwo andockt, ist ein Report ohne Konsequenz. Der eigentliche Hebel entsteht erst, wenn Score-Schwellenwerte automatisch Lifecycle-Stage-Übergänge auslösen: Erreicht ein Kontakt X Fit-Punkte und Y Engagement-Punkte, rückt er per Workflow von Lead zu MQL. Erreicht ein Deal einen bestimmten Schwellenwert an Kontaktqualität, geht er automatisch an den passenden Vertriebsmitarbeiter.

Das lohnt sich doppelt, weil zwei nachgelagerte Prozesse exakt auf dieser Stage-Logik aufbauen:

1. Der [Google-Ads-Conversion-Sync](/de/insights/google-ads-hubspot-offline-conversion-sync) sendet Lifecycle-Übergänge (z. B. "wurde SQL") als Offline-Conversion an Google zurück. Ist die Stage-Definition wackelig, lernt Googles Algorithmus aus Rauschen.
2. Beim [Value-based Bidding auf echte Pipeline](/de/insights/value-based-bidding-hubspot-pipeline-google-ads) fließt der Deal-Wert (optional gewichtet mit der Predictive-Close-Wahrscheinlichkeit) zurück an Google. Ein Scoring-Modell, das Fit und Engagement sauber trennt, liefert genau die Differenzierung, die diese Gewichtung braucht.

<div class="a-cta"><p class="a-cta-txt"><strong>Baut deine Pipeline-Zahl auf wackeligen Lifecycle Stages?</strong> Ich prüfe dein Scoring- und Stage-Setup im Audit und zeige, wo die Zahlen brechen.</p><a href="/de/leistungen/audit">Scoring-Audit anfragen</a></div>

## Definitionen dokumentieren (SLA)

Die beste Scoring-Logik nützt nichts, wenn sie nur in einem HubSpot-Workflow existiert und niemand außerhalb des Marketing-Teams sie kennt. Was in fast jedem B2B-Unternehmen fehlt: ein schriftliches, von Sales und Marketing gemeinsam unterschriebenes Service Level Agreement, das definiert, was MQL und SQL bedeuten, und was jede Seite der anderen schuldet.

<ul class="a-checklist">
<li>MQL-Kriterien schriftlich fixieren (Fit-Schwelle + Engagement-Schwelle, nicht nur "hat Formular ausgefüllt")</li>
<li>SQL-Kriterien schriftlich fixieren (was genau prüft Sales, bevor ein Lead als SQL gilt?)</li>
<li>Reaktionszeit von Sales auf neue SQLs festlegen (z. B. Erstkontakt innerhalb 24 Stunden)</li>
<li>Feedback-Schleife: Sales markiert disqualifizierte MQLs mit Grund, Marketing wertet das monatlich aus</li>
<li>SLA quartalsweise gemeinsam überprüfen und bei Bedarf nachschärfen</li>
</ul>

Diese Übung ist unglamourös. Sie ist trotzdem der Unterschied zwischen einem Reporting, dem beide Seiten vertrauen, und einer Zahl, die Marketing feiert und Sales in der Teamsitzung zerlegt. Wer außerdem sauber attribuieren will, sollte diese SLA vor der Modellwahl stehen haben. Mehr dazu in meinem Artikel zur [richtigen Attribution für lange B2B-Sales-Cycles](/de/insights/hubspot-attribution-modell-b2b-lange-sales-cycles).

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul>
<li>Der alte "HubSpot Score" aktualisiert sich seit 31.08.2025 nicht mehr, prüfe jetzt, ob noch Workflows daran hängen.</li>
<li>Trenne Fit Score (Passung) und Engagement Score (Verhalten) bewusst, bevor du sie kombinierst.</li>
<li>Score Decay verhindert, dass alte Aktivität ewig als "heiß" gilt.</li>
<li>Scoring auf Firmenebene ist Pflicht, sobald du ABM betreibst.</li>
<li>MQL/SQL brauchen eine schriftliche, von Sales mitgetragene Definition, sonst bleibt jede Pipeline-Zahl Verhandlungsmasse.</li>
</ul></div>

## Fehler & Best Practices

**Häufige Fehler:**

- Noch immer auf der eingefrorenen Legacy-Score-Property basierende Workflows und Listen laufen lassen.
- Ein einziger Blended Score, der nicht erkennen lässt, ob ein Lead gut passt oder nur laut ist.
- Kein Score Decay: Uralte Seitenaufrufe halten Listen künstlich "heiß".
- Undokumentierte MQL/SQL-Definitionen: Sales ignoriert, was Marketing liefert.
- Scoring nur auf Kontaktebene, obwohl im Vertrieb längst Buying Committees und ABM-Logik dominieren.

**Best Practices:**

1. Fit und Engagement bewusst trennen, dann gezielt kombinieren.
2. HubSpots KI-Kriterienvorschlag nutzen, aber gegen echte gewonnene Deals gegenprüfen.
3. Score Decay aktivieren, besonders bei langen Sales-Cycles.
4. Score-Schwellenwerte direkt an Lifecycle-Stage-Automation koppeln.
5. MQL/SQL als Sales-Marketing-SLA schriftlich festhalten und quartalsweise überprüfen.

Am Ende ist Lead Scoring kein Marketing-Feature, sondern die Übersetzungsschicht zwischen "irgendjemand hat auf unsere Website geklickt" und "das ist ein Deal, in den Sales Zeit investieren sollte". Wer sie 2026 nach dem alten Modell betreibt, rechnet mit einem toten Feld. Wer sie neu aufsetzt, legt das Fundament für jede Zahl, die danach kommt, von der Attribution über den Ads-Sync bis zum Forecast, den du im nächsten Board-Meeting verteidigen musst. Mehr zu deinem eigenen Setup erfährst du im [Audit](/de/leistungen/audit) oder auf meiner [Über-mich-Seite](/de/ueber-mich).

## Quellen

- HubSpot Community, "HubSpot's New Lead Scoring: Your Guide to the August 2025 Update" (Releases and Updates), 2025, community.hubspot.com/t5/Releases-and-Updates/HubSpot-s-New-Lead-Scoring-Your-Guide-to-the-August-2025-Update/ba-p/1110840
- Weidert Group, "HubSpot Lead Scoring Update: What to Know Before August 31", 2025, weidert.com/blog/hubspot-lead-scoring-tutorial
- HubSpot Knowledge Base, "Understand the lead scoring tool" / "Build lead scores", 2026, knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool
- iO Digital, "A deep dive into HubSpot's new lead scoring model", 2025, iodigital.com/en/insights/blogs/everything-you-need-to-know-about-hubspot-new-lead-scoring-model
- HubSpot Knowledge Base, "Determine likelihood to close with predictive lead scoring", 2026, knowledge.hubspot.com/properties/determine-likelihood-to-close-with-predictive-lead-scoring
- HubSpot Knowledge Base, Lifecycle-Stage-Dokumentation, 2026, knowledge.hubspot.com
