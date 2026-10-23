---
title: "Schema.org & strukturierte Daten für AEO: Was 2026 noch bringt"
description: "FAQ-Rich-Results sind tot, Schema ist es nicht. Was strukturierte Daten 2026 für KI-Zitate wirklich bringen: ehrlich, mit Belegen aus beiden Lagern."
lang: de
publishDate: 2026-06-09
author: "Andre Schüler"
topic: seo
tags: ["Schema.org", "Strukturierte Daten", "AEO", "Rich Snippets", "Structured Data"]
heroStat:
  value: "0 Sterne"
  label: "so viele Rich-Result-Sterne bringt FAQ-Schema seit Mai 2026 noch. Trotzdem lohnt sich Schema weiter"
featured: false
draft: false
---

FAQ-Rich-Results sind seit Mai 2026 Geschichte, HowTo schon seit 2023. Wer deshalb glaubt, strukturierte Daten seien tot, liegt falsch, und verschenkt Sichtbarkeit in genau der Disziplin, die gerade zählt: KI-Zitate. Der Trick ist, Hype von Substanz zu trennen. Hier ist die ehrliche Bestandsaufnahme.

## Was strukturierte Daten sind

Schema.org ist ein gemeinsames Vokabular, mit dem du Maschinen explizit sagst, was auf deiner Seite steht, nicht nur, dass da Text steht. Ein `Organization`-Objekt sagt: Das hier ist ein Unternehmen, so heißt es, das ist das Logo, diese Profile gehören dazu. Ein `Article`-Objekt sagt: Das ist ein Artikel, der Autor heißt X, veröffentlicht am Datum Y. Technisch meist als JSON-LD im `<head>` eingebettet, unsichtbar für Besucher, aber maschinenlesbar für Crawler.

Der Denkfehler, der sich seit Jahren hält: Schema soll SEO-Rankings direkt verbessern. Das war nie ganz richtig und ist es 2026 noch weniger. Schema verbessert nicht deine Position. Es verbessert, wie präzise Maschinen verstehen, was du bist. Das ist ein feiner, aber entscheidender Unterschied, wenn du für KI-Suchsysteme statt für zehn blaue Links optimierst.

