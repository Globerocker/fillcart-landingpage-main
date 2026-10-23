---
title: "HubSpot from zero: a 55,000 contact CRM for a legal-tech group"
summary: "A marketing and CRM system built from nothing for a European legal-tech software group: 55,000 contacts, 97 campaigns, 265 forms, a Dynamics 365 sync and a HubDB marketplace. Inbound contacts grew 133% in three years."
client: "European legal-tech software group"
industry: "LegalTech · B2B SaaS"
services: [CRM, RevOps, Automation, Content]
stack: [HubSpot, Microsoft Dynamics 365, HubDB]
role: "Head of Digital Marketing, owner of the HubSpot portal and the marketing team"
period: "2023 to 2026, exact project window TODO"
heroMetric: { value: "+133%", label: "inbound contacts in three years", definition: "New contacts created in HubSpot through inbound channels, compared across the first and the third year." }
metrics:
  - { value: "55,000", label: "contacts in one portal", definition: "Contact records in the HubSpot portal at the end of the period, after deduplication." }
  - { value: "97", label: "campaigns run", definition: "HubSpot campaign objects with at least one live asset attached." }
  - { value: "265", label: "forms live", definition: "Published HubSpot forms feeding lifecycle and lead status." }
  - { value: "164", label: "landing pages", definition: "Published landing pages in HubSpot CMS." }
approved: false
featured: false
order: 20
source: "Upwork portfolio item 1 (captured 2026-10-19), website briefing §7.2, Oct 2026 price menu"
lang: en
---

Period: 2023 to 2026, exact project window TODO (Andre confirms).

## Context

A European legal-tech software group with several product lines and a growing marketing team had no central marketing system. Leads came in through single forms, newsletters ran from separate tools, and the sales team worked in Microsoft Dynamics 365 without a reliable link to anything marketing did. I joined as online marketing manager and later ran the digital marketing team, which grew to 25 people over the period.

## The problem

Nobody could answer the simple question: which campaign produced which customer. Contact data lived in spreadsheets and in Dynamics 365, with no lifecycle stage, no lead status and no attribution. Every new campaign meant a new form and a new export. Sales trusted their own CRM and ignored marketing data, because the two systems did not talk.

## What I did

- Designed the HubSpot portal from zero: objects, properties, lifecycle stages, lead status and the hand off rules between marketing and sales.
- Built and ran the campaign machine: 97 campaigns, 265 forms and 164 landing pages, all mapped to lifecycle and attribution.
- Set up the two way sync with Microsoft Dynamics 365 so sales kept its system and marketing still saw what happened to every lead.
- Built a HubDB based marketplace that lists more than 7,500 law firms, which became a lead source in its own right.
- Grew the team around the system: content, paid, operations and reporting, each with a defined place in the portal.

## What was built

One HubSpot portal as the marketing system of record. Forms and landing pages write directly into the contact and company objects, with hidden fields for source and campaign. Lifecycle stages move automatically on defined events; lead status is set by sales inside Dynamics 365 and synced back. Attribution reports read from that chain, so a founder can see spend, leads, sales accepted leads and pipeline in one view. The HubDB marketplace runs on HubSpot CMS and feeds its own forms into the same lifecycle.

## Results

Inbound contacts grew by 133% over three years, measured as new inbound contact records per year. The portal holds 55,000 contacts after deduplication. 97 campaigns, 265 forms and 164 landing pages run inside one system with consistent attribution. The HubDB marketplace covers more than 7,500 law firms.

## What did not work

TODO: the limits of this project are still being documented. One thing I can say from the inside: a two system setup with Dynamics 365 and HubSpot needs constant care. Every new field on one side is a sync decision on the other, and the first months of the integration cost more time than planned.

## What I'd do for you

If your CRM is a spreadsheet or a starter portal nobody trusts, this is the pattern I would apply. The audit tells you what your lifecycle, forms and attribution actually look like today. A build sprint sets up the portal and the sync with your sales system. The fractional retainer keeps someone accountable for the numbers once it runs.
