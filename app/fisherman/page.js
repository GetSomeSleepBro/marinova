"use client"
import Header from '@/components/Header'
import NavButton from '@/components/NavButton'
import Card from '@/components/Card'
import { useEffect, useMemo, useState } from 'react'
import { getTrips } from '@/lib/mockApi'
import { Icon } from '@/components/Icons'
import { I18nProvider } from '@/lib/i18n'

function CalendarMock({ trips=[] }){
  // Build a 5x7 grid mock calendar for current month
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const start = new Date(year, month, 1)
  const startDay = start.getDay() || 7
  const daysInMonth = new Date(year, month+1, 0).getDate()
  const cells = Array.from({length: 42}).map((_,i)=>{
    const day = i - (startDay-1) + 1
    const date = new Date(year, month, day)
    const key = date.toISOString().slice(0,10)
    const trip = trips.find(t=>t.date===key)
    return { day: day>0 && day<=daysInMonth ? day : '', key, trip }
  })
  return (
    <div className="grid grid-cols-7 gap-1 text-slate-900">
      {cells.map((c,i)=> (
        <div key={i} className={`h-10 rounded-md ${c.day? 'bg-white/90':'bg-white/30'} flex items-center justify-center text-sm relative`}>
          {c.day}
          {c.trip && <span title={c.trip.location} className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary"/>}
        </div>
      ))}
    </div>
  )
}

function FishermanInner(){
  const [trips, setTrips] = useState([])
  useEffect(()=>{ getTrips().then(setTrips) },[])
  const nextTrip = useMemo(()=> trips[0], [trips])
  return (
    <main className="min-h-screen pb-safe relative">
      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-5xl p-4 space-y-5">
          <Header title="FISHERMAN" icon="Boat" backHref="/roles" />
          <div className="grid gap-3 lg:hidden">
            <NavButton href="#profile" label="Profile" icon="User" />
            <NavButton href="#trips" label="My Trips" icon="Boat" />
            <NavButton href="#weather" label="Weather" icon="CloudWind">
              <div className="text-xs">Safety tips available</div>
            </NavButton>
            <NavButton href="/" label="Logout" icon="Exit" />
          </div>

          <div id="trips" className="space-y-3">
            <div className="font-bold">My Trips</div>
            <Card>
              <CalendarMock trips={trips} />
              {nextTrip && (
                <div className="mt-3 text-slate-700 text-sm">Next trip: {nextTrip.date} — {nextTrip.location}</div>
              )}
            </Card>
          </div>

          <div id="weather" className="space-y-3">
            <div className="font-bold flex items-center gap-2">Weather <span className="relative group">
              <Icon.Exclaim className="w-4 h-4 text-yellow-300"/>
              <span role="tooltip" className="sr-only group-hover:not-sr-only absolute left-0 -top-8 bg-black/75 text-white text-xs px-2 py-1 rounded">Always check local advisories</span>
            </span></div>
            <div className="grid gap-3 lg:grid-cols-2">
              <Card>
                <div className="flex items-center gap-2 text-slate-900">
                  <Icon.CloudWind className="w-6 h-6"/> Windy conditions
                </div>
              </Card>
              <Card>
                <div className="flex items-center gap-2 text-slate-900">
                  <Icon.Thermometer className="w-6 h-6"/> 29°C sea temp
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute bottom-2 left-2 text-5xl opacity-20 select-none -z-10">🪸</div>
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <FishermanInner/>
    </I18nProvider>
  )
}
