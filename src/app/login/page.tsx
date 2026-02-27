'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'

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
    <div className="login-container">
      <div className="login-bg">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
        <div className="bg-dots" />
      </div>

      <div className="login-card">
        <div className="card-inner">
          <div className="brand">
            <div className="brand-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="4" y="4" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 4"/>
                <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.15"/>
                <path d="M20 12v16M12 20h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="brand-name">Auth</span>
          </div>

          <div className="header">
            <h1 className="title">登录</h1>
            <p className="subtitle">请输入访问凭证</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="input-group">
              <input
                id="token"
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="input"
                placeholder=""
              />
              <label htmlFor="token" className="label">访问凭证</label>
              <div className="input-border" />
            </div>

            {error && (
              <div className="error">
                <span className="error-dot" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="button"
            >
              <span>{isLoading ? '登录中...' : '继续'}</span>
              <span className="button-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </button>
          </form>

          <div className="footer">
            <div className="footer-badge">
              <svg viewBox="0 0 16 16" fill="none" width="12" height="12">
                <path d="M8 1l6.928 4v4c0 3.832-2.928 6.928-6.928 7-3.84-.072-6.8-3.168-6.928-7V5L8 1z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M6 8l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              安全
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
