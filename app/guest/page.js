"use client"
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import NavButton from '@/components/NavButton'
import Tooltip from '@/components/Tooltip'
import WaveAnimation from '@/components/WaveAnimation'
import useFadeIn from '@/lib/useFadeIn'
import { Icon } from '@/components/Icons'
import { I18nProvider, useI18n } from '@/lib/i18n'

function GuestContent(){
  const fade = useFadeIn()
  const { t } = useI18n()
  return (
    <main className={`relative min-h-[calc(100vh-56px)] pb-safe ${fade}`}>
      <div className="flex justify-center">
        <div className="w-full max-w-sm p-4 space-y-5">
          <Header title={`${t('guest')}`} icon="Rocket" backHref="/roles" />
          <div className="flex flex-col items-center gap-3">
            <Avatar label="Guest" />
            <p className="text-white text-outline text-center">Welcome! Explore public ocean insights.</p>
          </div>
          <div className="space-y-3">
            <NavButton href="/dashboard" label="Ocean Today" icon="Wave" />
            <NavButton href="/biodiversity" label="Explore Public Data" icon="Book" />
            <Tooltip label="Guest access is limited. Sign in for more.">
              <NavButton href="#" label="Limited Access" icon="Lock" ariaDescription="Guest restrictions tooltip" />
            </Tooltip>
            <NavButton href="/biodiversity" label="Awareness Corner" icon="Globe" />
            <NavButton href="/" label="Logout" icon="Exit" />
          </div>
        </div>
      </div>
      <WaveAnimation />
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <GuestContent/>
    </I18nProvider>
  )
}
