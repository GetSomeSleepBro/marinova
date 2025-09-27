"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Icon } from './Icons'
import DarkModeToggle from './DarkModeToggle'
import LanguageToggle from './LanguageToggle'

export default function Header({ title, icon='Wave', backHref, avatar=true }) {
  const IconComp = Icon[icon] || Icon.Wave
  const pathname = usePathname()
  const router = useRouter()
  const showBack = backHref !== undefined ? Boolean(backHref) : pathname !== '/'
  return (
    <header className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        {showBack ? (
          typeof backHref === 'string' ? (
            <Link href={backHref} aria-label="Go back" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Icon.Back className="w-5 h-5" />
            </Link>
          ) : (
            <button onClick={()=>router.back()} aria-label="Go back" className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
              <Icon.Back className="w-5 h-5" />
            </button>
          )
        ) : (
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/20"><IconComp className="w-6 h-6"/></span>
        )}
        <h1 className="font-extrabold tracking-wide text-white text-sm sm:text-base lg:text-lg drop-shadow">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <LanguageToggle />
        <DarkModeToggle />
        {avatar && (
          <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-primary font-bold select-none" aria-label="User avatar">AV</span>
        )}
      </div>
    </header>
  )
}
