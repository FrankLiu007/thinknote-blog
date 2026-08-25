import { defineMiddleware } from 'astro:middleware';

/** Local `astro dev` / preview: match Worker locale 302 so `/` is not a noindex HTML page. */
function homeLocale(acceptLanguage: string | null): 'en' | 'zh' {
	const header = (acceptLanguage || '').toLowerCase();
	const tags = header.split(',').map((part) => part.trim().split(';')[0].trim());
	if (tags.some((tag) => tag === 'zh' || tag.startsWith('zh-'))) {
		return 'zh';
	}
	return 'en';
}

export const onRequest = defineMiddleware((context, next) => {
	const { pathname } = context.url;
	if (pathname === '/' || pathname === '') {
		const locale = homeLocale(context.request.headers.get('Accept-Language'));
		return context.redirect(`/${locale}/`, 301);
	}
	return next();
});
