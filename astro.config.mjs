// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.thinknote.pro',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				const { pathname } = new URL(page);
				if (pathname === '/' || pathname === '') return false;
				if (pathname.startsWith('/admin')) return false;
				if (pathname.startsWith('/api')) return false;
				return true;
			},
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh'],
		routing: {
			prefixDefaultLocale: true,
			redirectToDefaultLocale: false,
		},
	},
	redirects: {
		'/blog': '/en/',
		'/about': '/en/about',
		'/blog/welcome-to-thinknote': '/en/blog/welcome-to-thinknote',
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
