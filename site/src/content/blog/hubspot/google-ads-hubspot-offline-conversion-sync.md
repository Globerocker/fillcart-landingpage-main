---
title: "Google Ads mit HubSpot verbinden: Offline-Conversion-Sync Schritt für Schritt"
description: "So verbindest du Google Ads mit HubSpot, syncst echte Pipeline-Daten statt Formular-Müll und überlebst die Data-Manager-Migration bis Juni 2026."
category: hubspot
publishDate: 2026-05-19
author: "Andre Schüler"
tags: ["HubSpot", "Google Ads", "Offline Conversion Tracking", "Enhanced Conversions", "Pipeline-Attribution"]
featured: false
heroStat:
  value: "15.06.2026"
  label: "Stichtag, ab dem Google legacy Offline-Conversion-Uploads blockiert"
---

Dein Google-Ads-Dashboard sagt: "Lead — 12 €." Dein CRM sagt: Der Lead war Schrott, nie geantwortet, falsche Firmengröße. Beide haben recht — und genau das ist das Problem. Die Lücke zwischen den beiden Wahrheiten heißt Offline-Conversion-Sync, und wenn du sie nicht sauber gebaut hast, optimiert Google seit Monaten auf das Falsche. Dieser Artikel zeigt dir den kompletten Weg von HubSpot zu Google Ads — und warum du bis zum 15. Juni 2026 ohnehin ranmusst.

## Warum "Lead" in Google Ads nicht "Lead" in HubSpot ist

Google Ads zählt, was auf deiner Landingpage passiert: ein Klick auf "Absenden". HubSpot zählt, was danach passiert: Hat sich jemand gemeldet? Passt die Firma? Wurde daraus ein Sales Qualified Lead, eine Opportunity, ein Kunde? Ohne Verbindung zwischen beiden Systemen optimiert der Google-Algorithmus stur auf das, was er sehen kann — das Formular. Nicht auf das, was zählt — den Abschluss.

Das ist kein Nischenproblem. Wenn GCLID-Erfassung oder Consent-Handling lückenhaft sind, entsteht in der Praxis häufig eine spürbare Differenz zwischen den von Google gemeldeten Conversions und den tatsächlich in HubSpot ankommenden, echten Leads — ein Muster, das auch in Partner-Analysen als grober Richtwert um die 30 % kursiert (laut Growleads, 2025; als illustrativ zu verstehen, kein belastbarer Branchenbenchmark). Der Punkt bleibt derselbe: Was Google nicht aus deinem CRM zurückbekommt, kann Google auch nicht lernen.

Closed-Loop-Reporting heißt: Jede Lifecycle-Stage-Änderung in HubSpot — Lead wird MQL, MQL wird SQL, SQL wird Opportunity, Opportunity wird Kunde — fließt als Signal zurück an Google Ads. Erst dann bietet Smart Bidding auf das, was tatsächlich Umsatz bringt, statt auf das, was am leichtesten zu kriegen ist.

<div class="a-stat"><div class="a-stat-num">~30 %</div><p class="a-stat-txt">typische Differenz zwischen Google-gemeldeten und tatsächlich werthaltigen HubSpot-Conversions bei lückenhafter GCLID-/Consent-Erfassung (laut Growleads, 2025 — als Symptom, nicht als Benchmark zu lesen).</p></div>

<div class="a-callout tip"><span class="a-callout-title">So sieht "gut" aus</span><p>Ein sauberer Closed Loop bedeutet: Jede Kampagne lässt sich bis zur Opportunity zurückverfolgen, jede synchronisierte Conversion entspricht einer echten Lifecycle-Stage, und niemand im Team muss raten, ob eine Zahl im Dashboard Pipeline oder nur Klicks meint. Das ist kein Nice-to-have für Enterprise-Konten — das ist die Grundvoraussetzung, um Google Ads in B2B überhaupt sinnvoll zu steuern.</p></div>

Das Problem ist strukturell, nicht individuell: Google Ads ist so gebaut, dass es aus jedem verfügbaren Signal lernt und dieses Signal verstärkt. Fütterst du das System mit Formular-Fills, wird es besser darin, Formular-Fills zu produzieren — egal, ob daraus jemals ein Kunde wird. Das ist der Kern der Fehlsteuerung, die dieser Artikel beheben soll.

## Die zwei Wege: Offline Conversion Import vs. Enhanced Conversions for Leads

Es gibt zwei technische Wege, HubSpot-Daten an Google zurückzuspielen — und einer davon ist bereits ein Auslaufmodell.

