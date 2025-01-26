"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Leverage the power of AI to transform your business processes and decision-making capabilities.",
    logo: "/placeholder.svg?height=80&width=80",
    features: [
      "Machine Learning Solutions",
      "Natural Language Processing",
      "Computer Vision Systems",
      "AI Strategy Consulting",
    ],
    color: "from-purple-600 to-pink-600",
  },
  {
    id: "testing",
    title: "Quality Assurance",
    description: "Comprehensive testing solutions to ensure your software meets the highest quality standards.",
    logo: "/placeholder.svg?height=80&width=80",
    features: ["Automated Testing", "Performance Testing", "Security Testing", "Mobile App Testing"],
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "powerbi",
    title: "Power BI Solutions",
    description: "Transform your data into actionable insights with powerful business intelligence tools.",
    logo: "/placeholder.svg?height=80&width=80",
    features: ["Custom Dashboard Development", "Data Modeling", "Real-time Analytics", "Performance Optimization"],
    color: "from-yellow-600 to-orange-600",
  },
  {
    id: "webdev",
    title: "Web Development",
    description: "Create exceptional digital experiences with modern web technologies and frameworks.",
    logo: "/placeholder.svg?height=80&width=80",
    features: ["Full-stack Development", "Cloud Solutions", "API Development", "Progressive Web Apps"],
    color: "from-green-600 to-emerald-600",
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 text-lg">
            Discover how we can help transform your business with our comprehensive range of services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden"
            >
              <div className="relative bg-zinc-900 p-8 rounded-lg h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 relative flex-shrink-0 bg-black/50 rounded-lg overflow-hidden">
                      <Image
                        src={service.logo || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <ArrowRight className="w-4 h-4 mr-2 text-gray-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center text-white font-semibold group/btn">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section className="mt-32 py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <button className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

