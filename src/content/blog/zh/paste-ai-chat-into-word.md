---
title: 'AI 聊得很漂亮，贴进 Word 就乱了？一键粘贴'
description: '聊天里标题、表格、代码、公式都整齐；一贴进 Word 全垮。正确路径不是文档里 Ctrl+V，而是扩展复制 + 一键粘贴成可编辑内容。'
pubDate: '2026-09-10'
category: thinknote
translationKey: paste-ai-chat-into-word
heroImage: '/images/uploads/copy-note-docx.png'
---

ChatGPT、Claude、豆包里的回复，看起来已经像排好的文档：标题有层级，表格对齐，代码带着高亮，公式也规整。

一贴进 Word 或 WPS，全垮。标题变成普通段落；表格丢了样式，丑得没法交；代码没了高亮；数学公式变成一张图，或一串乱码。

这不是你复制得不够仔细。聊天页上的 HTML，和 Word 认识的文档，不是同一种东西。

## 📋 从聊天到交稿：四步

```
在 AI 页选中回复并复制
    → 打开桌面 Word / WPS
    → 设置里先改表格、代码、字体样式
    → 一键粘贴（再点选公式，确认是原生公式）
```

聊天页照常 Ctrl+C / Cmd+C。到了桌面 Word，打开「开始」→ ThinkNote，**先**在 **设置** 里改表格、代码、字体等粘贴样式，**再**点 **一键粘贴**。样式只作用于这一次粘贴，必须先设再贴。需要原生公式和完整结构时，**不要在正文里 Ctrl+V**。

完整演示：

![ChatGPT 复制到 Word 一键粘贴演示](/images/uploads/chatgpt2word-chrome.gif)

在任务窗格里点「一键粘贴」，公式、代码、表格一起进文档：

![一键粘贴：公式、代码、表格进入 Word](/images/uploads/chatgpt2word-one-click-paste.png)

贴进去之后，标题、表格、公式都还能改：

![粘贴后：公式、代码、表格仍可编辑](/images/uploads/chatgpt2word-formulas-intact.png)

## ⚠️ 不要把正文 Ctrl+V 当完美粘贴

ThinkNote 分成两截：

1. **浏览器扩展**在 AI 页面上复制时，把内容整理成带标记的 HTML（公式尽量保留为可解析的结构）。
2. **Word / WPS 插件**读取这份内容，转成真正的文档：标题还是标题，表格还是表格，公式变成 **Word 原生公式（OMML）**，不是贴图。

转换为什么必须走插件，见 [复制 AI 聊天记录贴进 Word / WPS 的技术细节](/zh/blog/how-ai-chat-paste-works-in-word)。

## ✅ 支持什么，注意什么

- **桌面版 Microsoft Word**：Windows 与 macOS。
- **暂时不支持 Word 网页版。**

**WPS 文字**（Windows 桌面）多一步：点 **一键粘贴**，再按 Ctrl+V。不要期望和 Word 完全同一套手势。

扩展目前覆盖 ChatGPT、Claude、Gemini、豆包、DeepSeek、元宝、千问、文心。安装与说明：[thinknote.pro/word](https://thinknote.pro/word)（WPS 可加 `?host=wps`）。

免费账号每天有一键粘贴次数上限（默认 3 次）。付费订阅期间无限；邀请达标也可以终身解锁这项额度，细节见 [如何免费一直用](/zh/blog/thinknote-free-forever)。

如果你还想边聊边把要点写进侧栏，再导出或粘贴，见 [边聊边记](/zh/blog/note-as-you-chat)。想知道剪贴板标记、OMML、WPS 隔离这些「为什么」，见 [复制 AI 聊天记录贴进 Word / WPS 的技术细节](/zh/blog/how-ai-chat-paste-works-in-word)。
