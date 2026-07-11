---
title: "Value-based Bidding: HubSpot-Conversions in Google Ads einspeisen"
description: "Schritt-für-Schritt: HubSpot-Pipeline-Daten als Enhanced Conversions for Leads in Google Ads importieren und auf tROAS statt tCPA umstellen."
category: google-ads
publishDate: 2026-06-02
author: "Andre Schüler"
tags: ["Value-based Bidding", "tROAS", "HubSpot", "Enhanced Conversions", "Offline Conversion Import", "CRM-Tracking"]
featured: false
heroStat:
  value: "+14 %"
  label: "mehr Conversion-Value beim Wechsel von tCPA auf tROAS"
---

Value-based Bidding ist der technische Hebel hinter einem einfachen Satz: Sag Google nicht „finde mir Leads", sondern „finde mir Umsatz". Klingt trivial, ist es nicht — denn der Algorithmus braucht dafür ein sauberes Wert-Signal aus deinem CRM, nicht aus deinem Formular. Dieser Artikel zeigt dir die komplette Umsetzung: von HubSpot-Lifecycle-Stufen über Enhanced Conversions for Leads bis zur tROAS-Steuerung — inklusive der Data-Manager-Migration, die im Juni 2026 viele bestehende Integrationen bricht.

## Von tCPA zu tROAS: Was Value-based Bidding im B2B verändert

Target CPA sagt Google Ads: „Hol mir möglichst viele Conversions zu diesem Preis." Es ist egal, ob die Conversion ein Enterprise-Deal oder ein Praktikant ist, der aus Neugier ein Whitepaper heruntergeladen hat — beide zählen gleich. Target ROAS (tROAS) und Maximize Conversion Value drehen die Frage um: „Hol mir die Conversions, die in Summe den höchsten Wert bringen." Damit wird die Kampagne strukturell dazu gezwungen, Nutzer zu bevorzugen, die zu wertvollen Pipeline-Stufen führen — nicht nur zu irgendeiner Stufe.

Der Effekt ist messbar. Laut Google-Daten bringt der Wechsel von tCPA zu tROAS im Median **+14 % Conversion-Value** bei ähnlichem ROAS (Quelle: groas.com Smart-Bidding-Guide, 2026; vgl. involvedigital.com, 2026). Bei Standard-Shopping-Kampagnen mit tROAS wurden laut Optmyzr sogar Steigerungen bis **+30 %** beobachtet (Quelle: optmyzr.com, Value-based Bidding Guide). Eine breitere Studie über 996 Mio. $ Ad-Spend bei 100 Marken zeigt: Value-based-Strategien (tROAS + Maximize Conversion Value) machten 2025 bereits **rund 48 %** aller Smart-Bidding-Setups aus (Quelle: customerlabs.com, 2025) — das ist kein Nischen-Feature mehr, das ist der neue Standard.

<div class="a-stat"><div class="a-stat-num">+14 %</div><p class="a-stat-txt">Median-Zuwachs an Conversion-Value beim Wechsel von tCPA auf tROAS, bei vergleichbarem ROAS (Quelle: groas.com, 2026).</p></div>

Für B2B ist das kein Nice-to-have. Ihr habt ohnehin wenig Conversion-Volumen und lange Sales-Cycles — jede Fehlallokation von Budget auf die falschen Nutzer tut doppelt weh. Value-based Bidding ist die Operationalisierung dessen, was wir bei Fillcart seit Jahren predigen: Pipeline-Wert statt Formular-Zählerei.

Und es passt zu einem größeren Trend, den wir bei praktisch jedem Kundenkonto beobachten: Der eigentliche Wettbewerbsvorteil entsteht nicht mehr über das bessere Keyword-Set, sondern über das bessere Datensignal. Zwei Konten im selben Markt, mit ähnlichem Budget und ähnlicher Kampagnenstruktur, können völlig unterschiedliche Ergebnisse liefern — je nachdem, wie viel Pipeline-Wahrheit sie an Google zurückspielen. Smart Bidding ist nur so intelligent wie das Signal, mit dem es gefüttert wird. Wer hier vorlegt, gewinnt strukturell, nicht taktisch.

## Die Voraussetzung, die niemand erwähnt: Conversion-Volumen

Bevor du tROAS aktivierst, die unbequeme Wahrheit: Der Algorithmus braucht Futter. Ohne genug Conversions kann Smart Bidding keine belastbaren Muster lernen — er rät.

