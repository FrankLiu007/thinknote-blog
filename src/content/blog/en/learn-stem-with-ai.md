---
title: 'How to learn STEM with AI: follow up with formulas, understand every detail'
description: 'A normal chat box is a bad place to talk math. Write the equation, follow up on the step you do not buy, then restate it yourself. Tools plus thinking — that is studying.'
pubDate: '2026-09-08'
category: thoughts
translationKey: learn-stem-with-ai
---

When you are learning calculus, linear algebra, or quantum mechanics, it is tempting to drop the problem into AI, wait for a polished derivation, and close the tab.

Then you actually read it. A few steps do not land, or you think the model is wrong. You need to keep talking: face the step that stuck, and ask.

The trouble starts when the reply has formulas. You can rarely copy them back intact. Paste into the next prompt, and the model has to guess which term you mean. You wanted to go deeper. The chat went vague instead.

The model is not the only problem. **You cannot talk to it precisely.**

## 🎯 STEM follow-ups cannot say “that one”

STEM chat is not small talk. What you actually want to ask is often:

> This step takes $\int_a^b f'g\,dx$ and integrates $f'$ into $f$. Did the boundary term $f(b)g(b)-f(a)g(a)$ vanish, or did it just go missing?

A normal input box is a poor place to send that equation back. Copying a reply turns the formula into garbage or a picture. Paste it into the next prompt, and the model has to guess.

So you type vague English: “push that integral one step further.” Other phrasings fail too — “the one on line three,” “the second-to-last formula.” A chat thread has no line numbers. The model does not see your screen layout. It cannot match “line 3.”

**Do not report a location. Paste the expression.** The model recognizes symbols, not the row on your screen. If the object blurs, the thinking blurs.

## 🔍 Follow up with the formula on the step that stuck

The useful pattern is not “let AI do the homework.” It is a scratchpad that can argue with you — if the symbols on it are right.

A loop that actually teaches 🔁:

```
State the problem (with formulas)
    → let the model unfold a derivation
    → mark the step you do not buy
    → follow up with that same formula
    → rewrite the conclusion in your own words
```

Mark the stuck step for yourself. When you ask the model, paste the formula. Do not say “line 3.” Understanding every detail is not a longer solution. It is a **follow-up aimed at that expression**: which step jumped, which assumption was used, whether the claim still holds if you swap a symbol. Ask with the formula. Do not point with “that one” or “line N.”

The first half is tooling: formulas in, formulas out, formulas you can ask about again. The second half is you: which step you trust, which step you still do not. Copying the final answer is not studying.

## ✍️ Put the formula into the chat

ThinkNote **Precise Chat** is a floating editor on the AI page. You can copy a reply with the formulas intact, or write and edit math with MathLive, then inject it into the current platform’s input box.

The follow-up is no longer “that integral,” or “the formula on line three.” It is the same expression, still typed.

![Follow up with formulas in Precise Chat (screenshot pending)](/images/uploads/placeholder-exact-chat-math.png)

When you copy a reply, **SmartCopy** tries to keep KaTeX / LaTeX as usable HTML instead of shredded symbols. You can:

- paste that expression back into Precise Chat and keep going;
- drop the derivation into the sidepanel note, still rendered.

Formulas, tables, and code in that note can go to Word later. When the homework has to become a document, see [Paste AI chat into Word in one click](/en/blog/paste-ai-chat-into-word).

![Formulas and tables in the note versus a Word export](/images/uploads/to-docx.png)

## 🧠 What you should leave with is not the pretty proof

Models are good at writing proofs that *look finished*. Looking finished is not the same as being in your head.

After the follow-up, do not save the whole derivation and walk away. Close the window. See if you can write, without looking:

- 📐 the formula for the step that stuck
- 🔑 the assumption that made that step legal
- 🔄 whether the conclusion still holds if you swap the symbol

If you cannot write those, that detail is not in yet. Paste the formula and ask again. Do not ask for a longer solution.

Keep arguing the step with the model on the left; write the expression and the assumption on the right. How to sit those two panes, see [Chat on the left, notes on the right](/en/blog/ai-writing-workflow-sidepanel). For the product itself, see [What is ThinkNote](/en/blog/what-is-thinknote).

The failure mode in STEM is not “not asking.” It is asking without precision, then being precise without keeping anything. ⚓ The formula is the anchor. While it holds, the next question can attach — and the details can actually get asked.
