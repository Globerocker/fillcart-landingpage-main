---
title: "AI-Suchsichtbarkeit messen: Tools, KPIs und Methode für B2B"
description: "GSC und GA4 zeigen KI-Traffic nur unvollständig. So baust du 2026 einen echten Messstack für AEO-Sichtbarkeit auf, vom Basis-Setup mit Bordmitteln bis Enterprise."
lang: de
publishDate: 2026-06-18
author: "Andre Schüler"
topic: seo
tags: ["AEO", "AI Visibility Tracking", "Share of Voice", "Search Console", "GA4", "B2B SEO"]
heroStat:
  value: "3. Juni 2026"
  label: "Start der eigenen „Generative AI“-Reports in der Search Console"
featured: false
draft: false
---

Du kannst nicht optimieren, was du nicht misst, und genau daran hakt es bei AI-Sichtbarkeit. Die Search Console hat ChatGPT-, Perplexity- und Gemini-Klicks bis vor Kurzem stillschweigend im ganz normalen „Web“-Bericht versteckt, GA4 erkennt KI-Referrals nur, wenn du die Kanaldefinition selbst pflegst. Wer 2026 noch ausschließlich nach Rankings und CTR reportet, misst die falsche Sache. Hier ist der Messstack, den ich für B2B-Konten aufbaue: vom Basis-Setup mit Bordmitteln bis zur Enterprise-Plattform.

## Warum klassische Metriken versagen

Rankings und organische CTR waren jahrzehntelang die Währung von SEO-Reports. Das Problem: Beide Zahlen brechen gerade zusammen, ohne dass sich am zugrunde liegenden Geschäft etwas ändert. Wenn eine AI Overview erscheint, sinkt die Klickrate auf das Top-Ergebnis um 58 % (Quelle: Ahrefs, Dez. 2025), eine Zahl, die Ahrefs selbst im April 2025 noch mit 34,5 % beziffert und seither nach oben korrigiert hat. SparkToro geht für 2026 davon aus, dass inzwischen weniger als ein Drittel aller Google-Suchen überhaupt noch zu einem Klick führt (Quelle: SparkToro, 2026).

Gleichzeitig ist AI-Suche zwar klein im Volumen, aber teuer im Verzicht: Laut Semrush ist der durchschnittliche Besucher aus KI-Suche rund 4,4-mal so werthaltig wie ein klassischer organischer Besucher, gemessen an der Conversion (Quelle: Semrush, Jun. 2025). Wer diesen Kanal nicht sieht, plant sein Budget an der eigentlichen Nachfrage vorbei.

Und dann ist da noch der Trugschluss, dass gute Rankings automatisch gute KI-Sichtbarkeit bedeuten. Ahrefs hat gezeigt, dass die Überschneidung zwischen Top-10-Rankings und AI-Overview-Zitationen von 76 % (Jul. 2025) auf 38 % (Ende 2025) gefallen ist, nach einem Gemini-Update. Nur rund 12 % der in KI-Antworten zitierten URLs ranken überhaupt in den Top 10 für denselben Prompt (Quelle: Ahrefs, 2025). Zitiert werden und ranken sind zwei verschiedene Spiele, und ein Report, der nur das eine misst, ist blind für das andere.

Für B2B-Marketingleiter heißt das konkret: Dein monatliches Ranking-Reporting kann komplett stabil aussehen, während sich die tatsächliche Sichtbarkeit in ChatGPT, Perplexity oder Gemini gerade halbiert oder verdoppelt hat. Du siehst es einfach nicht, weil du das falsche Instrument benutzt. Das ist kein Grund für Panik, aber ein guter Grund, das Reporting-Set-up jetzt zu überarbeiten, bevor die nächste Budgetrunde ansteht und jemand fragt, warum die Leads aus Google zurückgehen, obwohl „alle Rankings doch gut aussehen“.

<div class="a-stat"><div class="a-stat-num">76 % → 38 %</div><p class="a-stat-txt">So stark ist die Überschneidung zwischen Top-10-Rankings und AI-Overview-Zitationen 2025 eingebrochen (Ahrefs, 2025).</p></div>

