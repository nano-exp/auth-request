import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()
    const envToken = process.env.LOGIN_TOKEN ?? ''

    if (token && token === envToken) {
      const cookieDomain = process.env.COOKIE_DOMAIN
      const maxAge = 60 * 60 * 24 // 1 day
      const response = NextResponse.json({ ok: true })
      response.cookies.set('token', token, {
        httpOnly: true,
        ...(cookieDomain ? { domain: cookieDomain } : {}),
        path: '/',
        maxAge,
        sameSite: 'lax',
      })
      return response
    }

    return NextResponse.json({ ok: false, message: 'Invalid token' }, { status: 401 })
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request' }, { status: 400 })
  }
}
