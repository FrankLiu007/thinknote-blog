# ThinkNote Blog

Astro 静态博客 + Decap CMS，部署于 Cloudflare（Worker + 静态资源），域名：https://blog.thinknote.pro

## 本地开发

```sh
npm install
npm run dev
```

站点：http://localhost:4321

### 本地使用 Decap CMS

```sh
# 终端 1
npm run dev

# 终端 2
npm run cms
```

然后打开 http://localhost:4321/admin/ （`local_backend: true` 会走本地代理，无需 GitHub OAuth）。

## 构建

```sh
npm run build
npm run preview
```

输出目录：`dist/`

## Cloudflare 部署（Worker + 静态资源）

详见 [`DEPLOY.md`](DEPLOY.md)。要点：

1. 仓库：`FrankLiu007/thinknote-blog`
2. Build command：`npm run build`（由 `wrangler.toml` 部署 `dist` + `worker.js`）
3. 环境变量：`NODE_VERSION=22`、`GITHUB_CLIENT_ID`、`GITHUB_CLIENT_SECRET`
4. 自定义域名：`blog.thinknote.pro`

OAuth 入口：[`worker.js`](worker.js)（`/api/auth`）  
Decap 配置：[`public/admin/config.yml`](public/admin/config.yml)

## 内容结构

| 路径 | 说明 |
|------|------|
| `src/content/blog/{en,zh}/` | 中英文已发布文章 |
| `materials/` | 写作素材（对话导出、大纲、未上线参考图），不发布 |
| `public/admin/` | Decap 入口与配置 |
| `public/images/uploads/` | 文章用图（需要公开 URL） |
| `worker.js` | GitHub OAuth（`/api/auth`） |
| `wrangler.toml` | Cloudflare Worker 部署配置 |

## 脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run cms` | Decap 本地代理（端口 8081） |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建结果 |
