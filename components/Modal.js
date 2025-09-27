"use client"
import { useEffect } from 'react'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    function onKey(e){ if(e.key==='Escape') onClose?.() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div role="dialog" aria-modal="true" aria-label={title} className="relative w-full sm:w-[480px] bg-white rounded-t-2xl sm:rounded-2xl p-4 text-slate-900 animate-fadeIn">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold">{title}</h2>
          <button className="text-primary" onClick={onClose}>Close</button>
        </div>
        {children}
      </div>
    </div>
  )
}

