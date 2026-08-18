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
	save: string;
	saveMenuTitle: string;
	saveMenuIntro: string;
	saveToNotes: string;
	saveToNotesBadge: string;
	saveToNotesHook: string;
	saveToNotesDesc: string;
	docxDemoLabel: string;
	docxDemoHint: string;
	exportPdf: string;
	exportPdfDesc: string;
	cancelSave: string;
	saveTooLarge: string;
	printSlogan: string;
	printMark: string;
};

export const ui: Record<Locale, UiDict> = {
	en: {
		siteDescription: 'Chat → Think → Note → Share — from conversation to notes worth sharing',
		tagline: 'Chat → Think → Note → Share',
		brandHeadline: 'ThinkNote',
		brandSupport:
			'Chat to open the question. Think it through. Shape it into notes. Share what is worth keeping — this blog is that last step.',
		about: 'About',
		all: 'All',
		latest: 'Latest',
		emptyPosts: 'No posts yet',
		emptyCategory: 'No posts in this category',
		lastUpdated: 'Last updated on',
		catalog: 'Catalog',
		catalogIntro: 'Browse by topic:',
		aboutTitle: 'About ThinkNote',
		aboutDescription: 'Chat → Think → Note → Share: the story behind the plugin and this blog',
		aboutBody: [
			'ThinkNote starts with a simple loop: Chat → Think → Note → Share.',
			'The plugin lives next to AI chat: you ask, think through the reply, and turn it into a note. This blog is the Share step: notes that have earned a place outside the private notebook.',
			'Expect writing on personal reflections (Think&Note), the plugin and product (ThinkNote Plugin), and keyboard design (Keyboard). Same person, same habit of turning thought into something you can read again.',
			'Built with Astro, edited via Decap CMS, hosted on Cloudflare Pages at blog.thinknote.pro.',
		],
		switchTo: '中文',
		save: 'Save',
		saveMenuTitle: 'Save this article',
		saveMenuIntro: 'Choose how you’d like to keep it.',
		saveToNotes: 'Save to ThinkNote',
		saveToNotesBadge: 'Recommended',
		saveToNotesHook: '1:1 export to editable Word (docx)',
		saveToNotesDesc:
			'Keep editing in the extension with layout preserved, then export a polished docx in one click.',
		docxDemoLabel: 'docx export demo',
		docxDemoHint: 'Demo GIF failed to load',
		exportPdf: 'Export PDF',
		exportPdfDesc: 'Print to PDF in your browser for a quick offline copy.',
		cancelSave: 'Cancel',
		saveTooLarge:
			'This article is too large to hand off in one jump. Please shorten it, or split it into a shorter post.',
		printSlogan: 'Chat. Think. Note. Share.',
		printMark: 'via ThinkNote',
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
		siteDescription: 'Chat → Think → Note → Share — 从对话里的思考，到可分享的笔记',
		tagline: 'Chat → Think → Note → Share',
		brandHeadline: 'ThinkNote',
		brandSupport: '先聊清楚，再想明白，写成笔记，最后把值得留下的分享出去——这个博客，就是 Share 那一步。',
		about: '关于',
		all: '全部',
		latest: '最新',
		emptyPosts: '暂无文章',
		emptyCategory: '该分类暂无文章',
		lastUpdated: '最后更新于',
		catalog: '目录',
		catalogIntro: '按主题浏览文章：',
		aboutTitle: '关于 ThinkNote',
		aboutDescription: 'Chat → Think → Note → Share：插件与博客背后的故事',
		aboutBody: [
			'ThinkNote 的起点是一条闭环：Chat → Think → Note → Share。',
			'插件贴着 AI 对话发生：先聊、再想，再把思考落成笔记。这个博客则是 Share：那些已经值得走出私人笔记本的文字。',
			'这里会写个人随想（Think&Note）、插件与产品（ThinkNote 插件），以及键盘设计（键盘）。同一个人，同一套把想法写成可再读之物的习惯。',
			'技术栈：Astro 静态站 + Decap CMS 编辑，部署在 Cloudflare Pages，域名 blog.thinknote.pro。',
		],
		switchTo: 'English',
		save: '保存',
		saveMenuTitle: '保存这篇文章',
		saveMenuIntro: '选一种方式带走内容。',
		saveToNotes: '保存到 ThinkNote',
		saveToNotesBadge: '推荐',
		saveToNotesHook: '1:1 导出可编辑 Word（docx）',
		saveToNotesDesc: '保存后可在插件里继续编辑，版式尽量原样保留，再一键导出完美 docx。',
		docxDemoLabel: 'docx 导出演示',
		docxDemoHint: '演示动图加载失败',
		exportPdf: '导出 PDF',
		exportPdfDesc: '用浏览器打印成 PDF，适合先留一份离线副本。',
		cancelSave: '取消',
		saveTooLarge: '这篇文章太长，无法一次带过去。请缩短正文，或拆成更短的文章后再试。',
		printSlogan: '边聊 · 深想 · 即记 · 即享',
		printMark: 'via ThinkNote',
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
