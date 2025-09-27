import { Icon } from './Icons'

export default function NavButton({ href, label, icon, onClick, ariaDescription, children, className='' }) {
  const IconComp = Icon[icon] || (() => null)
  const content = (
    <div className={`card flex items-center gap-3 touch-target hover:shadow-xl transition-all ${className}`}>
      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-ocean-100 text-primary">
        <IconComp className="w-6 h-6" />
      </span>
      <div className="flex-1">
        <div className="font-semibold text-slate-900">{label}</div>
        {children && <div className="text-sm text-slate-600">{children}</div>}
      </div>
    </div>
  )
  const ariaLabel = ariaDescription ? `${label}. ${ariaDescription}` : label
  return href ? (
    <a href={href} aria-label={ariaLabel} className="block focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl">{content}</a>
  ) : (
    <button type="button" aria-label={ariaLabel} onClick={onClick} className="w-full text-left focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl">{content}</button>
  )
}

