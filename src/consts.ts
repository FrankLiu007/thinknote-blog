// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'ThinkNote';
export const SITE_TAGLINE = 'Think → Note → Share';

export const CATEGORIES = {
	thinknote: {
		slug: 'thinknote',
	},
	thoughts: {
		slug: 'thoughts',
	},
	keyboard: {
		slug: 'keyboard',
	},
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const CATEGORY_SLUGS = ['thoughts', 'thinknote', 'keyboard'] as const;
