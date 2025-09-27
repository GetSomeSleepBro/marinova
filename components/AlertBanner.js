import { Icon } from './Icons'

export default function AlertBanner({ color='red', message }) {
  const colorClass = color === 'red' ? 'bg-red-500' : color === 'yellow' ? 'bg-yellow-400 text-slate-900' : 'bg-primary'
  return (
    <div className={`rounded-xl ${colorClass} text-white px-4 py-3 flex items-center gap-2`} role="alert" aria-live="polite">
      <Icon.Exclaim className="w-5 h-5" />
      <span className="font-semibold">{message}</span>
    </div>
  )
}