## Was GSC & GA4 heute zeigen (und nicht)

### GSC: Der neue „Generative AI“-Bericht

Seit dem 3. Juni 2026 zeigt die Google Search Console einen eigenen „Generative AI“-Bericht, der Impressionen und Klicks aus AI Overviews und AI Mode separat ausweist. Die gute Nachricht: Die Daten waren technisch schon vorher da, nur unsichtbar im aggregierten „Web“-Bericht verschmolzen. Die neue Aufschlüsselung ist also kein Mehr an Rohdaten, sondern endlich die richtige Segmentierung.

Die schlechte Nachricht: Der Bericht deckt ausschließlich Googles eigene generative Flächen ab. ChatGPT, Perplexity, Copilot oder das im Bing-Index laufende ChatGPT-Search-Feature siehst du hier nicht. Bing versorgt neben Copilot inzwischen auch die Websuche in ChatGPT mit Index-Daten, aber eben nicht über deine Google-Property. Für ein vollständiges Bild brauchst du zusätzliche Quellen.

### GA4: Die AI-Referral-Regex und der native Kanal

Google Analytics 4 hat im Mai 2026 nachgezogen und einen nativen „AI Assistant“-Kanal eingeführt, der auf einer Referrer-Regex basiert (chatgpt.com, perplexity.ai, copilot.microsoft.com und ähnliche Domains). Das klingt nach einer sauberen Lösung, ist es aber nur teilweise: Mehrere Web-Analytics-Beobachter berichten, dass diese Regex zwischen 35 und 70 % der tatsächlichen KI-Zugriffe verpasst, etwa weil App-Referrer fehlen, Nutzer Links kopieren statt zu klicken, oder neue Assistenten schneller entstehen als Googles Liste aktualisiert wird (Stand 2026). Nimm den GA4-Kanal als Signal, nicht als Wahrheit.

<div class="a-callout warn"><span class="a-callout-title">Vorsicht bei der Interpretation</span><p>Ein Rückgang im „Web“-Kanal von GSC/GA4 heißt nicht automatisch weniger Sichtbarkeit. Es kann auch bedeuten, dass Traffic jetzt korrekt als KI-Referral ausgewiesen wird. Prüfe beide Berichte im Zusammenhang, bevor du Alarm schlägst.</p></div>

## Prompt-Set-Methodik: Mentions vs. Citations vs. Sentiment

Klassisches Rank-Tracking arbeitet mit Keywords. AI-Visibility-Tracking arbeitet mit Prompts, den tatsächlichen Fragen, die deine Zielgruppe einem Assistenten stellt. Das ist ein methodischer Bruch, kein kosmetischer: Ein Keyword hat eine Position, ein Prompt hat eine Antwort mit mehreren möglichen Marken darin. Drei Ebenen solltest du sauber trennen:

- **Mention:** deine Marke wird in der Antwort genannt, ohne dass eine URL zitiert wird.
- **Citation:** ein Assistent verlinkt oder referenziert konkret eine deiner Seiten als Quelle.
- **Sentiment:** der Tonfall, in dem du erwähnt wirst: empfohlen, neutral aufgezählt oder abgewertet.

Ahrefs Brand Radar definiert „Share of Voice“ auf dieser Basis und wertet dafür mehr als 405 Millionen Prompts aus verschiedenen Assistenten aus (Quelle: Ahrefs, 2026), eine Größenordnung, die zeigt, wie sehr sich Messmethodik von der reinen Keyword-Welt entfernt hat. Der Aufwand lohnt sich: Marken, die in AI Overviews zitiert werden, erzielen laut Seer 35 % mehr organischen und 91 % mehr bezahlten Klick-Traffic als nicht zitierte Wettbewerber (Quelle: Seer, Nov. 2025). Citation-Tracking ist also kein Vanity-KPI, sondern misst einen echten Hebel für Pipeline.

