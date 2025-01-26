import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AlertProvider } from "@/components/AlertProvider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "FZNO - Transform Your Business",
  description: "Leading technology solutions in AI, Testing, Power BI, and Web Development",
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AlertProvider>
            <div className="flex flex-col min-h-screen">
              <Header lang={lang} />
              <main className="flex-grow">{children}</main>
              <Footer lang={lang} />
            </div>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

