"use client"
import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    const match = window.matchMedia('(prefers-color-scheme: dark)').matches
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved==='dark' : match
    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled)
    localStorage.setItem('theme', enabled? 'dark':'light')
  }, [enabled])
  return (
    <button aria-label="Toggle dark mode" onClick={()=>setEnabled(e=>!e)} className="px-3 py-2 rounded-full bg-white/20 hover:bg-white/30">
      {enabled ? '🌙' : '☀️'}
    </button>
  )
}