| | Offline Conversion Import (OCI) | Enhanced Conversions for Leads (ECL) |
|---|---|---|
| Status | Legacy, von Google selbst so bezeichnet | Empfohlener Nachfolger |
| Matching-Basis | Fast ausschließlich GCLID | GCLID plus gehashte Nutzerdaten (E-Mail, Telefon) |
| Robustheit | Bricht, wenn GCLID fehlt oder Consent blockiert | Matcht auch, wenn GCLID-Erfassung ausfällt |
| Zusatzfunktionen | Keine | Engaged-View- und Cross-Device-Conversions |
| Zukunft | Migration auf Data Manager erzwungen (siehe unten) | Google-Zielarchitektur ab 2026 |

Google selbst schreibt, OCI habe "nicht die Durability-Features, die Enhanced Conversions for Leads bietet" (Quelle: Google Ads Help, 2026) und empfiehlt das Upgrade über den Google Ads Data Manager. Der Unterschied ist kein Detail: ECL ergänzt die reine Klick-ID um gehashte Kontaktdaten, sodass eine Conversion auch dann noch zugeordnet wird, wenn die GCLID unterwegs verloren geht — etwa durch Consent-Blocker, Browser-Beschränkungen oder einen Wechsel des Geräts. Zusätzlich schaltet ECL Engaged-View- und Cross-Device-Conversions frei, die OCI schlicht nicht kennt.

Wer 2026 noch neu auf OCI aufsetzt, baut auf einem System, dessen Ablaufdatum Google längst verkündet hat.

## Voraussetzungen

Bevor du irgendetwas verbindest, brauchst du diese Bausteine — fehlt einer, funktioniert der Sync bestenfalls halb.

<ul class="a-checklist">
<li>HubSpot Marketing Hub Professional oder Enterprise (der Ads-Add-on für erweiterte ROI-Spalten wie "neue Kunden" setzt eine dieser Stufen voraus)</li>
<li>Admin-Zugriff auf das verknüpfte Google-Ads-Konto</li>
<li>Ein verstecktes GCLID-Feld auf jedem relevanten HubSpot-Formular</li>
<li>Eine funktionierende Consent-Erfassung, die Tracking nicht blockiert, bevor sie überhaupt greifen kann</li>
<li>Klar definierte Lifecycle-Stages, die etwas bedeuten (dazu gleich mehr)</li>
</ul>

Der Ads-Add-on selbst ist als Limit-Erweiterung für Marketing Hub Professional oder Enterprise verfügbar und schaltet höhere Werbeausgaben-Limits sowie die "neue Deals"- und "neue Kunden"-ROI-Spalten frei (Quelle: HubSpot Knowledge Base, 2026). Ohne ihn siehst du zwar Klicks und Kosten, aber keine belastbare Umsatzsicht.

## Setup Schritt für Schritt (nativ in HubSpot)

So verbindest du die Konten und baust den Sync, ohne dich zu verzetteln.

### Schritt 1: Konto verbinden

Unter *Einstellungen → Marketing → Ads → Verbundene Konten* verknüpfst du dein Google-Ads-Konto mit HubSpot. Von hier aus lassen sich auch LinkedIn- und Meta-Konten anbinden — für diesen Artikel bleiben wir bei Google (Quelle: HubSpot Knowledge Base, 2026).

### Schritt 2: Ad-Conversion-Event anlegen

HubSpot erstellt daraufhin ein Ad-Conversion-Event, das du synchronisieren kannst. Das ist der Kanal, über den Lifecycle-Änderungen später als Offline-Conversions bei Google ankommen.

### Schritt 3: Lifecycle-Stages mappen

Jetzt die eigentliche Entscheidung: Welche Stage soll als Conversion an Google gemeldet werden? Nicht "Formular abgeschickt". Sondern MQL, besser noch SQL oder Opportunity — also der Moment, in dem ein Mensch mit Budget und Bedarf tatsächlich im Trichter steht.

### Schritt 4: Deal-Wert-Übergabe festlegen

Optional, aber entscheidend für alles, was danach kommt (Value-based Bidding ist ein eigenes Thema — mehr dazu in unserem Artikel zu [Value-based Bidding auf echte Pipeline](/wissen/hubspot/value-based-bidding-hubspot-pipeline-google-ads/)): Du kannst den tatsächlichen Deal-Wert mitschicken, nicht nur ein binäres "Conversion ja/nein".

Diese vier Schritte sind in zwanzig Minuten geklickt. Die eigentliche Arbeit — sauberes GCLID-Handling und die richtige Stage-Wahl — steckt in den nächsten Abschnitten.

Ein Punkt, der in der Praxis regelmäßig übersehen wird: Die Konfiguration ist kein "Einmal einrichten und vergessen"-Projekt. Wechselt euer Sales-Team beispielsweise die Definition von "Sales Qualified Lead", verändert das automatisch, was an Google gemeldet wird — ohne dass irgendjemand am Bidding etwas angefasst hat. Deshalb gehört zu jedem Setup eine kurze interne Dokumentation: Welche Stage löst die Conversion aus, wer darf diese Zuordnung ändern, und wo steht das schriftlich. Das klingt nach Bürokratie, spart aber genau die Debugging-Stunden, die sonst anfallen, wenn das Bidding plötzlich "komisch" reagiert und niemand mehr weiß, warum.

