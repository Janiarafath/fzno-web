"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { AlertProvider } from "@/components/AlertProvider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AlertProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

