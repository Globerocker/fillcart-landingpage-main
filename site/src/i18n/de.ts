import type { LandingContent } from './types.ts';

export const de: LandingContent = {
  lang: 'de',
  altPath: '/en/',
  homePath: '/',

  meta: {
    title: 'Google Ads Management, das Pipeline füllt – nicht nur Leadlisten | Fillcart',
    description:
      'Kostenloser Google Ads Audit + Gratis-Setup deiner ersten Search-Kampagne. Wir optimieren auf Pipeline-Value statt Cost-per-Lead. HubSpot Solutions Partner. Ab 5.000 € Adspend/Monat.',
  },

  nav: {
    deal: 'Der Deal',
    timeline: 'Ablauf',
    roi: 'ROI-Rechner',
    services: 'Leistungen',
    faq: 'FAQ',
    cta: 'Audit sichern',
    wissen: 'Wissen',
    referenzen: 'Referenzen',
  },
  navCta: 'Audit sichern',
  langSwitch: { current: 'DE', other: 'EN', otherHref: '/en/' },

  hero: {
    badge: 'GOOGLE ADS MANAGEMENT FÜR B2B · DACH &amp; USA',
    headline:
      'Andere liefern dir Leads.<br><span class="muted">Wir füllen deinen Cart mit </span><span class="accent">Deals.</span>',
    sub: 'Google-Ads-Kampagnen, optimiert auf <span class="hl">Pipeline-Value in deinem CRM</span> – nicht auf den billigsten Klick.',
    bullets: [
      'Audit &amp; erste Search-Kampagne <b>kostenlos</b>',
      'Optimierung auf <b>Umsatz</b>, dank HubSpot-CRM-Anbindung',
      'Kein Setup-Fee, kein Laufzeitvertrag als Eintrittskarte',
    ],
    ctaPrimary: 'Kostenlosen Audit sichern',
    ctaSecondary: 'ROI durchrechnen →',
    cartLabel: 'Pipeline-Value im CRM',
  },

  trust: {
    label: 'Belegbar, nicht behauptet',
    items: ['Google Partner', 'HubSpot Solutions Partner', '20+ Zertifizierungen', 'Budgets bis 80.000 $/Monat betreut'],
  },

  problem: {
    eyebrow: 'Das Problem',
    headline: 'Dein CRM ist voll.<br>Dein Vertrieb trotzdem leer.',
    stats: [
      { num: '80 %', text: 'der Anfragen sortiert dein Vertrieb als unbrauchbar aus – trotz sinkendem CPL.' },
      { num: '1 KPI', text: 'optimieren die meisten Agenturen: Cost-per-Lead. Der falsche.' },
      { num: '0 €', text: 'Umsatz-Sicht: Der Monatsreport endet beim Klick, nicht beim Deal.' },
    ],
    quote:
      'Wer auf Leads optimiert, bekommt Leads. <span class="accent">Wer auf Pipeline optimiert, bekommt Deals.</span>',
  },

  deal: {
    eyebrow: 'Unser Angebot',
    headline: 'Wir arbeiten, bevor du zahlst.',
    intro: 'Kein Pitch-Deck, keine Setup-Fee, kein 12-Monats-Vertrag. Wir drehen die Reihenfolge um:',
    steps: [
      {
        num: '01',
        badge: 'GRATIS',
        badgeColor: 'green',
        title: 'Kostenloser Ads-Audit',
        items: ['Kontostruktur &amp; Keywords', 'Conversion-Tracking-Check', 'Ehrliche Analyse mit Zahlen'],
      },
      {
        num: '02',
        badge: 'GRATIS SETUP',
        badgeColor: 'green',
        title: 'Erste Kampagne. Gebaut.',
        items: ['Keyword-Recherche &amp; Texte', 'Gebotsstrategie &amp; Tracking', 'Du zahlst nur dein Ad-Budget'],
      },
      {
        num: '03',
        badge: 'DATEN ENTSCHEIDEN',
        badgeColor: 'sky',
        title: 'Die Kampagne entscheidet.',
        items: ['Bringt sie Pipeline → Retainer', 'Bringt sie nichts → Trennung', 'Learnings gehören dir'],
      },
    ],
    callouts: {
      test: {
        big: '50 €',
        unit: '/ Tag min.',
        title: 'Testkampagne-Budget',
        text: 'Für die kostenlose Testkampagne brauchen wir <b>≈ 1.500 €/Monat</b> Ad-Budget. Darunter liefert Google zu wenig Daten, um seriös auf Pipeline zu lernen.',
      },
      retainer: {
        big: '5k€',
        unit: '/ Monat ab',
        title: 'Laufende Zusammenarbeit',
        text: 'Für den monatlichen Retainer arbeiten wir ab <b>5.000 € Adspend</b> – erst dann ist Pipeline-Optimierung statistisch sauber.',
      },
    },
  },

  timeline: {
    eyebrow: 'Der Ablauf',
    headline: 'So entwickelt sich deine Pipeline',
    sub: 'Realistisch betrachtet über 12 Monate – vom Audit bis zur planbaren Pipeline. Kein Hockeystick-Märchen.',
    chartLabel: 'Ø ROAS-Entwicklung (illustrativ)',
    chartTitle: 'Von Testbudget zu skalierbarer Pipeline',
    legendRoas: 'ROAS',
    legendPipeline: 'Pipeline-Value',
    milestones: [
      { period: 'WOCHE 1', title: 'Audit &amp; Setup', text: 'Kontoanalyse, Tracking sauber, HubSpot verbunden.' },
      { period: 'WOCHE 2', title: 'Testkampagne live', text: 'Erste Search-Kampagne, ab 50 €/Tag Adspend.' },
      { period: 'MONAT 1–2', title: 'Erste Signale', text: 'Suchbegriff-Mining, Negative-Listen, erste SQLs im CRM.' },
      { period: 'MONAT 3–6', title: 'Pipeline-Optimierung', text: 'tROAS/tCPA auf echte CRM-Daten. ROAS steigt spürbar.' },
      { period: 'MONAT 6–12', title: 'Skalierung', text: 'Budget-Ausbau, neue Kampagnentypen, planbare Pipeline.', highlight: true },
    ],
  },

  roi: {
    eyebrow: 'ROI-Rechner',
    headline: 'Rechne deinen Case durch',
    sub: 'Branchentypische Conversion-Raten, dein Budget, deine Deal-Größe und Closing-Rate. Die Zahlen sind Benchmarks – im Audit ersetzen wir sie durch deine echten.',
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
    cvrCpcTpl: 'CVR {cvr}% · CPC {cpc} €',
    revenueLabel: 'Erwarteter Umsatz / Monat',
    roasLabel: 'ROAS',
    sqlLabel: 'qualifizierte SQLs / Monat',
    roiLabel: 'ROI auf Ad-Budget',
    funnel: { clicks: 'Klicks / Monat', leads: 'Leads', sqls: 'SQLs', deals: 'Neue Deals' },
    disclaimer:
      'Illustrative Benchmark-Rechnung auf Basis branchentypischer Werte. Keine Erfolgsgarantie – im kostenlosen Audit rechnen wir mit deinen echten Konto- und CRM-Daten.',
  },

  usp: {
    eyebrow: 'Warum Fillcart',
    headline: 'Wir optimieren auf Umsatz.<br>Das geht nur, wenn man ihn sieht.',
    colAgency: 'Typische Agentur',
    colFillcart: 'Fillcart',
    rows: [
      ['Optimiert auf', 'Cost-per-Lead', 'Pipeline-Value'],
      ['Erfolgsmessung', 'Klicks, Leads, CPL', 'Opportunities, Umsatz'],
      ['CRM-Anbindung', '„Machen wir nicht"', 'HubSpot-Integration inklusive'],
      ['Einstieg', 'Setup-Fee + Laufzeitvertrag', 'Audit + erste Kampagne kostenlos'],
      ['Reporting', 'PDF einmal im Monat', 'Live-Dashboard mit Pipeline-Daten'],
    ],
  },

  services: {
    eyebrow: 'Leistungen',
    headline: 'Was wir konkret machen',
    cards: [
      { title: 'Kampagnen-Management', desc: 'Aufbau &amp; Optimierung über alle Typen: Search, Performance Max, Shopping, Display, Video, Demand Gen.', color: '#F97316' },
      { title: 'Keyword- & Suchbegriff-Opt.', desc: 'Laufendes Suchbegriff-Mining, Negative-Listen, Match-Type-Strategie.', color: '#38BDF8' },
      { title: 'Conversion- & Pipeline-Tracking', desc: 'Sauberes Tracking-Setup, HubSpot-Anbindung, Offline-Conversion-Import.', color: '#22C55E' },
      { title: 'Budget- & Gebotssteuerung', desc: 'Pacing, tROAS/tCPA-Steuerung auf Basis echter Pipeline-Daten.', color: '#F97316' },
      { title: 'Transparentes Reporting', desc: 'Reports mit den Zahlen, die dein GF versteht: Pipeline, Umsatz, ROI.', color: '#38BDF8' },
      { title: 'SEO & AEO als Ergänzung', desc: 'Sichtbarkeit im klassischen Google und in KI-Suche (ChatGPT, Perplexity, AI Overviews).', color: '#22C55E' },
    ],
  },

  proof: {
    eyebrow: 'Wer dahinter steht',
    headline: 'Keine 40-Mann-Agentur.<br>Ein Operator.',
    body: 'Fillcart ist die Agentur von <span class="hl">Andre Schüler</span>. Kein Junior lernt an deinem Budget – wer den Audit macht, baut auch deine Kampagnen und sitzt in jedem Call.',
    chips: ['Head of Marketing · Legal-Tech-SaaS', 'Head of SEO · Matrix42', 'HubSpot Consultant · B2B-Enterprise'],
    stats: [
      { count: 80000, suffix: ' $/Mo.', label: 'Ads-Budget über 3 Länder gemanagt', color: '#F97316' },
      { count: 23, prefix: '+', suffix: ' %', label: 'mehr SQLs in 6 Monaten', color: '#22C55E' },
      { count: 88, prefix: '+', suffix: ' %', label: 'organischer US-Traffic in 4 Monaten', color: '#22C55E' },
      { count: 20, suffix: '+', label: 'Zertifizierungen (Google, HubSpot)', color: '#F97316' },
    ],
    refsLabel: 'Referenzen & Badges',
    refs: ['stp.one', 'Matrix42', 'CIXON'],
    hubspotBadge: 'HubSpot Solutions Partner',
  },

  faq: {
    eyebrow: 'FAQ',
    headline: 'Ehrliche Antworten',
    items: [
      { q: 'Warum macht ihr Audit und erste Kampagne kostenlos?', a: 'Weil es das ehrlichste Verkaufsargument ist, das wir kennen. Wenn unsere Arbeit nichts bringt, sollst du nichts zahlen. Wenn sie Pipeline bringt, willst du mehr davon – und dafür brauchen wir keine Verkäufer.' },
      { q: 'Wo ist der Haken?', a: 'Es gibt zwei ehrliche Einschränkungen: Du zahlst dein Werbebudget an Google selbst (das war schon immer dein Geld). Und wir arbeiten ab 5.000 € Monats-Adspend, weil Pipeline-Optimierung darunter statistisch nicht sauber funktioniert.' },
      { q: 'Wie viel Budget brauche ich für die Testkampagne?', a: 'Für die kostenlose Testkampagne rechnen wir mit mindestens 50 € Tagesbudget – rund 1.500 € im Monat. Darunter sammelt Google zu wenig Conversion-Daten, um seriös auf Pipeline zu lernen.' },
      { q: 'Was passiert, wenn die Gratis-Kampagne nichts bringt?', a: 'Dann trennen wir uns ohne Rechnung. Audit, Kampagnenstruktur und alle Learnings gehören dir. Unser Risiko, nicht deins.' },
      { q: 'Braucht es zwingend HubSpot?', a: 'Nein. HubSpot ist unser Heimspiel und der schnellste Weg zu Pipeline-Optimierung. Mit anderen CRMs arbeiten wir über Offline-Conversion-Imports – etwas mehr Handarbeit, gleiches Prinzip.' },
      { q: 'Für wen ist das nichts?', a: 'E-Commerce mit reinem ROAS-Fokus unter 5.000 € Budget, lokale Dienstleister mit 500-€-Budgets, und alle, die einen „Leads um jeden Preis"-Ansatz wollen. Dafür gibt es günstigere Anbieter.' },
    ],
  },

  cta: {
    eyebrow: 'Kostenloser Audit',
    headline: 'Finde raus, was dein Konto wirklich kann.',
    sub: '30 Minuten, null Euro. Schlimmster Fall: du weißt, dass alles läuft. Bester Fall: wir holen die Pipeline, die liegen bleibt.',
    form: {
      title: 'Audit anfragen',
      name: 'Name',
      namePh: 'Vor- und Nachname',
      email: 'Firmen-E-Mail',
      emailPh: 'du@firma.de',
      website: 'Website',
      websitePh: 'firma.de',
      budget: 'Monatliches Google-Ads-Budget',
      budgetPlaceholder: 'Bitte wählen…',
      budgetOptions: [
        { value: 'u5', label: 'unter 5.000 €' },
        { value: '5-10', label: '5.000 – 10.000 €' },
        { value: '10-25', label: '10.000 – 25.000 €' },
        { value: 'o25', label: 'über 25.000 €' },
      ],
      lowBudgetNotice:
        'Ehrlich gesagt: unter 5.000 € Monatsbudget reicht das Datenvolumen nicht, um sauber auf Pipeline zu optimieren. Melde dich gern wieder, sobald das Budget passt.',
      message: 'Woran merkst du, dass es besser gehen müsste?',
      messagePh: 'Optional',
      submit: 'Kostenlosen Audit anfragen',
      privacyNote: 'Kein Spam. Deine Daten landen direkt in unserem HubSpot-CRM.',
      successTitle: 'Anfrage ist raus.',
      successText: 'Wir melden uns innerhalb eines Werktags – mit den ersten Auffälligkeiten aus deinem Konto.',
    },
    calendar: {
      title: 'Lieber direkt sprechen?',
      sub: '30-Min-Slot, unverbindlich',
      badge: 'Google Kalender',
      placeholderNote:
        'Platzhalter · hier wird der eingebettete HubSpot-Meetings-Kalender geladen, sobald der Meeting-Link hinterlegt ist.',
    },
  },

  hero_deals: [
    { tag: 'Neue Anfrage', value: 24000, dot: '#38BDF8' },
    { tag: 'SQL · Demo', value: 96000, dot: '#38BDF8' },
    { tag: 'Opportunity', value: 310000, dot: '#F97316' },
    { tag: 'Closed Won', value: 480000, dot: '#22C55E' },
    { tag: 'Closed Won', value: 330000, dot: '#22C55E' },
  ],
  pipelineTotal: 1240000,
  pipelineLabel: 'Pipeline-Value im CRM',

  footer: {
    tagline: 'Google-Ads-Management für B2B, das auf Pipeline-Value statt Cost-per-Lead optimiert.',
    colCompanyTitle: 'Fillcart',
    colCompany: [
      { label: 'Über Fillcart', href: '/ueber-fillcart' },
      { label: 'Referenzen', href: '/referenzen/' },
      { label: 'Wissen', href: '/wissen/' },
      { label: 'Ressourcen', href: '/ressourcen/' },
      { label: 'ROI-Rechner', href: '/#rechner' },
    ],
    colLegalTitle: 'Rechtliches',
    colLegal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
      { label: 'English Version', href: '/en/' },
    ],
    colContactTitle: 'Kontakt',
    hubspotBadge: 'HubSpot Solutions Partner',
    copyright: '© 2026 FILLCART LLC. Alle Rechte vorbehalten.',
    registration: 'Registriert in Wyoming, USA · Entity ID 2023-001346077',
  },
};
