# 部署清单

域名：https://blog.thinknote.pro  
仓库：https://github.com/FrankLiu007/thinknote-blog

本项目用 **Worker + 静态资源**（不是「仅静态资产」）：`worker.js` 处理 Decap OAuth，`dist/` 提供博客页面。

## 1. Cloudflare 构建设置

Workers & Pages → 项目 → Settings → Builds：

- **Build command**: `npm run build`
- **Deploy command / 输出**: 以 `wrangler.toml` 为准（`dist` + `worker.js`）
- **Root directory**: 留空
- 环境变量（Production）：
  - `NODE_VERSION` = `22`
  - `GITHUB_CLIENT_ID` =（GitHub OAuth App Client ID）
  - `GITHUB_CLIENT_SECRET` =（Client Secret，用 Secret）

> 若提示「不能将变量添加到只有静态资产的 Worker」，说明还没部署带 `main` 的 Worker。推送含 `wrangler.toml` + `worker.js` 的提交并重新部署后即可添加。

## 2. GitHub OAuth App

GitHub → Settings → Developer settings → OAuth Apps：

- **Homepage URL**: `https://blog.thinknote.pro`
- **Authorization callback URL**: `https://blog.thinknote.pro/api/auth`

## 3. 验证

1. 打开 https://blog.thinknote.pro/api/auth → 应跳转到 GitHub 授权（不再 404）
2. 打开 https://blog.thinknote.pro/admin/ → Login with GitHub

## 本地开发

```powershell
npm run dev   # http://localhost:4321
# CMS 本地代理（可选）：把 config.yml 的 local_backend 临时改为 true，再：
npm run cms
```

## 相关文件

| 文件 | 作用 |
|------|------|
| `worker.js` | `/api/auth` GitHub OAuth |
| `wrangler.toml` | Worker + `dist` 静态资源 |
| `public/admin/config.yml` | Decap 配置（`repo: FrankLiu007/thinknote-blog`） |
