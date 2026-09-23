---
title: 'AI output looks perfect. Paste it into Word and it falls apart'
description: 'Headings, tables, code, and math look fine in chat; paste into Word and it all collapses. Ctrl+V in the document helps a bit. One-click paste keeps table styles, code highlighting, and stable math.'
pubDate: '2026-09-10'
category: thinknote
translationKey: paste-ai-chat-into-word
heroImage: '/images/uploads/chatgpt2word-chrome.gif'
---

You want to chat with AI on one side and write the draft in Word on the other.

Left window: ask, revise, ask again. Right window: the deadline. The reply already looks finished — real headings, aligned tables, highlighted code, tidy math. You just want it in the document, so you can fix your own sentences.

One paste, and it all collapses. Headings become plain paragraphs. Tables look too ugly to hand in. Code loses its highlight. Math turns into a picture, or a string of garbage.

Then you start fixing styles. One paragraph holds. The next one breaks. The time you spend on styles is often longer than the writing. The rhythm dies. So does the deadline.

You did not copy carelessly. Chat HTML and a Word document are not the same kind of object. Word can swallow some HTML. It is bad at math, table styles, and code styles. If what lands does not look close to the original, the repair often costs more than laying it out again.

So the job is simple: if you want to chat and write at the same time, the AI output has to enter Word **with its formatting**. Lose the format, and the rest is manual work.

## 📋 Chat to hand-in: four steps

```
Select the reply on the AI page and copy
    → open desktop Word / WPS
    → set table, code, and font styles first
    → one-click paste (then click a formula to confirm it is native)
```

Copy on the chat page with ordinary Ctrl+C / Cmd+C. In desktop Word, open Home → ThinkNote. **First** set table, code, and font styles in **Settings**, **then** hit **one-click paste**. Set them once, and later pastes come out the way you like — no fixing paragraph by paragraph. Ctrl+V in the document keeps some formatting; table styles and code highlighting do not come along, and math is unreliable. For those to land cleanly, use **one-click paste** in the task pane.

In the task pane, one click sends formulas, code, and tables into the document:

![One-click paste: formulas, code, and tables entering Word](/images/uploads/chatgpt2word-one-click-paste.png)

After paste, headings, tables, and formulas are still editable:

![After paste: formulas, code, and tables still editable](/images/uploads/chatgpt2word-formulas-intact.png)

## 💡 Ctrl+V in the document only takes you partway

ThinkNote is two pieces:

1. The **browser extension** prepares a marked-up HTML clipboard when you copy on an AI page (math kept as something parseable, as far as the page allows).
2. The **Word / WPS add-in** reads that clipboard and turns it into a real document: headings stay headings, tables stay tables, math becomes **native Word formulas (OMML)**, not screenshots.

Why conversion goes through the add-in: [AI chat into Word / WPS: why it has to go through the add-in](/en/blog/how-ai-chat-paste-works-in-word).

## ✅ Where it works today

- **Desktop Microsoft Word** on Windows and macOS.
- **Word on the web** is not wired up yet.
- **WPS Writer** on Windows desktop needs one extra step: click **one-click paste**, then Ctrl+V. Word is one click; WPS just adds that Ctrl+V.
- **Sites covered**: ChatGPT, Claude, Gemini, Doubao, DeepSeek, Yuanbao, Qianwen, Yiyan.
- **Styles first**: set code highlighting, table styles, and fonts ahead of time; each paste follows yours.

## 📚 Read next

- **Install the extension and add-in**: [thinknote.pro/word](https://thinknote.pro/word) (add `?host=wps` for WPS). Free accounts have a daily one-click paste cap (3 by default). Paid subscriptions make it unlimited for the billing period.
- **Want daily use without a subscription**: [Use ThinkNote for free, for good — lifetime unlimited quota](/en/blog/thinknote-free-forever)
- **Want to file the useful bits as you chat**: [Note as you chat](/en/blog/note-as-you-chat)
- **Want the architecture**: [AI chat into Word / WPS: why it has to go through the add-in](/en/blog/how-ai-chat-paste-works-in-word)
