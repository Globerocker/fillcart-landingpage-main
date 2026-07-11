export type ResourceKind = 'checklist' | 'whitepaper';
export type Accent = 'orange' | 'sky' | 'green';

export interface Resource {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  intro: string;
  kind: ResourceKind;
  accent: Accent;
  metaLabel: string;
  /** Key into CHECKLISTS for interactive checklists. */
  checklistId?: string;
  featured?: boolean;
}

export const ACCENT_HEX: Record<Accent, string> = {
  orange: '#F97316',
  sky: '#38BDF8',
  green: '#22C55E',
};

export const RESOURCES: Resource[] = [
  {
    slug: 'google-ads-audit-checkliste',
    title: 'Die Google-Ads-Audit-Checkliste',
    kicker: 'Checkliste · 20 Punkte',
    description:
      'Die 20 Fragen, die wir uns bei jedem B2B-Konto stellen. Hak ab, was bei dir sitzt — der Rest ist deine To-do-Liste.',
    intro:
      'Wir haben unseren internen Audit-Ablauf zu einer Checkliste eingedampft, die du direkt hier durchklicken kannst. Kein PDF-Download-Gate, kein E-Mail-Zwang: hak ab, was bei dir schon läuft. Dein Fortschritt bleibt lokal in deinem Browser. Wenn am Ende zu viele Punkte offen bleiben, weißt du, wo Pipeline liegen bleibt.',
    kind: 'checklist',
    accent: 'orange',
    metaLabel: '20 Prüfpunkte',
    checklistId: 'google-ads-audit-checkliste',
    featured: true,
  },
  {
    slug: 'aeo-readiness-checkliste',
    title: 'AEO-Readiness-Checkliste',
    kicker: 'Checkliste · 11 Punkte',
    description:
      'Wirst du von ChatGPT, Perplexity und Google AI Overviews zitiert? Die 11 Punkte, die darüber entscheiden.',
    intro:
      'Die Suche wird zur Antwort — und wer nicht zitiert wird, existiert für die KI nicht. Diese Checkliste prüft, ob deine Inhalte, deine Entität und deine Technik bereit für die KI-Suche sind. Basierend auf aktueller Forschung (u. a. der Princeton-GEO-Studie) und den Daten aus unseren Wissens-Artikeln.',
    kind: 'checklist',
    accent: 'sky',
    metaLabel: '11 Prüfpunkte',
    checklistId: 'aeo-readiness-checkliste',
  },
  {
    slug: 'hubspot-google-ads-setup',
    title: 'HubSpot × Google Ads Setup-Checkliste',
    kicker: 'Checkliste · 9 Punkte',
    description:
      'Der Datenfluss, der aus Klicks Pipeline macht: Offline-Conversions, Lifecycle, Attribution und DSGVO.',
    intro:
      'Die USP von CRM-verbundenen Kampagnen steht und fällt mit dem Setup. Diese Checkliste geht den Datenfluss zwischen Google Ads und HubSpot durch — von der gclid bis zur Offline-Conversion, plus Lifecycle, Attribution und DSGVO. Wenn hier Punkte offen sind, optimiert Google auf Formulare statt auf Umsatz.',
    kind: 'checklist',
    accent: 'green',
    metaLabel: '9 Prüfpunkte',
    checklistId: 'hubspot-google-ads-setup',
  },
];

export function getResource(slug: string): Resource | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}
