'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Background } from '@/components/Background'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import { LockIcon, ShieldIcon, ArrowIcon } from '@/components/icons'

export default function LoginPage() {
  const router = useRouter()
  const [token, setToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })

      if (res.ok) {
        router.push('/protected')
      } else {
        setError('Token 无效')
      }
    } catch {
      setError('网络错误')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative bg-[#fafafa]">
      <Background />

      <Card>
        {/* Brand */}
        <div className="flex items-center justify-center gap-[0.625rem] mb-10">
          <LockIcon className="w-9 h-9 text-[#18181b]" />
          <span className="text-[1.125rem] font-bold tracking-[0.02em] text-[#18181b]">Auth</span>
        </div>

        {/* Header */}
        <div className="text-center mb-9">
          <h1 className="text-[2.5rem] font-semibold text-[#18181b] tracking-[-0.02em] leading-[1.1]">登录</h1>
          <p className="text-[0.875rem] text-[#71717a] mt-2">请输入访问凭证</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            id="token"
            label="访问凭证"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />

          {error && <ErrorMessage message={error} />}

          <Button type="submit" disabled={isLoading}>
            <span>{isLoading ? '登录中...' : '继续'}</span>
            <ArrowIcon className="w-[18px] h-[18px]" />
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-1.5 text-[0.6875rem] font-medium text-[#a1a1aa] uppercase tracking-widest">
            <ShieldIcon />
            安全
          </div>
        </div>
      </Card>
    </div>
  )
}
