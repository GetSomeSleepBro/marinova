"use client"
import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function LeafletMap() {
  const mapRef = useRef(null)
  useEffect(() => {
    const init = () => {
      if (!window.L || mapRef.current?._leaflet_id) return
      const map = window.L.map('map').setView([20.5937, 78.9629], 4)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
      }).addTo(map)
      mapRef.current = map
    }
    if (typeof window !== 'undefined') {
      if (window.L) init()
      else {
        const ready = () => setTimeout(init, 50)
        window.addEventListener('leaflet:ready', ready)
        return () => window.removeEventListener('leaflet:ready', ready)
      }
    }
  }, [])

  return (
    <div className="relative">
      <Script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" strategy="afterInteractive" onLoad={() => {
        const ev = new Event('leaflet:ready'); window.dispatchEvent(ev)
      }} />
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
      <div id="map" className="w-full h-64 rounded-xl overflow-hidden"></div>
    </div>
  )
}

