/**
 * German copy. Mirrors src/i18n/en.ts key for key.
 * Sources: website briefing (23 Oct 2026), audit proposal PDF, DE price card (Oktober 2026).
 * Rules: no em/en dashes, "du" address, first person singular, no invented facts, no location.
 */
import { SITE } from '../config/site.ts';
import type { Dict } from './en.ts';

const REMOTE = 'Remote. Ich arbeite in Asien, Europa und Amerika.';

export const de: Dict = {
  lang: 'de',
  locale: 'de-DE',
  dir: 'ltr',

  meta: {
    siteName: 'Andre Schüler · FILLCART',
    titleSuffix: ' | Andre Schüler',
  },

  nav: {
    items: [
      { label: 'Leistungen', href: '/de/leistungen', foreign: false },
      { label: 'Referenzen', href: '/work', foreign: true },
      { label: 'Projekte', href: '/projects', foreign: true },
      { label: 'Partner', href: '/partners', foreign: true },
      { label: 'Insights', href: '/de/insights', foreign: false },
      { label: 'Über mich', href: '/de/ueber-mich', foreign: false },
    ],
    cta: 'Gespräch buchen',
    contact: 'Kontakt',
    menu: 'Menü',
    close: 'Schließen',
    langLabel: 'Sprache',
    switchLabel: 'English',
    switchShort: 'EN',
    foreign: 'EN',
  },

  common: {
    bookCall: 'Gespräch buchen',
    bookCall30: '30-Minuten-Gespräch buchen',
    seeAudit: 'Zum Audit für 500 EUR',
    emailMe: 'E-Mail schreiben',
    readMore: 'Weiterlesen',
    viewAll: 'Alle ansehen',
    back: 'Zurück',
    draft: 'Entwurf. Noch nicht zur Veröffentlichung freigegeben.',
    todo: 'TODO',
    remote: REMOTE,
    languages: 'Englisch, Deutsch, Spanisch.',
    hours: 'Europäische und US-Arbeitszeit.',
    minRead: 'Min. Lesezeit',
    bookingNote: 'Öffnet Google Kalender in einem neuen Tab.',
    linkedin: 'LinkedIn',
    priceNote: 'Festpreise netto. Stand Oktober 2026.',
    scopedAfterAudit: 'Wird nach dem Audit gescopt',
    perDay: 'pro Tag',
    perMonth: 'pro Monat',
    from: 'ab',
    inGerman: 'Auf Deutsch',
    inEnglish: 'Auf Englisch',
    newTab: 'öffnet in neuem Tab',
    skipToContent: 'Zum Inhalt springen',
  },

  home: {
    meta: {
      title: 'Fractional Head of Marketing & RevOps für B2B SaaS',
      description:
        'Ich baue und betreibe das Revenue-System für B2B-SaaS-Unternehmen: Google und LinkedIn Ads, HubSpot oder Salesforce und den Vertriebsprozess dazwischen. Einstieg mit einem Audit für 500 EUR.',
    },
    hero: {
      eyebrow: 'Fractional Head of Marketing & RevOps · B2B SaaS',
      h1: 'Pipeline, die du planen kannst.<br>Nicht nur Leads.',
      sub: 'Ich baue und betreibe das Revenue-System für B2B-SaaS-Unternehmen: Google und LinkedIn Ads, HubSpot oder Salesforce und den Vertriebsprozess dazwischen. Danach bleibe ich für die Zahlen verantwortlich.',
      ctaPrimary: '30-Minuten-Gespräch buchen',
      ctaSecondary: 'Zum Audit für 500 EUR',
      portraitAlt: 'Andre Schüler',
      name: 'Andre Schüler',
      role: 'Fractional Head of Marketing & RevOps',
      badgeLabel: 'FILLCART',
    },
    proof: {
      eyebrow: 'Was auf der Rechnung steht, steht auch im Lebenslauf',
      stats: [
        {
          value: 3,
          prefix: '',
          suffix: ' Jahre',
          label: 'Head of Marketing bei einer europäischen Legal-Tech-Gruppe, Team auf 25 gewachsen',
          definition: '2023 bis 2026, vom Online Marketing Manager zum Head of Digital Marketing.',
        },
        {
          value: 75,
          prefix: '',
          suffix: '',
          label: 'HubSpot-Implementierungen als Diamond-Partner-Consultant',
          definition: 'Portal-Implementierungen als Senior Consultant bei einem HubSpot-Diamond-Partner, 2022 bis 2023.',
        },
        {
          value: 55000,
          prefix: '',
          suffix: '',
          label: 'Kontakte in ein Portal migriert, das von null gebaut wurde',
          definition: 'Ein HubSpot-Portal: 55.000 Kontakte, 97 Kampagnen, 265 Formulare, 164 Landingpages.',
        },
        {
          value: 40,
          prefix: '$',
          suffix: '',
          label: 'pro LinkedIn-Lead, 56 % vom Vertrieb akzeptiert',
          definition: 'Durchschnittliche Kosten pro Lead eines LinkedIn-Ads-Programms; 56 % der Leads vom Vertrieb akzeptiert.',
        },
        {
          value: 133,
          prefix: '+',
          suffix: ' %',
          label: 'mehr Inbound-Kontakte in drei Jahren',
          definition: 'Wachstum der Inbound-Kontakte über drei Jahre im selben Unternehmen.',
        },
        {
          value: 53,
          prefix: '',
          suffix: '',
          label: 'Kundenbewertungen auf Fiverr, Schnitt 4,7',
          definition: 'Öffentliche Bewertungen: 46 mal fünf Sterne, 6 mal vier Sterne, 1 mal drei Sterne.',
          href: SITE.person.fiverr,
        },
      ],
      badgesLabel: 'Partnerstatus',
      badges: [
        { alt: 'Google Partner', src: '/assets/partners/google-partner.png' },
        { alt: 'HubSpot Solutions Partner', src: '/assets/partners/hubspot-partner.png' },
      ],
    },
    problem: {
      eyebrow: 'Das Problem',
      h2: 'Dein CRM ist voll. Dein Vertrieb sagt trotzdem: schlechte Leads.',
      cards: [
        {
          title: 'Optimierung auf Cost per Lead',
          text: 'Billige Leads sehen im Werbekonto großartig aus und sterben in der Pipeline. Der Algorithmus lernt, Leute zu finden, die Formulare ausfüllen, nicht Leute, die kaufen.',
        },
        {
          title: 'Ads und CRM, die nicht miteinander reden',
          text: 'Ohne Lifecycle-Stufen, Lead-Status und Offline-Conversions lernen die Ad-Plattformen nie, welche Leads zu Umsatz wurden. Du zahlst für Klicks und hoffst.',
        },
        {
          title: 'Niemand verantwortet die ganze Kette',
          text: 'Eine Agentur schaltet die Ads, ein Berater betreut das CRM, der Vertrieb beschwert sich über beide. Für die Pipeline ist niemand verantwortlich.',
        },
      ],
    },
    ladder: {
      eyebrow: 'So arbeite ich',
      h2: 'Klein anfangen. Dann bleiben.',
      intro: 'Drei Schritte, jeder optional. Keine 12-Monats-Bindung.',
      steps: [
        {
          num: '01',
          title: 'Audit',
          meta: '500 EUR · 7 bis 10 Werktage',
          text: 'Paid-Kanäle, CRM und Positionierung geprüft. Du bekommst ein schriftliches Audit, eine priorisierte Maßnahmenliste und die Quick Wins, die dein Team sofort umsetzen kann.',
          href: '/de/leistungen/audit',
          cta: 'Das Audit für 500 EUR',
        },
        {
          num: '02',
          title: 'Sprint',
          meta: 'Fester Umfang, fester Preis',
          text: 'Ich setze den Plan um: Kampagnen, Landingpages, Tracking, CRM-Fixes. Vier bis acht Wochen, gescopt aus dem, was das Audit findet.',
          href: '/de/leistungen/sprint',
          cta: 'Sprint-Optionen',
        },
        {
          num: '03',
          title: 'Fractional',
          meta: 'Zwei Tage pro Woche · monatlich kündbar',
          text: 'Ich führe Marketing und RevOps als dein Teilzeit-Head-of. Hands-on in HubSpot und in den Ad-Konten, nicht nur Strategie.',
          href: '/de/leistungen/fractional',
          cta: 'Die Dauerkarte',
        },
      ],
      cta: 'Optionen vergleichen',
    },
    disciplines: {
      eyebrow: 'Die vier Gänge, in denen ich arbeite',
      h2: 'Ein Revenue-System, vier Teile',
      items: [
        { num: 'Gang 1', title: 'System', text: 'CRM und Automatisierung, die das Team nutzt.' },
        { num: 'Gang 2', title: 'Leads', text: 'Google, Meta und LinkedIn Ads, in der Pipeline gemessen.' },
        { num: 'Gang 3', title: 'Verkauf', text: 'Routing, Follow-up, Gebote auf Vertragswert.' },
        { num: 'Gang 4', title: 'Umsatz pro Kunde', text: 'Pakete, Preise, Upsell-Pfade.' },
      ],
    },
    work: {
      eyebrow: 'Ausgewählte Arbeiten',
      h2: 'Beweise, mit definierten Zahlen',
      intro: 'Jeder Case benennt, was gemessen wurde und wie. Kundennamen sind anonymisiert, wo ich das einem früheren Arbeitgeber schulde. Die Case Studies sind auf Englisch.',
      cta: 'Alle Case Studies',
      empty: 'Case Studies werden gerade zur Veröffentlichung freigegeben. Frag mich im Gespräch nach Referenzen.',
    },
    who: {
      eyebrow: 'Mit wem du arbeitest',
      h2: 'Vom Boarding-Team zum Revenue-Team.',
      text: 'Im Boarding-Team steigst du auf ein Schiff, das du noch nie gesehen hast, und hast Minuten, um es unter Kontrolle zu bringen. Das habe ich bei der Deutschen Marine gelernt. Heute mache ich dasselbe für Revenue-Teams: eine Person, die plant, baut und für die Zahlen verantwortlich bleibt.',
      cta: 'Mehr über mich',
    },
    partners: {
      eyebrow: 'Partner',
      h2: 'Ich arbeite mit Leuten, denen ich vertraue.',
      text: 'Design, Entwicklung und Performance aus einem kleinen Netzwerk statt einer großen Agentur. Jeder Partner verantwortet sein Handwerk. Ich verantworte Performance und RevOps.',
      cta: 'Partner-Netzwerk',
    },
    insights: {
      eyebrow: 'Insights',
      h2: 'Neueste Artikel',
      cta: 'Alle Insights',
    },
    finalCta: {
      h2: 'Wenn in deiner Pipeline etwas hängt, schreib mir drei Sätze dazu.',
      text: 'Ich antworte selbst. Danach ein 30-Minuten-Gespräch, in dem ich Fragen stelle, statt zu präsentieren.',
      primary: 'Gespräch buchen',
      secondary: 'E-Mail schreiben',
    },
  },

  about: {
    meta: {
      title: 'Über Andre Schüler',
      description:
        'Vom Boarding-Team zum Revenue-Team. Andre Schüler, Fractional Head of Marketing & RevOps für B2B SaaS: der Weg, die Prinzipien und die Zertifizierungen.',
    },
    hero: {
      eyebrow: 'Über mich',
      h1: 'Vom Boarding-Team zum Revenue-Team.',
      sub: 'Andre Schüler. Fractional Head of Marketing & RevOps für B2B SaaS. ' + REMOTE,
    },
    story: {
      eyebrow: 'Die Geschichte',
      paragraphs: [
        'Im Boarding-Team steigst du auf ein Schiff, das du noch nie gesehen hast. Du weißt nicht, was unter Deck ist, und hast Minuten, um es unter Kontrolle zu bringen. Das habe ich bei den Spezialisierten Einsatzkräften der Deutschen Marine gelernt. Heute mache ich dasselbe für Revenue-Teams.',
        'Das Schiff ist meistens ein CRM mit drei Versionen desselben Kunden. Oder Leads, denen der Vertrieb seit einem Jahr nicht mehr traut. Oder eine Firma, die einen Wettbewerber gekauft hat und immer noch alles doppelt betreibt.',
        'Ich plane es und baue es selbst, weil die Person, die die Architektur zeichnet, auch die sein sollte, die damit leben muss.',
      ],
    },
    timeline: {
      eyebrow: 'Der Weg',
      h2: 'Woher die Zahlen kommen',
      items: [
        { period: '2013 bis 2015', title: 'Boarding-Soldat, Deutsche Marine', text: 'EU-Mission Atalanta. Führung eines Teams von 6.' },
        { period: 'TODO', title: 'Schifffahrt', text: 'Schiffskäufe. Daten werden noch bestätigt.', todo: true },
        { period: '2018 bis 2020', title: 'Geschäftsführer, Handy- und PC-Reparaturbetrieb', text: 'Drei Filialen.' },
        { period: '2020 bis 2021', title: 'Gründer, SEO Sprinter', text: '' },
        { period: '2021 bis 2022', title: 'Senior SEO Manager', text: '', employer: 'NX Digital', anonymous: 'eine Digitalagentur' },
        { period: '2022', title: 'Head of SEO', text: '', employer: 'Matrix42', anonymous: 'ein Enterprise-Software-Anbieter' },
        { period: '2022 bis 2023', title: 'Senior HubSpot Consultant', text: '75 Implementierungen.', employer: 'CIXON (HubSpot Diamond partner)', anonymous: 'ein HubSpot-Diamond-Partner' },
        { period: '2023 bis 2026', title: 'Online Marketing Manager, dann Head of Digital Marketing', text: 'Eine europäische Legal-Tech-Gruppe. Team auf 25 gewachsen.' },
        { period: '2024 bis 2026', title: 'Senior CRM Consultant, projektbasiert', text: '16 individuelle HubSpot-Builds für SaaS- und KI-Unternehmen.', employer: 'Bloom Rocket', anonymous: 'eine HubSpot-Agentur' },
        { period: '2024 bis heute', title: 'Gründer, FILLCART LLC', text: 'Fractional Head of Marketing & RevOps für B2B SaaS.' },
        { period: '2026 bis heute', title: 'Mitgründer, CapturePilot by Americurial', text: 'Systeme, Daten, Go-to-Market.' },
      ],
      employerNote: 'Einige Arbeitgeber sind beschrieben, nicht benannt, bis sie zugestimmt haben.',
    },
    how: {
      eyebrow: 'So arbeite ich',
      h2: 'Ich plane es und baue es selbst.',
      text: 'Weil die Person, die die Architektur zeichnet, auch die sein sollte, die damit leben muss.',
      principles: [
        { title: 'Eine Person, von Anfang bis Ende', text: 'Keine Junior-Übergabe nach dem Kick-off. Du sprichst mit der Person, die die Arbeit macht.' },
        { title: 'Zahlen bis in die Pipeline', text: 'Gemessen bis zur Opportunity und zum Deal, nicht bis zum Formular.' },
        { title: 'Alles dokumentiert', text: 'Architektur, Regeln, Entscheidungen. Ihr könnt es ohne mich weiterführen.' },
        { title: 'Festpreis, fester Umfang', text: 'Mehraufwand ist mein Risiko, nicht deins.' },
      ],
    },
    off: {
      eyebrow: 'Nach Feierabend',
      h2: 'Druck ist Gewohnheit.',
      items: ['Drei Profikämpfe im Muay Thai', 'IPSC-Schießen', 'Golf, schlecht, aber oft'],
      languages: 'Sprachen: Englisch, Deutsch (Muttersprache), Spanisch (konversationssicher).',
    },
    certs: {
      eyebrow: 'Zertifizierungen',
      h2: 'Zertifiziert, wo es zählt',
      groups: [
        {
          name: 'HubSpot',
          items: ['Marketing Hub', 'Sales Hub', 'Service Hub', 'CMS Hub', 'RevOps', 'Solutions Partner'],
          links: [
            { label: 'Zertifikat Sales Enablement', href: SITE.person.hubspotCerts[0] },
            { label: 'Zertifikat Solutions Partner', href: SITE.person.hubspotCerts[1] },
          ],
        },
        { name: 'Google', items: ['Google Ads Search', 'Display', 'Video', 'Measurement', 'Google Partner'], links: [] },
        { name: 'Weitere', items: ['LinkedIn Marketing Labs', 'Shopify Partner'], links: [] },
      ],
      verifiedLabel: 'Verifiziert',
      linksNote: 'Links zu den übrigen Zertifikaten folgen.',
    },
    cta: {
      h2: 'Willst du wissen, ob ich zu deinem Setup passe?',
      text: 'Dreißig Minuten. Ich stelle Fragen, statt zu präsentieren.',
      primary: 'Gespräch buchen',
      secondary: 'Zu den Leistungen',
    },
  },

  services: {
    meta: {
      title: 'Leistungen und Preise',
      description:
        'Marketing und Revenue Operations für B2B-Software als feste Gerichte mit festem Preis: ein Audit für 500 EUR, Umsetzungs-Sprints, Schulungen und ein Fractional Head of Marketing & RevOps.',
    },
    hero: {
      eyebrow: 'Leistungen · die Karte',
      h1: 'Marketing & Revenue Operations für B2B-Software, als feste Gerichte mit festem Preis.',
      sub: 'Jeder Punkt ist ein Problem, das ich schon gelöst habe, mit fester Lieferung und festem Preis. Erkennst du eines wieder, ist der Rest einfach.',
    },
    howToRead: {
      eyebrow: 'So liest du die Karte',
      items: [
        'Vorspeisen sind Audits: klein, schnell, danach weißt du, woran du bist.',
        'Hauptgerichte sind Umbauten mit Ergebnis. Schulungen machen euer Team selbständig.',
        'Die Dauerkarte ist für alle, die einen Kopf wollen statt drei Agenturen.',
        'Alle Preise netto, Festpreis, ohne Stundenzettel. Reicht die Lieferung nicht, reden wir über die Lieferung, nicht über die Rechnung.',
      ],
    },
    compare: {
      eyebrow: 'Die Leiter',
      h2: 'Audit, Sprint oder Fractional',
      intro: 'Drei Schritte, jeder optional. Die meisten Kunden starten mit dem Audit für 500 EUR.',
      cols: ['', 'Audit', 'Sprint', 'Fractional'],
      rows: [
        ['Preis', '500 EUR, vorab', 'Festpreis pro Sprint, siehe Hauptgerichte unten', 'Monatlich, siehe Dauerkarte unten'],
        ['Dauer', '7 bis 10 Werktage', 'Vier bis acht Wochen', 'Laufend, zwei Tage pro Woche, monatlich kündbar'],
        ['Du bekommst', 'Schriftliches Audit, priorisierte Maßnahmenliste, Quick Wins', 'Umgesetzte Kampagnen, Landingpages, Tracking, CRM-Fixes', 'Head of Marketing & RevOps über Märkte hinweg: Paid, Organic und RevOps-Steuerung'],
        ['Anrechnung', 'Voll angerechnet auf einen Sprint, der innerhalb von 30 Tagen gebucht wird', '', ''],
      ],
      links: [
        { label: 'Das Audit für 500 EUR', href: '/de/leistungen/audit' },
        { label: 'Sprint-Optionen', href: '/de/leistungen/sprint' },
        { label: 'Die Dauerkarte', href: '/de/leistungen/fractional' },
      ],
    },
    menuTitle: { eyebrow: 'Die Karte', h2: 'Alle Gerichte auf einen Blick' },
    groups: {
      starters: {
        key: 'starters',
        num: '1',
        title: 'Vorspeisen',
        sub: 'Audits. Klein, schnell, mit Maßnahmenplan und Gespräch.',
        items: [
          {
            problem: 'Ihr wisst nicht, welcher Kanal zahlende Kunden bringt.',
            name: 'HubSpot-Portal-Audit',
            price: '750 €',
            text: 'Ich prüfe Lead-Quellen, Lifecycle, Pipelines, Workflows und Reporting gegen das, was euer Vertrieb tatsächlich tut, und sage euch, was kaputt ist und in welcher Reihenfolge es repariert gehört.',
            bullets: [
              '60 Prüfpunkte: Properties, Lifecycle, Pipelines, Workflows, Attribution',
              'Loom-Video (20 Min.) mit Befund, verständlich für Gründer',
              'Maßnahmenliste nach Wirkung sortiert, mit Stundenschätzung',
              '30-Minuten-Call zur Priorisierung, Lieferung in 5 Werktagen',
            ],
          },
          {
            problem: 'Die Ads laufen, aber der Vertrieb sagt: schlechte Leads.',
            name: 'Second Opinion: Running Ad Channel',
            price: '590 €',
            priceNote: 'Jeder weitere Kanal: +350 €',
            text: 'Google, Meta oder LinkedIn Ads, ein Kanal, einmal von jemandem auditiert, der die Kampagnen selbst geschaltet hat. Bei einer europäischen Legal-Tech-Gruppe trafen 67 % des frühen Suchbudgets die falsche Zielgruppe, und die Leadkosten sahen trotzdem gut aus. Genau diese Lücke suche ich.',
            bullets: [
              'Struktur, Keywords und Zielgruppen, Gebotsstrategie, Creatives, Conversion-Tracking bis ins CRM',
              'Benchmark gegen B2B-SaaS-Werte für den Kanal',
              'Loom-Video (20 Min.) und 45-Minuten-Call mit euch',
              'Gemeinsam geplante Action Items für die nächsten 30 Tage',
            ],
          },
          {
            problem: 'Ihr rankt, aber ChatGPT und Google nennen euch nicht.',
            name: 'SEO- & GEO-Audit',
            price: '750 €',
            text: 'Technik, Inhalte, Struktur und Zitierfähigkeit: Was Google sieht, was KI-Antworten übernehmen, und was fehlt.',
            bullets: [
              'Technischer Crawl, Content-Lücken, interne Verlinkung',
              'GEO: Schema, FAQ-Strukturen, zitierfähige Seiten für KI-Suche',
              'Keyword- und Themenplan für sechs Monate',
              'Loom-Video und 30-Minuten-Call',
            ],
          },
        ],
      },
      mains: {
        key: 'mains',
        num: '2',
        title: 'Hauptgerichte',
        sub: 'Umbauten mit Ergebnis. Vier bis acht Wochen.',
        items: [
          {
            problem: 'Spreadsheets, ein Starter-CRM, drei Tools nebeneinander. Niemand traut den Zahlen.',
            name: 'HubSpot-CRM-Build-Sprint',
            price: '6.500 €',
            text: 'Architektur in zwei bis drei Sitzungen mit Gründer und Vertriebsleitung, dann baue ich. Ihr bekommt ein dokumentiertes Portal und ein Team, das weiß, warum jedes Feld existiert.',
            bullets: [
              'Objekte, Properties, Lifecycle, Pipelines mit Exit-Kriterien',
              'Lead-Scoring, Routing, SLAs, Sequenzen und Workflows',
              'Integrationen zu Produkt- und Billing-Stack (API, n8n)',
              'Dashboards für Gründer und Vertrieb, Doku, Übergabe-Session',
            ],
          },
          {
            problem: 'Ihr braucht Pipeline aus LinkedIn, aber jeder Versuch hat Geld verbrannt.',
            name: 'LinkedIn-Ads-Launch',
            price: '3.500 €',
            text: 'Bei einer europäischen Legal-Tech-Gruppe: 40 $ pro Lead, 56 % vom Vertrieb akzeptiert, SQLs plus 23 % in sechs Monaten. Ich baue die Kampagnenstruktur, bevor der erste Euro läuft.',
            bullets: [
              'ICP und Angebot in einer Woche',
              'Kampagnenstruktur auf Papier: Stufen, Zielgruppen, Landingpages, Conversion-Events, CRM-Felder',
              'Setup, Creatives-Briefing, Tracking in HubSpot',
              'Zwei Wochen Optimierung mit Vertriebs-Feedback zur Lead-Qualität',
            ],
          },
          {
            problem: 'Google Ads liefern Klicks, keine Kunden.',
            name: 'Google-Ads-Rebuild',
            price: '3.500 €',
            text: 'Konto neu aufgesetzt um die ICP herum, Conversions bis in die Pipeline gemessen, Gebote auf erwarteten Vertragswert statt auf Formulare.',
            bullets: [
              'Keyword- und Zielgruppenlogik neu, Negativlisten, Landingpage-Zuordnung',
              'GA4, Tag Manager, Offline-Conversions aus HubSpot zurück an Google',
              'Vier Wochen Betrieb mit wöchentlicher Auswertung',
              'Übergabe mit Regelwerk, das euer Team weiterführen kann',
            ],
          },
          {
            problem: 'Die Kampagne ist gut, die Seite dahinter verliert die Hälfte.',
            name: 'Landingpage-Paket',
            price: '2.900 €',
            text: 'Drei Landingpages in HubSpot CMS, gebaut für eine Kampagne und einen Kaufgrund, mit Tracking bis in den Deal.',
            bullets: [
              'Drei Seiten: Angebot, Vergleich, Demo-Anfrage, je mit Copy-Briefing',
              'Formulare, Lifecycle-Zuordnung, Conversion-Events in HubSpot',
              'A/B-Setup für Headline und Formular',
              'Lieferung in drei Wochen',
            ],
          },
          {
            problem: 'Whitepaper lädt niemand mehr herunter.',
            name: 'Interaktiver Lead-Magnet',
            price: '2.400 €',
            text: 'Ein Rechner, Self-Assessment oder Konfigurator, der dem Besucher sofort etwas zurückgibt und euch einen qualifizierten Kontakt mit Kontext liefert.',
            bullets: [
              'Konzept und Logik mit euch, Build als Web-Tool',
              'Ergebnisseite mit personalisiertem Output und Follow-up-Sequenz',
              'Daten landen in HubSpot als Properties, nicht als PDF-Download',
              'Lieferung in vier Wochen',
            ],
          },
          {
            problem: 'Ihr habt eine Firma gekauft und jetzt zwei CRMs, zwei Websites, zwei Vertriebe.',
            name: 'Post-Merger-Integration',
            price: 'ab 9.000 €',
            text: 'Dreimal gemacht bei einer europäischen Legal-Tech-Gruppe: Datenmigration, Dubletten, Pipelines, Werbekonten, Domains. Ein Portal, eine Reporting-Linie, keine Parallelsysteme.',
            bullets: [
              'Datenmodell-Mapping und Migration mit Dubletten-Regeln',
              'Pipelines und Lifecycle auf eine Logik gebracht',
              'Werbekonten, Domains und SEO zusammengeführt',
              'Übergabeprozess für den vereinten Vertrieb',
            ],
          },
          {
            problem: 'Neue Domain, neue Website, und die Angst, die Rankings zu verlieren.',
            name: 'SEO-Migration & Relaunch-Begleitung',
            price: '3.900 €',
            text: 'Eine neue Domain für eine Legal-Tech-Gruppe habe ich gestartet: von 29 auf 1.631 rankende Keywords, ohne Trafficverlust beim Umzug. Ich begleite euren Relaunch von der URL-Map bis vier Wochen nach dem Go-live.',
            bullets: [
              'URL-Mapping, Redirects, Canonicals, Strukturplan',
              'Pre-Launch-Checks und Go-live-Begleitung',
              'Vier Wochen Monitoring mit Korrekturen',
              'Übergabe an euer Team oder eure Agentur',
            ],
          },
        ],
      },
      trainings: {
        key: 'trainings',
        num: '3',
        title: 'Schulungen',
        sub: 'Ein Tag in eurem Team, damit ihr es danach selbst könnt. Vor Ort oder remote.',
        items: [
          {
            problem: 'Das Portal ist da, aber das Team klickt sich durch.',
            name: 'HubSpot-Tagesschulung',
            price: '1.900 €',
            unit: 'pro Tag',
            text: 'Ein Tag mit eurem Marketing und Vertrieb an eurem Portal: Lifecycle, Pipelines, Sequenzen, Reporting. Keine Folien über HubSpot, sondern Arbeit in HubSpot.',
            bullets: ['Agenda nach eurem Setup, nicht nach Lehrbuch', 'Übungen an echten Deals und Kontakten', 'Spickzettel und Regelwerk zum Behalten', 'Bis 12 Teilnehmer'],
          },
          {
            problem: 'Niemand im Team weiß, was seit KI-Suche noch zählt.',
            name: 'SEO- & GEO-Tagesschulung',
            price: '1.900 €',
            unit: 'pro Tag',
            text: 'Was Google und KI-Antworten heute belohnen, wie ihr Inhalte baut, die zitiert werden, und wie ihr Erfolg messt.',
            bullets: ['Grundlagen Technik, Inhalte, Struktur, GEO', 'Redaktionsprozess und Themenplanung im Team', 'Live-Audit eurer eigenen Seiten', 'Bis 12 Teilnehmer'],
          },
          {
            problem: 'Alle reden über KI, im Marketing nutzt sie keiner richtig.',
            name: 'KI-im-Marketing-Tagesschulung',
            price: '1.900 €',
            unit: 'pro Tag',
            text: 'Ein Tag, an dem euer Team KI an echten Aufgaben einsetzt: Recherche, Kampagnentexte, Reporting, Automatisierung mit n8n. Mit klaren Regeln, was KI nicht entscheiden darf.',
            bullets: ['Workflows für Content, Ads und CRM-Pflege', 'Zwei Automationen, die am Ende des Tages laufen', 'Prompt- und Prüf-Regeln fürs Team', 'Bis 12 Teilnehmer'],
          },
        ],
      },
      season: {
        key: 'season',
        num: '4',
        title: 'Dauerkarte',
        sub: 'Für alle, die einen Kopf wollen statt drei Agenturen.',
        items: [
          {
            problem: 'Ihr braucht Marketing-Führung, aber keine Vollzeitstelle.',
            name: 'Fractional Head of Marketing & RevOps',
            price: '5.900 €',
            unit: 'pro Monat',
            text: 'Zwei Tage pro Woche. Ich plane, baue und verantworte die Zahlen: CRM, Paid, Vertriebsprozess, Reporting. Drei Jahre habe ich genau das für eine 26-Mio.-Umsatzlinie gemacht.',
            bullets: ['Zwei feste Tage pro Woche, monatlich kündbar', 'Marketing-Plan, Budget und Kanalmix', 'Hands-on in HubSpot und in den Ad-Konten, nicht nur Strategie', 'Monatliches Reporting an Gründer: Pipeline, CAC, Conversion je Stufe'],
          },
          {
            problem: 'Die Konten soll jemand betreuen, der auf Pipeline optimiert.',
            name: 'Paid-Media-Betrieb',
            price: '1.900 €',
            unit: 'pro Monat',
            text: 'Google, Meta und LinkedIn Ads laufend, gemessen bis in den Vertrieb, mit wöchentlicher Lead-Qualitäts-Schleife.',
            bullets: ['Wöchentliche Optimierung, monatlicher Report', 'Tests mit Hypothese, sauberem Read und Learnings', 'Ab 5.000 € Monatsbudget sinnvoll'],
          },
          {
            problem: 'Das Produkt verkauft sich, aber die Preise sind geraten.',
            name: 'Pricing- & Packaging-Session',
            price: '1.500 €',
            text: 'Ein Tag mit euren CRM-Daten: Was kaufen Kunden wirklich, wo bricht der Deal, welche Pakete tragen Upsell.',
            bullets: ['Analyse von Deal-Daten und Churn-Mustern', 'Paketvorschlag mit Preisstufen', 'Upsell-Pfade im CRM angelegt'],
          },
        ],
      },
    },
    situations: {
      eyebrow: 'Welches Gericht passt zu welcher Lage',
      h2: 'Drei typische Situationen, in denen Gründer mich anrufen',
      items: [
        { title: 'Seed bis Series A, erste Vertriebler, CRM aus Spreadsheets', path: ['HubSpot-Portal-Audit', 'CRM-Build-Sprint', 'HubSpot-Schulung'] },
        { title: 'Produkt läuft, Paid-Budget wächst, Vertrieb klagt über Lead-Qualität', path: ['Second Opinion', 'Google-Ads-Rebuild oder LinkedIn-Launch', 'Paid-Media-Betrieb'] },
        { title: 'Übernahme abgeschlossen, zwei Systeme, ein Team', path: ['Post-Merger-Integration', 'SEO-Migration', 'Dauerkarte für die Übergangsphase'] },
      ],
    },
    included: {
      eyebrow: 'Bei jedem Gericht dabei',
      items: [
        'Ein Ansprechpartner, der plant und selbst baut. Keine Junior-Übergabe nach dem Kick-off.',
        'Alles dokumentiert: Architektur, Regeln, Entscheidungen. Ihr könnt es ohne mich weiterführen.',
        'Zahlen bis in die Pipeline, nicht bis zum Formular.',
        'Festpreis. Mehraufwand ist mein Risiko, nicht eures.',
        'Deutsch, Englisch, Spanisch. Europäische und US-Arbeitszeit.',
      ],
    },
    howItStarts: {
      h2: 'Welches Problem kommt dir bekannt vor?',
      eyebrow: 'So fängt es an',
      steps: [
        'Du schreibst mir, welches Gericht du wiedererkannt hast. Eine Zeile reicht.',
        '30 Minuten Gespräch, in dem ich Fragen stelle, nicht präsentiere.',
        'Du bekommst ein Angebot mit genau dem, was auf dieser Karte steht, oder eine ehrliche Absage, wenn es nicht passt.',
      ],
      primary: 'Gespräch buchen',
      secondary: 'E-Mail schreiben',
    },
  },

  audit: {
    meta: {
      title: 'Revenue & Marketing Audit, 500 EUR',
      description:
        'Eine Prüfung deiner Paid-Kanäle, deines CRMs und deines Funnels zum Festpreis und mit festem Umfang. Schriftliches Audit, priorisierte Maßnahmenliste, Quick Wins. Geliefert 7 bis 10 Werktage nach Zugang.',
    },
    hero: {
      eyebrow: 'Bezahltes Revenue- & Marketing-Audit',
      h1: 'Revenue & Marketing Audit',
      sub: 'Ein klarer, priorisierter Blick darauf, wo dein Unternehmen Pipeline verliert und was zuerst zu reparieren ist.',
      text: 'Eine Prüfung deiner Paid-Kanäle, deines CRMs und deines Funnels zum Festpreis und mit festem Umfang. Du bekommst ein schriftliches Audit mit Befunden, eine priorisierte Maßnahmenliste nach Wirkung und Aufwand und die Quick Wins, die dein Team sofort umsetzen kann. Kein Retainer, keine Bindung. Wenn du Hilfe bei der Umsetzung willst, scopen wir das separat, auf Basis dessen, was das Audit findet.',
      facts: [
        { value: '500 EUR', label: 'Festpreis, vorab bezahlt' },
        { value: '1 bis 3', label: 'Paid-Kanäle in der Tiefe geprüft' },
        { value: '7 bis 10', label: 'Werktage nach Zugangsfreigabe' },
        { value: '2', label: 'Calls: 45 Min. Kickoff, 60 Min. Ergebnisse' },
      ],
      cta: 'Audit-Call buchen',
      who: {
        title: 'Für wen das ist',
        text: 'B2B-Unternehmen, die Geld in Paid Acquisition stecken und vor dem nächsten Euro wissen wollen, welche Kanäle, Kampagnen und CRM-Prozesse wirklich zu Pipeline werden, und wo es leckt.',
      },
      contents: {
        title: 'Inhalt',
        items: ['Umfang: Was drin ist und was nicht', 'Ablauf, Zeitplan und Lieferumfang', 'Onboarding-Checkliste', 'Investition, Konditionen und nächste Schritte'],
      },
    },
    scope: {
      num: '01',
      title: 'Umfang',
      sub: 'Bewusst fokussiert. Ein Audit für 500 EUR muss bei den wenigen Dingen in die Tiefe gehen, die Umsatz bewegen, statt alles zu überfliegen.',
      inTitle: 'Im Umfang',
      cols: ['Bereich', 'Was ich prüfe', 'Typische Fragen, die beantwortet werden'],
      rows: [
        ['Paid-Kanäle (1 bis 3)', 'Konto-, Kampagnen- und Zielgruppenebene für bis zu drei Paid-Kanäle, zum Beispiel Google Ads, LinkedIn Ads oder Meta. Struktur, Targeting, Gebote, Budgets, Creatives und Conversion-Tracking.', 'Wo wird Budget verschwendet? Welche Zielgruppen und Kampagnen bringen Pipeline, nicht nur Klicks?'],
        ['CRM und Prozesse', 'HubSpot-Fokus: Lifecycle-Stufen, Lead-Status, Attributions-Setup und die Übergaben zwischen Marketing und Vertrieb. Andere CRMs prüfe ich nach derselben Logik.', 'Kannst du deinen Funnel-Zahlen trauen? Wo bleiben Leads hängen oder gehen zwischen Teams verloren?'],
        ['Positionierung und Funnel', 'Produktpositionierung und Messaging, der Funnel-Pfad und die wichtigsten Landingpages, auf denen dein Paid-Traffic landet.', 'Passt die Botschaft zur Anzeige und zum Käufer? Wo springen Besucher ab?'],
        ['Wettbewerber (bis zu 3)', 'Positionierung, Angebote und sichtbare Paid-Aktivität von bis zu drei Wettbewerbern, die du nennst.', 'Wie hebst du dich ab, und wo überbieten oder übertexten dich Wettbewerber?'],
      ],
      outTitle: 'Nicht im Umfang',
      out: [
        { b: 'Umsetzung oder Fixes.', t: 'Das Audit sagt dir, was zu ändern ist; die Änderungen selbst sind ein separater Sprint.' },
        { b: 'Neue Kampagnen,', t: 'neue Anzeigen, neue Landingpages oder neue Creatives.' },
        { b: 'Mehr als 3 Paid-Kanäle', t: 'in einem Audit.' },
        { b: 'Kompletter Data-Warehouse- oder BI-Umbau,', t: 'inklusive individueller Dashboards.' },
        { b: 'Rechts- oder Compliance-Prüfung,', t: 'inklusive Datenschutz- und Consent-Setup.' },
        { b: 'Laufende Betreuung', t: 'von Kanälen, CRM oder Kampagnen.' },
      ],
      more: {
        title: 'Mehr nötig?',
        text: 'Weitere Kanäle, ein tieferer CRM-Umbau oder Hands-on-Fixes kommen als separat gescopter Sprint dazu. Das vereinbaren wir, bevor Arbeit beginnt, damit sich der Audit-Preis nie ändert.',
      },
    },
    process: {
      num: '02',
      title: 'Ablauf, Zeitplan und Lieferumfang',
      sub: 'Fünf Schritte, zwei Calls, ein schriftliches Audit. Die Uhr startet, sobald der Zugang steht. Je schneller die Onboarding-Checkliste erledigt ist, desto schneller hast du Ergebnisse.',
      steps: [
        { step: 'Schritt 1', title: 'Kickoff', text: '45-Minuten-Call. Ziele, aktuelles Setup, Prioritäten, welche Kanäle und Wettbewerber im Umfang sind.' },
        { step: 'Schritt 2', title: 'Zugang', text: 'Du arbeitest die Onboarding-Checkliste ab. Lesezugriff reicht für den Start.' },
        { step: 'Schritt 3', title: 'Analyse', text: 'Kanäle, CRM, Funnel, Positionierung und Wettbewerber, geprüft gegen deine Ziele.' },
        { step: 'Schritt 4', title: 'Schriftliches Audit', text: 'Befunde, priorisierte Maßnahmenliste und Quick Wins, geliefert als Dokument.' },
        { step: 'Schritt 5', title: 'Ergebnis-Call', text: '60 Minuten Durchsprache, deine Fragen beantwortet, nächste Schritte vereinbart.' },
      ],
      timelineTitle: 'Zeitplan',
      timelineCols: ['Wann', 'Was passiert'],
      timeline: [
        ['Buchung', 'Zahlung eingegangen, Kickoff-Call terminiert'],
        ['Kickoff', '45-Minuten-Call; Onboarding-Checkliste direkt danach'],
        ['Zugang erteilt', 'Analyse startet. Das ist Tag 1 des Zeitplans'],
        ['Etwa 7 bis 10 Werktage später', 'Schriftliches Audit geliefert, Ergebnis-Call gehalten'],
      ],
      timelineNote: 'Verzögerungen beim Zugang oder fehlende Informationen verschieben den Zeitplan um genau diese Zeit. Ich melde Fehlendes so früh wie möglich.',
      receiveTitle: 'Was du bekommst',
      receive: [
        { b: 'Schriftliches Audit', t: 'mit Befunden je Kanal, CRM, Funnel und Wettbewerber' },
        { b: 'Priorisierte Maßnahmenliste', t: 'nach Wirkung und Aufwand sortiert, damit du weißt, was zuerst dran ist' },
        { b: 'Quick Wins', t: 'die dein Team sofort umsetzen kann' },
        { b: '60-Minuten-Ergebnis-Call', t: 'zur Durchsprache des Audits und deiner Fragen' },
        { b: 'Aufzeichnung und Notizen', t: 'des Ergebnis-Calls, damit das ganze Team nachziehen kann' },
        { b: 'Eine klare Empfehlung', t: 'ob ein Sprint sinnvoll ist und was er abdecken würde' },
      ],
    },
    checklist: {
      num: '03',
      title: 'Onboarding-Checkliste',
      sub: 'Was ich von dir brauche. Bewusst allgemein gehalten, weil jedes B2B-Modell ein bisschen anders ist. Teile, was auf dich zutrifft; wenn etwas noch nicht existiert, ist auch das ein Befund.',
      items: [
        { b: 'Zugang zu den Paid-Kanälen im Umfang', t: '(zum Beispiel Google Ads, LinkedIn Ads, Meta) und zum CRM. Idealerweise Super Admin, damit später kein Rollenwechsel nötig ist; ein Standardnutzer reicht als Minimum. API-Zugang ist wichtig, um Daten zu ziehen und zu prüfen.' },
        { b: 'Tech-Stack-Liste:', t: 'alle Tools und Abos, die aktuell in Marketing, Vertrieb und RevOps gebucht sind.' },
        { b: 'Überblick über den Sales Cycle:', t: 'Status quo, die Stufen, die ein Deal durchläuft, und die durchschnittliche Zyklusdauer.' },
        { b: 'Kennzahlen, soweit vorhanden:', t: 'durchschnittliche Deal-Größe, ACV oder ARR pro Kunde, Win Rate, Pipeline-Volumen.' },
        { b: 'Analytics- und Tracking-Zugang', t: 'falls vorhanden, zum Beispiel Web-Analytics, Tag Manager und Conversion-Tracking.' },
      ],
      helpfulTitle: 'Auch hilfreich, wenn vorhanden',
      helpful: [
        'Dein ideales Kundenprofil und die wichtigsten Buyer Personas',
        'Bis zu 3 Wettbewerber, die du verglichen haben willst',
        'Frühere Reports, Dashboards oder Decks zur Marketing-Performance',
        'Ein Hauptansprechpartner für Rückfragen während der Analyse',
      ],
      access: {
        title: 'So gehe ich mit Zugängen um',
        text: 'Zugänge werden nur für dieses Audit genutzt. Ich ändere während des Audits nichts an Kampagnen, Einstellungen oder CRM-Daten, und du kannst den Zugang entziehen, sobald der Ergebnis-Call vorbei ist. Ein NDA gibt es auf Wunsch.',
      },
    },
    terms: {
      num: '04',
      title: 'Investition, Konditionen und nächste Schritte',
      sub: 'Ein Festpreis, vorab bezahlt. Keine Stundenabrechnung, keine Überraschungen.',
      box: {
        eyebrow: 'Bezahltes Revenue- & Marketing-Audit',
        text: 'Umfang wie oben beschrieben · Schriftliches Audit, Ergebnis-Call, Aufzeichnung und Notizen',
        price: '500 EUR',
      },
      cols: ['Punkt', 'Detail'],
      rows: [
        ['Honorar', '500 EUR pauschal für den Umfang oben'],
        ['Zahlung', '100 % vorab; die Arbeit startet nach Zahlungseingang'],
        ['Anrechnung auf einen Sprint', 'Das Audit-Honorar wird voll auf einen Sprint angerechnet, der innerhalb von 30 Tagen nach dem Ergebnis-Call gebucht wird'],
        ['Arbeit außerhalb des Umfangs', 'Wird separat angeboten und nur nach deiner schriftlichen Freigabe'],
      ],
      afterTitle: 'Was nach dem Audit kommt',
      after: [
        { tag: 'Jetzt', title: 'Audit', text: 'Wissen, was kaputt ist, was es dich kostet und was zuerst dran ist.', href: '' },
        { tag: 'Optional', title: 'Sprint', text: 'Ein Sprint mit festem Umfang, direkt aus der Prioritätenliste des Audits: die Fixes und Quick Wins, umgesetzt.', href: '/de/leistungen/sprint' },
        { tag: 'Optional', title: 'Monatlicher Retainer', text: 'Laufende Wachstumsarbeit: A/B-Tests, Landingpages, Content und Kampagnen, jeden Monat ausgewertet.', href: '/de/leistungen/fractional' },
      ],
      afterNote: 'Sprint und Retainer sind nie Bedingung für das Audit. Du kannst das Audit nehmen und alles selbst umsetzen.',
      next: {
        eyebrow: 'Nächster Schritt',
        text: 'Buch einen kurzen Call, um den Umfang zu bestätigen und deinen Kickoff-Termin zu wählen.',
        cta: 'Audit-Call buchen',
      },
    },
    faq: {
      eyebrow: 'Fragen',
      h2: 'Bevor du buchst',
      items: [
        { q: 'Brauche ich HubSpot?', a: 'Nein. In HubSpot gehe ich am tiefsten, aber andere CRMs prüfe ich nach derselben Logik: Lifecycle, Lead-Status, Attribution, Übergaben.' },
        { q: 'Wir fahren nur einen Kanal. Ändert sich der Preis?', a: 'Nein. Das Audit geht dann tiefer in diesen einen Kanal und ins CRM. Der Preis bleibt bei 500 EUR.' },
        { q: 'Setzt du die Fixes auch um?', a: 'Ja, als separat gescopten Sprint. Das Audit-Honorar wird voll auf einen Sprint angerechnet, der innerhalb von 30 Tagen nach dem Ergebnis-Call gebucht wird.' },
        { q: 'Wie läuft das mit den Zugängen?', a: 'Lesezugriff reicht für den Start. Ich ändere während des Audits nichts an Kampagnen, Einstellungen oder CRM-Daten, und du kannst den Zugang nach dem Ergebnis-Call entziehen. Ein NDA gibt es auf Wunsch.' },
      ],
    },
  },

  sprint: {
    meta: {
      title: 'Umsetzungs-Sprints',
      description:
        'Umbauten mit festem Umfang und festem Preis in vier bis acht Wochen: HubSpot-CRM-Build, LinkedIn-Ads-Launch, Google-Ads-Rebuild, Landingpages, Lead-Magnete, Post-Merger-Integration, SEO-Migration.',
    },
    hero: {
      eyebrow: 'Leistungen · Sprint',
      h1: 'Umbauten mit Ergebnis.',
      sub: 'Vier bis acht Wochen, fester Umfang, fester Preis. Direkt aus der Prioritätenliste des Audits gebaut, oder aus einem Problem, das du schon kennst.',
    },
    scope: {
      eyebrow: 'Was ein Sprint abdecken kann',
      h2: 'Umfang-Optionen',
      items: [
        { title: 'Kampagnen-Launch', text: 'LinkedIn oder Google Ads, strukturiert, bevor der erste Euro läuft: Stufen, Zielgruppen, Conversion-Events, CRM-Felder.' },
        { title: 'Landingpages', text: 'Seiten für eine Kampagne und einen Kaufgrund, mit Tracking bis in den Deal.' },
        { title: 'Tracking und Attribution', text: 'GA4, Tag Manager, Offline-Conversions aus dem CRM zurück an die Ad-Plattformen.' },
        { title: 'CRM-Bereinigung oder Migration', text: 'Objekte, Properties, Lifecycle, Pipelines mit Exit-Kriterien. Dubletten-Regeln für Migrationen.' },
        { title: 'Übergabe an den Vertrieb', text: 'Routing, SLAs, Sequenzen, Lead-Status. Der Moment, in dem ein Lead das Marketing verlässt, ist definiert, nicht angenommen.' },
      ],
    },
    menuIntro: { eyebrow: 'Hauptgerichte', h2: 'Sprints zum Festpreis', text: 'Jeder Sprint ist ein Problem, das ich schon gelöst habe, mit fester Lieferung und festem Preis.' },
    custom: {
      title: 'Etwas anderes?',
      text: 'Steht dein Problem nicht auf der Karte, wird es nach dem Audit gescopt. Den Umfang vereinbaren wir, bevor Arbeit beginnt, damit sich der Preis mitten im Sprint nie ändert.',
      cta: 'Mit dem Audit starten',
    },
    cta: { h2: 'Unsicher, welcher Sprint?', text: 'Starte mit dem Audit für 500 EUR. Das Honorar wird voll auf einen Sprint angerechnet, der innerhalb von 30 Tagen gebucht wird.', primary: 'Zum Audit', secondary: 'Gespräch buchen' },
  },

  fractional: {
    meta: {
      title: 'Fractional Head of Marketing & RevOps',
      description:
        'Zwei Tage pro Woche, monatlich kündbar. Ich plane, baue und verantworte die Zahlen: CRM, Paid, Vertriebsprozess, Reporting. Für Gründer, die einen Kopf wollen statt drei Agenturen.',
    },
    hero: {
      eyebrow: 'Leistungen · Dauerkarte',
      h1: 'Ein Kopf statt drei Agenturen.',
      sub: 'Zwei Tage pro Woche, monatlich kündbar. Ich plane, baue und verantworte die Zahlen: CRM, Paid Acquisition, Vertriebsprozess, Reporting.',
    },
    means: {
      eyebrow: 'Was „Head on top“ heißt',
      h2: 'Der Job, nicht das Deck',
      items: [
        { title: 'Monatlicher Plan', text: 'Marketing-Plan, Budget und Kanalmix, jeden Monat gegen die Pipeline geprüft.' },
        { title: 'Kanalverantwortliche geführt', text: 'Agenturen, Freelancer und interne Owner bekommen Briefings, Deadlines und einen sauberen Read auf die Ergebnisse.' },
        { title: 'Reporting bis in die Pipeline', text: 'Monatliches Reporting an Gründer: Pipeline, CAC, Conversion je Stufe. Keine Klicks.' },
        { title: 'RevOps-Governance', text: 'Lifecycle, Lead-Status, Routing und Attribution bleiben konsistent, während das Team wächst.' },
      ],
    },
    markets: {
      eyebrow: 'Märkte',
      h2: 'Wo die Arbeit stattfindet',
      text: 'Je Engagement vereinbart. Europäische und US-Arbeitszeit.',
      items: ['DACH', 'Benelux', 'Frankreich', 'EMEA', 'UK', 'USA', 'LATAM', 'APAC'],
    },
    menuIntro: { eyebrow: 'Dauerkarte', h2: 'Laufende Optionen' },
    cta: { h2: 'Ist ein Fractional Head der richtige Schritt?', text: 'Die meisten Engagements starten mit dem Audit, dann ein Sprint. Die Dauerkarte kommt, wenn das System läuft und einen Owner braucht.', primary: 'Gespräch buchen', secondary: 'Zum Audit' },
  },

  work: {
    meta: {
      title: 'Case Studies',
      description: 'Case Studies aus CRM, Paid Acquisition, SEO und RevOps für B2B-Software-Unternehmen. Jede Zahl ist definiert.',
    },
    hero: {
      eyebrow: 'Referenzen',
      h1: 'Case Studies',
      sub: 'Jede Zahl benennt, was gemessen wurde und wie. Kundennamen sind anonymisiert, wo ich das einem früheren Arbeitgeber schulde.',
    },
    filters: [
      { key: 'all', label: 'Alle' },
      { key: 'CRM', label: 'CRM' },
      { key: 'Paid', label: 'Paid' },
      { key: 'SEO', label: 'SEO' },
      { key: 'RevOps', label: 'RevOps' },
      { key: 'Automation', label: 'Automatisierung' },
    ],
    empty: 'Case Studies werden gerade zur Veröffentlichung freigegeben. Frag mich im Gespräch nach Referenzen.',
    labels: {
      client: 'Kunde',
      industry: 'Branche',
      services: 'Leistungen',
      stack: 'Stack',
      role: 'Rolle',
      period: 'Zeitraum',
      results: 'Ergebnisse',
      definitions: 'So sind diese Zahlen definiert',
      more: 'Weitere Case Studies',
    },
    cta: { h2: 'Ähnliches Problem?', text: 'Schreib mir drei Sätze dazu. Ich antworte selbst.', primary: 'Gespräch buchen', secondary: 'E-Mail schreiben' },
  },

  projects: {
    meta: {
      title: 'Projekte und Ventures',
      description: 'Dinge, die Andre Schüler baut, wenn kein Kunde dafür bezahlt: CapturePilot by Americurial, Ads Pilot, FILLCART.',
    },
    hero: { eyebrow: 'Projekte & Ventures', h1: 'Dinge, die ich baue, wenn mich kein Kunde dafür bezahlt.', sub: 'Eigene Ventures und interne Tools. Jedes hat mir etwas beigebracht, das in der Kundenarbeit wieder auftaucht.' },
    roleLabel: 'Rolle',
    visit: 'Ansehen',
  },

  partners: {
    meta: {
      title: 'Partner und Netzwerk',
      description: 'Die Leute, mit denen Andre Schüler arbeitet: Design, Entwicklung und Ventures. Und wie du Partner wirst.',
    },
    hero: { eyebrow: 'Partner & Netzwerk', h1: 'Ich arbeite mit Leuten, denen ich vertraue.', sub: 'Design, Entwicklung und Performance aus einem kleinen Netzwerk statt einer großen Agentur. Jeder Partner verantwortet sein Handwerk. Ich verantworte Performance und RevOps.' },
    pending: 'Partnerprofile werden gerade mit den Beteiligten abgestimmt und erscheinen hier.',
    become: {
      eyebrow: 'Partner werden',
      title: 'Agenturen, die einen Performance- und RevOps-Lead brauchen',
      text: 'Design- oder Dev-Shops, deren Kunden jemanden suchen, der die Zahlen verantwortet: Paid Acquisition, CRM, Attribution und die Übergabe an den Vertrieb. Schreib mir drei Sätze über deine Kunden.',
      cta: 'E-Mail schreiben',
    },
  },

  insights: {
    meta: {
      title: 'Insights',
      description: 'Artikel zu CRM, Paid Acquisition, SEO und Revenue Operations für B2B-Software-Unternehmen.',
    },
    hero: { eyebrow: 'Insights', h1: 'Notizen aus dem Revenue-System', sub: 'Artikel zu CRM, Paid Acquisition, SEO und RevOps. Geschrieben aus der Arbeit, nicht aus einem Redaktionsplan.' },
    topics: { crm: 'CRM', paid: 'Paid', seo: 'SEO & GEO', revops: 'RevOps', automation: 'Automatisierung', story: 'Story' },
    otherLang: { text: 'Mehr Artikel auf Englisch', href: '/insights' },
    linkedin: { eyebrow: 'Auf LinkedIn', title: 'Kürzere Notizen, fast jede Woche.', text: 'Beobachtungen aus der Arbeit, gepostet, solange sie frisch sind.', cta: 'Auf LinkedIn folgen' },
    article: { by: 'Von', published: 'Veröffentlicht', updated: 'Aktualisiert', contents: 'Inhalt', related: 'Weiterlesen', author: { name: 'Andre Schüler', text: 'Fractional Head of Marketing & RevOps für B2B SaaS. Plant es, baut es, bleibt für die Zahlen verantwortlich.', cta: 'Über mich' } },
    cta: { h2: 'Lesen ist billig. Das Leck finden kostet 500 EUR.', text: 'Ein Audit mit festem Umfang für deine Paid-Kanäle, dein CRM und deinen Funnel. Schriftliche Befunde, priorisierte Maßnahmenliste, Quick Wins.', primary: 'Zum Audit', secondary: 'Gespräch buchen' },
    empty: 'Noch keine Artikel in dieser Sprache.',
  },

  checklists: {
    meta: { title: 'Checklisten', description: 'Interaktive Checklisten für Google Ads, AEO und den Datenfluss von HubSpot zu Google Ads.' },
    hero: { eyebrow: 'Checklisten', h1: 'Interaktive Checklisten', sub: 'Hak ab, was bei dir schon läuft. Dein Fortschritt bleibt in deinem Browser.' },
  },

  contact: {
    meta: {
      title: 'Kontakt und Terminbuchung',
      description: 'Buch ein 30-Minuten-Gespräch mit Andre Schüler oder schick drei Sätze darüber, was in deiner Pipeline hängt.',
    },
    hero: { eyebrow: 'Kontakt', h1: 'Drei Sätze darüber, was hängt.', sub: 'Buch ein Gespräch oder schreib. Ich antworte selbst.' },
    book: {
      eyebrow: 'Buchen',
      title: 'Ein 30-Minuten-Gespräch',
      text: 'Such dir einen Slot in meinem Kalender. Ich stelle Fragen, statt zu präsentieren. Passt es, bekommst du ein Angebot mit genau dem, was auf der Karte steht. Wenn nicht, eine ehrliche Absage.',
      cta: 'Kalender öffnen',
    },
    form: {
      eyebrow: 'Oder schreiben',
      title: 'Drei Sätze reichen',
      name: 'Name',
      email: 'Geschäftliche E-Mail',
      company: 'Unternehmen',
      website: 'Website',
      message: 'Was hängt?',
      messagePlaceholder: 'Drei Sätze zu deiner Pipeline, deinem CRM oder deinen Ads.',
      markets: 'Märkte, in denen du verkaufst',
      marketOptions: ['DACH', 'Benelux', 'Frankreich', 'UK', 'USA', 'LATAM', 'APAC', 'Andere'],
      budget: 'Monatliches Paid-Budget',
      budgetOptions: ['Noch kein Paid-Budget', 'Unter 5.000', '5.000 bis 15.000', '15.000 bis 50.000', 'Über 50.000'],
      budgetPlaceholder: 'Auswählen',
      consent: 'Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage genutzt werden. Details in der Datenschutzerklärung.',
      submit: 'Senden',
      sending: 'Wird gesendet',
      success: 'Danke. Ich antworte selbst, meist innerhalb eines Werktags.',
      error: 'Das ist nicht durchgegangen. Schreib mir bitte direkt:',
      required: 'Pflichtfeld',
    },
    direct: { eyebrow: 'Direkt', email: 'E-Mail', phone: 'Telefon', linkedin: 'LinkedIn', remote: REMOTE, hours: 'Europäische und US-Arbeitszeit.' },
  },

  roi: {
    meta: {
      title: 'ROI-Rechner für B2B Paid Acquisition',
      description: 'Branchentypische Conversion-Raten, dein Budget, deine Deal-Größe und Closing-Rate. Sieh, was Paid Acquisition an Pipeline zurückbringen könnte.',
    },
    hero: { eyebrow: 'ROI-Rechner', h1: 'Rechne deinen eigenen Fall', sub: 'Branchentypische Conversion-Raten, dein Budget, deine Deal-Größe und Closing-Rate. Die Zahlen sind Benchmarks. Im Audit ersetze ich sie durch deine echten.' },
    industries: [
      { key: 'saas', label: 'SaaS / Software', cpc: 4.5, cvr: 0.032, l2s: 0.45 },
      { key: 'legal', label: 'Recht / Legal Tech', cpc: 6.8, cvr: 0.045, l2s: 0.4 },
      { key: 'finance', label: 'Finanzen / FinTech', cpc: 5.2, cvr: 0.04, l2s: 0.42 },
      { key: 'itservices', label: 'IT- & Managed Services', cpc: 3.8, cvr: 0.03, l2s: 0.48 },
      { key: 'industrial', label: 'Industrie & Fertigung', cpc: 3.2, cvr: 0.026, l2s: 0.5 },
      { key: 'consulting', label: 'Beratung / Professional Services', cpc: 4.0, cvr: 0.035, l2s: 0.44 },
      { key: 'hr', label: 'HR / Recruiting-Software', cpc: 3.5, cvr: 0.033, l2s: 0.46 },
      { key: 'health', label: 'Health / MedTech', cpc: 4.2, cvr: 0.034, l2s: 0.43 },
    ],
    assumptionsTitle: 'Deine Annahmen',
    labelIndustry: 'Branche',
    labelBudget: 'Monatliches Ad-Budget',
    labelDeal: 'Ø Deal-Größe (ACV)',
    labelClose: 'Closing-Rate pro SQL',
    cvrCpcTpl: 'CVR {cvr} % · CPC {cpc} €',
    revenueLabel: 'Erwarteter Umsatz pro Monat',
    roasLabel: 'ROAS',
    sqlLabel: 'qualifizierte SQLs pro Monat',
    roiLabel: 'ROI auf Ad-Budget',
    funnel: { clicks: 'Klicks pro Monat', leads: 'Leads', sqls: 'SQLs', deals: 'Neue Deals' },
    funnelNote: 'Von links nach rechts fällt jede Stufe. Das ist normal. Entscheidend ist, was unten als Deal ankommt.',
    disclaimer: 'Illustrative Benchmark-Rechnung auf Basis branchentypischer Werte. Keine Erfolgsgarantie. Im Audit ersetze ich die Werte durch deine echten Konto- und CRM-Daten.',
    cta: { h2: 'Willst du das mit deinen echten Zahlen?', text: 'Das Audit für 500 EUR ersetzt die Benchmarks durch deine Konto- und CRM-Daten.', primary: 'Zum Audit', secondary: 'Gespräch buchen' },
  },

  footer: {
    tagline: 'Fractional Head of Marketing & RevOps für B2B SaaS. ' + REMOTE,
    cols: [
      {
        title: 'Leistungen',
        links: [
          { label: 'Das Audit für 500 EUR', href: '/de/leistungen/audit' },
          { label: 'Sprints', href: '/de/leistungen/sprint' },
          { label: 'Fractional', href: '/de/leistungen/fractional' },
          { label: 'ROI-Rechner', href: '/de/roi' },
        ],
      },
      {
        title: 'Unternehmen',
        links: [
          { label: 'Über mich', href: '/de/ueber-mich', foreign: false },
          { label: 'Referenzen', href: '/work', foreign: true },
          { label: 'Projekte', href: '/projects', foreign: true },
          { label: 'Partner', href: '/partners', foreign: true },
          { label: 'Insights', href: '/de/insights', foreign: false },
          { label: 'Kontakt', href: '/de/kontakt' },
        ],
      },
      {
        title: 'Rechtliches',
        links: [
          { label: 'Impressum', href: '/de/impressum' },
          { label: 'Datenschutz', href: '/de/datenschutz' },
          { label: 'AGB', href: '/de/agb' },
        ],
      },
    ],
    contactTitle: 'Kontakt',
    copyright: '© 2026 FILLCART LLC',
    registered: 'Registriert in Wyoming, USA',
  },

  cookie: {
    text: 'Analyse-Cookies laden nur, wenn du zustimmst. Bis dahin wird nichts getrackt.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen',
    more: 'Datenschutzerklärung',
  },

  legal: {
    imprint: { title: 'Impressum', eyebrow: 'Rechtliches' },
    privacy: { title: 'Datenschutzerklärung', eyebrow: 'Rechtliches' },
    terms: { title: 'AGB', eyebrow: 'Rechtliches' },
    draftNote: 'Entwurf. Keine Rechtsberatung. Vor dem Livegang anwaltlich prüfen lassen.',
  },

  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite ist umgezogen oder hat nie existiert. Die alten Adressen von fillcart.de und andreschuler.com leiten auf die neuen Seiten weiter; wenn du von einer davon hier gelandet bist, sag mir Bescheid.',
    cta: 'Zurück zum Start',
    secondary: 'Leistungen',
  },
};
