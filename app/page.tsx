"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Code, Database, TestTube } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              TRANSFORM
              <br />
              YOUR BUSINESS
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400">
              We deliver innovative solutions that drive real business outcomes
            </p>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
              onClick={() => scrollToSection(servicesRef)}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Explore our comprehensive range of technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Artificial Intelligence"
              description="Transform your business with cutting-edge AI solutions and machine learning capabilities."
              icon={<Brain className="h-8 w-8" />}
              link="/services/artificial-intelligence"
            />
            <ServiceCard
              title="Quality Assurance"
              description="Ensure flawless performance with our comprehensive testing services."
              icon={<TestTube className="h-8 w-8" />}
              link="/services/quality-assurance"
            />
            <ServiceCard
              title="Power BI Analytics"
              description="Turn data into actionable insights with powerful business intelligence solutions."
              icon={<Database className="h-8 w-8" />}
              link="/services/power-bi-analytics"
            />
            <ServiceCard
              title="Web Development"
              description="Create exceptional digital experiences with modern web technologies."
              icon={<Code className="h-8 w-8" />}
              link="/services/web-development"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">About FZNO</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              FZNO is a cutting-edge technology solutions provider at the forefront of digital transformation. We
              specialize in Artificial Intelligence, Quality Assurance, Power BI Analytics, and Web Development,
              delivering innovative solutions that drive real business outcomes.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Our team of expert professionals is committed to excellence, continuously pushing the boundaries of what's
              possible in technology. We work closely with our clients to understand their unique challenges and develop
              tailored solutions that propel their businesses forward.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              At FZNO, we're not just service providers – we're your partners in innovation. Our mission is to empower
              businesses with cutting-edge technology, enabling them to thrive in the digital age and stay ahead of the
              competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Get in Touch</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Ready to transform your business? Contact us today to discuss how our services can help you achieve your
              goals.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-opacity"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

