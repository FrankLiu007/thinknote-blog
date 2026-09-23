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
