---
title: "LinkedIn Ads at $40 per lead, 56% accepted by sales"
summary: "A five stage LinkedIn Ads funnel for a legal-tech group, measured into the CRM: $40 per lead, 56% of leads accepted by sales, sales qualified leads up 23% in six months, $104 blended over twelve months."
client: "European legal-tech software group"
industry: "LegalTech · B2B SaaS"
services: [Paid, RevOps]
stack: [LinkedIn Ads, HubSpot]
role: "Owner of the LinkedIn programme, from structure to optimisation"
period: "2023 to 2026, exact window TODO"
# CPL figure: $40 per Andre's Oct 2026 price menu; LinkedIn About says EUR 20 to 30; confirm before approval
heroMetric: { value: "$40", label: "per LinkedIn lead, 56% accepted by sales", definition: "Media spend divided by leads created in HubSpot from LinkedIn Ads; acceptance is the share of those leads that sales set to accepted in the CRM." }
metrics:
  - { value: "56%", label: "of leads accepted by sales", definition: "Leads from LinkedIn Ads marked as accepted by the sales team in HubSpot, divided by all LinkedIn leads." }
  - { value: "+23%", label: "sales qualified leads in six months", definition: "Change in monthly sales qualified leads from LinkedIn over the first six months of the programme." }
  - { value: "$104", label: "blended cost per lead over twelve months", definition: "Total LinkedIn media spend over twelve months divided by all leads in that period, including the learning phase." }
approved: false
featured: false
order: 30
source: "Upwork portfolio item 4 (captured 2026-10-19), website briefing §7.2, Oct 2026 price menu"
lang: en
---

Period: 2023 to 2026, exact window TODO (Andre confirms). Cost per lead figure: $40 per the October 2026 price menu; the LinkedIn profile quotes a different range. TODO: confirm before approval.

## Context

A European legal-tech software group needed pipeline from LinkedIn. Earlier attempts had produced clicks and a few form fills that sales did not follow up. The ask was not more leads. It was leads that the sales team would accept, measured in the CRM and not in the ad platform.

## The problem

LinkedIn is expensive per click, and a campaign optimised on form fills finds the people most likely to fill a form, not the people most likely to buy. Without a CRM feedback loop, the platform never learns what a good lead looks like. The previous setup had no stages, no agreed definition of a sales accepted lead and no tracking from the ad to the deal.

## What I did

- Defined the ideal customer profile and the offer with sales before any budget ran.
- Designed a five stage funnel on paper first: audiences, messages, landing pages, conversion events and the CRM fields each stage writes.
- Set up the campaigns, briefed the creatives and wired the tracking into HubSpot, including lead status and sales acceptance.
- Ran a weekly loop with sales on lead quality and fed that back into targeting and bidding.
- Reported cost per lead, acceptance rate and sales qualified leads monthly, as one chain from spend to pipeline.

## What was built

Five campaign stages, from awareness to demo request, each with its own audience and conversion event. Every lead lands in HubSpot with source, campaign and stage as properties. Sales sets the lead status; the acceptance rate and the sales qualified lead count read directly from those values. Budget decisions were made on accepted leads and sales qualified leads, not on cost per click.

## Results

Cost per lead was $40, measured as LinkedIn media spend divided by leads created in HubSpot from LinkedIn. 56% of those leads were accepted by sales, measured as the share set to accepted in the CRM. Sales qualified leads from LinkedIn rose 23% over the first six months. Over twelve months, including the learning phase, the blended cost per lead was $104.

## What did not work

The two cost figures tell the honest story. $40 is the figure once the funnel ran as designed; $104 is the blended number over twelve months, which includes the months of testing audiences and messages that did not convert. TODO: Andre documents which stages drove the learning cost.

## What I'd do for you

If you need pipeline from LinkedIn and every attempt so far burned money, the second opinion audit on your running channel shows what the current structure optimises for. The LinkedIn Ads launch sprint builds the funnel, the tracking into HubSpot and the sales feedback loop before the first dollar runs. Paid media operations keeps it measured into sales, month after month.
