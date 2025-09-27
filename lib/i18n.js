"use client"
import { createContext, useContext, useMemo, useState } from 'react'

const dict = {
  en: {
    guest: 'GUEST EXPLORER MODE',
    explorer: 'OCEAN BIODIVERSITY EXPLORER',
    dashboard: 'Smart Ocean Dashboard',
    roles: 'SMART OCEAN & FISHERIES MANAGEMENT',
  },
  hi: {
    guest: 'अतिथि खोज मोड',
    explorer: 'समुद्री जैव विविधता अन्वेषक',
    dashboard: 'स्मार्ट ओशन डैशबोर्ड',
    roles: 'स्मार्ट ओशन और मत्स्य प्रबंधन',
  }
}

const I18nContext = createContext({ lang: 'en', t: (k)=>k, setLang: ()=>{} })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => dict[lang]?.[key] || dict.en[key] || key
  const value = useMemo(()=>({ lang, setLang, t }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(){
  return useContext(I18nContext)
}