Baue dein Prompt-Set wie ein Vertriebsteam, nicht wie ein Keyword-Tool: Sammle die zehn bis dreißig Fragen, die ein Einkäufer in deiner Kategorie tatsächlich einem Assistenten stellen würde („beste Software für X“, „Alternativen zu Y“, „was kostet Z typischerweise“), und nicht die Head-Terms, die dein altes Rank-Tracking-Tool automatisch vorschlägt. Mehr zur Struktur, die Assistenten überhaupt zum Zitieren bringt, findest du im Artikel zu <a href="/de/insights/aeo-geo-in-ki-suchen-zitiert-werden">AEO/GEO in KI-Suchen</a>.

Sentiment ist dabei der am meisten unterschätzte Teil der Methodik. Zwei Marken können in derselben Antwort auftauchen und trotzdem völlig unterschiedlich behandelt werden: die eine als „führende Lösung für Mittelständler“, die andere nur in einer Aufzählung von fünf Alternativen ohne weitere Einordnung. Wer nur Mentions zählt, hält beide für gleichwertig. Erfasse den Tonfall deshalb konsequent in drei Stufen: empfohlen, neutral genannt, kritisch oder gar nicht erwähnt. Über zwölf bis 24 Wochen ergibt das eine Trendlinie, die aussagekräftiger ist als jede Einzelmessung. Genau wie beim klassischen Rank-Tracking zählt die Bewegung, nicht der Tagessnapshot.

Ein Wort zur Prompt-Pflege: Assistenten ändern ihre Antworten je nach Tageszeit, Modellversion und sogar Standort des anfragenden Kontos. Miss deshalb nicht einmal und leg die Füße hoch, sondern etabliere einen festen Rhythmus: wöchentlich für ein kleines manuelles Set, täglich automatisiert, sobald ein Tool im Einsatz ist. Alles andere produziert Rauschen, das du für ein Signal hältst.

<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, wo bei dir Pipeline liegen bleibt?</strong> Ich nehme dein Konto im Audit auseinander.</p><a href="/de/leistungen/audit">Audit anfragen</a></div>

## Tool-Vergleich: Was die Plattformen 2026 wirklich bieten

Der Markt für AI-Visibility-Tools ist 2025/26 explodiert, aber die Reife der Anbieter unterscheidet sich stark. Hier die Landschaft, wie ich sie für B2B-Konten einordne:

| Tool | Fokus | Ab-Preis | Datenschutz / Hosting |
|---|---|---|---|
| **Peec AI** | Mentions, Citations, Sentiment über ChatGPT, Perplexity, Gemini, Copilot | ab ca. 89 €/Monat | Berlin, DSGVO-nativ |
| **Semrush One** | AI-Sichtbarkeit integriert in bestehende SEO-Suite, SOV in Overviews | ab 199 $/Monat | US-Anbieter, globale Infrastruktur |
| **Ahrefs Brand Radar** | Share of Voice über 405 Mio.+ Prompts, Mentions/Citations/Impressions | 199 bis 699 $/Monat | US-Anbieter |
| **Profound** | Enterprise-Plattform für generative Sichtbarkeit, Konkurrenz-Benchmarking | Preis auf Anfrage | US-Anbieter |
| **Otterly** | Schlankes, prompt-basiertes AI-Rank-Tracking | Einstiegstarife laut Anbieterwebsite | Angaben variieren je nach Vertrag |
| **Scrunch AI** | GEO/AEO-Plattform mit Content-Audit für LLM-Crawler | Preis auf Anfrage | US-Anbieter |

*(Preise und Hosting-Angaben laut Anbieterwebsites, Stand 2026. Vor einer Kaufentscheidung immer aktuell gegenprüfen.)*

Für die meisten B2B-Konten im DACH-Raum ist Peec AI der pragmatischste Einstieg: europäisches Hosting, überschaubarer Preis, Fokus genau auf die Frage „werden wir erwähnt und zitiert“. Semrush und Ahrefs lohnen sich, wenn du die AI-Sichtbarkeit ohnehin schon für klassisches SEO-Tooling im Einsatz hast. Dann ist Brand Radar oder das AI-Modul quasi ein Zusatzbericht in einem Tool, das du schon bezahlst. Profound, Otterly und Scrunch AI sind einen Blick wert, sobald du über einen einzelnen Markennamen hinaus mehrere Marken oder Konkurrenz-Sets systematisch vergleichen willst. Dort variieren Reifegrad und Preistransparenz aber stark, also unbedingt eine Demo mit deinem eigenen Prompt-Set verlangen, bevor du unterschreibst.

