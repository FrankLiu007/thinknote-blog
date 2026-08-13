# 部署清单（需你在浏览器完成）

本地代码推送后，因需登录 GitHub / Cloudflare，请按下列步骤完成上线。

## 1. 推送到 GitHub

```powershell
cd C:\Users\liuqimin\thinknote-blog
git remote add origin https://github.com/FrankLiu007/thinknote-blog.git
git push -u origin main
```

若仓库名变更，请同步修改 `public/admin/config.yml` 里的 `repo` 字段。

## 2. 连接 Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages → Connect to Git
2. 选择 `thinknote-blog` 仓库
3. 构建设置：
   - Build command: `npm run build`
   - Build output directory: `dist`
   - 环境变量（可选）：`NODE_VERSION` = `22`
4. Custom domains → 添加 `blog.thinknote.pro`

## 3. 配置 Decap GitHub OAuth

1. GitHub → Settings → Developer settings → OAuth Apps → New
   - Homepage URL: `https://blog.thinknote.pro`
   - Authorization callback URL: `https://blog.thinknote.pro/api/auth`
2. Cloudflare Pages → 本项目 → Settings → Environment variables：
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
3. 触发一次重新部署
4. 打开 https://blog.thinknote.pro/admin/ → Login with GitHub

## 本地验证（已可用）

```powershell
npm run dev   # http://localhost:4321
npm run cms   # Decap 本地代理 :8081
# 浏览器打开 http://localhost:4321/admin/
```
