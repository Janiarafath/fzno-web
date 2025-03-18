"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, ChevronDown, BarChart2, TestTubes, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import AnimatedLogo from "./AnimatedLogo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const products = [
  {
    title: "AnalytixFlow",
    description: "Advanced analytics and visualization platform for business intelligence",
    icon: <BarChart2 className="w-6 h-6 text-purple-500" />,
    href: "https://analytixflow.fzno.in/",
  },
  {
    title: "TestIQ",
    description: "Intelligent test automation and quality assurance platform",
    icon: <TestTubes className="w-6 h-6 text-purple-500" />,
    href: "https://dr5hn.github.io/coming-soon/",
  },
  {
    title: "AI Extractor",
    description: "Advanced AI-powered data extraction and processing solution",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    href: "https://ai-extractor.fzno.in/",
  },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
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

  const ProductMenu = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`${mobile ? "" : "w-[400px]"} p-4`}>
      <div className="grid gap-4">
        <h3 className="font-medium text-sm text-gray-500 dark:text-gray-400">PLATFORM</h3>
        {products.map((product) => (
          <a
            key={product.title}
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => mobile && setIsMenuOpen(false)}
          >
            <div className="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/20">{product.icon}</div>
            <div>
              <div className="font-medium mb-1">{product.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{product.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )

  if (!mounted) return null

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
              <DropdownMenu onOpenChange={setIsProductsOpen}>
                <DropdownMenuTrigger className="flex items-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Products
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <ProductMenu />
                </DropdownMenuContent>
              </DropdownMenu>
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
                <div>
                  <ProductMenu mobile />
                </div>
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