<div class="a-stat"><div class="a-stat-num">2</div><p class="a-stat-txt">Wege, HubSpot-Daten an Google zurückzuspielen — aber nur einer hat 2026 noch Zukunft: Enhanced Conversions for Leads (Quelle: Google Ads Help, 2026).</p></div>

## GCLID richtig erfassen

Kein GCLID, kein Match — so einfach ist das. Und trotzdem ist ein fehlendes oder falsch konfiguriertes GCLID-Feld der häufigste Grund, warum Offline-Conversion-Syncs in der Praxis leerlaufen.

### Das versteckte Formularfeld

Jedes Formular, das eine Conversion auslösen soll, braucht ein verstecktes Feld, das die GCLID aus der URL oder einem First-Party-Cookie ausliest und mit dem Kontakt speichert. Ohne dieses Feld hat HubSpot beim späteren Sync schlicht keine Klick-ID zum Zurückspielen.

### Warum Consent das Ganze bricht — besonders in DACH

Hier wird es in Deutschland und Österreich heikel: Wenn Tracking-Skripte vor einer gültigen Einwilligung feuern oder — umgekehrt — zu aggressiv blockiert werden, geht die GCLID-Erfassung verloren, bevor sie überhaupt stattfindet. Genau deshalb ist Enhanced Conversions for Leads (F5) so wertvoll: Es fängt auf, was Consent-Lücken sonst kosten würden, weil es zusätzlich gehashte Kontaktdaten als Matching-Grundlage nutzt. Wie du Consent Mode v2 und ein echtes Consent-Management-Tool sauber mit HubSpot verzahnst, behandeln wir ausführlich in unserem Artikel zu [DSGVO-konformem Tracking mit HubSpot](/wissen/hubspot/dsgvo-tracking-hubspot-formulare-consent-dach/).

<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, wo bei dir Pipeline liegen bleibt?</strong> Wir nehmen dein Google-Ads-HubSpot-Setup kostenlos auseinander.</p><a href="/#audit">Kostenlosen Audit sichern</a></div>

## Deadline-Alarm: Migration auf Data Manager bis 15. Juni 2026

Das ist der Teil, der diesen Artikel dringlich macht, nicht nur nützlich: Ab dem 15. Juni 2026 migriert Google Offline-Conversion- und Enhanced-Conversion-Uploads auf die Data Manager API — und blockiert sie in der klassischen Google-Ads-API (Quelle: Google Ads Help / Google for Developers, 2025–2026). Entwicklertoken, die zwischen Januar und Juni 2026 keine einzige Anfrage gestellt haben, werden für den Legacy-Zugriff nicht mehr zugelassen.

Wer sein Setup jetzt nicht anfasst, riskiert, dass am Stichtag der komplette Conversion-Feed ins Leere läuft — und das Bidding-System plötzlich blind wird, ohne dass es jemand sofort bemerkt, weil Google-Ads-Kampagnen ja weiterlaufen. Nur eben ohne Rückmeldung darüber, was wirklich konvertiert.

Zusätzlich verschmelzen ab April 2026 die getrennten Einstellungen für "Enhanced Conversions for Web" und "Enhanced Conversions for Leads" zu einem einzigen Schalter (Quelle: Google Ads Help, 2026) — Nutzerdaten kommen dann gleichzeitig aus Website-Tag, Data Manager und API.

<div class="a-callout warn"><span class="a-callout-title">Was jetzt zu tun ist</span><p>Prüfe noch diesen Monat, ob dein Konto auf OCI oder ECL läuft. Steht dort noch OCI, starte die Migration über den Google Ads Data Manager, bevor der Juni-Stichtag zur Feuerwehrübung wird.</p></div>

## Validierung: stimmen die Zahlen?

Ein Sync, den niemand kontrolliert, ist kein Sync — er ist ein Vertrauensvorschuss. Vergleiche monatlich die Conversion-Zahlen aus Google Ads mit den entsprechenden Lifecycle-Übergängen in HubSpot. Zwei Kontrollfragen helfen dabei:

1. Kommt die Zahl der als "Conversion" gemeldeten Leads in etwa der Zahl der tatsächlich qualifizierten Kontakte im gleichen Zeitraum nahe?
2. Gibt es Kampagnen, bei denen Google viele Conversions meldet, aber im CRM praktisch nichts an echter Pipeline dahintersteckt?

