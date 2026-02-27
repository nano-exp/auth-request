# Auth Request

基于 Token 的简单认证系统。

## 环境变量

开发环境：
```bash
cp .env.example .env
# 设置登录 Token
LOGIN_TOKEN=你的访问凭证

# （可选）设置跨子域共享 Cookie 的域名
# 例如希望在 auth.example.com 和 app.example.com 之间共享：
COOKIE_DOMAIN=.example.com
```

生产环境：创建 `.env` 文件设置：

```bash
LOGIN_TOKEN=你的访问凭证
# 可选，如果需要跨子域共享 Cookie 则配置
COOKIE_DOMAIN=.example.com
```

## 快速开始

```bash
bun install
bun run dev
```

## 技术栈

- Runtime: Bun
- Framework: Next.js 16 (App Router)
- UI: React 19, Tailwind CSS 4
