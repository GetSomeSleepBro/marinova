"use client"
import Header from '@/components/Header'
import AlertBanner from '@/components/AlertBanner'
import Card from '@/components/Card'
import WeatherWidget from '@/components/WeatherWidget'
import BottomNav from '@/components/BottomNav'
import LeafletMap from '@/components/LeafletMap'
import useInterval from '@/lib/useInterval'
import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icons'
import { I18nProvider, useI18n } from '@/lib/i18n'

function DashboardInner(){
  const { t } = useI18n()
  const [time, setTime] = useState('7:00 AM')
  const [winds, setWinds] = useState('High winds expected')
  useInterval(()=>{
    // Mock updates: flip between messages
    setTime(prev => prev === '7:00 AM' ? '7:30 AM' : '7:00 AM')
    setWinds(prev => prev === 'High winds expected' ? 'Moderate winds expected' : 'High winds expected')
  }, 5000)

  useEffect(()=>{},[])
  const alertColor = winds.includes('High') ? 'red' : 'yellow'

  return (
    <main className="min-h-screen pb-safe">
      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-5xl p-4 space-y-4">
          <Header title={`${t('dashboard')}`} icon="Wave" backHref="/guest" />

          <AlertBanner color={alertColor} message={winds} />

          <Card>
            <div className="flex items-center gap-2 text-slate-900">
              <Icon.Back className="w-5 h-5 text-primary"/>
              <div className="font-bold">Best time to fish in your area: <span className="text-primary">{time}</span></div>
            </div>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-3">
              <div className="font-bold">Live Sea Conditions</div>
              {/* Weather widget */}
              {/* @ts-expect-error Async Server Component in App Router */}
              <WeatherWidget />
              <button className="btn-primary w-full">View Hourly Forecast</button>
            </div>
            <div className="space-y-3">
              <div className="font-bold">Biodiversity Spotlight</div>
              <LeafletMap />
              <div className="card flex items-center gap-3">
                <Icon.Fish className="w-5 h-5 text-primary"/> <span className="font-semibold">Blue Tang</span>
                <span className="ml-auto text-sm text-slate-600">Coral Reefs</span>
              </div>
              <a href="/biodiversity" className="btn-ghost w-full text-center">Explore Local Species &gt;</a>
            </div>
          </div>

          <div className="fixed bottom-16 right-4 w-20 h-10 rounded-full windy text-slate-900/60 hidden sm:block z-0 pointer-events-none" aria-hidden/>
        </div>
      </div>
      <BottomNav />
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <DashboardInner/>
    </I18nProvider>
  )
}
