---
title: 'AI chat into Word / WPS: why it has to go through the add-in'
description: 'Chat pages and Word are not the same document. Normalization, markers, Markdown; copy stays familiar, paste goes through the add-in.'
pubDate: '2026-09-14'
category: thinknote
translationKey: how-ai-chat-paste-works-in-word
---

You copy on the chat page the way you always do. Paste into Word, and headings flatten, tables scatter, math turns into a picture.

How to use it is in [Paste AI chat into Word in one click](/en/blog/paste-ai-chat-into-word). This post is the other side: how the seam got closed. A lot was learned by bumping into walls. Some of the in-the-moment reasoning is already fuzzy. The conclusions are not.

Between them sit each site’s HTML, the system clipboard, and Word / WPS’s own interpreter. The “nice layout” on a chat page has to become a document you can still edit.

## 🧩 Every site’s “nice layout” is a different kind of cargo

ChatGPT, Claude, Gemini, Doubao, DeepSeek, Yuanbao, Qwen… Headings, tables, code blocks, and math all look “already formatted” on the page. Open the HTML and each vendor wrote its own dialect: different class names, different nesting, KaTeX DOM here, MathML there. Platforms generally do not ship formulas as plain images. The harsher move is to **drop the LaTeX source** while the page still shows rendered math.

Word wants something else: OOXML, table grids, real code blocks, and math as editable **OMML**. The system clipboard in between only offers `text/html` and `text/plain`. Word interprets whatever HTML the browser stuffed in. That is not sloppy copying. The two document models never signed the same contract.

So the first real job is not “paste.” It is **normalization**: turn each site’s rendered mess into one structure ThinkNote understands.

## 🔄 Clean it into one shape — then meet the way you already copy

The first approach was simple: on copy, pull each platform’s chat into Markdown. Cross-platform. Easy to parse. Easy to trust.

Later the priority flipped: **normalize each platform’s HTML**, then feed the pipeline. Pasting into TipTap often favors HTML — denser structure, more style cues, fewer lost layers on the way into the editor. The sidepanel notes, SmartCopy in the extension, and the final Word conversion can share one idea of “cleaned HTML.”

The two paths did not cancel each other. **Markdown still has to work**, mostly because of habit, not nostalgia.

Plenty of people never drag-select and never hunt for an extension button. They click the site’s own **Copy**. What lands on the clipboard is often Markdown. If that path is rejected, one-click paste fails or the layout falls apart — and that is how people already copy. Supporting Markdown is not hard. The point is to meet the habit that is already there. When HTML is broken, Markdown can still catch the fall. So the add-in accepts both and joins the same converter.

Clicking “Copy” on a whole reply is usually well-behaved. Trouble starts when you **drag a range** — a few lines of code, a couple of cells, the sentence next to a formula. Partial selection of rich HTML often ships a broken boundary: a code block missing a tag, a table with half a grid. The clipboard looks full. The pipeline gets a stump of DOM.

Math is stricter: **the whole formula has to be selected**. Half a KaTeX tree or a truncated MathML almost never reconstructs cleanly to LaTeX, let alone OMML. A half formula cannot be repaired, so the product asks you to select a little more.

SmartCopy writes cleaned `text/html` and stamps:

```
<!--ThinkNote SmartCopy-->
```

Copy from the note editor uses the same stamp. The Word / WPS add-in **only pastes** content with the ThinkNote marker; it still **accepts Markdown** (what site Copy buttons often put on the clipboard). No marker and not trusted Markdown → it does not force-insert. Arbitrary webpage HTML shoved into one-click paste usually explodes. One-click paste promises what we already cleaned up. Keeping Markdown compatible means the site’s own **Copy** button still works.

## 📐 Formulas have to stay editable — not become a picture

Some platforms expose the LaTeX source. Normalization picks it up and the rest of the chain is easier.

Some do not — Yuanbao is the usual example. The move: copy the full chat as Markdown (where formula source often still lives), then **backfill that LaTeX, in order, into the normalized HTML**. HTML carries the layout skeleton. Markdown fills the math.

If even the Markdown / LaTeX side channel disappears someday, you might have to recover source from the rendered result (for example via an LLM). That is a distant spare track, not the daily main road. For now the rule is simple: take the source when the site gives it; when it does not, use whatever text-side channel remains. When sites change rendering, they usually hide the source, not turn math into a pure image.

