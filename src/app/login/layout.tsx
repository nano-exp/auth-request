import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '登录',
}

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieName = process.env.COOKIE_NAME ?? 'auth-token'
  const cookieStore = await cookies()
  const token = cookieStore.get(cookieName)?.value
  const envToken = process.env.LOGIN_TOKEN ?? ''

  if (token && token === envToken) {
    redirect('/protected')
  }

  return children
}
