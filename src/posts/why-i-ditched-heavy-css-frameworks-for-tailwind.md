---
title: "Why I ditched heavy CSS frameworks for Tailwind — and what changed"
description: "After years of fighting specificity wars and unused kilobytes, here's what finally convinced me to make the switch — and the measurable impact it had on both my workflow and my clients' performance scores."
date: "2025-03-08"
category: "Design"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
---

<!-- SAMPLE CONTENT from the template: replace with your own post before publishing. -->

## The problem with traditional CSS frameworks

I spent three years building projects with Bootstrap and Bulma. They're great frameworks — I won't pretend otherwise. But the longer I used them, the more I found myself fighting the system rather than working with it.

Every new project started the same way: import the framework, immediately override half of it, write a mountain of custom CSS to undo the defaults, then spend 40% of dev time debugging specificity issues. The final CSS bundle was usually 80–120kb, of which maybe 15% was actually used.

> "The moment you start writing !important to override a framework's defaults, something has gone fundamentally wrong."

## What made me give Tailwind a proper shot

I'd dismissed Tailwind for a long time. The utility-class approach looked messy in the HTML, and I was convinced it would make templates unreadable. Then a client asked me to maintain an existing Tailwind project, and I had no choice.

Two weeks in, I was converted. Here's what changed my mind:

- **No context switching.** I stopped bouncing between HTML and CSS files. Everything is right there in the markup.
- **Zero specificity wars.** Utility classes are all single-level selectors. You never fight the cascade.
- **Tiny final bundles.** PurgeCSS (now built in) means production builds are typically 5–15kb. My average went from 110kb to 8kb.
- **The design system is the config.** Spacing, colours, typography — all centralised in `tailwind.config.js`.

## The real-world performance impact

I rebuilt a client's marketing site using Tailwind CSS + Alpine.js, replacing their WordPress + Bootstrap 4 stack. The results after one month were hard to argue with:

- Lighthouse performance score: 47 → 96
- CSS bundle: 118kb → 7kb
- Time to first contentful paint: 3.8s → 0.9s
- Bounce rate: -22%

## What I still miss from traditional frameworks

It's not all perfect. A few things I still reach for plugins or custom components to replace:

- Pre-built complex components like modals, dropdowns, and datepickers
- Form validation styling (though Alpine.js handles the logic side well)
- Opinionated grid systems — Tailwind's grid is powerful but verbose for complex layouts

The ecosystem has largely caught up here. Headless UI, Flowbite, and Preline cover most of the gaps. And Alpine.js handles the interactivity layer beautifully without adding weight.

## My recommendation

If you're building anything custom — a SaaS product, a portfolio, a landing page — Tailwind is the right tool. The initial learning curve is about a week. After that, you'll ship faster than you ever did before.

If you need a WordPress theme or a simple brochure site with minimal custom styling, Bootstrap is still perfectly fine. Use the right tool for the job.

If this was helpful, share it with a frontend dev friend who's still on Bootstrap 4. 🧡
