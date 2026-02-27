interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex items-center gap-2 text-[0.8125rem] text-[#dc2626] p-3 bg-[#fef2f2] rounded-[10px]">
      <span className="w-1.5 h-1.5 bg-[#dc2626] rounded-full" />
      {message}
    </div>
  )
}
