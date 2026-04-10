'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang } from './translations'

// Union type so both locales are valid — structure is identical, only string values differ
type T = (typeof translations)[Lang]

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as T,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // Persist + apply RTL/LTR on change
  useEffect(() => {
    const stored = localStorage.getItem('cipher-lang') as Lang | null
    if (stored === 'ar' || stored === 'en') setLangState(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem('cipher-lang', lang)
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => setLangState(l)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
