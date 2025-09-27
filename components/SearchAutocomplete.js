"use client"
import { useEffect, useMemo, useState } from 'react'
import { Icon } from './Icons'

export default function SearchAutocomplete({ placeholder='Enter species name', onSelect }) {
  const [query, setQuery] = useState('')
  const [data, setData] = useState([])
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch('/data/species.json').then(r => r.json()).then(setData).catch(()=>{})
  }, [])

  const results = useMemo(() => {
    if (!query) return []
    return data.filter(s => s.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
  }, [data, query])

  function handleKey(e) {
    if (!open) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((active+1) % results.length) }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive((active-1+results.length) % results.length) }
    if (e.key === 'Enter' && results[active]) { onSelect?.(results[active]); setOpen(false) }
  }

  return (
    <div className="relative z-10">
      <div className="flex items-center gap-2 card">
        <Icon.Search className="w-5 h-5 text-primary" />
        <input
          className="w-full bg-transparent outline-none"
          placeholder={placeholder}
          aria-label={placeholder}
          value={query}
          onChange={e=>{setQuery(e.target.value); setOpen(true)}}
          onKeyDown={handleKey}
        />
      </div>
      {open && results.length>0 && (
        <ul className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden">
          {results.map((r,i)=> (
            <li key={r.id}>
              <button className={`w-full text-left px-4 py-3 ${i===active? 'bg-ocean-50':''}`} onMouseEnter={()=>setActive(i)} onClick={()=>{onSelect?.(r); setOpen(false)}}>
                <span className="font-medium text-slate-800">{r.name}</span>
                <span className="ml-2 text-xs text-slate-500">{r.region}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
