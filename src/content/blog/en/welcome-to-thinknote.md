---
title: 'Welcome to ThinkNote'
description: 'Chat → Think → Note → Share — the blog is live'
pubDate: '2026-08-13'
category: thinknote
translationKey: welcome-to-thinknote
heroImage: '/images/placeholders/blog-placeholder-1.jpg'
---

ThinkNote follows a short loop: **Chat → Think → Note → Share**.

The plugin is where chatting becomes thinking, then a note. This blog is the Share step — writing that has earned a place outside the private vault.

## Stack

- **Astro**: static site; posts live in `src/content/blog/`
- **Decap CMS**: sign in with GitHub at `/admin/` to publish
- **Cloudflare Pages**: builds and deploys to `blog.thinknote.pro`

## Local writing

1. Run `npm run dev` to start the site
2. In another terminal, run `npm run cms` (Decap local proxy)
3. Open `http://localhost:4321/admin/` to edit content

Saving writes Markdown into the repo; pushing to `main` triggers a Cloudflare Pages rebuild.
