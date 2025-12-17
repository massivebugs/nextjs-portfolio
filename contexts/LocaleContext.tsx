"use client"
import { getTranslations } from "@/lib/translations"
import { Locale, Translations } from "@/lib/translations/types"
import { createContext, useContext, useState, ReactNode, useMemo } from "react"

type LocaleContextType = {
  t: Translations
}

// Default placeholder to satisfy TypeScript, but never actually used
const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleContextProvider({
  locale,
  children
}: {
  locale: Locale
  children: ReactNode
}) {
  const t = useMemo<Translations>(() => getTranslations(locale), [locale])

  return <LocaleContext.Provider value={{ t }}>{children}</LocaleContext.Provider>
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocaleContext must be used within a LocaleContextProvider")
  return ctx
}
