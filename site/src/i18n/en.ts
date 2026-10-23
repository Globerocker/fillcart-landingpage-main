/**
 * English copy. Every string on the site lives here or in src/i18n/de.ts.
 * Sources: website briefing (23 Oct 2026), audit proposal PDF, EN price menu (Oct 2026).
 * Rules: no em/en dashes, first person singular, no invented facts, no location.
 */
import { SITE, type Locale } from '../config/site.ts';

const REMOTE = 'Remote. Working across Asia, Europe and the Americas.';

export const en = {
  lang: 'en' as Locale,
  locale: 'en-US',
  dir: 'ltr',

  meta: {
    siteName: 'Andre Schüler · FILLCART',
    titleSuffix: ' | Andre Schüler',
  },

  nav: {
    items: [
      { label: 'Services', href: '/services', foreign: false },
      { label: 'Work', href: '/work', foreign: false },
      { label: 'Projects', href: '/projects', foreign: false },
      { label: 'Partners', href: '/partners', foreign: false },
      { label: 'Insights', href: '/insights', foreign: false },
      { label: 'About', href: '/about', foreign: false },
    ],
    cta: 'Book a call',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    langLabel: 'Language',
    switchLabel: 'Deutsch',
    switchShort: 'DE',
    foreign: 'EN',
  },

  common: {
    bookCall: 'Book a call',
    bookCall30: 'Book a 30 min call',
    seeAudit: 'See the 500 EUR audit',
    emailMe: 'Email me',
    readMore: 'Read more',
    viewAll: 'View all',
    back: 'Back',
    draft: 'Draft. Not approved for publication yet.',
    todo: 'TODO',
    remote: REMOTE,
    languages: 'English, German, Spanish.',
    hours: 'European and US working hours.',
    minRead: 'min read',
    bookingNote: 'Opens Google Calendar in a new tab.',
    linkedin: 'LinkedIn',
    priceNote: 'Fixed prices, excl. tax. October 2026.',
    scopedAfterAudit: 'Scoped after the audit',
    perDay: 'per day',
    perMonth: 'per month',
    from: 'from',
    inGerman: 'In German',
    inEnglish: 'In English',
    newTab: 'opens in a new tab',
    skipToContent: 'Skip to content',
  },

  home: {
    meta: {
      title: 'Fractional Head of Marketing & RevOps for B2B SaaS',
      description:
        'I build and run the revenue system for B2B SaaS companies: Google and LinkedIn Ads, HubSpot or Salesforce, and the sales process in between. Start with a 500 EUR audit.',
    },
    hero: {
      eyebrow: 'Fractional Head of Marketing & RevOps · B2B SaaS',
      h1: 'Pipeline you can plan.<br>Not just leads.',
      sub: 'I build and run the revenue system for B2B SaaS companies: Google and LinkedIn Ads, HubSpot or Salesforce, and the sales process in between. Then I stay accountable for the numbers.',
      ctaPrimary: 'Book a 30 min call',
      ctaSecondary: 'See the 500 EUR audit',
      portraitAlt: 'Andre Schüler',
      name: 'Andre Schüler',
      role: 'Fractional Head of Marketing & RevOps',
      badgeLabel: 'FILLCART',
    },
    proof: {
      eyebrow: 'What goes on the invoice is also on the résumé',
      stats: [
        {
          value: 3,
          prefix: '',
          suffix: ' yrs',
          label: 'Head of Marketing at a European legal-tech group, team grown to 25',
          definition: '2023 to 2026, from Online Marketing Manager to Head of Digital Marketing.',
        },
        {
          value: 75,
          prefix: '',
          suffix: '',
          label: 'HubSpot implementations as a Diamond partner consultant',
          definition: 'Portal implementations delivered as senior consultant at a HubSpot Diamond partner, 2022 to 2023.',
        },
        {
          value: 55000,
          prefix: '',
          suffix: '',
          label: 'contacts migrated into a portal built from zero',
          definition: 'One HubSpot portal: 55,000 contacts, 97 campaigns, 265 forms, 164 landing pages.',
        },
        {
          value: 40,
          prefix: '$',
          suffix: '',
          label: 'per LinkedIn lead, 56% accepted by sales',
          definition: 'Blended cost per lead of a LinkedIn Ads programme; 56% of leads accepted by the sales team.',
        },
        {
          value: 133,
          prefix: '+',
          suffix: '%',
          label: 'more inbound contacts in three years',
          definition: 'Growth of inbound contacts over three years at the same company.',
        },
        {
          value: 53,
          prefix: '',
          suffix: '',
          label: 'client reviews on Fiverr, 4.7 average',
          definition: 'Public reviews: 46 five-star, 6 four-star, 1 three-star.',
          href: SITE.person.fiverr,
        },
      ],
      badgesLabel: 'Partner status',
      badges: [
        { alt: 'Google Partner', src: '/assets/partners/google-partner.png' },
        { alt: 'HubSpot Solutions Partner', src: '/assets/partners/hubspot-partner.png' },
      ],
    },
    problem: {
      eyebrow: 'The problem',
      h2: 'Your CRM is full. Your sales team still says the leads are bad.',
      cards: [
        {
          title: 'Optimising for cost per lead',
          text: 'Cheap leads look great in the ad account and die in the pipeline. The algorithm learns to find people who fill in forms, not people who buy.',
        },
        {
          title: 'Ads and CRM that don’t talk',
          text: 'Without lifecycle stages, lead status and offline conversions, the ad platforms never learn which leads became revenue. You pay for clicks and hope.',
        },
        {
          title: 'No one owns the whole chain',
          text: 'An agency runs the ads, a consultant owns the CRM, sales blames both. Nobody is accountable for pipeline.',
        },
      ],
    },
    ladder: {
      eyebrow: 'How I work',
      h2: 'Start small. Then stay.',
      intro: 'Three steps, each one optional. No 12-month lock-in.',
      steps: [
        {
          num: '01',
          title: 'Audit',
          meta: '500 EUR · 7 to 10 business days',
          text: 'Paid channels, CRM and positioning reviewed. You get a written audit, a prioritised action list and the quick wins your team can ship right away.',
          href: '/services/audit',
          cta: 'The 500 EUR audit',
        },
        {
          num: '02',
          title: 'Sprint',
          meta: 'Fixed scope, fixed price',
          text: 'I implement the plan: campaigns, landing pages, tracking, CRM fixes. Four to eight weeks, scoped from what the audit finds.',
          href: '/services/sprint',
          cta: 'Sprint options',
        },
        {
          num: '03',
          title: 'Fractional',
          meta: 'Two days a week · monthly notice',
          text: 'I run marketing and RevOps as your part-time Head of. Hands on in HubSpot and the ad accounts, not strategy only.',
          href: '/services/fractional',
          cta: 'The season ticket',
        },
      ],
      cta: 'Compare the options',
    },
    disciplines: {
      eyebrow: 'The four courses I work in',
      h2: 'One revenue system, four parts',
      items: [
        { num: 'Course 1', title: 'System', text: 'CRM and automation the team actually uses.' },
        { num: 'Course 2', title: 'Leads', text: 'Google, Meta and LinkedIn Ads, measured in the pipeline.' },
        { num: 'Course 3', title: 'Sales', text: 'Routing, follow-up, bidding on contract value.' },
        { num: 'Course 4', title: 'Revenue per customer', text: 'Packages, pricing, upsell paths.' },
      ],
    },
    work: {
      eyebrow: 'Selected work',
      h2: 'Proof, with the numbers defined',
      intro: 'Every case names what was measured and how. Client names are anonymised where I owe that to a former employer.',
      cta: 'All case studies',
      empty: 'Case studies are being approved for publication. Ask me for references on a call.',
    },
    who: {
      eyebrow: 'Who you work with',
      h2: 'From boarding teams to revenue teams.',
      text: 'On a boarding team you step onto a ship you have never seen, and you have minutes to bring it under control. I learned that with the German Navy. Today I do the same for revenue teams: one person who plans it, builds it and stays accountable for the numbers.',
      cta: 'More about me',
    },
    partners: {
      eyebrow: 'Partners',
      h2: 'I work with people I trust.',
      text: 'Design, development and performance from a small network instead of one big agency. Each partner owns their craft. I own performance and RevOps.',
      cta: 'Partner network',
    },
    insights: {
      eyebrow: 'Insights',
      h2: 'Latest articles',
      cta: 'All insights',
    },
    finalCta: {
      h2: 'If something in your pipeline is stuck, send me three sentences about it.',
      text: 'I reply myself. Then a 30-minute call where I ask questions rather than present.',
      primary: 'Book a call',
      secondary: 'Email me',
    },
  },

  about: {
    meta: {
      title: 'About Andre Schüler',
      description:
        'From boarding teams to revenue teams. Andre Schüler, Fractional Head of Marketing & RevOps for B2B SaaS: the path, the principles and the certifications.',
    },
    hero: {
      eyebrow: 'About',
      h1: 'From boarding teams to revenue teams.',
      sub: 'Andre Schüler. Fractional Head of Marketing & RevOps for B2B SaaS. ' + REMOTE,
    },
    story: {
      eyebrow: 'The story',
      paragraphs: [
        'On a boarding team you step onto a ship you have never seen. You don’t know what is below deck, and you have minutes to bring it under control. I learned that with the German Navy’s Specialized Operations Forces. Today I do the same for revenue teams.',
        'The ship is usually a CRM with three versions of the same customer. Or leads that sales stopped trusting a year ago. Or a company that bought a competitor and still runs two of everything.',
        'I plan it and I build it myself, because the person who draws the architecture should be the one who has to live with it.',
      ],
    },
    timeline: {
      eyebrow: 'The path',
      h2: 'Where the numbers come from',
      items: [
        { period: '2013 to 2015', title: 'Boarding soldier, German Navy', text: 'EU mission Atalanta. Led a team of 6.' },
        { period: 'TODO', title: 'Shipping', text: 'Ship purchases. Dates to be confirmed.', todo: true },
        { period: '2018 to 2020', title: 'CEO, phone and PC repair business', text: 'Three branches.' },
        { period: '2020 to 2021', title: 'Founder, SEO Sprinter', text: '' },
        { period: '2021 to 2022', title: 'Senior SEO Manager', text: '', employer: 'NX Digital', anonymous: 'a digital agency' },
        { period: '2022', title: 'Head of SEO', text: '', employer: 'Matrix42', anonymous: 'an enterprise software vendor' },
        { period: '2022 to 2023', title: 'Senior HubSpot Consultant', text: '75 implementations.', employer: 'CIXON (HubSpot Diamond partner)', anonymous: 'a HubSpot Diamond partner' },
        { period: '2023 to 2026', title: 'Online Marketing Manager, then Head of Digital Marketing', text: 'A European legal-tech software group. Team grown to 25.' },
        { period: '2024 to 2026', title: 'Senior CRM Consultant, project-based', text: '16 custom HubSpot builds for SaaS and AI companies.', employer: 'Bloom Rocket', anonymous: 'a HubSpot agency' },
        { period: '2024 to today', title: 'Founder, FILLCART LLC', text: 'Fractional Head of Marketing & RevOps for B2B SaaS.' },
        { period: '2026 to today', title: 'Co-founder, CapturePilot by Americurial', text: 'Systems, data, go-to-market.' },
      ],
      employerNote: 'Some employers are described, not named, until they have confirmed.',
    },
    how: {
      eyebrow: 'How I work',
      h2: 'I plan it and I build it myself.',
      text: 'Because the person who draws the architecture should be the one who has to live with it.',
      principles: [
        { title: 'One person, start to finish', text: 'No hand-off to a junior after the kick-off. You talk to the person who does the work.' },
        { title: 'Numbers into the pipeline', text: 'Measured to the opportunity and the deal, not to the form fill.' },
        { title: 'Everything documented', text: 'Architecture, rules, decisions. You can run it without me.' },
        { title: 'Fixed price, fixed scope', text: 'Overruns are my risk, not yours.' },
      ],
    },
    off: {
      eyebrow: 'Off the clock',
      h2: 'Pressure is a habit.',
      items: ['Three professional Muay Thai bouts', 'IPSC shooting', 'Golf, badly but often'],
      languages: 'Languages: English, German (native), Spanish (conversational).',
    },
    certs: {
      eyebrow: 'Certifications',
      h2: 'Certified where it matters',
      groups: [
        {
          name: 'HubSpot',
          items: ['Marketing Hub', 'Sales Hub', 'Service Hub', 'CMS Hub', 'RevOps', 'Solutions Partner'],
          links: [
            { label: 'Sales Enablement certificate', href: SITE.person.hubspotCerts[0] },
            { label: 'Solutions Partner certificate', href: SITE.person.hubspotCerts[1] },
          ],
        },
        { name: 'Google', items: ['Google Ads Search', 'Display', 'Video', 'Measurement', 'Google Partner'], links: [] },
        { name: 'Other', items: ['LinkedIn Marketing Labs', 'Shopify Partner'], links: [] },
      ],
      verifiedLabel: 'Verified',
      linksNote: 'Links to the remaining certificates follow.',
    },
    cta: {
      h2: 'Want to know if I fit your setup?',
      text: 'Thirty minutes. I ask questions rather than present.',
      primary: 'Book a call',
      secondary: 'See the services',
    },
  },

  services: {
    meta: {
      title: 'Services and prices',
      description:
        'Marketing and revenue operations for B2B software as fixed dishes at fixed prices: a 500 EUR audit, implementation sprints, trainings and a fractional Head of Marketing & RevOps.',
    },
    hero: {
      eyebrow: 'Services · the menu',
      h1: 'Marketing & Revenue Operations for B2B software, as fixed dishes at fixed prices.',
      sub: 'Every item is a problem I have solved before, with a fixed deliverable and a fixed price. If you recognise one, the rest is easy.',
    },
    howToRead: {
      eyebrow: 'How to read this menu',
      items: [
        'Starters are audits: small, fast, and afterwards you know where you stand.',
        'Mains are rebuilds with a result. Trainings make your team self-sufficient.',
        'The season ticket is for people who want one head instead of three agencies.',
        'All prices fixed, no timesheets. If the delivery falls short, we talk about the delivery, not the invoice.',
      ],
    },
    compare: {
      eyebrow: 'The ladder',
      h2: 'Audit, sprint or fractional',
      intro: 'Three steps, each one optional. Most clients start with the 500 EUR audit.',
      cols: ['', 'Audit', 'Sprint', 'Fractional'],
      rows: [
        ['Price', '500 EUR, upfront', 'Fixed price per sprint, see the mains below', 'Monthly, see the season ticket below'],
        ['Duration', '7 to 10 business days', 'Four to eight weeks', 'Ongoing, two days a week, monthly notice'],
        ['You get', 'Written audit, prioritised action list, quick wins', 'Implemented campaigns, landing pages, tracking, CRM fixes', 'Head of Marketing & RevOps across markets: paid, organic and RevOps oversight'],
        ['Credit', 'Credited in full toward a sprint booked within 30 days', '', ''],
      ],
      links: [
        { label: 'The 500 EUR audit', href: '/services/audit' },
        { label: 'Sprint options', href: '/services/sprint' },
        { label: 'The season ticket', href: '/services/fractional' },
      ],
    },
    menuTitle: { eyebrow: 'The menu', h2: 'All dishes at a glance' },
    groups: {
      starters: {
        key: 'starters',
        num: '1',
        title: 'Starters',
        sub: 'Audits. Small, fast, with an action plan and a call.',
        items: [
          {
            problem: 'You can’t tell which channel produces paying customers.',
            name: 'HubSpot portal audit',
            price: '$850',
            text: 'I check lead sources, lifecycle, pipelines, workflows and reporting against what your sales team actually does, and tell you what is broken and in which order to fix it.',
            bullets: [
              '60 checkpoints: properties, lifecycle, pipelines, workflows, attribution',
              '20-minute Loom walkthrough a founder can follow',
              'Fix list ranked by impact, with hours estimate',
              '30-minute prioritisation call, delivered in 5 working days',
            ],
          },
          {
            problem: 'Ads are running, but sales says the leads are bad.',
            name: 'Second opinion: running ad channel',
            price: '$650',
            priceNote: 'Each additional channel: +$400',
            text: 'Google, Meta or LinkedIn Ads, one channel, audited once by someone who ran these campaigns himself. At a European legal-tech group, 67% of early search spend reached the wrong audience while cost per lead still looked fine. That’s the gap I look for.',
            bullets: [
              'Structure, keywords and audiences, bidding, creatives, conversion tracking into the CRM',
              'Benchmarks against B2B SaaS norms for that channel',
              '20-minute Loom and a 45-minute call with you',
              'Action items for the next 30 days, planned together',
            ],
          },
          {
            problem: 'You rank, but ChatGPT and Google never mention you.',
            name: 'SEO & GEO audit',
            price: '$850',
            text: 'Technology, content, structure and citability: what Google sees, what AI answers pick up, and what’s missing.',
            bullets: [
              'Technical crawl, content gaps, internal linking',
              'GEO: schema, FAQ structures, citable pages for AI search',
              'Keyword and topic plan for six months',
              'Loom walkthrough and 30-minute call',
            ],
          },
        ],
      },
      mains: {
        key: 'mains',
        num: '2',
        title: 'Mains',
        sub: 'Rebuilds with a result. Four to eight weeks.',
        items: [
          {
            problem: 'Spreadsheets, a starter CRM, three tools side by side. Nobody trusts the numbers.',
            name: 'HubSpot CRM build sprint',
            price: '$7,200',
            text: 'Architecture in two or three sessions with founder and sales lead, then I build. You get a documented portal and a team that knows why every field exists.',
            bullets: [
              'Objects, properties, lifecycle, pipelines with exit criteria',
              'Lead scoring, routing, SLAs, sequences and workflows',
              'Integrations with product and billing stack (API, n8n)',
              'Dashboards for founders and sales, documentation, hand-over session',
            ],
          },
          {
            problem: 'You need pipeline from LinkedIn, but every attempt burned money.',
            name: 'LinkedIn Ads launch',
            price: '$3,900',
            text: 'At a European legal-tech group: $40 per lead, 56% accepted by sales, SQLs up 23% in six months. I build the campaign structure before the first dollar runs.',
            bullets: [
              'ICP and offer in one week',
              'Campaign structure on paper: stages, audiences, landing pages, conversion events, CRM fields',
              'Setup, creative brief, tracking into HubSpot',
              'Two weeks of optimisation with sales feedback on lead quality',
            ],
          },
          {
            problem: 'Google Ads deliver clicks, not customers.',
            name: 'Google Ads rebuild',
            price: '$3,900',
            text: 'Account rebuilt around the ICP, conversions measured into the pipeline, bids on expected contract value instead of form fills.',
            bullets: [
              'New keyword and audience logic, negatives, landing page mapping',
              'GA4, Tag Manager, offline conversions from HubSpot back to Google',
              'Four weeks of operation with weekly review',
              'Hand-over with a rulebook your team can run',
            ],
          },
          {
            problem: 'The campaign is good; the page behind it loses half the traffic.',
            name: 'Landing page package',
            price: '$3,200',
            text: 'Three landing pages in HubSpot CMS, built for one campaign and one reason to buy, with tracking into the deal.',
            bullets: [
              'Three pages: offer, comparison, demo request, each with a copy brief',
              'Forms, lifecycle mapping, conversion events in HubSpot',
              'A/B setup for headline and form',
              'Delivered in three weeks',
            ],
          },
          {
            problem: 'Nobody downloads whitepapers any more.',
            name: 'Interactive lead magnet',
            price: '$2,700',
            text: 'A calculator, self-assessment or configurator that gives the visitor something back immediately and gives you a qualified contact with context.',
            bullets: [
              'Concept and logic with you, built as a web tool',
              'Result page with personalised output and follow-up sequence',
              'Data lands in HubSpot as properties, not as a PDF download',
              'Delivered in four weeks',
            ],
          },
          {
            problem: 'You bought a company and now you have two CRMs, two websites, two sales teams.',
            name: 'Post-merger integration',
            price: 'from $10,000',
            text: 'Done three times at a European legal-tech group: data migration, duplicates, pipelines, ad accounts, domains. One portal, one reporting line, no parallel systems.',
            bullets: [
              'Data model mapping and migration with deduplication rules',
              'Pipelines and lifecycle on one logic',
              'Ad accounts, domains and SEO merged',
              'Hand-over process for the combined sales team',
            ],
          },
          {
            problem: 'New domain, new website, and the fear of losing the rankings.',
            name: 'SEO migration & relaunch support',
            price: '$4,300',
            text: 'I launched a new domain for a legal-tech group: from 29 to 1,631 ranking keywords with no traffic lost in the move. I support your relaunch from the URL map to four weeks after go-live.',
            bullets: [
              'URL mapping, redirects, canonicals, structure plan',
              'Pre-launch checks and go-live support',
              'Four weeks of monitoring with corrections',
              'Hand-over to your team or agency',
            ],
          },
        ],
      },
      trainings: {
        key: 'trainings',
        num: '3',
        title: 'Trainings',
        sub: 'One day with your team so they can do it themselves afterwards. On site or remote.',
        items: [
          {
            problem: 'The portal is there, but the team clicks around it.',
            name: 'HubSpot one-day training',
            price: '$2,100',
            unit: 'per day',
            text: 'A day with your marketing and sales people in your portal: lifecycle, pipelines, sequences, reporting. No slides about HubSpot, work inside HubSpot.',
            bullets: ['Agenda built on your setup, not a textbook', 'Exercises on real deals and contacts', 'Cheat sheet and rulebook to keep', 'Up to 12 participants'],
          },
          {
            problem: 'Nobody on the team knows what still counts since AI search.',
            name: 'SEO & GEO one-day training',
            price: '$2,100',
            unit: 'per day',
            text: 'What Google and AI answers reward today, how to build content that gets cited, and how to measure it.',
            bullets: ['Fundamentals: technology, content, structure, GEO', 'Editorial process and topic planning as a team', 'Live audit of your own pages', 'Up to 12 participants'],
          },
          {
            problem: 'Everyone talks about AI; nobody in marketing uses it properly.',
            name: 'AI in marketing one-day training',
            price: '$2,100',
            unit: 'per day',
            text: 'A day where your team applies AI to real tasks: research, campaign copy, reporting, automation with n8n. With clear rules on what AI must not decide.',
            bullets: ['Workflows for content, ads and CRM hygiene', 'Two automations running by the end of the day', 'Prompt and review rules for the team', 'Up to 12 participants'],
          },
        ],
      },
      season: {
        key: 'season',
        num: '4',
        title: 'Season ticket',
        sub: 'For people who want one head instead of three agencies.',
        items: [
          {
            problem: 'You need marketing leadership, not a full-time hire.',
            name: 'Fractional Head of Marketing & RevOps',
            price: '$6,600',
            unit: 'per month',
            text: 'Two days a week. I plan, build and own the numbers: CRM, paid, sales process, reporting. For three years that was my job on a $26M revenue line.',
            bullets: ['Two fixed days a week, monthly notice', 'Marketing plan, budget and channel mix', 'Hands-on in HubSpot and the ad accounts, not strategy only', 'Monthly founder report: pipeline, CAC, conversion by stage'],
          },
          {
            problem: 'You want someone running the accounts who optimises for pipeline.',
            name: 'Paid media operations',
            price: '$2,100',
            unit: 'per month',
            text: 'Google, Meta and LinkedIn Ads run continuously, measured into sales, with a weekly lead-quality loop.',
            bullets: ['Weekly optimisation, monthly report', 'Tests with a hypothesis, a clean read and written learnings', 'Makes sense from $5,000 monthly budget'],
          },
          {
            problem: 'The product sells, but the prices are guesses.',
            name: 'Pricing & packaging session',
            price: '$1,700',
            text: 'One day with your CRM data: what customers actually buy, where deals break, which packages carry upsell.',
            bullets: ['Deal data and churn pattern analysis', 'Package proposal with price tiers', 'Upsell paths set up in the CRM'],
          },
        ],
      },
    },
    situations: {
      eyebrow: 'Which dish fits which situation',
      h2: 'Three typical situations in which founders call me',
      items: [
        { title: 'Seed to Series A, first sales hires, CRM in spreadsheets', path: ['HubSpot portal audit', 'CRM build sprint', 'HubSpot training'] },
        { title: 'Product works, paid budget grows, sales complains about lead quality', path: ['Second opinion', 'Google Ads rebuild or LinkedIn launch', 'Paid media operations'] },
        { title: 'Acquisition closed, two systems, one team', path: ['Post-merger integration', 'SEO migration', 'Season ticket for the transition'] },
      ],
    },
    included: {
      eyebrow: 'Included with every dish',
      items: [
        'One person who plans and builds. No hand-off to a junior after the kick-off.',
        'Everything documented: architecture, rules, decisions. You can run it without me.',
        'Numbers measured into the pipeline, not to the form fill.',
        'Fixed price. Overruns are my risk, not yours.',
        'English, German, Spanish. European and US working hours.',
      ],
    },
    howItStarts: {
      h2: 'Which problem looks familiar?',
      eyebrow: 'How it starts',
      steps: [
        'You tell me which dish you recognised. One line is enough.',
        'A 30-minute call where I ask questions rather than present.',
        'You get a proposal with exactly what’s on this menu, or an honest no if it doesn’t fit.',
      ],
      primary: 'Book a call',
      secondary: 'Email me',
    },
  },

  audit: {
    meta: {
      title: 'Revenue & Marketing Audit, 500 EUR',
      description:
        'A fixed price, fixed scope review of your paid channels, your CRM and your funnel. Written audit, prioritised action list, quick wins. Delivered 7 to 10 business days after access.',
    },
    hero: {
      eyebrow: 'Paid revenue & marketing audit',
      h1: 'Revenue & Marketing Audit',
      sub: 'A clear, prioritised view of where your company loses pipeline and what to fix first.',
      text: 'A fixed price, fixed scope review of your paid channels, your CRM and your funnel. You get a written audit with findings, a prioritised action list ranked by impact and effort, and the quick wins your team can ship right away. No retainer, no lock-in. If you want help implementing, we scope that separately, based on what the audit finds.',
      facts: [
        { value: '500 EUR', label: 'flat fee, paid upfront' },
        { value: '1 to 3', label: 'paid channels reviewed in depth' },
        { value: '7 to 10', label: 'business days after access is granted' },
        { value: '2', label: 'calls: 45 min kickoff, 60 min results' },
      ],
      cta: 'Book the audit call',
      who: {
        title: 'Who this is for',
        text: 'B2B companies spending on paid acquisition that want to know, before spending more, which channels, campaigns and CRM processes actually turn into pipeline, and where the leaks are.',
      },
      contents: {
        title: 'Contents',
        items: ['Scope: what is in and what is out', 'Process, timeline and deliverables', 'Client onboarding checklist', 'Investment, terms and next steps'],
      },
    },
    scope: {
      num: '01',
      title: 'Scope',
      sub: 'Focused on purpose. A 500 EUR audit has to go deep on the few things that move revenue, not skim everything.',
      inTitle: 'In scope',
      cols: ['Area', 'What I review', 'Typical questions answered'],
      rows: [
        ['Paid channels (1 to 3)', 'Account, campaign and audience level for up to three paid channels, for example Google Ads, LinkedIn Ads or Meta. Structure, targeting, bidding, budgets, creative and conversion tracking.', 'Where is budget wasted? Which audiences and campaigns produce pipeline, not just clicks?'],
        ['CRM and processes', 'HubSpot focus: lifecycle stages, lead status, attribution setup, and the handoffs between marketing and sales. Other CRMs reviewed on the same logic.', 'Can you trust your funnel numbers? Where do leads stall or get lost between teams?'],
        ['Positioning and funnel', 'Product positioning and messaging, the funnel path and the key landing pages your paid traffic lands on.', 'Does the message match the ad and the buyer? Where do visitors drop off?'],
        ['Competitors (up to 3)', 'Positioning, offers and visible paid activity of up to three competitors you name.', 'How do you stand out, and where are competitors outbidding or outmessaging you?'],
      ],
      outTitle: 'Out of scope',
      out: [
        { b: 'Implementation or fixes.', t: 'The audit tells you what to change; making the changes is a separate sprint.' },
        { b: 'New campaign builds,', t: 'new ads, new landing pages or new creative.' },
        { b: 'More than 3 paid channels', t: 'in one audit.' },
        { b: 'Full data warehouse or BI rebuild,', t: 'including custom dashboards.' },
        { b: 'Legal or compliance review,', t: 'including privacy and consent setup.' },
        { b: 'Ongoing management', t: 'of channels, CRM or campaigns.' },
      ],
      more: {
        title: 'Need more?',
        text: 'Extra channels, a deeper CRM rebuild or hands-on fixes can be added as a separately scoped sprint. We agree on that before any work starts, so the audit price never changes.',
      },
    },
    process: {
      num: '02',
      title: 'Process, timeline and deliverables',
      sub: 'Five steps, two calls, one written audit. The clock starts once access is in place, so the faster the onboarding checklist is done, the faster you get results.',
      steps: [
        { step: 'Step 1', title: 'Kickoff', text: '45 min call. Goals, current setup, priorities, which channels and competitors are in scope.' },
        { step: 'Step 2', title: 'Access', text: 'You work through the onboarding checklist. Read-only access is enough to start.' },
        { step: 'Step 3', title: 'Analysis', text: 'Channels, CRM, funnel, positioning and competitors reviewed against your goals.' },
        { step: 'Step 4', title: 'Written audit', text: 'Findings, prioritised action list and quick wins, delivered as a document.' },
        { step: 'Step 5', title: 'Results call', text: '60 min walkthrough, your questions answered, next steps agreed.' },
      ],
      timelineTitle: 'Timeline',
      timelineCols: ['When', 'What happens'],
      timeline: [
        ['Booking', 'Payment received, kickoff call scheduled'],
        ['Kickoff', '45 min call; onboarding checklist shared right after'],
        ['Access granted', 'Analysis starts. This is day 1 of the timeline'],
        ['About 7 to 10 business days later', 'Written audit delivered, results call held'],
      ],
      timelineNote: 'Delays in access or missing information push the timeline back by the same amount. I flag anything missing as early as possible.',
      receiveTitle: 'What you receive',
      receive: [
        { b: 'Written audit', t: 'with findings per channel, CRM, funnel and competitors' },
        { b: 'Prioritised action list', t: 'ranked by impact and effort, so you know what to do first' },
        { b: 'Quick wins', t: 'your team can implement right away' },
        { b: '60 min results call', t: 'to walk through the audit and answer questions' },
        { b: 'Recording and notes', t: 'of the results call, so the whole team can catch up' },
        { b: 'A clear recommendation', t: 'on whether a sprint makes sense, and what it would cover' },
      ],
    },
    checklist: {
      num: '03',
      title: 'Client onboarding checklist',
      sub: 'What I need from you. Kept general on purpose, because every B2B model is a little different. Share whatever applies; if something does not exist yet, that is a finding too.',
      items: [
        { b: 'Access to the paid channels in scope', t: '(for example Google Ads, LinkedIn Ads, Meta) and to the CRM. Ideally Super Admin, so no role switch is needed later; a standard user is fine as the minimum. API access is important for pulling and checking data.' },
        { b: 'Tech stack list:', t: 'all tools and subscriptions currently booked across marketing, sales and RevOps.' },
        { b: 'Current sales cycle overview:', t: 'status quo, the stages a deal moves through, and the average cycle length.' },
        { b: 'Key numbers, whatever applies:', t: 'average deal size, ACV or ARR per customer, win rate, pipeline volume.' },
        { b: 'Analytics and tracking access', t: 'if available, for example your web analytics, tag manager and conversion tracking.' },
      ],
      helpfulTitle: 'Also helpful, if you have it',
      helpful: [
        'Your ideal customer profile and main buyer personas',
        'Up to 3 competitors you want compared',
        'Past reports, dashboards or decks on marketing performance',
        'One main contact for questions during the analysis',
      ],
      access: {
        title: 'How access is handled',
        text: 'Access is used only for this audit. I make no changes to campaigns, settings or CRM data during the audit, and you can remove access as soon as the results call is done. An NDA is available on request.',
      },
    },
    terms: {
      num: '04',
      title: 'Investment, terms and next steps',
      sub: 'One flat fee, paid upfront. No hourly billing, no surprises.',
      box: {
        eyebrow: 'Paid revenue & marketing audit',
        text: 'Scope as described above · Written audit, results call, recording and notes',
        price: '500 EUR',
      },
      cols: ['Item', 'Detail'],
      rows: [
        ['Fee', '500 EUR flat for the scope above'],
        ['Payment', '100% upfront; work starts once payment is received'],
        ['Credit toward a sprint', 'The audit fee is credited in full toward a sprint booked within 30 days of the results call'],
        ['Out of scope work', 'Quoted separately and only after your written approval'],
      ],
      afterTitle: 'What comes after the audit',
      after: [
        { tag: 'Now', title: 'Audit', text: 'Know what is broken, what it costs you and what to fix first.', href: '' },
        { tag: 'Optional', title: 'Sprint', text: 'A fixed scope sprint built directly from the audit’s priority list: the fixes and quick wins, implemented.', href: '/services/sprint' },
        { tag: 'Optional', title: 'Monthly retainer', text: 'Ongoing growth work: A/B tests, landing pages, content and campaigns, reviewed every month.', href: '/services/fractional' },
      ],
      afterNote: 'The sprint and the retainer are never a condition of the audit. You can take the audit and implement everything in house.',
      next: {
        eyebrow: 'Next step',
        text: 'Book a short call to confirm scope and pick your kickoff date.',
        cta: 'Book the audit call',
      },
    },
    faq: {
      eyebrow: 'Questions',
      h2: 'Before you book',
      items: [
        { q: 'Do I need HubSpot?', a: 'No. HubSpot is where I go deepest, but other CRMs are reviewed on the same logic: lifecycle, lead status, attribution, handoffs.' },
        { q: 'We only run one channel. Does the price change?', a: 'No. The audit then goes deeper on that one channel and on the CRM. The price stays 500 EUR.' },
        { q: 'Can you implement the fixes?', a: 'Yes, as a separately scoped sprint. The audit fee is credited in full toward a sprint booked within 30 days of the results call.' },
        { q: 'How is access handled?', a: 'Read-only is enough to start. I make no changes to campaigns, settings or CRM data during the audit, and you can remove access after the results call. An NDA is available on request.' },
      ],
    },
  },

  sprint: {
    meta: {
      title: 'Implementation sprints',
      description:
        'Fixed scope, fixed price rebuilds in four to eight weeks: HubSpot CRM build, LinkedIn Ads launch, Google Ads rebuild, landing pages, lead magnets, post-merger integration, SEO migration.',
    },
    hero: {
      eyebrow: 'Services · sprint',
      h1: 'Rebuilds with a result.',
      sub: 'Four to eight weeks, fixed scope, fixed price. Built directly from the audit’s priority list, or from a problem you already know you have.',
    },
    scope: {
      eyebrow: 'What a sprint can cover',
      h2: 'Scope options',
      items: [
        { title: 'Campaign launch', text: 'LinkedIn or Google Ads, structured before the first euro runs: stages, audiences, conversion events, CRM fields.' },
        { title: 'Landing pages', text: 'Pages built for one campaign and one reason to buy, with tracking into the deal.' },
        { title: 'Tracking and attribution', text: 'GA4, Tag Manager, offline conversions from the CRM back to the ad platforms.' },
        { title: 'CRM cleanup or migration', text: 'Objects, properties, lifecycle, pipelines with exit criteria. Deduplication rules for migrations.' },
        { title: 'Sales hand-off', text: 'Routing, SLAs, sequences, lead status. The moment a lead leaves marketing is defined, not assumed.' },
      ],
    },
    menuIntro: { eyebrow: 'Mains', h2: 'Fixed-price sprints', text: 'Every sprint is a problem I have solved before, with a fixed deliverable and a fixed price.' },
    custom: {
      title: 'Something else?',
      text: 'If your problem is not on the menu, it gets scoped after the audit. We agree the scope before any work starts, so the price never changes mid-sprint.',
      cta: 'Start with the audit',
    },
    cta: { h2: 'Not sure which sprint?', text: 'Start with the 500 EUR audit. The fee is credited in full toward a sprint booked within 30 days.', primary: 'See the audit', secondary: 'Book a call' },
  },

  fractional: {
    meta: {
      title: 'Fractional Head of Marketing & RevOps',
      description:
        'Two days a week, monthly notice. I plan, build and own the numbers: CRM, paid, sales process, reporting. For founders who want one head instead of three agencies.',
    },
    hero: {
      eyebrow: 'Services · season ticket',
      h1: 'One head instead of three agencies.',
      sub: 'Two days a week, monthly notice. I plan, build and own the numbers: CRM, paid acquisition, sales process, reporting.',
    },
    means: {
      eyebrow: 'What “Head on top” means',
      h2: 'The job, not the deck',
      items: [
        { title: 'Monthly plan', text: 'Marketing plan, budget and channel mix, reviewed every month against pipeline.' },
        { title: 'Channel owners managed', text: 'Agencies, freelancers and in-house owners get briefs, deadlines and a clean read on results.' },
        { title: 'Reporting into pipeline', text: 'Monthly founder report: pipeline, CAC, conversion by stage. Not clicks.' },
        { title: 'RevOps governance', text: 'Lifecycle, lead status, routing and attribution stay consistent as the team grows.' },
      ],
    },
    markets: {
      eyebrow: 'Markets',
      h2: 'Where the work happens',
      text: 'Agreed per engagement. European and US working hours.',
      items: ['DACH', 'Benelux', 'France', 'EMEA', 'UK', 'US', 'LATAM', 'APAC'],
    },
    menuIntro: { eyebrow: 'Season ticket', h2: 'Ongoing options' },
    cta: { h2: 'Is a fractional head the right step?', text: 'Most engagements start with the audit, then a sprint. The season ticket comes when the system runs and needs an owner.', primary: 'Book a call', secondary: 'See the audit' },
  },

  work: {
    meta: {
      title: 'Case studies',
      description: 'Case studies from CRM, paid acquisition, SEO and RevOps work for B2B software companies. Every number is defined.',
    },
    hero: {
      eyebrow: 'Work',
      h1: 'Case studies',
      sub: 'Every number names what was measured and how. Client names are anonymised where I owe that to a former employer.',
    },
    filters: [
      { key: 'all', label: 'All' },
      { key: 'CRM', label: 'CRM' },
      { key: 'Paid', label: 'Paid' },
      { key: 'SEO', label: 'SEO' },
      { key: 'RevOps', label: 'RevOps' },
      { key: 'Automation', label: 'Automation' },
    ],
    empty: 'Case studies are being approved for publication. Ask me for references on a call.',
    labels: {
      client: 'Client',
      industry: 'Industry',
      services: 'Services',
      stack: 'Stack',
      role: 'Role',
      period: 'Period',
      results: 'Results',
      definitions: 'How these numbers are defined',
      more: 'More case studies',
    },
    cta: { h2: 'Similar problem?', text: 'Send me three sentences about it. I reply myself.', primary: 'Book a call', secondary: 'Email me' },
  },

  projects: {
    meta: {
      title: 'Projects and ventures',
      description: 'Things Andre Schüler builds when no client is paying for it: CapturePilot by Americurial, Ads Pilot, FILLCART.',
    },
    hero: { eyebrow: 'Projects & ventures', h1: 'Things I build when no client is paying me to.', sub: 'Own ventures and internal tools. Each one taught me something that shows up in client work.' },
    roleLabel: 'Role',
    visit: 'Visit',
  },

  partners: {
    meta: {
      title: 'Partners and network',
      description: 'The people Andre Schüler works with: design, development and ventures. Plus how to become a partner.',
    },
    hero: { eyebrow: 'Partners & network', h1: 'I work with people I trust.', sub: 'Design, development and performance from a small network instead of one big agency. Each partner owns their craft. I own performance and RevOps.' },
    pending: 'Partner profiles are being confirmed with the people involved and will appear here.',
    become: {
      eyebrow: 'Become a partner',
      title: 'Agencies who need a performance and RevOps lead',
      text: 'Design or dev shops whose clients ask for someone to own the numbers: paid acquisition, CRM, attribution and the sales hand-off. Write me three sentences about your clients.',
      cta: 'Email me',
    },
  },

  insights: {
    meta: {
      title: 'Insights',
      description: 'Articles on CRM, paid acquisition, SEO and revenue operations for B2B software companies.',
    },
    hero: { eyebrow: 'Insights', h1: 'Notes from the revenue system', sub: 'Articles on CRM, paid acquisition, SEO and RevOps. Written from the work, not from a content calendar.' },
    topics: { crm: 'CRM', paid: 'Paid', seo: 'SEO & GEO', revops: 'RevOps', automation: 'Automation', story: 'Story' } as Record<string, string>,
    otherLang: { text: 'More articles in German', href: '/de/insights' },
    linkedin: { eyebrow: 'On LinkedIn', title: 'Shorter notes, most weeks.', text: 'Observations from the work, posted while they are fresh.', cta: 'Follow on LinkedIn' },
    article: { by: 'By', published: 'Published', updated: 'Updated', contents: 'Contents', related: 'Read next', author: { name: 'Andre Schüler', text: 'Fractional Head of Marketing & RevOps for B2B SaaS. Plans it, builds it, stays accountable for the numbers.', cta: 'About me' } },
    cta: { h2: 'Reading is cheap. Finding the leak is 500 EUR.', text: 'A fixed scope audit of your paid channels, CRM and funnel. Written findings, prioritised action list, quick wins.', primary: 'See the audit', secondary: 'Book a call' },
    empty: 'No articles in this language yet.',
  },

  checklists: {
    meta: { title: 'Checklists', description: 'Interactive checklists for Google Ads, AEO and the HubSpot to Google Ads data flow.' },
    hero: { eyebrow: 'Checklists', h1: 'Interactive checklists', sub: 'Tick off what already runs. Your progress stays in your browser.' },
  },

  contact: {
    meta: {
      title: 'Contact and booking',
      description: 'Book a 30 minute call with Andre Schüler or send three sentences about what is stuck in your pipeline.',
    },
    hero: { eyebrow: 'Contact', h1: 'Three sentences about what’s stuck.', sub: 'Book a call or write. I reply myself.' },
    book: {
      eyebrow: 'Book',
      title: 'A 30 minute call',
      text: 'Pick a slot in my calendar. I ask questions rather than present. If it fits, you get a proposal with exactly what’s on the menu. If not, an honest no.',
      cta: 'Open the calendar',
    },
    form: {
      eyebrow: 'Or write',
      title: 'Three sentences are enough',
      name: 'Name',
      email: 'Work email',
      company: 'Company',
      website: 'Website',
      message: 'What’s stuck?',
      messagePlaceholder: 'Three sentences about your pipeline, your CRM or your ads.',
      markets: 'Markets you sell in',
      marketOptions: ['DACH', 'Benelux', 'France', 'UK', 'US', 'LATAM', 'APAC', 'Other'],
      budget: 'Monthly paid budget',
      budgetOptions: ['No paid budget yet', 'Under 5,000', '5,000 to 15,000', '15,000 to 50,000', 'Over 50,000'],
      budgetPlaceholder: 'Select',
      consent: 'I agree that my details are used to answer my request. Details in the privacy policy.',
      submit: 'Send',
      sending: 'Sending',
      success: 'Thanks. I reply myself, usually within one business day.',
      error: 'That did not go through. Please email me directly:',
      required: 'Required',
    },
    direct: { eyebrow: 'Direct', email: 'Email', phone: 'Phone', linkedin: 'LinkedIn', remote: REMOTE, hours: 'European and US working hours.' },
  },

  roi: {
    meta: {
      title: 'ROI calculator for B2B paid acquisition',
      description: 'Industry-typical conversion rates, your budget, your deal size and closing rate. See what paid acquisition could return in pipeline.',
    },
    hero: { eyebrow: 'ROI calculator', h1: 'Run your own case', sub: 'Industry-typical conversion rates, your budget, your deal size and closing rate. The numbers are benchmarks. In the audit I replace them with your real ones.' },
    industries: [
      { key: 'saas', label: 'SaaS / Software', cpc: 6.5, cvr: 0.032, l2s: 0.45 },
      { key: 'legal', label: 'Law / Legal Tech', cpc: 9.5, cvr: 0.045, l2s: 0.4 },
      { key: 'finance', label: 'Finance / FinTech', cpc: 7.5, cvr: 0.04, l2s: 0.42 },
      { key: 'itservices', label: 'IT & Managed Services', cpc: 5.5, cvr: 0.03, l2s: 0.48 },
      { key: 'industrial', label: 'Industrial & Manufacturing', cpc: 4.8, cvr: 0.026, l2s: 0.5 },
      { key: 'consulting', label: 'Consulting / Professional Services', cpc: 6.0, cvr: 0.035, l2s: 0.44 },
      { key: 'hr', label: 'HR / Recruiting Software', cpc: 5.2, cvr: 0.033, l2s: 0.46 },
      { key: 'health', label: 'Health / MedTech', cpc: 6.2, cvr: 0.034, l2s: 0.43 },
    ],
    assumptionsTitle: 'Your assumptions',
    labelIndustry: 'Industry',
    labelBudget: 'Monthly ad budget',
    labelDeal: 'Avg. deal size (ACV)',
    labelClose: 'Closing rate per SQL',
    cvrCpcTpl: 'CVR {cvr}% · CPC ${cpc}',
    revenueLabel: 'Expected revenue per month',
    roasLabel: 'ROAS',
    sqlLabel: 'qualified SQLs per month',
    roiLabel: 'ROI on ad budget',
    funnel: { clicks: 'Clicks per month', leads: 'Leads', sqls: 'SQLs', deals: 'New deals' },
    funnelNote: 'Each stage drops from left to right. That is normal. What matters is what arrives as a deal.',
    disclaimer: 'Illustrative benchmark calculation based on industry-typical values. No guarantee of results. In the audit I replace these with your real account and CRM data.',
    cta: { h2: 'Want this with your real numbers?', text: 'The 500 EUR audit replaces the benchmarks with your account and CRM data.', primary: 'See the audit', secondary: 'Book a call' },
  },

  footer: {
    tagline: 'Fractional Head of Marketing & RevOps for B2B SaaS. ' + REMOTE,
    cols: [
      {
        title: 'Services',
        links: [
          { label: 'The 500 EUR audit', href: '/services/audit' },
          { label: 'Sprints', href: '/services/sprint' },
          { label: 'Fractional', href: '/services/fractional' },
          { label: 'ROI calculator', href: '/roi' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about', foreign: false },
          { label: 'Work', href: '/work', foreign: false },
          { label: 'Projects', href: '/projects', foreign: false },
          { label: 'Partners', href: '/partners', foreign: false },
          { label: 'Insights', href: '/insights', foreign: false },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Imprint', href: '/imprint' },
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ],
      },
    ],
    contactTitle: 'Contact',
    copyright: '© 2026 FILLCART LLC',
    registered: 'Registered in Wyoming, USA',
  },

  cookie: {
    text: 'Analytics cookies load only if you agree. Until then nothing is tracked.',
    accept: 'Accept',
    decline: 'Decline',
    more: 'Privacy policy',
  },

  legal: {
    imprint: { title: 'Imprint', eyebrow: 'Legal' },
    privacy: { title: 'Privacy policy', eyebrow: 'Legal' },
    terms: { title: 'Terms and conditions', eyebrow: 'Legal' },
    draftNote: 'Draft. Not legal advice. To be reviewed by a lawyer before launch.',
  },

  notFound: {
    title: 'Page not found',
    text: 'That page moved or never existed. The old fillcart.de and andreschuler.com addresses redirect to the new pages; if you landed here from one of them, tell me.',
    cta: 'Back to the start',
    secondary: 'Services',
  },
};

export type Dict = typeof en;