Optmyzr empfiehlt **rund 45 Conversions in 30 Tagen** als Mindestschwelle für Value-based Bidding; Navah Hopkins nennt **50** als „Sweet Spot" (Quelle: optmyzr.com, Value-based Bidding Guide). Y77.ai präzisiert das 2026 weiter: **30 Conversions/Monat** für tCPA, **50/Monat** für tROAS, mit einem Optimalbereich von **50–100** für stabile Performance (Quelle: y77.ai, Smart Bidding 2026).

Das ist das strukturelle Problem in fast jedem B2B-Konto: Ihr habt vielleicht 15 SQLs im Monat, aber 200 Formular-Fills. Die Lösung ist nicht, auf Formular-Fills zu optimieren (das war der Fehler, den wir in unserem KPI-Artikel schon zerlegt haben — siehe [„Cost-per-Lead ist die falsche KPI"](/wissen/google-ads/cost-per-lead-falsche-kpi-pipeline-optimierung/)). Die Lösung ist, das Volumenproblem separat zu lösen, bevor du auf reine Pipeline-Werte umschaltest.

<div class="a-callout tip"><span class="a-callout-title">Kurz gesagt</span><p>Wenn dein Konto unter 30 werthaltigen Conversions im Monat liegt: Baue erst Volumen über Micro-Conversions oder Secondary-Signals auf (z. B. MQL statt nur SQL), bevor du hartes tROAS scharf schaltest. Sonst optimierst du gegen Rauschen.</p></div>

**Best-Practices-Box: Volumen-Schwellen für tCPA vs. tROAS**

| Ziel | Mindest-Conversions/Monat | Optimaler Bereich | Quelle |
|---|---|---|---|
| tCPA (Ziel-CPA) | 30 | 30–50 | y77.ai, 2026 |
| tROAS (Ziel-ROAS) | 45–50 | 50–100 | Optmyzr / y77.ai, 2026 |
| Maximize Conversion Value | ~30, tendenziell mehr | 50+ | y77.ai, 2026 |

Wenn du diese Schwellen nicht erreichst, ist das kein Grund zu warten, sondern ein Grund, das Signal zu verbreitern: MQLs zusätzlich zu SQLs als Secondary Conversion mitlaufen lassen, bis das Primary-Signal (Pipeline) genug Volumen hat.

## Conversion-Werte definieren: Wie viel ist ein MQL, ein SQL, ein Deal wert?

Value-based Bidding funktioniert nur, wenn die Werte, die du an Google zurückspielst, tatsächlich etwas widerspiegeln. Die häufigste Anfängerfalle: Alle Conversion-Stufen bekommen den gleichen Wert (z. B. „1"), und der Algorithmus optimiert de facto wieder auf reine Menge — Value-based Bidding in Name, aber nicht in der Wirkung.

Der richtige Ansatz ist ein Value-Mapping deiner Pipeline-Stufen, typischerweise abgeleitet aus historischen CRM-Daten:

- **MQL** → durchschnittlicher historischer Wert, z. B. auf Basis der MQL-zu-Closed-Won-Rate × Ø Deal-Größe
- **SQL** → höherer Wert, da Vertrieb bereits qualifiziert hat
- **Opportunity** → noch höher, gewichtet nach Deal-Stage-Wahrscheinlichkeit
- **Closed Won** → tatsächlicher Auftragswert

### Statische vs. dynamische Conversion-Werte

Statische Werte sind ein guter Einstieg: Du hinterlegst feste Beträge pro Stufe (z. B. MQL = 50 €, SQL = 400 €, Opportunity = 2.000 €) und aktualisierst sie quartalsweise anhand echter CRM-Auswertungen.

Dynamische Werte gehen weiter: Über **Conversion Value Rules** kannst du Werte nach Geografie, Gerät oder Zielgruppe anpassen — sinnvoll, wenn z. B. Leads aus deiner Kernregion nachweislich höhere Abschlussraten haben als Streuleads aus Märkten, in denen du gar nicht vertrieblich aktiv bist. Das ist der Unterschied zwischen „ein Wert für alle" und „der Algorithmus weiß, wo echtes Umsatzpotenzial liegt".

Eine Beispielrechnung zur Einordnung: Nehmen wir ein B2B-Softwareunternehmen mit einer historischen MQL-zu-Closed-Won-Rate von 4 % und einem durchschnittlichen Deal-Wert von 12.000 €. Der rechnerische MQL-Wert läge dann bei rund 480 €. Ein SQL, der bereits vom Vertrieb qualifiziert wurde und historisch mit 18 % zum Abschluss kommt, wäre entsprechend rund 2.160 € wert. Diese Differenz — grob das 4,5-Fache — ist genau das Signal, das ein Einheitswert komplett unterschlägt. Wichtig: Das ist eine Beispielrechnung zur Illustration der Methode, keine reale Fillcart-Kundenzahl; die konkreten Werte muss jedes Unternehmen aus dem eigenen CRM ableiten.

## Enhanced Conversions for Leads vs. klassischer Offline-Import

Es gibt zwei Wege, CRM-Pipeline-Daten zurück zu Google Ads zu bringen — und der Unterschied ist 2026 entscheidend für deine technische Roadmap.

| Kriterium | Offline Conversion Import (GCLID) | Enhanced Conversions for Leads |
|---|---|---|
| Matching-Basis | Google Click ID (GCLID), im CRM gespeichert | Hashed First-Party-Daten (SHA256) + eingeloggter Google-Account |
| Voraussetzung | GCLID muss beim Formular-Fill im CRM landen und dort erhalten bleiben | E-Mail/Telefon etc. werden gehasht übertragen |
| Anfälligkeit | Bricht, wenn GCLID nicht sauber gespeichert wird (häufigster Fehler) | Robuster, auch wenn GCLID fehlt oder verloren geht |
| Google-Empfehlung 2026 | Legacy, wird über Data Manager migriert | Empfohlener Standard-Weg |
| Technischer Weg | Google Ads API / manueller Upload | Google Data Manager |

Für eine Enhanced-Conversion braucht Google pro Conversion mindestens einen von drei Ankern: **Timestamp + GCLID**, **User-Provided Data** (gehashte Kontaktdaten) oder **BRAID** (Quelle: Google Ads Help, 2025/26). Das macht das Setup deutlich fehlertoleranter als der klassische GCLID-only-Import, bei dem ein einziges Sync-Problem im CRM die ganze Kette zerreißt.

<div class="a-stat"><div class="a-stat-num">48 %</div><p class="a-stat-txt">der Smart-Bidding-Strategien in einer Studie über 996 Mio. $ Ad-Spend liefen 2025 bereits auf tROAS oder Maximize Conversion Value (Quelle: customerlabs.com, 2025).</p></div>

## Schritt-für-Schritt: HubSpot → Google Ads einrichten

So bindest du HubSpot als Wahrheitsquelle in Google Ads ein:

**Auf der HubSpot-Seite:**
1. Google Ads Integration in HubSpot aktivieren (Ads-Tool → Google Ads verbinden)
2. Als Trigger „Lifecycle stage change" wählen — nicht „Form submission"
3. Definieren, welche Lifecycle-Übergänge relevant sind (z. B. Lead → MQL → SQL → Opportunity → Customer)
4. GCLID-Erfassung in HubSpot-Formularen sicherstellen (Hidden Field, falls nicht automatisch vorhanden)

**Auf der Google-Ads-Seite:**
5. Unter „Goals" → „Summary" → neue Conversion-Action anlegen, Datenquelle „HubSpot" wählen (Quelle: knowledge.hubspot.com; Google Ads Help HubSpot)
6. Conversion-Action-Kategorie und -Wert pro Lifecycle-Stufe zuweisen
7. Primary/Secondary-Hierarchie setzen: Closed Won/SQL als Primary, MQL/Opportunity als Secondary
8. Attributionsmodell und Lookback-Window an den realen Sales-Cycle anpassen (30–90 Tage)
9. Erste 2–4 Wochen: Import beobachten, Match-Rate prüfen, keine Bid-Strategie-Änderung vornehmen

<ul class="a-checklist"><li>Google Ads Integration in HubSpot aktiviert und verbunden</li><li>Trigger „Lifecycle stage change" statt „Form submission" gewählt</li><li>GCLID-Erfassung in allen relevanten Formularen technisch abgesichert</li><li>Conversion-Actions in Google Ads mit Datenquelle „HubSpot" angelegt</li><li>Werte pro Pipeline-Stufe hinterlegt (kein Einheitswert für alle Stufen)</li><li>Primary/Secondary-Hierarchie sauber gesetzt</li><li>Lookback-Window an Sales-Cycle angepasst</li><li>Erste Wochen: nur beobachten, keine Bid-Strategie ändern</li></ul>

<div class="a-cta"><p class="a-cta-txt"><strong>Dein CRM-Signal steht noch nicht sauber in Google Ads?</strong> Wir bauen dir das HubSpot-Tracking-Setup, das dein Smart Bidding tatsächlich versteht.</p><a href="/#audit">Kostenlosen Audit sichern</a></div>

## Die 2026-Migration auf Data Manager (wichtig!)

Hier kommt der Punkt, den viele Konten verschlafen: **Ab dem 15. Juni 2026** werden Offline-Conversion-Importe und Enhanced-Conversions-for-Leads-Uploads über die Google Ads API blockiert und vollständig auf die **Data Manager API** migriert (Quelle: Google Ads Help, Offline-Import-Upgrade, 2026). Wer heute noch über eine Legacy-API-Verbindung importiert, muss vor diesem Datum umgestellt haben — sonst reißt der Datenfluss ab, ohne dass es sofort auffällt (die Kampagne läuft ja weiter, nur eben blind).

Parallel gilt: **Ab April 2026** akzeptiert Google Ads User-Provided Data gleichzeitig aus Website-Tags, Data Manager und API-Verbindungen (Quelle: Google Ads Help, 2026, via developers.google.com). Das eröffnet die Möglichkeit, mehrere Signalquellen redundant zu fahren — sinnvoll als Übergangsstrategie, aber langfristig solltest du auf eine saubere, Data-Manager-basierte Architektur konsolidieren.

<div class="a-callout warn"><span class="a-callout-title">Deadline im Kalender markieren</span><p>15. Juni 2026: Legacy-Offline-Import via Google Ads API wird blockiert. Prüfe jetzt, über welchen technischen Weg dein CRM aktuell Conversions hochlädt — und migriere rechtzeitig auf den Data Manager.</p></div>

## Server-side Tracking & Datenqualität

Enhanced Conversions und Data-Manager-Import sind nur so gut wie die Datenqualität dahinter. Server-side Tracking über die Conversions API liefert laut Optmyzr (zitiert nach einem 2025 B2B-PPC-Report) **15–30 % vollständigere** Conversion-Attribution als reine Browser-Pixel (Quelle: optmyzr.com, 2025). Der Grund: Browser-Pixel verlieren Daten durch Adblocker, ITP/Safari-Beschränkungen und Consent-Restriktionen — server-seitige Übertragung umgeht einen Teil dieser Verluste.

Das hängt eng mit einem zweiten Fundament zusammen: Ohne Consent Mode v2 und einwandfreies Consent-Handling im DACH-Markt kollabiert das Conversion-Signal für europäische Nutzer ohnehin — dazu mehr in unserem Artikel zu [Consent Mode v2 & Enhanced Conversions](/wissen/google-ads/consent-mode-v2-enhanced-conversions-dach/). Value-based Bidding auf einem löchrigen Tracking-Fundament zu bauen ist wie ein Haus auf Sand: Es sieht kurzfristig stabil aus, bis der erste Sturm kommt.

Was bei uns in der Praxis oft übersehen wird: Datenqualität ist kein einmaliges Setup, sondern ein laufender Prozess. Ein CRM-Feld, das plötzlich anders befüllt wird (weil der Vertrieb seinen Prozess ändert), eine Formularintegration, die nach einem Website-Relaunch bricht, oder ein HubSpot-Workflow, der GCLIDs stillschweigend überschreibt — all das senkt die Match-Rate schleichend, ohne dass eine Fehlermeldung erscheint. Deshalb gehört ein monatlicher Blick auf die Match-Rate-Statistik in Google Ads (Tools → Conversions → Diagnostics) zur Routine, nicht nur das initiale Setup.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul><li>tROAS statt tCPA bringt laut Google-Daten im Median +14 % Conversion-Value — aber nur mit sauberem Wert-Signal.</li><li>Ohne 45–50 werthaltige Conversions im Monat lernt der Algorithmus nicht — erst Volumen aufbauen, dann tROAS scharf schalten.</li><li>Enhanced Conversions for Leads ist robuster als klassischer GCLID-Import und der von Google empfohlene Weg für 2026.</li><li>Ab 15. Juni 2026 läuft der Offline-Import nur noch über den Data Manager — Legacy-API-Verbindungen brechen.</li><li>Server-side Tracking liefert 15–30 % vollständigere Daten als reine Browser-Pixel.</li></ul></div>

## tROAS scharf schalten & steuern

Wenn Volumen, Wert-Mapping und technischer Import stehen, folgt die eigentliche Umstellung:

1. **Startwert konservativ wählen** — orientiere dich am aktuellen, historisch erzielten ROAS, nicht an einem Wunschwert
2. **Lernphase einplanen** — 1–2 Wochen mit reduzierten manuellen Eingriffen, Google braucht Zeit, das neue Signal zu kalibrieren
3. **Nicht zu früh eskalieren** — Ziel-ROAS erst nach stabiler Performance schrittweise anheben, nicht wöchentlich nachjustieren
4. **Budget-Deckel lösen, wo möglich** — starre Tagesbudgets können die Lernphase künstlich bremsen
5. **Parallel-Test fahren**, wenn Budget es zulässt — eine Kampagne auf tCPA als Kontrollgruppe, um den Effekt sauber zu isolieren

**Best-Practices-Box: tROAS-Rollout ohne Performance-Einbruch**
- Ziel-ROAS beim Start nah am historischen Ist-Wert ansetzen
- Erste 2 Wochen keine Gebotsänderung, nur beobachten
- Ziel-ROAS-Anpassungen in Schritten von max. 10–15 %, nicht abrupt
- Conversion Value Rules erst nach stabiler Lernphase einführen
- Reporting auf Pipeline-Ebene (Cost per SQL/Opportunity) prüfen, nicht nur auf Roh-ROAS

## Fazit + Troubleshooting

Value-based Bidding ist kein Kampagnen-Setting, das du an einem Nachmittag umlegst — es ist die logische Konsequenz aus einer sauberen Pipeline-Denke. Wer die These aus unserem KPI-Artikel ernst nimmt („Pipeline statt Formulare"), kommt an Enhanced Conversions for Leads und tROAS nicht vorbei.

**Wenn es nicht funktioniert, prüfe in dieser Reihenfolge:**
- **Niedrige Match-Rate?** → User-Provided-Data-Qualität prüfen (Hashing korrekt? Vollständige Kontaktdaten?)
- **Zu wenig Volumen?** → Secondary-Signale (MQL) zusätzlich zum Primary-Signal (SQL) einspeisen
- **GCLID verschwindet im CRM?** → Auf Enhanced Conversions for Leads statt reinem GCLID-Import umstellen
- **Performance bricht nach tROAS-Umstellung ein?** → Ziel zu aggressiv gesetzt, näher am historischen Ist-Wert neu starten
- **Import funktioniert plötzlich nicht mehr?** → Data-Manager-Migration prüfen (Stichtag 15. Juni 2026)

Wenn du dir nicht sicher bist, wo dein Konto aktuell steht — Tracking-Fundament, Volumen, Wert-Mapping —, ist ein strukturierter Audit der schnellste Weg zur Klarheit. Mehr dazu in unserer vollständigen [Google-Ads-Audit-Checkliste 2026](/wissen/google-ads/google-ads-audit-checkliste-2026/). Und wenn du herausfinden willst, was ein realistischer ROI aus einer sauberen Pipeline-Optimierung für dein Budget bedeutet, nutzt du am besten unseren [ROI-Rechner](/#rechner). Mehr zu unserer Arbeitsweise erfährst du [über Fillcart](/ueber-fillcart).

## Quellen

- groas.com, Smart Bidding Strategy Guide (tCPA/tROAS/Maximize Conversions), 2026 — https://www.groas.com/post/google-ads-smart-bidding-strategy-guide-tcpa-troas-maximize-conversions
- involvedigital.com, B2B SaaS Guide, 2026 — https://www.involvedigital.com/insights/google-ads-b2b-saas
- optmyzr.com, Value-based Bidding Guide — https://www.optmyzr.com/blog/value-based-bidding-guide/
- y77.ai, Smart Bidding in 2026, 2026 — https://www.y77.ai/blogs/smart-bidding-in-2026-when-it-works-when-it-fails-and-the-fix-most-accounts-are-missing
- Google Ads Help, Offline-Import-Upgrade auf Data Manager, 2026 — https://support.google.com/google-ads/answer/15479791?hl=en-GB
- developers.google.com, Offline Conversion Upload, 2026 — https://developers.google.com/google-ads/api/docs/conversions/upload-offline
- Google Ads Help, Enhanced Conversions for Leads, 2025/26 — https://support.google.com/google-ads/answer/15713840?hl=en
- knowledge.hubspot.com, Google Ads Conversion Events Sync, o. D. — https://knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account
- Google Ads Help, HubSpot-Integration — https://support.google.com/google-ads/answer/15293735?hl=en
- customerlabs.com, Value-based Bidding in Google Ads, 2025 — https://www.customerlabs.com/blog/value-based-bidding-in-google-ads/
