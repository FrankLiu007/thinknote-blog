export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeHtmlLang: Record<Locale, string> = {
	en: 'en',
	zh: 'zh-CN',
};

export const localeLabels: Record<Locale, string> = {
	en: 'English',
	zh: '中文',
};

export const LOCALE_STORAGE_KEY = 'locale';

export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}
