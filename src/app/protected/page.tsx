import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value ?? ''
  const envToken = process.env.LOGIN_TOKEN ?? ''

  if (!token || token !== envToken) {
    redirect('/login')
  }

  return (
    <div className="page">
      <div className="card">
        <div className="icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h1 className="title">登录成功</h1>
        <p className="desc">您已通过身份验证，Cookie 已设置为此后的请求提供认证。</p>
        <a href="/login" className="link">重新登录</a>
      </div>
    </div>
  )
}
