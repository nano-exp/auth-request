import { type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-full p-[1.375rem_1.25rem_0.75rem] text-[0.9375rem] text-[#18181b] bg-[#fafafa] border border-[#e4e4e7] rounded-[14px] outline-none transition-all duration-200 focus:border-[#18181b] focus:bg-white focus:shadow-[0_0_0_4px_rgba(24,24,27,0.04)] placeholder-transparent"
        placeholder=""
      />
      <label 
        htmlFor={props.id}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-[0.9375rem] text-[#a1a1aa] pointer-events-none transition-all duration-200"
      >
        {label}
      </label>
      <div className="absolute bottom-0 left-5 right-5 h-[1.5px] bg-[#18181b] scale-x-0 origin-center transition-transform duration-300 rounded-b-[14px]" />
    </div>
  )
}
