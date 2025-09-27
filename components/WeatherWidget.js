"use client"
import { useEffect, useState } from 'react'
import Card from './Card'
import { Icon } from './Icons'

export default function WeatherWidget() {
  const [now, setNow] = useState({ time: '07:00', waveHeight: '1.5m', tide: 'Low', fish: 'High', temp: '29°C' })
  useEffect(() => {
    fetch('/data/weather.json').then(r=>r.json()).then(arr=>{ if (arr?.length) setNow(arr[0]) }).catch(()=>{})
  }, [])
  return (
    <Card>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2"><Icon.Wave className="w-5 h-5 text-primary"/> Wave Height <span className="ml-auto font-semibold">{now.waveHeight}</span></div>
        <div className="flex items-center gap-2"><Icon.Tide className="w-5 h-5 text-primary"/> Tide <span className="ml-auto font-semibold">{now.tide}</span></div>
        <div className="flex items-center gap-2"><Icon.Fish className="w-5 h-5 text-primary"/> Fish Pop. <span className="ml-auto font-semibold">{now.fish}</span></div>
        <div className="flex items-center gap-2"><Icon.Thermometer className="w-5 h-5 text-primary"/> Temp <span className="ml-auto font-semibold">{now.temp}</span></div>
      </div>
    </Card>
  )
}
