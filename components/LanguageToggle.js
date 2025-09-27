"use client"
import { useI18n } from '@/lib/i18n'

export default function LanguageToggle() {
  const { lang, setLang } = useI18n()
  return (
    <div className="flex gap-1 bg-white/20 rounded-full p-1" role="group" aria-label="Language selector">
      {['en','hi'].map(code => (
        <button key={code} onClick={()=>setLang(code)} className={`px-2 py-1 rounded-full text-xs ${lang===code?'bg-white text-primary':'text-white/90'}`}>{code.toUpperCase()}</button>
      ))}
    </div>
  )
}

