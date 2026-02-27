'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Background } from '@/components/Background'
import { Card } from '@/components/Card'
import { CheckIcon } from '@/components/icons'

export default function ProtectedPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/protected')
      .then((res) => {
        if (!res.ok) {
          router.replace('/login')
        } else {
          setAuthenticated(true)
        }
      })
      .catch(() => {
        router.replace('/login')
      })
  }, [router])

  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 relative bg-[#fafafa]">
        <Background />
        <p className="text-[0.875rem] text-[#71717a]">加载中...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative bg-[#fafafa]">
      <Background />

      <Card>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#18181b] rounded-full flex items-center justify-center">
            <CheckIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-[2rem] font-semibold text-[#18181b] mb-3">登录成功</h1>
          <p className="text-[0.875rem] text-[#71717a] mb-8 leading-relaxed">
            您已通过身份验证，Cookie 已设置为此后的请求提供认证。
          </p>
          <a href="/login" className="text-[0.875rem] text-[#18181b] underline underline-offset-3 hover:text-[#52525b]">
            重新登录
          </a>
        </div>
      </Card>
    </div>
  )
}
