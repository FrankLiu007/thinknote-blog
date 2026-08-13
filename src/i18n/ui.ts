import type { CategorySlug } from '../consts';
import type { Locale } from './config';

type CategoryCopy = Record<CategorySlug, { label: string; description: string }>;

type UiDict = {
	siteDescription: string;
	tagline: string;
	brandHeadline: string;
	brandSupport: string;
	about: string;
	all: string;
	latest: string;
	emptyPosts: string;
	emptyCategory: string;
	lastUpdated: string;
	catalog: string;
	catalogIntro: string;
	aboutTitle: string;
	aboutDescription: string;
	aboutBody: string[];
	switchTo: string;
	categories: CategoryCopy;
};

export const ui: Record<Locale, UiDict> = {
	en: {
		siteDescription: 'Think → Note → Share — from private thinking to public notes',
		tagline: 'Think → Note → Share',
		brandHeadline: 'ThinkNote',
		brandSupport:
			'Capture what you think. Shape it into notes. Share what is worth keeping — this blog is that last step.',
		about: 'About',
		all: 'All',
		latest: 'Latest',
		emptyPosts: 'No posts yet',
		emptyCategory: 'No posts in this category',
		lastUpdated: 'Last updated on',
		catalog: 'Catalog',
		catalogIntro: 'Browse by topic:',
		aboutTitle: 'About ThinkNote',
		aboutDescription: 'Think → Note → Share: the story behind the plugin and this blog',
		aboutBody: [
			'ThinkNote starts with a simple loop: Think → Note → Share.',
			'The Obsidian plugin is where thinking becomes a note — questions, ideas, and structure stay close to your vault. This blog is the Share step: notes that have earned a place outside the private notebook.',
			'Expect writing on personal reflections (Think&Note), the plugin and product (ThinkNote Plugin), and keyboard design (Keyboard). Same person, same habit of turning thought into something you can read again.',
			'Built with Astro, edited via Decap CMS, hosted on Cloudflare Pages at blog.thinknote.pro.',
		],
		switchTo: '中文',
		categories: {
			thoughts: {
				label: 'Think&Note',
				description: 'Personal notes and reflections',
			},
			thinknote: {
				label: 'ThinkNote Plugin',
				description: 'Plugin, product, and the craft of turning thought into notes',
			},
			keyboard: {
				label: 'Keyboard',
				description: 'Keyboard design, patents, and hardware',
			},
		},
	},
	zh: {
		siteDescription: 'Think → Note → Share — 从私下思考，到可分享的笔记',
		tagline: 'Think → Note → Share',
		brandHeadline: 'ThinkNote',
		brandSupport: '先想清楚，再写成笔记，最后把值得留下的分享出去——这个博客，就是 Share 那一步。',
		about: '关于',
		all: '全部',
		latest: '最新',
		emptyPosts: '暂无文章',
		emptyCategory: '该分类暂无文章',
		lastUpdated: '最后更新于',
		catalog: '目录',
		catalogIntro: '按主题浏览文章：',
		aboutTitle: '关于 ThinkNote',
		aboutDescription: 'Think → Note → Share：插件与博客背后的故事',
		aboutBody: [
			'ThinkNote 的起点是一条很短的闭环：Think → Note → Share。',
			'Obsidian 插件负责把思考落成笔记——问题、想法与结构都留在你的库里。这个博客则是 Share：那些已经值得走出私人笔记本的文字。',
			'这里会写个人随想（Think&Note）、插件与产品（ThinkNote 插件），以及键盘设计（键盘）。同一个人，同一套把想法写成可再读之物的习惯。',
			'技术栈：Astro 静态站 + Decap CMS 编辑，部署在 Cloudflare Pages，域名 blog.thinknote.pro。',
		],
		switchTo: 'English',
		categories: {
			thoughts: {
				label: 'Think&Note',
				description: '个人笔记与随想',
			},
			thinknote: {
				label: 'ThinkNote 插件',
				description: '插件、产品，以及把思考写成笔记的方法',
			},
			keyboard: {
				label: '键盘',
				description: '键盘设计、专利与硬件相关',
			},
		},
	},
};

export function t(lang: Locale) {
	return ui[lang];
}
