import Top from "@/components/templates/TopPage"
import { getTranslations } from "@/lib/translations"
import { Metadata } from "next"
import { Props } from "./layout"

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = getTranslations(locale)

  return {
    title: `${t.metadata.title} - ${t.metadata.pages.top.title}`,
    description: t.metadata.pages.top.description
  }
}

export default function Page() {
  return <Top />
}
