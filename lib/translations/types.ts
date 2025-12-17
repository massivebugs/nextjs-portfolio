import { TRANSLATIONS } from "."
import en from "./assets/en"

export type Translations = typeof en
export type Locale = keyof typeof TRANSLATIONS
