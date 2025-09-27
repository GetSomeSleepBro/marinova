"use client"
import { useEffect, useState } from 'react'

export default function useFadeIn(delay=0) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const id = setTimeout(()=>setVisible(true), delay)
    return () => clearTimeout(id)
  }, [delay])
  return visible ? 'animate-fadeIn' : 'opacity-0 translate-y-2'
}

