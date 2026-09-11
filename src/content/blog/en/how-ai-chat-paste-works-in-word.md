---
title: 'How pasting AI chat into Word / WPS actually works'
description: 'Why Ctrl+V in the document kills formulas and tables. The marker protocol, HTML to OMML, quota checks, and WPS clipboard isolation.'
pubDate: '2026-09-14'
category: thinknote
translationKey: how-ai-chat-paste-works-in-word
heroImage: '/images/uploads/chatgpt2word-formulas-intact.png'
---

The how-to is in [Paste AI chat into Word in one click](/en/blog/paste-ai-chat-into-word). This post is only *why there is an extra button*, and the constraints you hit when you try to build that button.

## Copy on a chat page is not paste in Word

Headings, tables, code, and KaTeX on an AI page are mostly DOM + CSS + per-site private structure. Word wants OOXML: styles, table grids, code paragraphs, and math as **OMML**.

The system clipboard in between only offers `text/html` and `text/plain`. Word interprets whatever HTML the browser stuffed in — so headings flatten, tables scatter, and math becomes a picture or mojibake. That is not sloppy copying. The two document models never agreed.

## ThinkNote adds a narrow protocol

When you copy on an AI page, SmartCopy writes a cleaned `text/html` payload and stamps:

```
<!--ThinkNote SmartCopy-->
```

Copy from the note editor uses the same stamp. The Word / WPS add-in only runs the “perfect paste” pipeline when it sees the marker. Anything else is rejected, so random webpage junk does not get treated as ThinkNote content.

Some platform “Copy” buttons only put Markdown on `text/plain`. The add-in accepts that path too: parse as Markdown, then join the same converter.

The chain:

```
Ctrl+C on the AI page
    → SmartCopy writes HTML + marker
    → clipboard
    → add-in reads (Word directly / WPS: one-click paste, then Ctrl+V)
    → check one-click paste quota
    → HTML or Markdown → TipTap JSON
    → tiptap2docx (math becomes OMML)
    → insert an editable document
```

![After insert: formulas, code, and tables intact](/images/uploads/chatgpt2word-formulas-intact.png)

## Why math has to become OMML

Turning every formula into an image is cheaper, and worse: you cannot edit symbols, you cannot change font size, and scaling turns it to mush. ThinkNote converts math into native Word formulas. The cost is a longer pipeline: KaTeX / MathML / LaTeX on the page must become editor nodes, then OMML.

If any hop drops (the site painted math on a canvas, copy kept only alt text, a clipboard manager stripped the marker), you fall back to “something that looks like a formula.” That is why the product insists: **perfect paste is the add-in button, not Ctrl+V in the document.**

## Why WPS needs an extra step

WPS Writer on Windows runs its task pane in CEF. That clipboard is often not the buffer you just filled in Chrome. If the add-in pretends it can “just read what you copied,” it gets empty or stale data.

So the WPS path is usually: click **one-click paste**, then Ctrl+V, so the add-in can capture *that* paste.

![WPS task pane relay (screenshot pending)](/images/uploads/placeholder-wps-taskpane.png)

Desktop Word can often read the clipboard directly. If permission is denied or the read times out, it falls back to the same “paste into the pane” capture. Word on the web has no equivalent insert path, so it is unsupported.

## Why quota is checked in the add-in

Conversion and insert happen in Office, not on the chat page. Free daily caps, invite lifetime, and subscription unlimited are all checked before paste. The extension prepares the payload; **a failed insert does not spend a successful paste.**

That is also why “extension only, then Ctrl+V in Word” never yields native formulas. That path never enters the converter.

## Other dirty details

- **Platform copy button vs drag-select:** buttons may emit Markdown; selection may emit HTML. Both have to land.
- **Clipboard managers / remote desktop:** they may drop HTML and keep plain text. The marker vanishes.
- **Images:** figures in the reply should travel with the document — download, size, permissions.
- **Code and tables:** they need blocks and grids, not a pile of `<br>`.
- **Safety:** arbitrary clipboard HTML is not trusted input. Require the marker or a Markdown source.

If you only need to use it: copy in the extension, one-click paste in desktop Word; in WPS, click one-click paste, then Ctrl+V. If you want to know why it cannot be fully invisible — there is no free, reliable, cross-host bridge between chat DOM and an Office document. ThinkNote is that bridge, on purpose.
