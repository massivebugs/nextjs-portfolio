import { Assistant } from "next/font/google"

export const assistant = Assistant({
  subsets: ["latin"],
  variable: "--font-assistant",
  fallback: ["sans-serif"]
})
