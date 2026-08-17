import type { APIRoute } from 'astro';
import { type CollectionEntry, getCollection } from 'astro:content';
import { isLocale, type Locale } from '../../../i18n/config';
import { getLocaleFromId, getSlugFromId } from '../../../i18n/utils';

export async function getStaticPaths() {
	const posts = await getCollection('blog');
	return posts.map((post) => {
		const lang = getLocaleFromId(post.id);
		const slug = getSlugFromId(post.id);
		return {
			params: { lang, slug },
			props: { post },
		};
	});
}

type Props = {
	post: CollectionEntry<'blog'>;
};

function absoluteUrl(path: string | undefined, site: URL | undefined): string | null {
	if (!path) return null;
	if (/^https?:\/\//i.test(path)) return path;
	if (!site) return path;
	return new URL(path.startsWith('/') ? path : `/${path}`, site).href;
}

export const GET: APIRoute<Props> = ({ props, params, site }) => {
	const langParam = params.lang;
	if (!langParam || !isLocale(langParam)) {
		return new Response(JSON.stringify({ error: 'Not found' }), {
			status: 404,
			headers: { 'Content-Type': 'application/json' },
		});
	}
	const lang = langParam as Locale;
	const { post } = props;
	const slug = getSlugFromId(post.id);
	const pathname = `/${lang}/blog/${slug}`;
	const canonical = site ? new URL(pathname, site).href : pathname;

	const payload = {
		title: post.data.title,
		description: post.data.description,
		lang,
		slug,
		canonical,
		heroImage: absoluteUrl(post.data.heroImage, site ?? undefined),
		markdown: post.body ?? '',
		pubDate: post.data.pubDate.toISOString(),
		updatedDate: post.data.updatedDate?.toISOString() ?? null,
		category: post.data.category,
	};

	return new Response(JSON.stringify(payload), {
		status: 200,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
