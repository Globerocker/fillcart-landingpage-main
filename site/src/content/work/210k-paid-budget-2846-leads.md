---
title: "$210,000 of paid budget, 2,846 leads: what worked, what did not"
summary: "A twelve month review of paid acquisition at a legal-tech group: $210,000 across Google, LinkedIn and Meta, 2,846 leads at $74 blended, and the finding that 67% of early search spend had reached the wrong audience while cost per lead still looked fine."
client: "European legal-tech software group"
industry: "LegalTech · B2B SaaS"
services: [Paid, RevOps]
stack: [Google Ads, LinkedIn Ads, Meta Ads, HubSpot, GA4]
role: "Head of Digital Marketing, owner of the paid budget"
period: "2023 to 2026, exact twelve month window TODO"
heroMetric: { value: "67%", label: "of early search spend reached the wrong audience", definition: "Share of search budget in the early phase that went to queries and audiences outside the ideal customer profile, found by reviewing search terms against the CRM." }
metrics:
  - { value: "$210,000", label: "paid budget reviewed", definition: "Total media spend across Google Ads, LinkedIn Ads and Meta Ads in the period." }
  - { value: "2,846", label: "leads created", definition: "Contacts created in HubSpot with a paid source in the period." }
  - { value: "$74", label: "blended cost per lead", definition: "Total paid spend divided by all paid leads: Google $62, LinkedIn $104, Meta $47." }
approved: false
featured: true
order: 12
source: "Upwork portfolio item 5 (captured 2026-10-19), website briefing §7.2, Oct 2026 price menu"
lang: en
---

Period: 2023 to 2026, exact twelve month window TODO (Andre confirms).

## Context

A European legal-tech software group spent $210,000 on paid acquisition across Google Ads, LinkedIn Ads and Meta Ads. The accounts had grown over time, channel by channel, each with its own logic. I owned the budget and wanted one answer: which spend produced pipeline, and which spend only produced a good looking cost per lead.

## The problem

Cost per lead looked healthy in every channel report. Sales said the leads were bad. Both were true. Search campaigns were bidding on broad terms that matched the product category but not the buyer. The form fills were real, the cost per form was low, and a large part of the spend went to people who would never buy. The ad platforms had no way to know, because the CRM outcome never travelled back to them.

## What I did

- Reviewed every search term and audience against the ideal customer profile and the lead status in HubSpot, not against the platform's own conversion count.
- Rebuilt the channel reporting as one chain: spend, leads, accepted leads, sales qualified leads, per channel and per campaign.
- Cut the search structure around the buyer: new keyword logic, negative lists, landing page mapping.
- Sent sales outcomes from HubSpot back to Google as offline conversions, so bidding could learn from accepted leads instead of form fills.
- Reallocated budget between Google, LinkedIn and Meta on cost per accepted lead rather than cost per lead.

## What was built

A reporting chain in HubSpot and GA4 that follows every paid lead from click to lead status. Google Ads receives offline conversions from the CRM. LinkedIn and Meta campaigns write source and campaign into contact properties on entry. Budget reviews happen weekly on that chain. The structure hands over with a rulebook, so the team can keep running it.

## Results

$210,000 of paid budget produced 2,846 leads, measured as HubSpot contacts with a paid source. The blended cost per lead was $74: $62 on Google, $104 on LinkedIn and $47 on Meta. The review found that 67% of early search spend had reached the wrong audience, measured by matching search terms and audiences against the ideal customer profile and the CRM outcome.

## What did not work

The early search spend. 67% of it reached the wrong audience while the cost per lead still looked fine, which is exactly why nobody caught it sooner. Meta delivered the cheapest leads at $47; TODO: Andre documents how those leads compared on acceptance rate before this case is approved, because a cheap lead that sales rejects is not a cheap lead.

## What I'd do for you

If your ads are running and sales says the leads are bad, the audit reviews one to three paid channels against your CRM and finds the gap between reported cost per lead and real cost per accepted lead. The Google Ads rebuild sprint then restructures the account around the buyer with offline conversions from your CRM. Paid media operations keeps the weekly lead quality loop running.
