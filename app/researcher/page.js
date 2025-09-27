"use client"
import Header from '@/components/Header'
import NavButton from '@/components/NavButton'
import Card from '@/components/Card'
import { useEffect, useMemo, useState } from 'react'
import { getDatasets, getProjects } from '@/lib/mockApi'
import { I18nProvider } from '@/lib/i18n'

function ResearcherInner(){
  const [projects, setProjects] = useState([])
  const [datasets, setDatasets] = useState([])
  const [query, setQuery] = useState('')
  const filtered = useMemo(()=> datasets.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || d.tags.join(' ').includes(query.toLowerCase())), [query, datasets])
  useEffect(()=>{ getProjects().then(setProjects); getDatasets().then(setDatasets) },[])

  return (
    <main className="min-h-screen">
      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-5xl p-4 space-y-5 lg:grid lg:grid-cols-[240px,1fr] lg:gap-6">
          <div className="hidden lg:block space-y-2">
            <div className="card">Menu</div>
            <a className="card block" href="#profile">Profile</a>
            <a className="card block" href="#projects">My Projects</a>
            <a className="card block" href="#datasets">Data Sets</a>
            <a className="card block" href="/">Logout</a>
          </div>
          <div className="space-y-5">
            <Header title="RESEARCHER" icon="User" backHref="/roles" />
            <div className="grid gap-3 lg:hidden">
              <NavButton href="#profile" label="Profile" icon="User" />
              <NavButton href="#projects" label="My Projects" icon="Book" />
              <NavButton href="#datasets" label="Data Sets" icon="Chart" />
              <NavButton href="/" label="Logout" icon="Exit" />
            </div>

            <section id="projects" className="space-y-3">
              <div className="font-bold">My Projects</div>
              {projects.map(p => (
                <details key={p.id} className="card">
                  <summary className="cursor-pointer font-semibold">{p.name} <span className="ml-2 text-sm text-slate-600">{p.status}</span></summary>
                  <p className="mt-2 text-slate-700">{p.summary}</p>
                </details>
              ))}
            </section>

            <section id="datasets" className="space-y-3">
              <div className="font-bold">Data Sets</div>
              <div className="card flex items-center gap-2">
                <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search datasets" className="w-full outline-none"/>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map(d => (
                  <Card key={d.id}>
                    <div className="font-semibold">{d.name}</div>
                    <div className="text-sm text-slate-600">{d.tags.join(', ')}</div>
                    <div className="text-xs text-slate-500 mt-1">{d.size}</div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <ResearcherInner/>
    </I18nProvider>
  )
}
