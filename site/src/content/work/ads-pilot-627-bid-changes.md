---
title: "Ads Pilot: 627 CRM-driven bid changes"
summary: "An internal tool I built to bid on expected value per click instead of form fills: it reads lead outcomes from the CRM, proposes bid and keyword changes inside guardrails, and logs every decision with its hypothesis. 627 automated changes applied."
client: "Internal tool, built for a European legal-tech software group"
industry: "LegalTech · B2B SaaS"
services: [Paid, Automation]
stack: [Google Ads API, HubSpot, Next.js, SQLite, Supabase]
role: "Designer and builder of the tool, owner of the accounts it ran on"
period: "TODO"
heroMetric: { value: "627", label: "CRM-driven bid changes", definition: "Bid, budget and keyword changes proposed by the tool from CRM outcomes and applied to the ad accounts after validation." }
metrics:
  - { value: "627", label: "automated changes applied", definition: "Changes written to the ad accounts through the tool, each validated, read back and logged." }
approved: false
featured: true
order: 14
source: "Upwork portfolio item 8 (captured 2026-10-19), website briefing §7.2, Oct 2026 price menu; mechanism described from the tool's own documentation"
lang: en
---

Period: TODO (Andre confirms). No public link; the tool is internal.

## Context

Running paid acquisition for a European legal-tech software group, I kept hitting the same wall: the ad platforms optimise on what they can see, and what they can see is a form fill. The value of a lead only becomes known weeks later in the CRM, when sales accepts it or a deal closes. I wanted the bidding to learn from that, not from the form. So I built a tool for it.

## The problem

Manual bid management on CRM data does not scale. Pulling lead status per campaign, calculating what a click is actually worth and adjusting bids by hand takes hours per week and still lags behind. Smart bidding on form fills is faster but optimises for the wrong thing. The gap between those two is where budget goes to the wrong audience, as the paid budget review had shown.

## What I did

- Defined the bidding logic: expected value per click, derived from the CRM outcomes of past leads per keyword, campaign and audience, not from form fills.
- Built the tool as an internal web application connected to the Google Ads API and to HubSpot.
- Wrote the guardrails: every change is a proposal first, validated against limits, applied, read back from the account and written to an audit log.
- Added a decision log that stores what was changed, when, why, which hypothesis it tested and when it is reviewed.
- Ran it on the group's accounts in a daily cycle with a weekly review of outcomes.

## What was built

A Next.js application with a local database and a mirror in Supabase. It ingests account changes, search terms and CRM lead outcomes, calculates expected value per click and generates proposals for bids, budgets and negative keywords. A bid lab simulates the effect of a change before it is applied. A keyword guard for language and geography fails closed, so a proposal that cannot be checked is not applied. Accounts can be set to read only, which freezes all writes. Every applied change is validated, read back and logged.

## Results

627 CRM-driven bid changes were applied through the tool, each one proposed from CRM outcomes, validated against the guardrails and logged with its hypothesis. The tool turned a weekly manual routine into a daily cycle with a human review on top.

## What did not work

TODO: the limits are still being documented. What is already clear: a tool like this is only as good as the lead status discipline in the CRM. In weeks where sales did not update lead status, the expected value model had nothing new to learn from, and the proposals got conservative.

## What I'd do for you

I do not sell the tool. I sell what it taught me: bid on the value the CRM reports, not on the form. The Google Ads rebuild sprint sets up offline conversions from HubSpot back to Google and a bidding logic on expected contract value. Paid media operations then runs the weekly lead quality loop, with or without automation.
