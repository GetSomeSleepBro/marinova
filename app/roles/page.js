"use client"
import Header from '@/components/Header'
import RoleCard from '@/components/RoleCard'
import Modal from '@/components/Modal'
import { useState } from 'react'
import { I18nProvider, useI18n } from '@/lib/i18n'

function RolesInner(){
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  return (
    <main className="min-h-screen pb-safe">
      <div className="flex justify-center">
        <div className="w-full max-w-sm lg:max-w-4xl p-4 space-y-5">
          <Header title={`${t('roles')}`} icon="Globe" avatar={false} backHref="/" />
          <div className="grid gap-3 lg:grid-cols-4">
            <RoleCard icon="User" title="Researcher" description="Access advanced data" href="/researcher" />
            <RoleCard icon="Boat" title="Fisherman" description="Trips and weather" href="/fisherman" />
            <RoleCard icon="Microscope" title="Citizen/Student" description="Learn & explore" href="/biodiversity" />
            <RoleCard icon="Lock" title="Guest Mode" description="Limited access" href="/guest" />
          </div>
          <div className="text-white/80 text-sm">Tap a role to continue. Non-guest roles may require login.</div>
          <div>
            <button className="btn-ghost" onClick={()=>setOpen(true)}>Login (modal)</button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={()=>setOpen(false)} title="Sign in">
        <form className="space-y-3">
          <label className="block">
            <div className="text-sm font-medium mb-1">Email</div>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com"/>
          </label>
          <label className="block">
            <div className="text-sm font-medium mb-1">Password</div>
            <input type="password" className="w-full border rounded px-3 py-2" placeholder="••••••••"/>
          </label>
          <button type="button" className="btn-primary w-full" onClick={()=>setOpen(false)}>Continue</button>
        </form>
      </Modal>
    </main>
  )
}

export default function Page(){
  return (
    <I18nProvider>
      <RolesInner/>
    </I18nProvider>
  )
}
