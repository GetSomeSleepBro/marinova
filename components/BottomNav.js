import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from './Icons'

const tabs = [
  { href: '/dashboard', label: 'Fishing', icon: 'Fish' },
  { href: '/biodiversity', label: 'Biodiversity', icon: 'Microscope' },
  { href: '/sea-health', label: 'Sea Health', icon: 'Drop' },
]

export default function BottomNav() {
  const pathname = usePathname()
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:static lg:max-w-5xl lg:mx-auto">
      <ul className="grid grid-cols-3 bg-white/90 backdrop-blur shadow-2xl text-slate-800 pb-[env(safe-area-inset-bottom)]">
        {tabs.map(t => {
          const active = pathname.startsWith(t.href)
          const I = Icon[t.icon]
          return (
            <li key={t.href}>
              <Link href={t.href} aria-label={t.label} className={`flex flex-col items-center py-2 ${active? 'text-primary font-semibold':'text-slate-600'} focus:outline-none focus:ring-2 focus:ring-primary/40`}>
                <I className="w-6 h-6"/>
                <span className="text-xs">{t.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
