---
title: "Three acquisitions, one CRM"
summary: "After three acquisitions a legal-tech group ran parallel CRMs, ad accounts and websites. I merged them into one HubSpot portal with one lifecycle, one reporting line and one set of ad accounts, without losing search traffic."
client: "European legal-tech software group"
industry: "LegalTech · B2B SaaS"
services: [CRM, RevOps, Data migration, SEO, Paid]
stack: [HubSpot, Microsoft Dynamics 365, Google Ads, LinkedIn Ads]
role: "Lead, CRM and marketing integration"
period: "2023 to 2026, exact windows per acquisition TODO"
heroMetric: { value: "3 → 1", label: "companies merged into one portal", definition: "Three acquired companies, each with its own CRM, ad accounts and domain, consolidated into one HubSpot portal and one reporting line." }
metrics:
  - { value: "3", label: "post merger integrations led", definition: "Acquisitions where I owned the CRM, ad account and domain migration end to end." }
  - { value: "1", label: "lifecycle for all companies", definition: "One set of lifecycle stages and lead status values applied across all migrated contacts." }
approved: false
featured: true
order: 10
source: "Upwork portfolio item 3 (captured 2026-10-19), website briefing §7.2, Oct 2026 price menu"
lang: en
---

Period: 2023 to 2026, exact windows per acquisition TODO (Andre confirms).

## Context

A European legal-tech software group bought three companies in a short period. Each came with its own CRM, its own ad accounts, its own domain and its own definition of a lead. The group wanted one sales organisation, one marketing team and one set of numbers. I led the CRM and marketing side of the integration, three times.

## The problem

Three systems, three versions of the same customer. The same law firm existed as a contact in two CRMs with different owners and different lifecycle stages. Ad budgets ran in parallel accounts bidding on the same keywords. Each company had a website with its own rankings, and a careless migration would have thrown those rankings away. Reporting to the board meant adding up spreadsheets from three sources.

## What I did

- Mapped the data models of each acquired CRM to the group's HubSpot portal, field by field.
- Wrote deduplication rules before migrating a single record, so matching contacts and companies merged instead of doubling.
- Replaced three sets of lifecycle stages and lead status values with one logic that sales and marketing agreed on.
- Consolidated the ad accounts: one structure per channel, shared negative lists, one conversion tracking chain into the CRM.
- Planned and ran the SEO migrations for the acquired domains: URL mapping, redirects, canonicals and monitoring after go live.
- Set up the hand over process for the combined sales team, so nobody lost a deal in the move.

## What was built

One HubSpot portal as the system of record for all companies, synced with Microsoft Dynamics 365 for sales. Migrated contacts carry their original source and company of origin as properties, so historic attribution survives. Pipelines follow one stage logic with exit criteria. Google Ads and LinkedIn Ads run in consolidated accounts, with conversions measured into the CRM rather than at the form. The acquired domains redirect into the group's structure with monitored rankings.

## Results

Three companies were merged into one portal and one reporting line; this counts each acquisition where I owned CRM, ad accounts and domain migration. One lifecycle and one lead status logic apply across all migrated contacts. The ad accounts were consolidated into one structure per channel. The domain migrations were run with redirect maps and post launch monitoring; detailed traffic figures for each move are TODO until Andre releases them.

## What did not work

TODO: the limits are still being documented. From experience, the hardest part was never the data. It was the agreement on one lifecycle definition between three sales teams that each believed their version was right. The first migration took longer than planned because that agreement came after the mapping, not before it.

## What I'd do for you

If you have bought a company and now run two of everything, start with the audit. It shows where the duplicates, the parallel budgets and the reporting gaps are. The post merger integration sprint then merges data, pipelines, ad accounts and domains into one system. During the transition, the fractional retainer gives the combined team one head instead of two.
