---
title: "Running Security Audits"
summary: "One of the nice things about hosting on GitHub and GitHub Pages are the security audits. See how you can get more out of those in your Astro blog."
date: "Apr 13 2024"
draft: true
tags:
  - Security
---
I got a notice of a security vulnerability when I posted my last blog item.

> *GitHub found 1 vulnerability on dgilleland/dgilleland.github.io's default branch (1 moderate).*

So, the next thing to do is to run a **`pnpm audit`** to get a bit more information. Along the way, I noticed a comment on a CLI command I hadn't seen before: `pnpm why [package]`. All in all, this gives a good overview of what's going on.

```ps
PS C:\GH\dgilleland\dgilleland.github.io> pnpm audit
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Vite's `server.fs.deny` did not deny requests for      │
│                     │ patterns with directories.                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=5.1.0 <=5.1.6                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=5.1.7                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ . > @astrojs/mdx@2.3.0 > astro@4.6.1 > vite@5.1.6      │
│                     │                                                        │
│                     │ . > @astrojs/mdx@2.3.0 > astro@4.6.1 > vitefu@0.2.5 >  │
│                     │ vite@5.1.6                                             │
│                     │                                                        │
│                     │ . > @astrojs/tailwind@5.1.0 > astro@4.6.1 > vite@5.1.6 │
│                     │                                                        │
│                     │ ... Found 6 paths, run `pnpm why vite` for more        │
│                     │ information                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-8jhw-289h-jh2g      │
└─────────────────────┴────────────────────────────────────────────────────────┘
1 vulnerabilities found
Severity: 1 moderate
PS C:\GH\dgilleland\dgilleland.github.io> pnpm why vite
Legend: production dependency, optional only, dev only

astro-sphere@1.0.0 C:\GH\dgilleland\dgilleland.github.io

dependencies:
@astrojs/mdx 2.3.0
└─┬ astro 4.6.1 peer
  ├── vite 5.1.6
  └─┬ vitefu 0.2.5
    └── vite 5.1.6 peer
@astrojs/solid-js 4.1.0
└─┬ vite-plugin-solid 2.10.2
  ├── vite 5.2.8 peer
  └─┬ vitefu 0.2.5
    └── vite 5.2.8 peer
@astrojs/tailwind 5.1.0
└─┬ astro 4.6.1 peer
  ├── vite 5.1.6
  └─┬ vitefu 0.2.5
    └── vite 5.1.6 peer
astro 4.6.1
├── vite 5.1.6
└─┬ vitefu 0.2.5
  └── vite 5.1.6 peer
```

The package with the vulnerability is a dependency of the main packages noted in the `package.json`. Running a **`pnpm outdated`** followed by a bunch of `pnpm update` commands (or one *long* one) brought my packages up to date, but the vulnerability still exists. Which presents me with a "problem".

Do I explicitly include `vite` in my depdencencies, or wait for the primary packages to get their updates in order? The CVE is fairly recent - only 10 days old at the time of this post.
