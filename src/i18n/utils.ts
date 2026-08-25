import { getRelativeLocaleUrl } from 'astro:i18n';
import type { CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, localeHtmlLang, type Locale, locales } from './config';

export type HreflangAlternate = {
	hreflang: string;
	href: string;
};

export function getLocaleFromUrl(pathname: string): Locale {
	const segment = pathname.replace(/^\//, '').split('/')[0];
	return isLocale(segment) ? segment : defaultLocale;
}

export function getLocaleFromId(id: string): Locale {
	const segment = id.split('/')[0];
	if (isLocale(segment)) return segment;
	throw new Error(`Post id "${id}" is missing a locale folder (en/ or zh/).`);
}

export function getSlugFromId(id: string): string {
	const parts = id.split('/');
	if (parts.length < 2 || !isLocale(parts[0])) {
		throw new Error(`Post id "${id}" is missing a locale folder (en/ or zh/).`);
	}
	return parts.slice(1).join('/');
}

export function getTranslationKey(post: CollectionEntry<'blog'>): string {
	return post.data.translationKey ?? getSlugFromId(post.id);
}

export function filterPostsByLocale(
	posts: CollectionEntry<'blog'>[],
	lang: Locale,
): CollectionEntry<'blog'>[] {
	return posts.filter((post) => getLocaleFromId(post.id) === lang);
}

export function findTranslation(
	posts: CollectionEntry<'blog'>[],
	post: CollectionEntry<'blog'>,
	targetLang: Locale,
): CollectionEntry<'blog'> | undefined {
	const key = getTranslationKey(post);
	return posts.find(
		(candidate) =>
			getLocaleFromId(candidate.id) === targetLang &&
			getTranslationKey(candidate) === key,
	);
}

export function localePath(lang: Locale, path = ''): string {
	return getRelativeLocaleUrl(lang, path);
}

export function postPath(lang: Locale, slug: string): string {
	return localePath(lang, `blog/${slug}`);
}

export function categoryPath(lang: Locale, category: string): string {
	return localePath(lang, `blog/category/${category}`);
}

export function otherLocale(lang: Locale): Locale {
	return lang === 'en' ? 'zh' : 'en';
}

export function getStaticLocalePaths() {
	return locales.map((lang) => ({ params: { lang } }));
}

export function absoluteLocaleUrl(site: URL | string, lang: Locale, path = ''): string {
	return new URL(localePath(lang, path), site).href;
}

/** Build hreflang alternates; omit locales that have no equivalent page. */
export function buildHreflangAlternates(
	site: URL | string,
	paths: Partial<Record<Locale, string>>,
): HreflangAlternate[] {
	const alternates: HreflangAlternate[] = [];

	for (const lang of locales) {
		const path = paths[lang];
		if (path === undefined) continue;
		alternates.push({
			hreflang: localeHtmlLang[lang],
			href: absoluteLocaleUrl(site, lang, path),
		});
	}

	const defaultPath = paths[defaultLocale];
	if (defaultPath !== undefined) {
		alternates.push({
			hreflang: 'x-default',
			href: absoluteLocaleUrl(site, defaultLocale, defaultPath),
		});
	}

	return alternates;
}

/** Same path segment in every locale, e.g. '' | 'about' | 'blog/category/foo'. */
export function buildHreflangForPath(
	site: URL | string,
	path = '',
): HreflangAlternate[] {
	const paths = Object.fromEntries(locales.map((lang) => [lang, path])) as Record<
		Locale,
		string
	>;
	return buildHreflangAlternates(site, paths);
}
