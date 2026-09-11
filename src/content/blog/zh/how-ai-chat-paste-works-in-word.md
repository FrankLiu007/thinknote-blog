---
title: '复制 AI 聊天记录，一键贴进 Word / WPS：技术上要过几关'
description: '为什么文档里 Ctrl+V 会毁掉公式和表格？标记协议、HTML 到 OMML、额度门禁，以及 WPS 剪贴板隔离。'
pubDate: '2026-09-14'
category: thinknote
translationKey: how-ai-chat-paste-works-in-word
heroImage: '/images/uploads/chatgpt2word-formulas-intact.png'
---

用户向的操作说明在 [把 AI 聊天一键贴进 Word](/zh/blog/paste-ai-chat-into-word)。这篇只回答「为什么必须多一个按钮」，以及实现时绕不开的几件事。

## 聊天页的「复制」不是 Word 的「粘贴」

AI 页面上的标题、表格、代码、KaTeX，多半是 DOM + CSS + 各平台私有结构。Word 要的是 OOXML：样式、表格网格、代码段落，以及公式用的 **OMML**。

系统剪贴板在中间只提供 `text/html` 和 `text/plain`。浏览器往里塞的 HTML，Word 会按自己的规则解释——于是标题变平、表格散掉、公式变成图片或 Moji 乱码。这不是复制手残，是两种文档模型没有约定。

## ThinkNote 加了一条窄协议

扩展在 AI 页复制时（SmartCopy），会写出一份整理过的 `text/html`，并盖上标记：

```
<!--ThinkNote SmartCopy-->
```

笔记编辑器里的复制也会盖同一标记。Word / WPS 插件认这个标记，才走「完美粘贴」管道；认不出来就拒绝，避免把任意网页垃圾当 ThinkNote 内容插进去。

部分平台的「复制」按钮只给 Markdown 的 `text/plain`。插件也会收这条路径：先当 Markdown 解析，再进同一套转换。

整条链可以看成：

```
AI 页 Ctrl+C
    → SmartCopy 写 HTML + 标记
    → 剪贴板
    → 插件读取（Word 直读 / WPS 点一键粘贴后再 Ctrl+V）
    → 校验一键粘贴额度
    → HTML 或 Markdown → TipTap JSON
    → tiptap2docx（公式变 OMML）
    → 插入可编辑文档
```

![插入后公式、代码、表格仍完整](/images/uploads/chatgpt2word-formulas-intact.png)

## 公式为什么必须走 OMML

把公式做成图最省事，也最坑：交稿后不能改符号、不能改字号、放大即糊。ThinkNote 选择把数学转成 Word 原生公式。成本是转换链路更长：页面上的 KaTeX / MathML / LaTeX 要先被收成编辑器认识的节点，再写成 OMML。

任何一环丢失（平台用了画布、复制时只剩 alt 文本、标记被剪贴板管理器剥掉），结果就会退回「看起来像公式的图片或乱码」。所以产品坚持：**完美粘贴走插件按钮，而不是文档区 Ctrl+V。**

## WPS 为什么多一步

Windows 版 WPS 文字的任务窗格跑在 CEF 里，和系统剪贴板、和用户刚刚在 Chrome 里复制的那份内容，常常不是同一块缓冲区。插件如果假装「一键读到刚才那份 HTML」，会读到空的或过期的。

因此 WPS 路径通常是：先点 **一键粘贴**，再按 Ctrl+V，让插件捕获这一次粘贴。

![WPS 任务窗格中转（截图待补）](/images/uploads/placeholder-wps-taskpane.png)

Word 桌面版多数时候可以直接读剪贴板；若权限被拒或超时，也会退回「请先贴到窗格」。网页版 Word 没有这条插入能力，所以不支持。

## 额度为什么卡在插件这一侧

转换和插入发生在 Office 加载项里，不在聊天页。免费日次数、邀请终身、订阅无限，都在粘贴前校验。扩展负责把内容准备好；**插不进文档，次数不算成功。**

这也解释了为什么「只装扩展、在 Word 里 Ctrl+V」得不到原生公式：那条路根本没进转换器。

## 实现时还会碰到的脏细节

- **平台复制按钮 vs 用户划选**：按钮可能给 Markdown，划选可能给 HTML，两套都要收。
- **剪贴板管理器 / 远程桌面**：可能丢掉 HTML 只留纯文本，标记消失。
- **图片**：回复里的图要随文档走，涉及下载、体积和权限。
- **代码与表格**：要保持块和网格，而不是一串 `<br>`。
- **安全**：不把任意剪贴板 HTML 当可信输入；先认标记或 Markdown 源。

如果你只关心怎么用：扩展复制，桌面 Word 点一键粘贴；WPS 要点一键粘贴，再 Ctrl+V。如果你关心为什么不能更「无感」——因为聊天 DOM 和 Office 文档之间，没有一条免费的、可靠的、跨宿主的桥。ThinkNote 自己垫了这一段。
