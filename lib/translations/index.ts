import en from "./assets/en"
import ja from "./assets/ja"
import { Locale } from "./types"

// Add new locales here
export const TRANSLATIONS = { en, ja } as const

export const LOCALES = Object.keys(TRANSLATIONS) as [keyof typeof TRANSLATIONS]
export const DEFAULT_LOCALE: Locale = "en"

export const getLocale = (locale?: string): Locale => {
  return LOCALES.includes(locale as Locale) ? (locale as Locale) : DEFAULT_LOCALE
}

export const getTranslations = (locale?: string) => {
  return TRANSLATIONS[getLocale(locale)]
}
