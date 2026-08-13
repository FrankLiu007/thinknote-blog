---
title: '欢迎来到 ThinkNote'
description: 'ThinkNote 博客上线：Astro + Decap CMS + Cloudflare Pages'
pubDate: '2026-08-13'
heroImage: '/images/placeholders/blog-placeholder-1.jpg'
---

这是 ThinkNote 博客的第一篇正式说明。

## 技术栈

- **Astro**：静态生成，内容放在 `src/content/blog/`
- **Decap CMS**：访问 `/admin/` 用 GitHub 登录后即可发文
- **Cloudflare Pages**：自动构建并部署到 `blog.thinknote.pro`

## 本地写作

1. `npm run dev` 启动站点
2. 另开终端运行 `npm run cms`（Decap 本地代理）
3. 打开 `http://localhost:4321/admin/` 编辑内容

保存后 Markdown 会直接写入仓库；推送到 `main` 后 Cloudflare Pages 会重新构建站点。
