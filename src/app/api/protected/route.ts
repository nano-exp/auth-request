import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cookieName = process.env.COOKIE_NAME ?? 'auth-token'
  const envToken = process.env.LOGIN_TOKEN ?? ''
  const tokenFromCookie = request.cookies.get(cookieName)?.value ?? ''

  if (tokenFromCookie && tokenFromCookie === envToken) {
    return NextResponse.json({ ok: true, authenticated: true })
  }

  return NextResponse.json({ ok: false, authenticated: false }, { status: 401 })
}
