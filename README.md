# Auth Request

基于 Token 的简单认证系统，使用 Next.js App Router。

## 功能

- 输入 Token 登录
- 验证通过后设置 HttpOnly Cookie
- 受保护页面服务端校验

## 环境变量

```bash
cp .env.local.example .env.local
# 编辑 .env.local 设置 LOGIN_TOKEN
```

## 开发

```bash
bun install
bun run dev
```

## 技术栈

- Next.js 16
- React 19
- Tailwind CSS 4
