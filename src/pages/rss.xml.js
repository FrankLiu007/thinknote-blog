import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE } from '../consts';
import { t } from '../i18n/ui';
import { filterPostsByLocale, getSlugFromId, postPath } from '../i18n/utils';

/** Root RSS defaults to English; localized feeds live at /en/rss.xml and /zh/rss.xml */
export async function GET(context) {
	const lang = 'en';
	const copy = t(lang);
	const posts = filterPostsByLocale(await getCollection('blog'), lang).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: copy.siteDescription,
		site: new URL('/en/', context.site),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: postPath(lang, getSlugFromId(post.id)),
		})),
	});
}
