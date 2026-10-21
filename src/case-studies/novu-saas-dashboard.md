---
title: "Novu — SaaS Dashboard Redesign"
summary: "A complete UX and UI overhaul of a B2B notification management platform — reducing cognitive load, streamlining the core workflow, and converting more trial users into paying customers."
cover: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&q=80"
tags: ["SaaS", "Figma", "Tailwind"]
year: "2025"
duration: "6 weeks"
facts:
  - { label: "Client", value: "Novu Inc." }
  - { label: "Role", value: "Lead UI/UX Designer" }
  - { label: "Timeline", value: "Jan – Feb 2025" }
  - { label: "Deliverables", value: "Figma, HTML/CSS" }
stats:
  - { value: "−40%", label: "Cognitive load (SUS score)" }
  - { value: "+27%", label: "Trial-to-paid conversion" }
  - { value: "−35%", label: "Support tickets (onboarding)" }
  - { value: "4.8/5", label: "Post-launch NPS" }
---

<!-- SAMPLE CONTENT from the template: the client, numbers and quotes below are made up.
     Replace this whole file with your own case study before publishing. -->

## The brief

Novu is a B2B notification infrastructure platform — it lets developers route, manage, and monitor notifications across email, SMS, push, and in-app channels. The product was technically solid, but the dashboard had grown organically over two years without a coherent design strategy. By early 2025, the team were seeing high churn in the 14-day trial window and receiving consistent feedback that the platform was "powerful but overwhelming."

My mandate was simple: fix the first-hour experience without rebuilding the product from scratch. The budget was fixed and the engineering team had six weeks to ship.

> "We're losing users in the first 20 minutes. They sign up, see the dashboard, and just bounce. The product does exactly what they need — they just can't find it."

## Discovery and research

### User interviews

I ran 9 user interviews with a mix of current paying customers and recently churned trial users. The sessions were 45-minute moderated usability tests combined with post-task interviews. Key findings:

- 7 of 9 users couldn't locate the "Workflows" section without help during their first session
- The notification log and the analytics panel were confused for one another by 5 users
- The sidebar had 14 top-level navigation items — users reported feeling "unsure where to start"
- Trial users specifically wanted a "get your first notification live" path, not a feature overview

### Heuristic audit

I ran a full Nielsen heuristic evaluation of the existing interface and identified 23 violations across 6 categories. The most critical were around visibility of system status, recognition over recall, and error prevention in the workflow builder.

![Existing dashboard with heuristic violations annotated during the audit phase](https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=1200&q=80)

## Design strategy

Based on the research, I built the redesign around three principles:

### Progressive disclosure

Show only what's needed for the current task. Advanced features revealed on demand, not upfront.

### Opinionated navigation

Reduce the sidebar to 6 core items. Group secondary actions in context panels rather than global nav.

### Goal-first onboarding

Replace the feature tour with a 3-step "send your first notification" flow that delivers an aha-moment in under 5 minutes.

## Process

1. **Card sorting and IA rebuild (weeks 1–2).** Remote card sort with 12 participants via Optimal Workshop. 14 nav items → 6 clear destinations with zero ambiguous groupings.
2. **Lo-fi wireframes and async review.** 8 key screens sketched in Figma wireframe mode. Async review via Loom with the product team — 3 iteration rounds over 4 days.
3. **Hi-fi design and component library.** Full Figma component library built on Auto Layout. 40+ components covering all states (empty, loading, error). Dark mode tokens included.
4. **Usability testing and iteration.** 5 moderated sessions on the hi-fi prototype. 2 significant UX issues surfaced and resolved before handoff. SUS score improved from 54 → 82.
5. **Handoff and front-end support.** Zeroheight design doc + Tailwind CSS implementation of the new design tokens. Present during sprint to support the engineering team on edge cases.

![Final hi-fi screens showing the redesigned sidebar, dashboard home, and notification workflow builder](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

Before: a 14-item sidebar with no clear entry point. After: a 6-item sidebar with a goal-first onboarding checklist.

## Key design decisions

### Collapsing the sidebar

The original sidebar mixed primary destinations with contextual actions and account settings indiscriminately. I applied a strict three-tier hierarchy: primary navigation (6 items, always visible), contextual actions (appear in a right panel when relevant), and account/settings (collapsed under an avatar menu). This alone reduced the cognitive entry cost significantly — users knew where they were and where they could go.

### The onboarding checklist

Rather than a product tour, I designed a persistent but dismissible checklist embedded in the dashboard home. Three steps: connect a channel, create a workflow, send a test notification. Each step launches an inline mini-wizard that completes within the dashboard without breaking context. In the first month post-launch, 68% of trial users completed all three steps vs 21% previously.

### Empty states as teachers

Every empty state in the old design was a blank panel. In the redesign, each empty state includes a one-sentence explanation of what the section does, a primary CTA, and a secondary link to documentation. This reduced support tickets specifically about feature discovery by 35%.

## Results

The redesign shipped in week 6, exactly on schedule. Metrics were tracked over the following 6 weeks post-launch compared to the same prior period.

- SUS (System Usability Scale) score: 54 → 82 (+28 points)
- Trial-to-paid conversion rate: +27%
- Onboarding completion (3-step flow): 21% → 68%
- Support tickets (onboarding-related): −35%
- Average time to first workflow created: 18 min → 4 min
- Post-launch NPS: 4.8/5

> "Eliott completely changed how we think about our onboarding. The checklist alone added 6 figures to our ARR in the first quarter. Exceptionally thorough process and a pleasure to work with."

## Reflections

The biggest lesson from this project: most SaaS UX problems aren't about aesthetics, they're about information architecture. The product was capable — users just couldn't find the value fast enough. A focused IA overhaul delivered more measurable ROI than a visual rebrand ever could have.

If I were to do it again, I'd push harder for a longer discovery phase. Six weeks is tight for a full dashboard redesign, and we had to make some navigation decisions based on incomplete card-sort data. The results held up, but another round of testing before hi-fi would have given me more confidence on a few borderline calls.
