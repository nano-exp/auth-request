import { redirect } from 'next/navigation'

// Redirect root to login for App Router
export default function Home() {
  redirect('/login')
  return null
}