One more annoyance: each AI site can **change how it renders** output at any time — this KaTeX tree yesterday, a new DOM today, or LaTeX simply no longer exposed. Normalization adapters break overnight. Formulas vanish on copy. You cannot wait on support tickets. When copy fails (especially math), the client should **upload a bug record automatically**, with site, version, and enough of a fragment to reproduce, so the adapter can be patched quickly. The pipeline can be stable. The sites will not stop moving.

The chain:

```
Copy on the AI page (Ctrl+C / right-click Copy)
    → SmartCopy: normalize platform HTML / Markdown + marker
    → clipboard
    → click One-click paste (Ctrl+V into the pane if clipboard unread)
    → check quota
    → HTML or Markdown → TipTap JSON
    → tiptap2docx (math becomes OMML)
    → insert an editable document
```

Turning every formula into an image is cheaper, and worse: you cannot edit symbols, you cannot change font size, and scaling turns it to mush. So the product converts to native Word math. If any hop drops (LaTeX hidden, a half selection, a clipboard manager stripping the marker), you fall back to “something that looks like a formula but will not edit” — that is usually Word’s own interpretation, not the AI page shipping a pure image in the first place.

## 🫥 Copy stays familiar; paste needs an extra button

The product wants as little new habit as possible.

On **copy**, the goal is invisible: `Ctrl+C`, right-click **Copy**, and each site’s own **Copy** button all enter the same pipeline. No hunting for an extension button. No new shortcut to memorize. Copy the way you already copy. Underneath, HTML / Markdown get normalized and stamped.

On **paste**, the same invisibility is impossible. This is an Office **Web Add-in**. It runs in its own web sandbox and **cannot take over** the document’s native `Ctrl+V`, or right-click **Paste**. Ctrl+V in the document still goes through Word / WPS’s own interpreter: some formatting survives, table styles and code highlighting do not, and math is unreliable. To land cleanly and stay editable, paste has to live as **One-click paste** in the task pane: click once, the add-in reads the clipboard (or catches the paste you send into the pane), converts, then inserts.

The missing shortcut is not laziness. A Web Add-in can insert content reliably. It cannot take over that Ctrl+V in the document.

Why a Web Add-in anyway: one-click paste has to serve **Microsoft Word** and **WPS Writer**, and preferably reuse the conversion and auth already built. Sign-up, login, invites, quota checks stay in the same stack. Conversion still goes TipTap → tiptap2docx, the same mental model as the note sidepanel. It can ship through the **Microsoft Store**. **Word on the web** and **Microsoft 365** can install it too. The cost mostly sits on **clipboard read permission**.

WPS Writer’s task pane **does not grant** permission to read the system clipboard — it is not that you forgot to click Allow; the host never opens that door. Word can usually read it, but the add-in page asks for consent. Busy people skip the prompt, one-click paste gets nothing, and it looks broken.

So both hosts keep the same fallback: click **One-click paste** first; if the clipboard cannot be read, press `Ctrl+V` once in the pane so the add-in can catch that paste, convert, then insert. Ctrl+V in the document still helps a bit. It never enters the converter. One extra shortcut feels acceptable: better than a silent empty button.

Conversion and insert happen in the add-in, not on the chat page. Free daily caps, invite lifetime, and subscription unlimited are checked before paste. The extension prepares the payload; **a failed insert does not spend a successful paste.** “Extension only, then Ctrl+V in the document” keeps some formatting, but it never enters the converter.

## 🧹 A few things that still trip you

- **Platform Copy vs a drag-select**: buttons often emit Markdown; selection may emit broken HTML. Both have to land.
- **Copy gestures must match**: `Ctrl+C`, right-click Copy, and the site’s Copy button all reach the same converter.
- **Clipboard read permission**: WPS pane cannot read; Word users may skip Allow. When one-click paste fails, fall back to `Ctrl+V` in the pane.
- **Sites change rendering anytime**: when formula copy fails, auto-upload a bug record — otherwise adapters always lag.
- **Clipboard managers / remote desktop**: they may drop HTML and keep plain text. The marker vanishes.
- **Only paste what we already cleaned up**: do not force-insert arbitrary webpage HTML. Random paste explodes the layout.

There is no free bridge that hijacks system paste between chat DOM and an Office document. ThinkNote is that bridge: copy the way you already copy; in the document, click One-click paste. If the clipboard cannot be read (almost always on WPS; also on Word when consent was skipped), press Ctrl+V once in the pane.