Technisch gibt es drei Schreibweisen: JSON-LD, Microdata und RDFa. Für die Praxis ist die Diskussion beendet: JSON-LD hat sich als De-facto-Standard durchgesetzt, weil es sich als separater Block ins `<head>` schreiben lässt, ohne den sichtbaren HTML-Code zu verschachteln. Ein minimales Beispiel für ein `Organization`-Objekt sieht so aus:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fillcart",
  "url": "https://fillcart.de",
  "logo": "https://fillcart.de/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/fillcart",
    "https://www.crunchbase.com/organization/fillcart"
  ]
}
```

Kein Plugin, kein Wildwuchs, keine Magie, nur ein sauberer, wartbarer Block, der zentral gepflegt wird. Genau diese Schlichtheit ist der Punkt, an dem die meisten Teams scheitern, weil sie Schema an drei verschiedenen Stellen im Stack gleichzeitig generieren lassen.

## Was 2026 wegfiel: FAQ- und HowTo-Rich-Results

Google hat FAQ-Rich-Results im Mai 2026 komplett abgeschaltet, nachdem HowTo-Rich-Results bereits 2023 gestrichen wurden. Beide Formate hatten jahrelang SERP-Immobilien verschenkt: aufklappbare Fragen direkt unter dem blauen Link, oft so umfangreich, dass Nutzer gar nicht mehr klicken mussten. Genau das war vermutlich der Grund für die Streichung: Google reduziert eigene SERP-Features, während es gleichzeitig AI Overviews ausbaut, die denselben Zweck erfüllen, nur besser.

<div class="a-callout warn"><span class="a-callout-title">Was das für dich bedeutet</span><p>Deine bestehende <code>FAQPage</code>-Auszeichnung ist nicht falsch und muss nicht runter. Sie bringt nur keine Sterne, keine aufklappbaren Snippets und keinen zusätzlichen SERP-Platz mehr. Sie bleibt als strukturelle Information für Crawler gültig, nur die visuelle Belohnung ist weg. Wer sein komplettes Content-Team darauf ausgerichtet hat, FAQ-Blöcke für Rich Results zu bauen, sollte das Budget jetzt woandershin verschieben.</p></div>

Die Lehre daraus ist grundsätzlicher: Rich-Result-Features sind Googles Entscheidung, nicht deine. Sie können jederzeit verschwinden, unabhängig davon, wie sauber dein Markup ist. Schema als Fundament für Maschinenverständnis ist stabiler als Schema als Ticket für ein visuelles Feature.

Für Teams, die jahrelang FAQ-Blöcke primär als SEO-Taktik in Landingpages gebaut haben, lohnt sich jetzt ein Realitäts-Check: Bringt der FAQ-Abschnitt inhaltlich noch etwas (beantwortet er echte Kaufeinwände, hilft er beim Verständnis eines komplexen Angebots), dann bleibt er, nur eben ohne Erwartung an ein Rich-Result. Wurde er ausschließlich gebaut, um `FAQPage`-Markup zu rechtfertigen, ist das ein guter Zeitpunkt, ihn zu kürzen oder in echten Fließtext zu überführen. Content, der nur wegen eines inzwischen abgeschafften SERP-Features existiert, ist tote Fläche.

## Hilft Schema für KI-Zitate? Beide Seiten der Evidenz

Hier wird es kontrovers, und genau deshalb muss ein ehrlicher Guide beide Seiten zeigen, statt eine Meinung als Fakt zu verkaufen.

| Position | Wer sagt das | Kernaussage |
|---|---|---|
| Pro | Ryan Levering, Google-Search-Engineer für strukturierte Daten | Schema "füttert" generative KI-Systeme mit präzisen Entitätsdaten, über die klassische Google-Suche hinaus |
| Pro | Microsoft/Bing (Produktverantwortliche, März 2025) | Strukturierte Daten fließen in generative Antwortsysteme wie Copilot ein |
| Pro (Vendor) | Diverse SEO-Tool-Anbieter | behaupten 2,5- bis 2,7-mal mehr KI-Zitate durch Schema-Einsatz |
| Contra | Ahrefs (Juni 2026) | untersuchte 1.885 Seiten, die neu Schema hinzufügten: die Zitations-Häufigkeit in KI-Antworten bewegte sich kaum |

Beide Seiten haben recht, nur reden sie über unterschiedliche Dinge. Levering und Bing sprechen über **Verständnis**: Schema hilft Maschinen, deine Entität korrekt einzuordnen: wer du bist, was du anbietest, wie du mit anderen Entitäten verknüpft bist. Ahrefs misst **Ergebnis**: ob das zu mehr tatsächlichen Zitaten führt. Die 1.885-Seiten-Studie sagt: nicht signifikant, jedenfalls nicht als alleinige Maßnahme.

<div class="a-stat"><div class="a-stat-num">1.885</div><p class="a-stat-txt">Seiten hat Ahrefs untersucht, nachdem dort neu Schema-Markup eingebaut wurde. Die KI-Zitations-Rate bewegte sich kaum (Quelle: Ahrefs, Juni 2026).</p></div>

Die ehrliche Einordnung: Schema ist kein Zitations-Hebel, sondern ein Präzisions-Hebel. Es entscheidet nicht, *ob* du zitiert wirst. Das entscheiden eher Faktoren wie zitierfähige Statistiken, klare Selbstständigkeit von Textpassagen und Markenerwähnungen im offenen Web. Aber wenn ein Modell deine Seite bereits als Quelle in Betracht zieht, hilft Schema, dich korrekt zuzuordnen: die richtige Organisation, den richtigen Autor, das richtige Veröffentlichungsdatum. Vendor-Studien mit 2,5- bis 2,7-facher Wirkung solltest du skeptisch behandeln, solange sie nicht offenlegen, wie sie "Zitation" definieren und wie groß die Stichprobe war.

Was folgt daraus für die Priorisierung im Alltag? Wenn dein Team zwischen "mehr Schema" und "mehr zitierfähige Inhalte" wählen muss, gewinnt Letzteres fast immer. Schema ist die Pflicht, nicht die Kür: ein sauberes Fundament, auf dem die eigentliche Sichtbarkeitsarbeit erst wirken kann. Wer glaubt, mit `Organization`-Markup allein KI-Zitate zu erkaufen, verwechselt die Speisekarte mit dem Essen.

## Die Typen, die zählen

Statt jedes verfügbare Schema-Objekt auf deine Seite zu klatschen, konzentrier dich auf drei, die nachweislich Substanz liefern.

### Organization + sameAs

Auf der Startseite (und idealerweise im globalen Footer-Markup) gehört ein `Organization`-Objekt mit Name, Logo, Adresse und, entscheidend, `sameAs`-Links zu deinen offiziellen Profilen: LinkedIn-Unternehmensseite, Crunchbase, Wikidata falls vorhanden, relevante Branchenverzeichnisse. Google hat im November 2023 das Organization-Markup erweitert, unter anderem um Logo-, `sameAs`- und NAICS-Branchencode-Felder. Das ist kein Zufall: Es ist die Infrastruktur, mit der Google und andere Systeme deine Entität eindeutig von gleichnamigen Unternehmen unterscheiden.

`sameAs` ist der am meisten unterschätzte Teil davon. Es verknüpft dein Schema mit Orten, an denen bereits über dich gesprochen wird, und genau diese Markenerwähnungen sind das, was KI-Suchsysteme laut aktueller Forschung stärker gewichten als klassische Backlinks. Schema allein erzeugt keine Erwähnungen. Aber es macht die vorhandenen Erwähnungen für Maschinen sichtbar und verknüpfbar.

### Article + author

Jeder Blogartikel sollte `Article`- oder `BlogPosting`-Markup mit explizitem `author`-Objekt tragen: Name, im Idealfall verknüpft mit einer Autorenseite und deren eigenem `sameAs`. Das ist die maschinenlesbare Version dessen, was E-E-A-T ohnehin verlangt: ein echter, benennbarer Urheber statt eines anonymen Redaktionsteams. Ergänze `datePublished` und `dateModified` korrekt. Freshness ist ein Faktor, den KI-Systeme mitwiegen, und ein falsches oder fehlendes Datum ist eine unnötig verschenkte Information.

### Product/Breadcrumb

Für alles mit Preisen, Varianten oder Kategoriestruktur lohnt sich `Product`- und `BreadcrumbList`-Markup weiterhin, unabhängig vom AEO-Thema. Hier gibt es tatsächlich noch aktive Rich-Result-Features (Sternebewertungen, Preisspannen, Breadcrumb-Pfad in der SERP). Für reine B2B-Content-Seiten ohne Produktkatalog ist das nachrangig; priorisiere Organization und Article zuerst.

<div class="a-cta"><p class="a-cta-txt"><strong>Willst du wissen, ob dein Schema-Setup überhaupt sauber ist?</strong> Ich nehme dein Konto und deine Seite im Audit auseinander.</p><a href="/de/leistungen/audit">Audit anfragen</a></div>

## Umsetzung ohne Plugin-Wildwuchs

Der häufigste Fehler in der Praxis ist nicht fehlendes Schema. Es ist zu viel, zu widersprüchliches Schema. Drei SEO-Plugins, ein Page-Builder und ein manuell eingefügtes Snippet erzeugen auf derselben Seite drei verschiedene `Organization`-Objekte mit abweichenden Namen. Das verwirrt Crawler mehr, als es hilft.

<ul class="a-checklist">
<li>Eine einzige Quelle der Wahrheit pro Schema-Typ, nicht drei Plugins, die sich überschreiben</li>
<li>JSON-LD serverseitig ausliefern, nicht per Client-JavaScript nachladen</li>
<li>Konsistenz zwischen sichtbarem Content und Markup: nichts auszeichnen, was nicht auf der Seite steht</li>
<li>Ein zentrales Organization-Objekt, referenziert statt auf jeder Seite neu dupliziert</li>
<li>Autoren-Objekte einmal definieren, auf allen Artikeln desselben Autors wiederverwenden</li>
</ul>

Der Punkt mit dem serverseitigen Ausliefern ist kein Nice-to-have. Die großen KI-Crawler (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot) führen kein JavaScript aus. Nur Googlebot (über den Web Rendering Service für Gemini) rendert Client-Side-Content. Wenn dein JSON-LD per JavaScript nachgeladen wird, sehen es die meisten KI-Crawler schlicht nicht, egal wie korrekt es ist. Server-Side-Rendering oder Static-Site-Generation ist damit keine Performance-Optimierung mehr, sondern eine Sichtbarkeits-Voraussetzung.

<div class="a-key"><div class="a-key-title">📌 Das Wichtigste</div><ul>
<li>FAQ- und HowTo-Rich-Results sind Geschichte (Mai 2026 bzw. 2023). Bestehendes Markup schadet nicht, bringt aber keine Sterne mehr</li>
<li>Schema treibt keine KI-Zitate direkt (Ahrefs, 1.885 Seiten, Juni 2026). Es verbessert, wie präzise Maschinen deine Entität verstehen</li>
<li>Organization + sameAs und Article + author sind die zwei Typen mit dem größten Hebel für B2B-Seiten</li>
<li>JSON-LD muss serverseitig ausgeliefert werden, KI-Crawler führen in der Regel kein JavaScript aus</li>
<li>Eine Quelle der Wahrheit pro Schema-Typ schlägt drei sich widersprechende Plugins</li>
</ul></div>

## Testen & Validieren

Schema, das du nie geprüft hast, ist ein Risiko, kein Asset. Drei Schritte, die zum Standardprozess gehören sollten:

1. **Google Rich Results Test:** zeigt, ob Google dein Markup überhaupt korrekt parst und für welche (verbleibenden) Rich-Result-Typen es qualifiziert.
2. **Schema.org Validator:** prüft strikt gegen die Spezifikation, unabhängig davon, was Google aktuell nutzt. Wichtig, weil KI-Systeme jenseits von Google eigene Parser fahren, die sich nicht an Googles Feature-Auswahl halten.
3. **Search-Console-Berichte zu strukturierten Daten:** zeigen Fehler und Warnungen auf Seitenebene, historisch über Zeit. Wer hier monatelang ungeprüfte Fehler stehen hat, signalisiert Nachlässigkeit. Auch das ist ein (indirektes) Trust-Signal.

Ein Punkt, der regelmäßig übersehen wird: Nach jedem CMS-Update, jedem Theme-Wechsel und jeder Migration validieren. Strukturierte Daten brechen lautlos: die Seite sieht für Besucher unverändert aus, während das Markup im Hintergrund kaputtgeht.

Ein typisches Praxisbeispiel: Ein Relaunch tauscht das Autoren-Feld im CMS gegen ein neues Redaktionssystem, das Beiträge plötzlich unter "Redaktion" statt unter dem echten Namen ausliefert. Sichtbar ändert sich nichts. Leser sehen weiterhin einen Autorennamen im Frontend, weil der dort hartcodiert im Template steht. Im JSON-LD verschwindet der `author` aber und wird durch die generische Bezeichnung ersetzt. Sechs Monate später wundert sich das Team, warum die Autoren-Autorität-Signale einbrechen. Ein monatlicher Validierungs-Check hätte das in Minuten gefunden.

## Checkliste: Schema für 2026

<ul class="a-checklist">
<li>FAQ-/HowTo-Markup nicht aktiv entfernen, aber auch nicht mehr als Rich-Result-Strategie einplanen</li>
<li>Organization-Objekt mit vollständigen sameAs-Links auf der Startseite</li>
<li>Article/BlogPosting mit author, datePublished, dateModified auf jedem Beitrag</li>
<li>Ein zentrales, wiederverwendetes Autoren-Objekt statt Duplikate pro Artikel</li>
<li>JSON-LD serverseitig gerendert, nicht per Client-JS nachgeladen</li>
<li>Nur ein Tool/Plugin pro Schema-Typ, keine widersprüchlichen Duplikate</li>
<li>Rich Results Test + Schema.org Validator nach jedem Relaunch erneut laufen lassen</li>
<li>Search-Console-Fehler zu strukturierten Daten monatlich prüfen</li>
</ul>

## Fazit

FAQ-Sterne sind weg, das Drama ist übertrieben. Schema.org war nie ein Ranking-Hack und ist jetzt kein Zitations-Hack. Es ist Infrastruktur für maschinelles Verständnis. Wer Organization, Author und Article sauber, konsistent und serverseitig ausliefert, schafft die Grundlage, auf der die eigentlichen AEO-Hebel (zitierfähige Statistiken, Markenerwähnungen, klare Textstruktur) überhaupt wirken können. Mehr sollte man 2026 nicht erwarten, aber auch nicht weniger.

Der Aufwand dafür ist überschaubar. Für eine typische B2B-Website mit Blog, Über-uns- und Produktseiten ist ein sauberes Grundgerüst aus Organization- und Article-Markup in der Regel innerhalb weniger Tage Entwicklungszeit umsetzbar, vorausgesetzt, es gibt vorher eine Bestandsaufnahme, was aktuell wo dupliziert oder widersprüchlich ausgezeichnet ist. Genau diese Bestandsaufnahme unterschätzen die meisten Teams: Sie bauen neues Schema, ohne das alte, kaputte zuerst zu entfernen. Das Ergebnis sind zwei sich widersprechende `Organization`-Objekte, die beide "valide" sind und trotzdem gemeinsam für Verwirrung sorgen.

Wie du diese eigentlichen AEO-Hebel konkret bespielst, liest du im Playbook zur [Generative Engine Optimization](/de/insights/aeo-geo-in-ki-suchen-zitiert-werden). Und wenn du wissen willst, wie viel Pipeline-Wert bei dir aktuell an Sichtbarkeitslücken hängen bleibt, wirf einen Blick in meinen [ROI-Rechner](/de/roi) oder lies, wie ich als [HubSpot Solutions Partner](/de/ueber-mich) Schema, CRM und Reporting zusammenbringe.

## Quellen

- Google Search Central, Ankündigung zur Einstellung von FAQ-Rich-Results, 2026, https://developers.google.com/search/blog
- Google Search Central, Erweiterung des Organization-Markups (Logo, sameAs, NAICS), 2023, https://developers.google.com/search/docs/appearance/structured-data/organization
- Ahrefs, Studie zu 1.885 Seiten mit neu eingeführtem Schema-Markup und KI-Zitationsraten, Juni 2026, https://ahrefs.com/blog
- Microsoft/Bing, Aussage zu strukturierten Daten in generativen Antwortsystemen, März 2025, https://blogs.bing.com/webmaster
- Schema.org, Vokabular-Referenz für Organization, Article und Product, 2026, https://schema.org