### Worauf du bei der Tool-Auswahl wirklich achten solltest

Bunte Dashboards verkaufen sich leicht, sind aber nicht das Kriterium. Bevor du unterschreibst, prüfe drei Dinge, die in keiner Verkaufspräsentation stehen: Erstens, ob du dein eigenes Prompt-Set frei definieren kannst oder ob dir das Tool eine vorgefertigte Keyword-zu-Prompt-Übersetzung aufzwingt, die an deiner Zielgruppe vorbeigeht. Zweitens, wie oft die Assistenten tatsächlich neu abgefragt werden: täglich ist Standard, alles darunter bedeutet, dass du mit veralteten Daten arbeitest, während sich Modelle wöchentlich ändern. Drittens, ob sich Rohdaten exportieren lassen, um sie neben Pipeline-Zahlen im CRM zu betrachten. Ein Tool, das dich in seinem eigenen Dashboard gefangen hält, verhindert genau die Verknüpfung, auf die es ankommt: Sichtbarkeit gegen Umsatz.

## Ein schlankes Setup für B2B (Stufenmodell)

Du musst nicht sofort ein 500-€-Tool kaufen. Ein realistisches Reifemodell sieht so aus:

**Stufe 1: Ohne Tool-Budget (Monat 1).** GSC-„Generative AI“-Bericht wöchentlich prüfen, GA4-„AI Assistant“-Kanal als eigenes Segment anlegen, dazu manuell 10 bis 15 Prompts monatlich selbst in ChatGPT/Perplexity/Gemini eingeben und Ergebnisse in einer simplen Tabelle protokollieren (Mention ja/nein, zitierte URL, Tonfall).

**Stufe 2: Prompt-Tracking automatisieren (Monat 2 bis 4).** Sobald die manuelle Tabelle mehr als eine Handvoll Prompts umfasst, lohnt sich ein Tool wie Peec AI oder das AI-Modul in Semrush: automatisiertes, wiederholtes Prompting über mehrere Assistenten, Trendlinien statt Momentaufnahmen.

**Stufe 3: Enterprise-Skalierung (ab Monat 6+).** Wenn du über mehrere Marken, Sprachen oder Wettbewerber-Sets gleichzeitig reportest, wird Ahrefs Brand Radar oder Profound relevant. Dort bezahlst du für Skalierbarkeit und Rohdatenzugriff (405 Mio.+ Prompts bei Ahrefs), nicht für einen grundsätzlich anderen Messansatz.

<div class="a-stat"><div class="a-stat-num">35 bis 70 %</div><p class="a-stat-txt">So viel KI-Referral-Traffic übersieht die Standard-Regex im nativen GA4-„AI Assistant“-Kanal laut Analysten (Stand 2026).</p></div>

## KPIs, die zählen

Reporte nicht mehr auf Position und CTR allein. Für ein B2B-Konto, das auf Pipeline-Wert statt Cost-per-Lead optimiert, gehören diese Kennzahlen ins Dashboard:

| KPI | Was er zeigt | Woher |
|---|---|---|
| Share of Voice (AI) | Wie oft deine Marke in relevanten Prompts überhaupt auftaucht | Peec AI, Semrush, Ahrefs Brand Radar |
| Citation Rate | Anteil der Antworten mit konkretem Link auf deine Seite | Prompt-Set-Tracking |
| Sentiment-Score | Empfehlung, neutrale Nennung oder Abwertung | Prompt-Set-Tracking |
| GSC Generative-AI-Impressionen | Sichtbarkeit speziell in Googles eigenen KI-Flächen | Search Console |
| GA4 „AI Assistant“-Sessions | Grobes Signal für Traffic aus KI-Chats (mit Untererfassung) | GA4 |
| Pipeline-Wert je Kanal | Was aus KI-Referral-Traffic tatsächlich im CRM landet | HubSpot/CRM, nicht das Analytics-Tool |

