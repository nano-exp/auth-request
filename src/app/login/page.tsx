'use client'

import { Suspense, useState, type FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Background } from '@/components/Background'
import { Card } from '@/components/Card'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import { LockIcon, ShieldIcon, ArrowIcon, EyeIcon } from '@/components/icons'

function LoginPageInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [token, setToken] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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
        const redirect = searchParams.get('redirect')
        router.push(redirect || '/protected')
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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative bg-[#fafafa]">
      <Background />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-5xl relative z-10">
        {/* Left - Brand & Intro (right on mobile) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm w-full lg:w-auto">
          <div className="flex items-center gap-[0.625rem] mb-6">
            <LockIcon className="w-12 h-12 text-[#18181b]" />
            <span className="text-[1.5rem] font-bold tracking-[0.02em] text-[#18181b]">Auth</span>
          </div>
          <h2 className="text-[2rem] font-semibold text-[#18181b] tracking-[-0.02em] leading-[1.1] mb-4">
            安全访问
          </h2>
          <p className="text-[1rem] text-[#71717a] leading-relaxed">
            输入您的访问凭证以继续。这是一个受保护的区域，请妥善保管您的登录信息。
          </p>
          <div className="mt-8 flex items-center gap-1.5 text-[0.6875rem] font-medium text-[#a1a1aa] uppercase tracking-widest">
            <ShieldIcon />
            安全可靠
          </div>
        </div>

        {/* Right - Login Form (top on mobile) */}
        <Card>
          {/* Header */}
          <div className="text-center mb-9">
            <h1 className="text-[2.5rem] font-semibold text-[#18181b] tracking-[-0.02em] leading-[1.1]">登录</h1>
            <p className="text-[0.875rem] text-[#71717a] mt-2">请输入访问凭证</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="relative">
              <Input
                id="token"
                label="访问凭证"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a1a1aa] hover:text-[#71717a] transition-colors"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>

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
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  )
}
