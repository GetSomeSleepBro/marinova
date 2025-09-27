import { Icon } from './Icons'

export default function RoleCard({ icon, title, description, href }) {
  const I = Icon[icon] || Icon.User
  return (
    <a href={href} className="card focus:outline-none focus:ring-2 focus:ring-white/60 transform transition hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <span className="w-12 h-12 rounded-full bg-ocean-100 text-primary flex items-center justify-center"><I className="w-7 h-7"/></span>
        <div>
          <div className="font-bold text-slate-900">{title}</div>
          <div className="text-sm text-slate-600">{description}</div>
        </div>
      </div>
    </a>
  )
}

