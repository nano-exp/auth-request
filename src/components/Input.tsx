import { type InputHTMLAttributes, type LegacyRef } from 'react'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  label: string
  inputRef?: LegacyRef<HTMLInputElement>
}

export function Input({ label, inputRef, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        ref={inputRef}
        id={props.id}
        {...props}
        className="peer w-full px-5 py-[1.375rem] text-[0.9375rem] text-[#18181b] bg-[#fafafa] border border-[#e4e4e7] rounded-[14px] outline-none transition-colors focus:border-[#18181b] focus:bg-white"
        placeholder=" "
      />
      <label
        htmlFor={props.id}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-[0.9375rem] text-[#a1a1aa] pointer-events-none transition-all peer-focus:top-[0.75rem] peer-focus:text-[0.6875rem] peer-focus:text-[#71717a] peer-not-placeholder-shown:top-[0.75rem] peer-not-placeholder-shown:text-[0.6875rem] peer-not-placeholder-shown:text-[#71717a]"
      >
        {label}
      </label>
    </div>
  )
}
