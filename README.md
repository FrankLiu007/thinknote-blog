# ThinkNote Blog

Astro 静态博客 + Decap CMS，部署于 Cloudflare Pages，域名：https://blog.thinknote.pro

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

## Cloudflare Pages 部署

1. 将本仓库推送到 GitHub：`liuqimin/thinknote-blog`
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect to Git
3. 构建设置：
   - **Framework preset**: Astro（或 None）
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `22`（可在环境变量设置 `NODE_VERSION=22`）
4. **Custom domains** → 添加 `blog.thinknote.pro`（DNS 已在 Cloudflare 时可自动配置）

## Decap CMS 线上登录（GitHub OAuth）

1. GitHub → Settings → Developer settings → [OAuth Apps](https://github.com/settings/developers) → New OAuth App
   - **Homepage URL**: `https://blog.thinknote.pro`
   - **Authorization callback URL**: `https://blog.thinknote.pro/api/auth`
2. 创建后拿到 Client ID，并生成 Client Secret
3. Cloudflare Pages → 项目 → Settings → Environment variables（Production）：
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
4. 重新部署后访问 https://blog.thinknote.pro/admin/ → Login with GitHub

OAuth 代理实现：[`functions/api/auth.js`](functions/api/auth.js)

若 GitHub 用户名/仓库名不同，请同步修改 [`public/admin/config.yml`](public/admin/config.yml) 中的 `repo` 字段。

## 内容结构

| 路径 | 说明 |
|------|------|
| `src/content/blog/*.md` | 文章 |
| `public/admin/` | Decap 入口与配置 |
| `public/images/uploads/` | CMS 上传目录 |
| `functions/api/auth.js` | GitHub OAuth（Pages Functions） |

## 脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run cms` | Decap 本地代理（端口 8081） |
| `npm run build` | 生产构建 |
| `npm run preview` | 预览构建结果 |
