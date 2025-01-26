"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AnimatedLogo = () => {
  const pathname = usePathname()

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Link href="/" className="flex items-center space-x-2">
      <motion.div key={pathname} initial="hidden" animate="visible" variants={logoVariants} className="flex">
        {["F", "Z", "N", "O"].map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className={`text-2xl font-bold ${
              index === 0
                ? "text-purple-600 dark:text-purple-400"
                : "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
            }`}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Link>
  )
}

export default AnimatedLogo

