export default function Spinner({ label='Loading...' }) {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <span className="w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden/>
      <span className="sr-only">{label}</span>
    </div>
  )
}

