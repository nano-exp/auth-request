import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '登录成功',
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
