export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#fafafa]">
      <div className="absolute rounded-full blur-[80px] w-[500px] h-[500px] bg-[#f472b6] -top-[200px] -right-[100px] opacity-12" />
      <div className="absolute rounded-full blur-[80px] w-[400px] h-[400px] bg-[#60a5fa] -bottom-[150px] -left-[100px] opacity-10" />
      <div className="absolute rounded-full blur-[80px] w-[300px] h-[300px] bg-[#a78bfa] top-[40%] left-[30%] opacity-8" />
      <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
    </div>
  )
}
