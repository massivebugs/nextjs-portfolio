import type { Metadata } from "next";
import "./globals.css";
import { assistant } from "./fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Da Hyun Kim - Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${assistant.className} antialiased`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
