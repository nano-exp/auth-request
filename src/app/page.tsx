import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value
  const envToken = process.env.LOGIN_TOKEN ?? ''

  if (token && token === envToken) {
    redirect('/protected')
  } else {
    redirect('/login')
  }
}
