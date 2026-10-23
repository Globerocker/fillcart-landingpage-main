import type { ChecklistSection } from '../components/InteractiveChecklist.astro';

export interface Checklist {
  id: string;
  sections: ChecklistSection[];
}

/** The flagship: a real Google Ads audit checklist for B2B. */
export const googleAdsAudit: ChecklistSection[] = [
  {
    title: 'Conversion-Tracking & Datenqualität',
    items: [
      { text: 'Es gibt <b>genau eine</b> primäre Conversion-Aktion, die zählt, nicht fünf halbe.', hint: 'Mehrere „primäre" Conversions verwässern das Gebots-Signal für Smart Bidding.' },
      { text: 'Enhanced Conversions (Leads) ist aktiv und liefert Match-Raten &gt; 60 %.' },
      { text: 'Offline-Conversions aus dem CRM werden zurück an Google gespielt (SQL / Opportunity / Closed Won).', hint: 'Ohne diesen Rückkanal optimiert Google auf Formulare, nicht auf Umsatz.' },
      { text: 'Conversion-Werte spiegeln echte Deal-Größen, nicht pauschal „1" pro Lead.' },
      { text: 'Consent Mode v2 ist korrekt eingebunden, Tags feuern erst nach Einwilligung.' },
    ],
  },
  {
    title: 'Kontostruktur & Keywords',
    items: [
      { text: 'Such-Kampagnen sind nach Intent/Angebot getrennt, nicht nach „irgendwie".' },
      { text: 'Der Suchbegriff-Bericht wird regelmäßig gepflegt, Negative-Listen sind aktuell.', hint: 'Broad Match + PMax ziehen ohne saubere Negatives schnell Müll-Traffic.' },
      { text: 'Marken- und Nicht-Marken-Traffic sind sauber getrennt (Reporting-Ehrlichkeit).' },
      { text: 'Keine „Zombie"-Keywords mit Ausgaben, aber null qualifizierten Leads seit 90 Tagen.' },
      { text: 'Anzeigentexte adressieren den Pain, nicht nur das Keyword, und passen zur Landingpage.' },
    ],
  },
  {
    title: 'Gebote & Budget',
    items: [
      { text: 'Die Gebotsstrategie passt zum Datenvolumen (genug Conversions für tROAS/tCPA?).', hint: 'Unter ~15 Conversions/Monat lernt Smart Bidding nicht sauber.' },
      { text: 'Ziel-ROAS/CPA basiert auf Pipeline-Daten, nicht auf Cost-per-Lead.' },
      { text: 'Budget wird nicht durch eine einzige Kampagne aufgefressen, die nichts abschließt.' },
    ],
  },
  {
    title: 'Assets, PMax & AI Max',
    items: [
      { text: 'Performance Max hat Marken-Ausschlüsse und Account-Level-Negatives gesetzt.' },
      { text: 'Asset-Gruppen sind thematisch sauber, mit genug kreativen Assets je Format.' },
      { text: 'Bei AI Max / Final-URL-Expansion sind Marken-Sicherheit und URL-Regeln geprüft.' },
    ],
  },
  {
    title: 'Reporting & Wahrheit',
    items: [
      { text: 'Das Reporting endet nicht beim Klick, sondern zeigt Pipeline-Value und ROI.' },
      { text: 'Geschäftsführung würde den Report verstehen, ohne Marketing-Übersetzer.' },
      { text: 'Es gibt eine ehrliche Antwort auf: „Welcher Euro hat welchen Deal gebracht?"' },
      { text: 'Ein fester Optimierungs-Rhythmus steht (wöchentlich Suchbegriffe, monatlich Struktur).' },
    ],
  },
];

/** AEO / AI-search readiness. */
export const aeoReadiness: ChecklistSection[] = [
  {
    title: 'Zitierbarkeit (wirst du von KI zitiert?)',
    items: [
      { text: 'Jede wichtige Seite beantwortet die Kernfrage in den ersten 40 bis 75 Wörtern, eigenständig.', hint: 'LLMs zitieren selbst­ständige Passagen dieser Länge deutlich häufiger.' },
      { text: 'Zahlen und Aussagen sind mit Quelle + Jahr belegt.', hint: 'Die Princeton-GEO-Studie zeigt: Quellen + Statistiken heben die Zitierhäufigkeit spürbar.' },
      { text: 'Vergleiche stehen in Tabellen, Aufzählungen in echten Listen.' },
      { text: 'Die Sprache ist klar und nicht werblich (Werbesprech senkt die Zitierrate).' },
    ],
  },
  {
    title: 'Entität & Autorität',
    items: [
      { text: 'Organization-Schema mit logo und sameAs (LinkedIn, Wikidata …) liegt auf der Startseite.' },
      { text: 'Artikel haben echte Autoren mit Bio und Credentials (nicht „Admin").' },
      { text: 'Es gibt Marken-Erwähnungen auf Drittseiten (nicht nur Backlinks).', hint: 'Markenerwähnungen korrelieren ~3× stärker mit KI-Sichtbarkeit als Backlinks (Ahrefs, 2025).' },
    ],
  },
  {
    title: 'Technik & Messung',
    items: [
      { text: 'Inhalte sind server-gerendert (SSR/SSG). Die meisten KI-Crawler führen kein JavaScript aus.' },
      { text: 'Core Web Vitals sind grün (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1).' },
      { text: 'AI-Referrals werden in GA4 über einen eigenen Channel getrackt.' },
      { text: 'Es gibt ein Prompt-Set, um Share of Voice in KI-Suchen zu messen.' },
    ],
  },
];

/** HubSpot ↔ Google Ads pipeline setup. */
export const hubspotSetup: ChecklistSection[] = [
  {
    title: 'Datenfluss Google Ads ↔ HubSpot',
    items: [
      { text: 'Der Google-Ads-Account ist in HubSpot verbunden, Klick-IDs (gclid) werden erfasst.' },
      { text: 'HubSpot spielt Deal-Stufen als Offline-Conversions zurück an Google Ads.' },
      { text: 'Die Migration auf Google Data Manager ist eingeplant (Stichtag beachten).', hint: 'Bestehende Offline-Import-Setups müssen rechtzeitig migriert werden.' },
    ],
  },
  {
    title: 'Lifecycle, Scoring & Attribution',
    items: [
      { text: 'Lifecycle Stages sind sauber definiert (Lead → MQL → SQL → Opportunity → Customer).' },
      { text: 'Lead Scoring läuft auf dem aktuellen Modell, nicht auf dem abgekündigten Legacy-Score.' },
      { text: 'Ein Attributionsmodell passt zu langen B2B-Sales-Cycles (nicht Last-Click).' },
    ],
  },
  {
    title: 'Tracking & DSGVO',
    items: [
      { text: 'HubSpot-Formulare & Tracking laufen erst nach Consent (Consent Mode v2).' },
      { text: 'Der Drittlandtransfer (USA) ist in der Datenschutzerklärung sauber abgebildet.' },
      { text: 'Datenhygiene: Dubletten, ungültige E-Mails und tote Deals werden regelmäßig bereinigt.' },
    ],
  },
];

export const CHECKLISTS: Record<string, Checklist> = {
  'google-ads-audit-checkliste': { id: 'google-ads-audit', sections: googleAdsAudit },
  'aeo-readiness-checkliste': { id: 'aeo-readiness', sections: aeoReadiness },
  'hubspot-google-ads-setup': { id: 'hubspot-setup', sections: hubspotSetup },
};
