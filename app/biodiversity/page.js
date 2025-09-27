"use client"
import Header from '@/components/Header'
import Avatar from '@/components/Avatar'
import NavButton from '@/components/NavButton'
import SearchAutocomplete from '@/components/SearchAutocomplete'
import BadgeGrid from '@/components/BadgeGrid'
import { getBadges } from '@/lib/mockApi'
import { useEffect, useState } from 'react'
import { I18nProvider, useI18n } from '@/lib/i18n'

function BiodiversityInner(){
  const { t } = useI18n()
  const [badges, setBadges] = useState([])
  useEffect(()=>{ getBadges().then(setBadges) },[])
  return (
    <main className="min-h-screen pb-safe">
      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-4xl p-4 space-y-5">
          <Header title={`${t('explorer')}`} icon="Globe" backHref="/guest" />
          <div className="flex flex-col items-center gap-3">
            <Avatar label="Guest" />
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <NavButton href="#" label="Sea Health Index" icon="Globe" />
            <div className="space-y-3">
              <NavButton href="#" label="Explore Species" icon="Search" />
              <SearchAutocomplete onSelect={(s)=>alert(`Selected: ${s.name}`)} />
            </div>
            <NavButton href="#" label="Awareness Module" icon="Book" />
            <NavButton href="#" label="Quiz Zone" icon="Gamepad">
              <div>Play & test your knowledge</div>
              <div>Earn badges & climb the leaderboard</div>
            </NavButton>
          </div>
          <div className="card">
            <div className="font-bold mb-2">Badge Previews</div>
            <BadgeGrid items={badges} />
          </div>
          <footer className="text-center text-white text-sm text-outline">
            Quick links: <a className="underline" href="/roles">Roles</a> • <a className="underline" href="/dashboard">Dashboard</a>
          </footer>
        </div>
      </div>
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <BiodiversityInner/>
    </I18nProvider>
  )
}
