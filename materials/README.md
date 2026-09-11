# 写作素材

这里放**还没写成文章、或写文章时用到的原始材料**：ThinkNote 导出、AI 对话摘录、大纲、参考图。

不会被 Astro 当成博客发布，也不会出现在站点 URL 里。

## 放哪里

| 东西 | 位置 |
|------|------|
| 对话导出、大纲、摘录 | `materials/<文章 slug>/` |
| 尚未用于文章的参考图 | 同上目录 |
| 已经出现在文章里的图 | `public/images/uploads/`（需要公开 URL） |
| 已发布正文 | `src/content/blog/{zh,en}/` |

一篇文章一个目录，slug 与正式稿文件名对齐，方便对照。

**不要**把素材放进 `src/content/blog/`：那个目录会被 content collection 扫进去，没有合法 frontmatter 会构建失败，有 frontmatter 就会变成正式文章。
