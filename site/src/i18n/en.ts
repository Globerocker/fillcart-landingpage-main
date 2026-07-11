import type { LandingContent } from './types.ts';

export const en: LandingContent = {
  lang: 'en',
  altPath: '/',
  homePath: '/en/',

  meta: {
    title: 'Google Ads Management that fills your pipeline — not just lead lists | Fillcart',
    description:
      'Free Google Ads audit + free setup of your first search campaign. We optimize for pipeline value, not cost-per-lead. HubSpot Solutions Partner. From €5,000 ad spend/month.',
  },

  nav: {
    deal: 'The Deal',
    timeline: 'How it works',
    roi: 'ROI Calculator',
    services: 'Services',
    faq: 'FAQ',
    cta: 'Get your audit',
  },
  navCta: 'Get your audit',
  langSwitch: { current: 'EN', other: 'DE', otherHref: '/' },

  hero: {
    badge: 'GOOGLE ADS MANAGEMENT FOR B2B · DACH &amp; USA',
    headline:
      'Others deliver leads.<br><span class="muted">We fill your cart with </span><span class="accent">deals.</span>',
    sub: 'Google Ads campaigns optimized for <span class="hl">pipeline value in your CRM</span> — not for the cheapest click.',
    bullets: [
      'Audit &amp; first search campaign <b>free</b>',
      'Optimized for <b>revenue</b>, thanks to HubSpot CRM integration',
      'No setup fee, no lock-in contract as a ticket to entry',
    ],
    ctaPrimary: 'Get your free audit',
    ctaSecondary: 'Run the ROI numbers →',
    cartLabel: 'Pipeline value in CRM',
  },

  trust: {
    label: 'Proven, not claimed',
    items: ['Google Partner', 'HubSpot Solutions Partner', '20+ certifications', 'Budgets up to $80,000/month managed'],
  },

  problem: {
    eyebrow: 'The Problem',
    headline: 'Your CRM is full.<br>Your sales team still isn’t.',
    stats: [
      { num: '80%', text: 'of inquiries your sales team discards as unusable — despite a falling CPL.' },
      { num: '1 KPI', text: 'is what most agencies optimize: cost-per-lead. The wrong one.' },
      { num: '€0', text: 'revenue visibility: the monthly report ends at the click, not the deal.' },
    ],
    quote:
      'Optimize for leads, you get leads. <span class="accent">Optimize for pipeline, you get deals.</span>',
  },

  deal: {
    eyebrow: 'Our offer',
    headline: 'We work before you pay.',
    intro: 'No pitch deck, no setup fee, no 12-month contract. We flip the order:',
    steps: [
      {
        num: '01',
        badge: 'FREE',
        badgeColor: 'green',
        title: 'Free Ads audit',
        items: ['Account structure &amp; keywords', 'Conversion-tracking check', 'Honest analysis with real numbers'],
      },
      {
        num: '02',
        badge: 'FREE SETUP',
        badgeColor: 'green',
        title: 'First campaign. Built.',
        items: ['Keyword research &amp; ad copy', 'Bidding strategy &amp; tracking', 'You only pay your ad budget'],
      },
      {
        num: '03',
        badge: 'DATA DECIDES',
        badgeColor: 'sky',
        title: 'The campaign decides.',
        items: ['It builds pipeline → retainer', 'It delivers nothing → we part ways', 'The learnings are yours'],
      },
    ],
    callouts: {
      test: {
        big: '€50',
        unit: '/ day min.',
        title: 'Test-campaign budget',
        text: 'For the free test campaign we need <b>≈ €1,500/month</b> in ad budget. Below that, Google delivers too little data to learn on pipeline seriously.',
      },
      retainer: {
        big: '€5k',
        unit: '/ month from',
        title: 'Ongoing engagement',
        text: 'For the monthly retainer we work from <b>€5,000 ad spend</b> — only then is pipeline optimization statistically sound.',
      },
    },
  },

  timeline: {
    eyebrow: 'How it works',
    headline: 'How your pipeline develops',
    sub: 'Realistically, over 12 months — from audit to predictable pipeline. No hockey-stick fairy tales.',
    chartLabel: 'Avg. ROAS development (illustrative)',
    chartTitle: 'From test budget to scalable pipeline',
    legendRoas: 'ROAS',
    legendPipeline: 'Pipeline value',
    milestones: [
      { period: 'WEEK 1', title: 'Audit &amp; setup', text: 'Account analysis, clean tracking, HubSpot connected.' },
      { period: 'WEEK 2', title: 'Test campaign live', text: 'First search campaign, from €50/day ad spend.' },
      { period: 'MONTH 1–2', title: 'First signals', text: 'Search-term mining, negative lists, first SQLs in the CRM.' },
      { period: 'MONTH 3–6', title: 'Pipeline optimization', text: 'tROAS/tCPA on real CRM data. ROAS climbs noticeably.' },
      { period: 'MONTH 6–12', title: 'Scaling', text: 'Budget expansion, new campaign types, predictable pipeline.', highlight: true },
    ],
  },

  roi: {
    eyebrow: 'ROI Calculator',
    headline: 'Run your own case',
    sub: 'Industry-typical conversion rates, your budget, your deal size and closing rate. The numbers are benchmarks — in the audit we replace them with your real ones.',
    industries: [
      { key: 'saas', label: 'SaaS / Software', cpc: 4.5, cvr: 0.032, l2s: 0.45 },
      { key: 'legal', label: 'Law / Legal Tech', cpc: 6.8, cvr: 0.045, l2s: 0.4 },
      { key: 'finance', label: 'Finance / FinTech', cpc: 5.2, cvr: 0.04, l2s: 0.42 },
      { key: 'itservices', label: 'IT & Managed Services', cpc: 3.8, cvr: 0.03, l2s: 0.48 },
      { key: 'industrial', label: 'Industrial & Manufacturing', cpc: 3.2, cvr: 0.026, l2s: 0.5 },
      { key: 'consulting', label: 'Consulting / Professional Services', cpc: 4.0, cvr: 0.035, l2s: 0.44 },
      { key: 'hr', label: 'HR / Recruiting Software', cpc: 3.5, cvr: 0.033, l2s: 0.46 },
      { key: 'health', label: 'Health / MedTech', cpc: 4.2, cvr: 0.034, l2s: 0.43 },
    ],
    assumptionsTitle: 'Your assumptions',
    labelIndustry: 'Industry',
    labelBudget: 'Monthly ad budget',
    labelDeal: 'Avg. deal size (ACV)',
    labelClose: 'Closing rate per SQL',
    cvrCpcTpl: 'CVR {cvr}% · CPC €{cpc}',
    revenueLabel: 'Expected revenue / month',
    roasLabel: 'ROAS',
    sqlLabel: 'qualified SQLs / month',
    roiLabel: 'ROI on ad budget',
    funnel: { clicks: 'Clicks / month', leads: 'Leads', sqls: 'SQLs', deals: 'New deals' },
    disclaimer:
      'Illustrative benchmark calculation based on industry-typical values. No guarantee of results — in the free audit we calculate with your real account and CRM data.',
  },

  usp: {
    eyebrow: 'Why Fillcart',
    headline: 'We optimize for revenue.<br>That only works when you can see it.',
    colAgency: 'Typical agency',
    colFillcart: 'Fillcart',
    rows: [
      ['Optimizes for', 'Cost-per-lead', 'Pipeline value'],
      ['Success metric', 'Clicks, leads, CPL', 'Opportunities, revenue'],
      ['CRM integration', '“We don’t do that”', 'HubSpot integration included'],
      ['Getting started', 'Setup fee + lock-in contract', 'Audit + first campaign free'],
      ['Reporting', 'PDF once a month', 'Live dashboard with pipeline data'],
    ],
  },

  services: {
    eyebrow: 'Services',
    headline: 'What we actually do',
    cards: [
      { title: 'Campaign management', desc: 'Build &amp; optimization across all types: Search, Performance Max, Shopping, Display, Video, Demand Gen.', color: '#F97316' },
      { title: 'Keyword & search-term opt.', desc: 'Ongoing search-term mining, negative lists, match-type strategy.', color: '#38BDF8' },
      { title: 'Conversion & pipeline tracking', desc: 'Clean tracking setup, HubSpot integration, offline-conversion import.', color: '#22C55E' },
      { title: 'Budget & bid management', desc: 'Pacing, tROAS/tCPA control based on real pipeline data.', color: '#F97316' },
      { title: 'Transparent reporting', desc: 'Reports with the numbers your CEO understands: pipeline, revenue, ROI.', color: '#38BDF8' },
      { title: 'SEO & AEO as a complement', desc: 'Visibility in classic Google and in AI search (ChatGPT, Perplexity, AI Overviews).', color: '#22C55E' },
    ],
  },

  proof: {
    eyebrow: 'Who’s behind it',
    headline: 'Not a 40-person agency.<br>One operator.',
    body: 'Fillcart is the agency of <span class="hl">Andre Schüler</span>. No junior learns on your budget — whoever runs the audit also builds your campaigns and sits in every call.',
    chips: ['Head of Marketing · Legal-Tech SaaS', 'Head of SEO · Matrix42', 'HubSpot Consultant · B2B Enterprise'],
    stats: [
      { count: 80000, suffix: ' $/mo', label: 'ad budget managed across 3 countries', color: '#F97316' },
      { count: 23, prefix: '+', suffix: '%', label: 'more SQLs in 6 months', color: '#22C55E' },
      { count: 88, prefix: '+', suffix: '%', label: 'organic US traffic in 4 months', color: '#22C55E' },
      { count: 20, suffix: '+', label: 'certifications (Google, HubSpot)', color: '#F97316' },
    ],
    refsLabel: 'References &amp; badges',
    refs: ['stp.one', 'Matrix42', 'CIXON'],
    hubspotBadge: 'HubSpot Solutions Partner',
  },

  faq: {
    eyebrow: 'FAQ',
    headline: 'Honest answers',
    items: [
      { q: 'Why do you make the audit and first campaign free?', a: 'Because it’s the most honest sales argument we know. If our work delivers nothing, you shouldn’t pay. If it builds pipeline, you’ll want more of it — and for that we don’t need salespeople.' },
      { q: 'Where’s the catch?', a: 'There are two honest limitations: you pay your advertising budget to Google yourself (it was always your money). And we work from €5,000 monthly ad spend, because below that, pipeline optimization doesn’t work cleanly on a statistical level.' },
      { q: 'How much budget do I need for the test campaign?', a: 'For the free test campaign we plan for at least €50 daily budget — around €1,500 a month. Below that, Google collects too little conversion data to learn on pipeline seriously.' },
      { q: 'What happens if the free campaign delivers nothing?', a: 'Then we part ways with no invoice. The audit, campaign structure and all learnings are yours. Our risk, not yours.' },
      { q: 'Is HubSpot strictly required?', a: 'No. HubSpot is our home turf and the fastest route to pipeline optimization. With other CRMs we work via offline-conversion imports — a bit more manual work, same principle.' },
      { q: 'Who is this not for?', a: 'E-commerce with a pure ROAS focus under €5,000 budget, local service providers with €500 budgets, and anyone who wants a “leads at any cost” approach. There are cheaper providers for that.' },
    ],
  },

  cta: {
    eyebrow: 'Free audit',
    headline: 'Find out what your account can really do.',
    sub: '30 minutes, zero euros. Worst case: you learn everything’s running well. Best case: we capture the pipeline that’s being left on the table.',
    form: {
      title: 'Request an audit',
      name: 'Name',
      namePh: 'First and last name',
      email: 'Work email',
      emailPh: 'you@company.com',
      website: 'Website',
      websitePh: 'company.com',
      budget: 'Monthly Google Ads budget',
      budgetPlaceholder: 'Please choose…',
      budgetOptions: [
        { value: 'u5', label: 'under €5,000' },
        { value: '5-10', label: '€5,000 – €10,000' },
        { value: '10-25', label: '€10,000 – €25,000' },
        { value: 'o25', label: 'over €25,000' },
      ],
      lowBudgetNotice:
        'Honestly: under €5,000 monthly budget the data volume isn’t enough to optimize cleanly on pipeline. Come back any time once the budget fits.',
      message: 'Where do you feel it should be doing better?',
      messagePh: 'Optional',
      submit: 'Request your free audit',
      privacyNote: 'No spam. Your data goes straight into our HubSpot CRM.',
      successTitle: 'Request sent.',
      successText: 'We’ll get back to you within one business day — with the first things we noticed in your account.',
    },
    calendar: {
      title: 'Prefer to talk directly?',
      sub: '30-min slot, no obligation',
      badge: 'Google Calendar',
      placeholderNote:
        'Placeholder · the embedded HubSpot Meetings calendar loads here once the meeting link is configured.',
    },
  },

  hero_deals: [
    { tag: 'New inquiry', value: 24000, dot: '#38BDF8' },
    { tag: 'SQL · Demo', value: 96000, dot: '#38BDF8' },
    { tag: 'Opportunity', value: 310000, dot: '#F97316' },
    { tag: 'Closed Won', value: 480000, dot: '#22C55E' },
    { tag: 'Closed Won', value: 330000, dot: '#22C55E' },
  ],
  pipelineTotal: 1240000,
  pipelineLabel: 'Pipeline value in CRM',

  footer: {
    tagline: 'Google Ads management for B2B that optimizes for pipeline value instead of cost-per-lead.',
    colCompanyTitle: 'Fillcart',
    colCompany: [
      { label: 'About Fillcart', href: '/en/about' },
      { label: 'The Deal', href: '#deal' },
      { label: 'ROI Calculator', href: '#rechner' },
      { label: 'Services', href: '#leistungen' },
    ],
    colLegalTitle: 'Legal',
    colLegal: [
      { label: 'Legal Notice', href: '/en/legal-notice' },
      { label: 'Privacy', href: '/en/privacy' },
      { label: 'Deutsche Version', href: '/' },
    ],
    colContactTitle: 'Contact',
    hubspotBadge: 'HubSpot Solutions Partner',
    copyright: '© 2026 FILLCART LLC. All rights reserved.',
    registration: 'Registered in Wyoming, USA · Entity ID 2023-001346077',
  },
};
