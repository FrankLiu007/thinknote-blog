---
title: 'AI output looks perfect. Paste it into Word and it falls apart'
description: 'Headings, tables, code, and math look fine in chat; paste into Word and it all collapses. The fix is not Ctrl+V in the document. Copy with the extension, then one-click paste.'
pubDate: '2026-09-10'
category: thinknote
translationKey: paste-ai-chat-into-word
heroImage: '/images/uploads/copy-note-docx.png'
---

Replies in ChatGPT, Claude, or Doubao already look like a finished document: real headings, aligned tables, highlighted code, tidy math.

Paste into Word or WPS and it falls apart. Headings become plain paragraphs. Tables lose their styling and look too ugly to hand in. Code loses its highlight. Math turns into a picture, or a string of garbage.

You did not copy carelessly. Chat HTML and a Word document are not the same kind of object.

## 📋 Chat to hand-in: four steps

```
Select the reply on the AI page and copy
    → open desktop Word / WPS
    → set table, code, and font styles first
    → one-click paste (then click a formula to confirm it is native)
```

Copy on the chat page with ordinary Ctrl+C / Cmd+C. In desktop Word, open Home → ThinkNote. **First** set table, code, and font styles in **Settings**, **then** hit **one-click paste**. Styles apply only to that paste, so you must set them before you paste. If you need native formulas and full structure, **do not Ctrl+V into the document body.**

The full clip:

![ChatGPT to Word one-click paste demo](/images/uploads/chatgpt2word-chrome.gif)

In the task pane, one click sends formulas, code, and tables into the document:

![One-click paste: formulas, code, and tables entering Word](/images/uploads/chatgpt2word-one-click-paste.png)

After paste, headings, tables, and formulas are still editable:

![After paste: formulas, code, and tables still editable](/images/uploads/chatgpt2word-formulas-intact.png)

## ⚠️ Do not treat Ctrl+V in the document as perfect paste

ThinkNote is two pieces:

1. The **browser extension** prepares a marked-up HTML clipboard when you copy on an AI page (math kept as something parseable, as far as the page allows).
2. The **Word / WPS add-in** reads that clipboard and turns it into a real document: headings stay headings, tables stay tables, math becomes **native Word formulas (OMML)**, not screenshots.

Why conversion has to go through the add-in: [How pasting AI chat into Word / WPS actually works](/en/blog/how-ai-chat-paste-works-in-word).

## ✅ What is supported

- **Desktop Microsoft Word** on Windows and macOS.
- **Not Word on the web.**

**WPS Writer** on Windows desktop needs one extra step: click **one-click paste**, then Ctrl+V. Do not expect the same gesture as Word.

The extension currently covers ChatGPT, Claude, Gemini, Doubao, DeepSeek, Yuanbao, Qianwen, and Yiyan. Install notes: [thinknote.pro/word](https://thinknote.pro/word) (add `?host=wps` for WPS).

Free accounts have a daily one-click paste cap (3 by default). Paid subscriptions make it unlimited for the billing period; hitting the invite threshold can unlock it for life — see [Use ThinkNote for free, for good](/en/blog/thinknote-free-forever).

If you also want to file the useful bits in the sidepanel as you chat, see [Note as you chat](/en/blog/note-as-you-chat). For the clipboard marker, OMML, and WPS isolation, see [How pasting AI chat into Word / WPS actually works](/en/blog/how-ai-chat-paste-works-in-word).
