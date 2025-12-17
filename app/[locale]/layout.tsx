import { assistant } from "@/lib/fonts"
import { getLocale, getTranslations, LOCALES } from "@/lib/translations"
import { Metadata } from "next"
import "../globals.css"
import { LocaleContextProvider } from "@/contexts/LocaleContext"
import clsx from "clsx"
import { ThemeProvider } from "next-themes"
import Navbar from "../../components/organisms/Navbar"

export type Props = {
  params: Promise<{
    // Optional because it's not available in `app/page.tsx`.
    locale?: string
  }>
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale: locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title: t.metadata.title
  }
}

export default async function RootLayout({
  children,
  params
}: Readonly<Props & { children: React.ReactNode }>) {
  const { locale } = await params

  return (
    <html lang={getLocale(locale)} className="scroll-smooth" suppressHydrationWarning>
      <body className={clsx(assistant.variable, "antialiased", "font-sans")}>
        <ThemeProvider attribute="class">
          <LocaleContextProvider locale={getLocale(locale)}>
            <Navbar />
            {children}
          </LocaleContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
