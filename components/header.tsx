"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import AnimatedLogo from "./AnimatedLogo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isHomePage = pathname === "/"

  const scrollToSection = (id: string) => {
    if (isHomePage) {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(`/#${id}`)
    }
    setIsMenuOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <AnimatedLogo />

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Services
              </button>
              <Link
                href="/who-we-are"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/who-we-are").then(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  })
                }}
              >
                Who We Are
              </Link>
              <Link
                href="/customers"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  router.push("/customers").then(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  })
                }}
              >
                Customers
              </Link>
              <Link
                href="/careers"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Careers
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Services
                </button>
                <Link
                  href="/who-we-are"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/who-we-are").then(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    })
                  }}
                >
                  Who We Are
                </Link>
                <Link
                  href="/customers"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    router.push("/customers").then(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    })
                  }}
                >
                  Customers
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

