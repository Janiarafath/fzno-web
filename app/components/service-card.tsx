"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]), {
    damping: 30,
    stiffness: 300,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]), {
    damping: 30,
    stiffness: 300,
  })

  function onMouseMove({ clientX, clientY }: React.MouseEvent) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width - 0.5
    const y = (clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: 1000,
      }}
      className="relative w-full"
    >
      <motion.div
        style={{
          rotateX: hovering ? rotateX : 0,
          rotateY: hovering ? rotateY : 0,
        }}
        className="w-full"
      >
        <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
          <div className="relative z-10">
            <div className="mb-4 text-purple-600 dark:text-purple-400">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

