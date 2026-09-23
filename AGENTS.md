## Writing materials

Raw sources (ThinkNote exports, chat dumps, unused reference images) go in `materials/<post-slug>/`, not `src/content/blog/`. That folder is a content collection and would publish or fail the build. Images already used in a post stay in `public/images/uploads/`.

**Published images must be compressed WebP.** Do not put original PNG/JPEG into `public/images/uploads/` or point `heroImage` / markdown at them. Convert from the uncompressed source (not from an already-quantized PNG) with `sharp` in this repo. Hero-sized illustrations (~1536×1024) should land around 130–150 KB; smaller screenshots should be smaller. Keep the raw file in `materials/<post-slug>/`, publish only the `.webp`, and update paths. Exception: animated GIF when motion is the point.

`heroImage` in frontmatter is optional. Leave it off unless the image belongs to that post. Do not reuse placeholders or unrelated screenshots as a cover.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Blog voice

When writing or polishing `src/content/blog/**/*.md`, keep the approved ThinkNote voice: light, human, conversational, and useful. Speak to the reader as `你`/`you`; start from a familiar scenario before explaining the point; keep product details precise without sounding like a manual; and use short sentences without flattening the insight.

Chinese benchmark: `src/content/blog/zh/what-is-thinknote.md`. English benchmark: `src/content/blog/en/ai-writing-workflow-sidepanel.md`. Align scene and insight across languages; do not calque Chinese mouth/body metaphors (`嘴里`, `当一回人`, `标语就这么轻`) into English. A pocket metaphor is fine when it also works in English. Avoid lecture words (`encoding`, `consolidate`) and performing-casual calques (`show up as a person`, `left in your mouth`). If a line feels translated, fix it. If English simply feels less warm than the Chinese, that is a language difference — do not compensate by stacking slang.

- Add a relevant emoji before `##` headings when it helps scanning. Use emoji sparingly (roughly 3–5 in headings and 3–6 in the body for a typical post).
- Do not put emoji in YAML `title` or `description`, formulas, or code blocks.
- Keep `heroImage` optional. Only set it when the image belongs to that post; otherwise use the site's default social preview.
- Do not reuse placeholders, unrelated screenshots, or another article's image as a cover.
