import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '登录',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC:wght@300;400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
