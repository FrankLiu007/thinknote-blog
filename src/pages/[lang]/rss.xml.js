import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../../consts';
import { isLocale } from '../../i18n/config';
import { t } from '../../i18n/ui';
import {
	filterPostsByLocale,
	getSlugFromId,
	getStaticLocalePaths,
	postPath,
} from '../../i18n/utils';

export function getStaticPaths() {
	return getStaticLocalePaths();
}

export async function GET(context) {
	const langParam = context.params.lang;
	if (!langParam || !isLocale(langParam)) {
		return new Response(null, { status: 404 });
	}
	const lang = langParam;
	const copy = t(lang);
	const posts = filterPostsByLocale(await getCollection('blog'), lang).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: copy.siteDescription,
		site: new URL(`/${lang}/`, context.site),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: postPath(lang, getSlugFromId(post.id)),
		})),
	});
}
