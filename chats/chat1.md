# Fillcart landingpage briefing

_Started 2026-07-11 00:07 UTC_

---

## User

# Claude Design Briefing — fillcart.de

> Zweck: Dieses Briefing 1:1 in Claude Design einfüttern (zusammen mit `copy-de.md` und `copy-en.md`).
> Doppeltes Ziel: (1) Conversion-Landingpage für das Free-Audit-Offer, (2) Google-Ads-API-Antrag bestehen.

---

## 1. Projekt-Setup

- **Domain:** fillcart.de (Redirect auf andreschuler.com ZUERST entfernen — sonst ist alles andere egal)
- **Struktur:** DE als Hauptsprache auf `/`, EN unter `/en/`, hreflang-Tags de/en/x-default
- **Seiten:**
  - `/` (Landingpage DE) · `/ueber-fillcart` · `/impressum` · `/datenschutz`
  - `/en/` (Landing EN) · `/en/about` · `/en/legal-notice` · `/en/privacy`
- **Sprachumschalter** im Header (DE|EN), pro Seite auf das Pendant verlinkt

## 2. Brand-Richtung

- **Name-Story:** Fillcart = „wir füllen den Warenkorb deines Vertriebs mit Deals". Der Cart ist das visuelle Leitmotiv — aber B2B-clean, kein E-Commerce-Look.
- **Positionierung:** Boutique-Operator statt Agentur-Fabrik. Präzise, ehrlich, leicht frech.
- **Abgrenzung:** andreschuler.com bleibt Personal Brand (RevOps/Consulting). fillcart.de = produktisierte Agentur-Dienstleistung Google Ads. Keine Querverlinkung nötig außer ggf. im About.

## 3. Design-System (Vorschlag)

- **Farben:**
  - Primär: Deep Navy `#0B1B33` (Hintergrund Hero/Footer)
  - Akzent: Electric Green `#22C55E` oder Signal-Orange `#F97316` — EINE Akzentfarbe, konsequent für CTAs und Zahlen-Highlights
  - Flächen: Off-White `#F8FAFC`, Text: `#0F172A` / `#64748B`
- **Typo:** Headline: Space Grotesk oder General Sans (charaktervoll, techy). Body: Inter. Große, fette Headlines — die Copy trägt.
- **Look:** viel Weißraum, große Zahlen, klare Karten. Keine Stock-Fotos von Meetingräumen. Echtes Porträt von Andre (vorhanden von andreschuler.com, neu zuschneiden).

## 4. Hero-Animation (die „schöne Animation")

**Konzept „Cart füllt sich mit Deals":**
Ein minimalistischer, linearer Warenkorb (Line-Icon-Stil) rechts im Hero. Von oben fallen nacheinander Elemente hinein — aber keine Produkte, sondern Deal-Karten: „Opportunity €48k", „SQL – Demo gebucht", „Closed Won €112k". Bei jedem „Einschlag" federt der Cart kurz (spring easing), ein Counter darüber zählt Pipeline-Value hoch (z.B. 0 → 1,2 M€).
- Dauer: ~4 s, dann sanfter Loop mit neuen Karten
- Scroll-triggered Mikroanimationen im Rest: Zahlen zählen hoch (Sektion 5), Vergleichstabellen-Zeilen sliden ein, Prozess-Schritte 1-2-3 verbinden sich mit einer animierten Linie
- `prefers-reduced-motion` respektieren (statisches Fallback-Bild)

## 5. Sektions-Layout (Reihenfolge = Copy-Datei)

