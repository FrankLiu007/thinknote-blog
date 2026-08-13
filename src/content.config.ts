import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './consts';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/{en,zh}/` directories.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		// Public URL path (e.g. /images/uploads/cover.jpg) for Decap CMS compatibility
		heroImage: z.string().optional(),
		category: z.enum(CATEGORY_SLUGS),
		// Shared key linking zh/en versions of the same post
		translationKey: z.string().optional(),
	}),
});

export const collections = { blog };