Der letzte Punkt ist der, den die meisten Tool-Anbieter nicht liefern und den ich am konsequentesten einfordere: Sichtbarkeit ist eine Zwischengröße. Sie zählt erst, wenn sie sich im CRM als Pipeline-Wert niederschlägt, nicht als hübsche SOV-Kurve im Dashboard eines Tool-Anbieters, der dir gerne ein weiteres Abo verkauft.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul><li>GSC zeigt seit Juni 2026 „Generative AI“-Daten separat. Die Zahlen waren vorher nur im „Web“-Bericht versteckt, nicht neu erhoben.</li><li>GA4s nativer „AI Assistant“-Kanal ist ein Signal, kein vollständiges Bild. Analysten sehen 35 bis 70 % Untererfassung.</li><li>Trenne Mentions, Citations und Sentiment sauber; nur Citations korrelieren nachweislich mit mehr organischem und bezahltem Traffic (+35 %/+91 %, Seer).</li><li>Baue dein Prompt-Set wie ein Vertriebsteam: aus echten Einkäufer-Fragen, nicht aus alten Keyword-Listen.</li><li>Peec AI (EU/DSGVO) für den Einstieg, Semrush/Ahrefs für Skalierung, Profound/Otterly/Scrunch für Enterprise-Vergleiche.</li><li>Am Ende zählt nur eine Zahl: Pipeline-Wert im CRM, nicht Share of Voice im Tool-Dashboard.</li></ul></div>

## Checkliste: Dein AEO-Measurement-Setup in 30 Tagen

<ul class="a-checklist">
<li>GSC-„Generative AI“-Bericht aktivieren und als wöchentlichen Blick etablieren</li>
<li>GA4-„AI Assistant“-Kanal als eigenes Segment im Reporting anlegen</li>
<li>10 bis 30 echte Einkäufer-Prompts sammeln (nicht Keywords) und dokumentieren</li>
<li>Manuelles Prompt-Protokoll für Monat 1 aufsetzen (Mention/Citation/Sentiment)</li>
<li>Nach 4 bis 6 Wochen ein Prompt-Tracking-Tool evaluieren (Peec AI als EU-Startpunkt)</li>
<li>CRM-Feld für „Erstkontakt über KI-Assistent“ ergänzen, um Pipeline-Wert zuzuordnen</li>
<li>Quartalsweise die Tool-Wahl gegen tatsächliche Datenqualität prüfen, nicht gegen Marketing-Versprechen</li>
</ul>

Wenn du deine aktuelle Reporting-Struktur nicht selbst umbauen willst: Ich mache das im Rahmen des <a href="/de/leistungen/audit">Audits</a> für dich mit, inklusive eines groben Blicks über den <a href="/de/roi">ROI-Rechner</a>, was ein realistischer Pipeline-Beitrag aus KI-Suche für dein Konto bedeuten könnte. Wie Autorität und Zitierbarkeit dabei zusammenhängen, erkläre ich vertieft im Artikel zu <a href="/de/insights/eeat-ki-suche-autoritaet">E-E-A-T in der KI-Suche</a>.

## Quellen

- Ahrefs, „AI Overviews & CTR-Studie“ / Brand Radar, 2025 bis 2026, https://ahrefs.com/blog
- Semrush, „AI-Search-Visitor-Value-Studie“, Jun. 2025, https://www.semrush.com/blog
- Seer Interactive, „AI-Citation-Impact-Studie“, Nov. 2025, https://www.seerinteractive.com
- SparkToro, „Zero-Click-Search-Studie“, 2026, https://sparktoro.com
- Google Search Central, „Generative AI Performance Reports“, 2026, https://developers.google.com/search/blog
- Google Analytics Help, „AI Assistant Channel“, 2026, https://support.google.com/analytics
- Peec AI, Produkt- und Preisangaben, 2026, https://peec.ai
