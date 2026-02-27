import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className="relative w-full max-w-[380px] lg:max-w-[420px] bg-white rounded-[32px] p-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_4px_6px_-1px_rgba(0,0,0,0.02),0_20px_40px_-12px_rgba(0,0,0,0.12)]">
      <div className="bg-white rounded-[30px] p-[2.5rem_2rem] sm:p-[3rem_2.5rem]">
        {children}
      </div>
    </div>
  )
}
