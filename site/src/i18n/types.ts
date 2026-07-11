/** Locale identifiers used across the site. */
export type Lang = 'de' | 'en';

export interface NavStrings {
  deal: string;
  timeline: string;
  roi: string;
  services: string;
  faq: string;
  cta: string;
}

export interface Industry {
  key: string;
  label: string;
  cpc: number;
  cvr: number;
  l2s: number; // lead-to-SQL rate
}

/** A single ROAS/pipeline stage card that drops into the hero cart. */
export interface Deal {
  tag: string;
  value: number;
  dot: string;
}

export interface LandingContent {
  lang: Lang;
  /** Path to the equivalent page in the other language (for the switcher + hreflang). */
  altPath: string;
  homePath: string;

  meta: { title: string; description: string };

  nav: NavStrings;
  navCta: string;
  langSwitch: { current: string; other: string; otherHref: string };

  hero: {
    badge: string;
    headline: string; // may contain <br> and <span> markup
    sub: string;
    bullets: string[]; // may contain <b> markup
    ctaPrimary: string;
    ctaSecondary: string;
    cartLabel: string;
  };

  trust: { label: string; items: string[] };

  problem: {
    eyebrow: string;
    headline: string;
    stats: { num: string; text: string }[];
    quote: string; // contains <span class="accent"> markup
  };

  deal: {
    eyebrow: string;
    headline: string;
    intro: string;
    steps: { num: string; badge: string; badgeColor: 'green' | 'sky'; title: string; items: string[] }[];
    callouts: {
      test: { big: string; unit: string; title: string; text: string };
      retainer: { big: string; unit: string; title: string; text: string };
    };
  };

  timeline: {
    eyebrow: string;
    headline: string;
    sub: string;
    chartLabel: string;
    chartTitle: string;
    legendRoas: string;
    legendPipeline: string;
    milestones: { period: string; title: string; text: string; highlight?: boolean }[];
  };

  roi: {
    eyebrow: string;
    headline: string;
    sub: string;
    industries: Industry[];
    assumptionsTitle: string;
    labelIndustry: string;
    labelBudget: string;
    labelDeal: string;
    labelClose: string;
    cvrCpcTpl: string; // e.g. "CVR {cvr}% · CPC {cpc} €"
    revenueLabel: string;
    roasLabel: string;
    sqlLabel: string;
    roiLabel: string;
    funnel: { clicks: string; leads: string; sqls: string; deals: string };
    disclaimer: string;
  };

  usp: {
    eyebrow: string;
    headline: string;
    colAgency: string;
    colFillcart: string;
    rows: [string, string, string][];
  };

  services: {
    eyebrow: string;
    headline: string;
    cards: { title: string; desc: string; color: string }[];
  };

  proof: {
    eyebrow: string;
    headline: string;
    body: string; // contains <span> markup
    chips: string[];
    stats: { count: number; prefix?: string; suffix?: string; label: string; color: string }[];
    refsLabel: string;
    refs: string[];
    hubspotBadge: string;
  };

  faq: {
    eyebrow: string;
    headline: string;
    items: { q: string; a: string }[];
  };

  cta: {
    eyebrow: string;
    headline: string;
    sub: string;
    form: {
      title: string;
      name: string;
      namePh: string;
      email: string;
      emailPh: string;
      website: string;
      websitePh: string;
      budget: string;
      budgetPlaceholder: string;
      budgetOptions: { value: string; label: string }[];
      lowBudgetNotice: string;
      message: string;
      messagePh: string;
      submit: string;
      privacyNote: string;
      successTitle: string;
      successText: string;
    };
    calendar: {
      title: string;
      sub: string;
      badge: string;
      placeholderNote: string;
    };
  };

  hero_deals: Deal[];
  pipelineTotal: number;
  pipelineLabel: string;

  footer: {
    tagline: string;
    colCompanyTitle: string;
    colCompany: { label: string; href: string }[];
    colLegalTitle: string;
    colLegal: { label: string; href: string }[];
    colContactTitle: string;
    hubspotBadge: string;
    copyright: string;
    registration: string;
  };
}