1. **Hero:** Split — links Copy + CTA, rechts Cart-Animation. Trust-Leiste als Logo-Band direkt darunter.
2. **Problem:** schmale Textsektion, max. 65 Zeichen Zeilenlänge, eine hervorgehobene Zeile („Wer auf Leads optimiert…") als Pull-Quote.
3. **Der Deal:** 3 Karten nebeneinander (mobil gestapelt), Schritt-Nummern groß, Qualifier-Box als abgesetzter Hinweiskasten mit Akzent-Border.
4. **USP:** Vergleichstabelle als Herzstück, sticky auf Desktop leicht hervorgehoben, „Fillcart"-Spalte farbig markiert.
5. **Leistungen:** 6 Icon-Karten im Grid. ⚠️ Texte NICHT umschreiben — müssen zur API-Design-Dokumentation passen.
6. **Über/Proof:** Porträt + Zahlen-Counter + Logo-Band (stp.one, Matrix42, CIXON) + Zertifikats-Badges (Google Partner, HubSpot Solutions Partner).
7. **FAQ:** Accordion, mit FAQPage-Schema (JSON-LD).
8. **Final CTA + Formular:** Formular direkt auf der Seite (kein reiner Kalender-Link). Budget-Dropdown ist der Qualifier — bei „unter 5k" freundliche Absage-Logik oder Hinweistext.
9. **Footer:** Firmenblock mit vollständiger US-Adresse (Pflicht für Google-Review), Legal-Links, Badges, Sprachumschalter.

## 6. Technik & Integrationen

- **Formular:** HubSpot-Formular (eigenes Portal) — Leads landen direkt im CRM, passt zur USP-Story
- **Tracking:** GTM, Google Ads Conversion (nach Consent!), HubSpot-Tracking; Cookie-Consent-Banner VOR allen Tags (DE-Markt = Pflicht)
- **Performance:** LCP < 2,5 s — Animation als Lottie/CSS, kein schweres Video
- **SEO/AEO:**
  - Title/Description aus den Copy-Dateien
  - Schema: Organization (FILLCART LLC + Adresse), FAQPage, ProfessionalService
  - Saubere H-Struktur, FAQ-Antworten als eigenständig zitierfähige Absätze (AEO: KI-Suchen zitieren in sich geschlossene Antworten)
  - Blog später: die zwei bestehenden Artikel von andreschuler.com NICHT doppelt publizieren (Duplicate Content) — neu schreiben oder kanonisch lassen

## 7. Google-API-Compliance-Checkliste (vor Antrag prüfen)

- [ ] Redirect fillcart.de → andreschuler.com entfernt; fillcart.de lädt eigene Seite
- [ ] About-Seite mit Firmenname FILLCART LLC + physischer Adresse live
- [ ] Impressum + Datenschutzerklärung live (DE) / Legal Notice + Privacy (EN)
- [ ] Leistungssektion beschreibt Kampagnen-Management + Keyword-Optimierung + Reporting (deckungsgleich mit `FILLCART_Ads_Manager_Design_Documentation.pdf`)
- [ ] info@fillcart.de als Kontakt auf der Seite sichtbar
- [ ] Seite indexierbar (kein noindex, kein Coming-Soon-Gate)
- [ ] DANACH: neuen Antrag stellen — mit fillcart.de als Website, info@fillcart.de als Developer Contact, PDF als Design-Doc, geänderten Formularantworten (Google warnt vor identischer Wiedereinreichung)

Ausßerdem brauch ich noch ein geiles neus logo

## Assistant

Let me look at the attached brand assets first.

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

Ich sehe die bestehende Marke: der Warenkorb mit Balken/„Spark"-Icon + Wordmark „Fillcart", plus Andres Porträt und das Google-Partner-Logo. Bevor ich loslege, ein paar Fragen — das Briefing ist riesig, ich will am richtigen Ende anfangen.

_[tool: questions_v2]_

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Fillcart Google Ads Landingpage"
</system-info>

<attached_files>
- uploads/copy-de.md
</attached_files>

## Assistant

The user uploaded the copy file. Let me read it to understand what they want built.

_[tool: read_file]_

I have everything I need — full copy, brand colors (Navy `#0B1B33` + Orange `#F97316` from your icon), and assets. The project's renamed to "Fillcart Google Ads Landingpage", so I'll build the DE landing page now with the existing logo (it's strong), all 9 sections, and the hero cart animation. Let me clean up asset filenames first.

_[tool: image_metadata]_

_[tool: image_metadata]_

_[tool: image_metadata]_

Let me copy assets to clean filenames.

_[tool: copy_files]_

_[tool: update_todos]_

Now building the full landing page as one DC. Starting with the template + animation logic.

_[tool: dc_write]_

Let me screenshot to check the hero animation and layout.

_[tool: show_html]_

I'm actively tuning the hero animation, so I need to see it.

_[tool: show_html]_

Header and hero copy look good. Let me capture the cart animation mid-drop and further down the page.

_[tool: multi_screenshot]_

Counter animates correctly (0 → €1.240.000). The cart itself is below the fold at this scale. Let me scroll to see the cart and cards.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Cards stack nicely but I need to see them sitting inside the cart. Let me scroll a touch more.

_[tool: save_screenshot]_

The cart is drawn in navy on the navy hero — invisible. I'll make it a light line-icon so it reads.

_[tool: dc_js_str_replace]_

_[tool: save_screenshot]_

The cart line-icon now reads clearly with cards dropping in. Let me review the rest of the page.

_[tool: multi_screenshot]_

Everything renders cleanly — problem section, deal cards, comparison table with highlighted Fillcart column, services heading. Let me check the lower sections: services grid, proof, FAQ, form, footer.

_[tool: multi_screenshot]_

Everything renders well. The proof counters showed "0" — let me confirm they animate on scroll (they trigger via IntersectionObserver).

_[tool: save_screenshot]_

_[tool: save_screenshot]_

Counters animate correctly, logo band and Google Partner badge all render. The page is complete. Cleaning up and delivering.

_[tool: delete_file]_

_[tool: update_todos]_

Die DE-Landingpage steht — alle 9 Sektionen aus deinem Briefing.

_[tool: ready_for_verification]_

Fertig — die komplette DE-Landingpage in Deep Navy + Signal-Orange, mit deiner bestehenden Marke:

- **Hero-Animation**: linearer Warenkorb, in den nacheinander Deal-Karten fallen (Neue Anfrage → SQL → Opportunity → Closed Won), Cart federt bei jedem Einschlag, Pipeline-Counter zählt auf €1.240.000 hoch und loopt sanft. `prefers-reduced-motion` liefert ein statisches gefülltes Cart-Bild.
- **Alle Sektionen** in Briefing-Reihenfolge: Problem-Pull-Quote, „Der Deal" (3 Schritte + Qualifier-Box), USP-Vergleichstabelle mit farbig markierter Fillcart-Spalte, 6 Leistungs-Karten, Proof (Andres Porträt + hochzählende Zahlen + stp.one/Matrix42/CIXON + Google-Partner-Badge), FAQ-Accordion, Final-CTA mit Formular.
- **Compliance-Bausteine**: volle US-Adresse im Footer, `info@fillcart.de` sichtbar, JSON-LD für ProfessionalService + FAQPage, DE|EN-Umschalter, Leistungstexte 1:1 aus deiner Copy.
- Das **Budget-Dropdown** ist der Qualifier: bei „unter 5.000 €" erscheint der freundliche Absage-Hinweis und der Submit sperrt.

Zwei Dinge noch offen:
1. **Neues Logo** — hab ich absichtlich nicht angefasst; die Seite nutzt dein bestehendes. Sag mir die Richtung (bestehendes Cart-Icon verfeinern vs. neue Konzepte, wie viele), dann liefere ich Optionen.
2. **EN-Version + Unterseiten** (About, Impressum, Datenschutz) sind noch nicht gebaut — die Footer-Links zeigen schon auf die richtigen Pfade. Soll ich die als Nächstes angehen?

## User

Mir gefällt es schon ganz gut. Ich würde sagen, wir müssen bei einigen Elementen noch ein bisschen Background-Struktur einbringen. Wir brauchen auch noch so ein paar Zahlen, Daten, Statistiken, schöne Grafiken zur Visualisierung, weniger textlastig, wirklich mehr mit Bullet Points auch arbeiten, dass es leichter verdaubar wird fürs Gehirn, würde ich sagen. Dann so eine Art Timeline der Zusammenarbeit und der Optimierungszyklen, dass die einfach Leute sehen, was über einen sechs Monate, zwölf Monate Zeitraum möglich ist, realistisch betrachtet. Für die Kampagne, für das Entry Offer brauche ich mindestens 50 Euro Tagesbudget, sonst ist es einfach nicht lohnenswert sozusagen. Also für diese Testkampagne dementsprechend. Auch was in dem Audit dementsprechend. Also alles nochmal schön visualisieren, auch mit einem Return on Investment Calculator, wo man dann für B2B, für verschiedene Branchen, also einen Branchen-Dropdown drin hat und dann sozusagen verschiedene Conversion Rates, die üblich sind für die Branchen in den Google Ads, die wir erzielen können. Das Budget, was man einkippt und die Average Deal Size, die man manuell dann noch eingeben kann, und die Closing Rate der Closer, also pro SQL sozusagen. Ja, einen ein bisschen komplexeren Return on Investment Calculator da noch mit einbauen auf die Webseite. Viel mehr Visualisierung, nochmal echte Logos raussuchen, PNGs, die dann noch einpflegen, Hover-Animation, auch die Hero-Animation sieht ein bisschen verkackt aus. Also da muss man nochmal ein bisschen Arbeit reinstecken. Aber ja, und der Footer, die grundsätzliche Seite muss sich nach einer 100.000 Euro Landingpage anfühlen. Aktuell tut es das noch nicht. Also da nochmal deutlich mehr vom Design, Overlays, verschiedene Farben, farbige Elemente, dass es einfach auch optisch schön aussieht. Und Kalender, wie gesagt, wir benutzen InBed-Kalender von HubSpot, den auch noch da dementsprechend einbinden.

## Assistant

Großes Upgrade — das ist ein Redesign-Level-Sprung. Plan: Hero-Animation deutlich aufwerten, mehr Background-Struktur & Farbebenen, Text in Bullets + Stat-Chips, neue Timeline (12-Monats-Optimierungszyklus mit Chart), 50 €/Tag-Callout, interaktiver ROI-Rechner mit Branchen-Dropdown, Hover-Animationen, HubSpot-Kalender-Embed und ein Premium-Footer.

_[tool: snip]_

_[tool: update_todos]_

Rewriting the full page with all upgrades.

_[tool: dc_write]_

Let me check the key new sections: hero animation, timeline chart, and ROI calculator.

_[tool: show_html]_

Hero looks cleaner with progress bar. Let me check the ROI calculator and timeline chart — the important new pieces.

_[tool: multi_screenshot]_

ROI calculator works beautifully. One glitch: "SQLs 26 – 26" shows a dead range. Let me fix that, then check the timeline chart renders.

_[tool: dc_js_str_replace]_

_[tool: save_screenshot]_

Let me reload fresh and look at the timeline chart directly.

_[tool: show_html]_

_[tool: save_screenshot]_

Deal section with bullets and budget callouts looks excellent. Let me get the timeline chart.

_[tool: save_screenshot]_

Everything renders — ROAS chart with area fill, ROI calculator, timeline, deal bullets, budget callouts. Cleaning up and delivering.

_[tool: delete_file]_

_[tool: update_todos]_

Deutlich aufgewertet — jetzt fühlt es sich premium an.

_[tool: ready_for_verification]_

Fertig. Was neu bzw. deutlich besser ist:

**Hero-Animation** — sauberer Warenkorb als helles Line-Icon, Karten mit Spring-Easing und Aufprall-Funken (orange/grün), Glow, plus eine Pipeline-Fortschrittsleiste unter dem Counter. Zusätzlich 3 Häkchen-Bullets statt Fließtext.

**Mehr Farbe & Struktur** — zweiter Akzent Emerald `#22C55E` (für positive Zahlen/Funnel) und ein Sky-Blau nur für Daten-Visuals; Punktraster- und Grid-Overlays, farbige Radial-Glows und Verlaufsflächen in fast jeder Sektion.

**Weniger Text, mehr verdaulich** — Deal-Schritte, Leistungen und Über-Andre als Bullets/Chips; Problem-Sektion jetzt mit 3 Stat-Karten (80 % / 1 KPI / 0 €).

**Neu:**
- **12-Monats-Timeline** mit ROAS-Kurven-Chart (Fläche + Punkte) und 5 Meilenstein-Karten (Woche 1 → Monat 6–12).
- **50 €/Tag-Callout** (≈ 1.500 €/Monat Testbudget) neben dem 5k€-Retainer-Hinweis.
- **Interaktiver ROI-Rechner**: Branchen-Dropdown (SaaS, Legal, Finance, IT, Industrie …) mit branchentypischen CVR/CPC, Slider für Budget, Deal-Größe und Closing-Rate; live berechnet Umsatz, ROAS, ROI und ein Klicks→Leads→SQLs→Deals-Funnel.
- **HubSpot-Kalender-Slot** neben dem Formular (Platzhalter-Kalender mit `data-hubspot-meeting-link` — echten Embed-Code dort einsetzen).
- **Premium-Footer** mit 4 Spalten + Gradient-Topline.

**Hover-Animationen** überall (Karten heben ab, CTAs, Nav, Tabellenspalte).

Noch offen / dein Input nötig:
1. **Echte Referenz-Logos (PNG)**: stp.one, Matrix42, CIXON kann ich aus Copyright-Gründen nicht selbst nachbauen — schick mir die freigegebenen PNGs, dann tausche ich die Text-Wortmarken.
2. **HubSpot-Meeting-Link** für den echten Kalender-Embed.
3. Das **neue Logo** und die **EN-Version + Unterseiten** stehen weiterhin an — sag Bescheid, was als Nächstes.

