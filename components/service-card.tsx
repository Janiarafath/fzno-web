"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">
        <div className="mb-4 text-purple-600 dark:text-purple-400">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <Link href={link}>
          <Button
            variant="outline"
            className="mt-2 bg-white/50 dark:bg-black/50 hover:bg-white/75 dark:hover:bg-black/75"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