Größere Abweichungen sind fast immer ein GCLID- oder Consent-Problem (siehe oben) — kein Zufall und keine Ausrede, das Reporting einfach zu ignorieren.

Eine dritte, oft unterschätzte Kontrollfrage: Stimmt die zeitliche Verteilung? B2B-Sales-Cycles laufen selten in derselben Woche ab wie der Klick. Wenn dein Sync so gebaut ist, dass Conversion-Daten erst Wochen später ankommen, muss dein Reporting-Zeitraum das berücksichtigen — sonst vergleichst du Äpfel mit unreifen Äpfeln und ziehst falsche Schlüsse über die Performance einzelner Kampagnen. Baue dir lieber einen rollierenden 60- oder 90-Tage-Blick auf, statt jede Woche neu zu urteilen.

Praktisch heißt das: Exportiere einmal im Monat die Google-Ads-Conversion-Liste und die HubSpot-Liste der im selben Zeitraum in die Zielstufe gewechselten Kontakte, und vergleiche beide nebeneinander. Zehn Minuten Arbeit, die verhindern, dass ein kaputter Sync monatelang unbemerkt Budget in die falsche Richtung lenkt.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul>
<li>Sync auf eine Stage, die Geld bedeutet (SQL/Opportunity) — nicht auf "Formular abgeschickt".</li>
<li>Baue auf Enhanced Conversions for Leads, nicht auf die auslaufende Offline Conversion Import.</li>
<li>Der 15. Juni 2026 ist ein hartes Datum: Data-Manager-Migration jetzt einplanen, nicht im Mai.</li>
<li>Ohne sauberes GCLID-Handling und Consent-Erfassung bleibt jeder Sync Stückwerk.</li>
<li>Reconciliation ist kein einmaliges Setup, sondern eine monatliche Routine.</li>
</ul></div>

## Häufige Fehler & Checkliste

Die meisten kaputten Syncs scheitern nicht an der Technik, sondern an fünf immer gleichen Entscheidungen:

<ul class="a-checklist">
<li>Formular-Submit statt qualifizierter Lifecycle-Stage wird synchronisiert — Google lernt, billigen Datenmüll zu kaufen.</li>
<li>Kein GCLID-Feld auf dem Formular — die Klick-ID geht verloren, bevor sie gebraucht wird.</li>
<li>Google- und CRM-Zahlen werden nie gegeneinander abgeglichen.</li>
<li>Die Juni-2026-Migration wird ignoriert, bis der Upload plötzlich blockiert ist.</li>
<li>Neuaufbau auf OCI im Jahr 2026, obwohl ECL der klare Zielzustand ist.</li>
</ul>

Mach es stattdessen so: Synchronisiere auf einer werthaltigen Stage, nutze ECL statt OCI, gib echten Deal-Wert mit, dokumentiere die Stage-Zuordnung, damit niemand versehentlich das Bidding-Signal kappt, und kontrolliere die Zahlen monatlich. Wenn du wissen willst, wie viel ROI in deinem Konto aktuell falsch zugeordnet wird, probiere unseren [Pipeline-ROI-Rechner](/#rechner) — er zeigt in wenigen Minuten, wo dein Sync heute schon Geld kostet.

Fillcart baut solche Setups seit Jahren für B2B-Konten in DACH und den USA — nicht nach Checkliste, sondern weil wir wissen, wo es in der Praxis reißt. Mehr über unsere Arbeitsweise findest du [über Fillcart](/ueber-fillcart).

## Quellen

- HubSpot Knowledge Base, "Create and sync ad conversion events with your Google Ads account", 2026 — knowledge.hubspot.com/ads/create-and-sync-ad-conversion-events-with-your-google-ads-account
- HubSpot Knowledge Base, "Analyze ad campaigns in HubSpot", 2026 — knowledge.hubspot.com/ads/analyze-ad-campaigns-in-hubspot
- Growthspree, "How to Send HubSpot Offline Conversions to Google Ads", 2025 — growthspreeofficial.com/blogs/how-to-send-offline-conversions-from-hubspot-to-google-ads
- Google Ads Help, "HubSpot", 2026 — support.google.com/google-ads/answer/15293735
- Google Ads Help, "About enhanced conversions for leads", 2026 — support.google.com/google-ads/answer/15713840
- Google Ads Help, "Upgrade offline conversion import to enhanced conversion for leads", 2026 — support.google.com/google-ads/answer/14274408
- Google Ads Help / Google for Developers, Offline-Conversion-Migration auf Data Manager, 2025–2026 — support.google.com/google-ads/answer/2998031 ; developers.google.com/google-ads/api/docs/conversions/upload-offline
- Growleads, "Fix the 30% Google Ads Conversion Mismatch in HubSpot", 2025 — growleads.io/blog/hubspot-google-ads-offline-conversion-tracking
