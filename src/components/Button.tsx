import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full p-4 text-[0.9375rem] font-semibold text-white bg-[#18181b] border-none rounded-[14px] cursor-pointer transition-all duration-200 hover:bg-[#27272a] active:scale-[0.98] disabled:opacity-65 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {children}
    </button>
  )
}
