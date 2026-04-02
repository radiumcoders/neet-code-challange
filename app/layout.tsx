import {
  Geist,
  Geist_Mono,
  Barlow_Condensed,
  Barlow,
  Inconsolata,
} from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SmoothScrolling } from "@/components/smooth-scrolling"
import { cn } from "@/lib/utils"

const inconsolata = Inconsolata({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata",
})

const barlow = Barlow({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        geist.variable,
        barlowCondensed.variable,
        barlow.variable,
        inconsolata.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SmoothScrolling>{children}</SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  )
}
