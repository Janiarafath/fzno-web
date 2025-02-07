import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow py-12 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-6">Who We Are</h1>

              <p className="text-xl mb-8">
                FZNO is a leading technology solutions provider, dedicated to revolutionizing businesses with
                cutting-edge innovation. We combine creativity, intelligence, and expertise to deliver solutions that
                drive success in a fast-evolving digital world.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">Our Story</h2>
              <p className="mb-8">
                FZNO was founded with a bold vision—to empower businesses with smart, scalable, and future-ready
                technology solutions. From our humble beginnings, we have grown into a trusted partner for companies
                seeking transformative digital experiences. Our journey has been marked by continuous innovation,
                customer-centric solutions, and a passion for excellence.
              </p>

              <h2 className="text-2xl font-bold mb-4">What We Do</h2>
              <p className="mb-4">
                At FZNO, we don't just provide technology—we create experiences that redefine possibilities. Our
                solutions include:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  Intelligent automation for business efficiency
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  Data-driven insights for smarter decision-making
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  Custom software tailored to unique business needs
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  Secure and scalable cloud solutions for growth
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  AI-powered innovations that push the boundaries of technology
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <strong>Future-Ready Solutions</strong> – We stay ahead of the curve, delivering technology that's
                  built for tomorrow.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <strong>Tailored for You</strong> – Every solution is designed to align with your specific goals.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <strong>Unmatched Innovation</strong> – We challenge limits and create solutions that drive real
                  impact.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <strong>Seamless Experience</strong> – From consultation to implementation, we ensure a smooth and
                  hassle-free journey.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔹</span>
                  <strong>Commitment to Excellence</strong> – Quality is at the heart of everything we do.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Industries We Serve</h2>
              <p className="mb-4">
                FZNO partners with businesses across various industries, helping them harness the power of technology
                for growth:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">📌</span>
                  <strong>Finance</strong> – Enhancing security, automation, and data-driven decision-making.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📌</span>
                  <strong>Healthcare</strong> – Improving patient care through smart healthcare solutions.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📌</span>
                  <strong>Retail & E-commerce</strong> – Powering seamless customer experiences and intelligent
                  insights.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📌</span>
                  <strong>Manufacturing</strong> – Driving efficiency with IoT and automation solutions.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📌</span>
                  <strong>Technology & Startups</strong> – Supporting innovation with scalable tech solutions.
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
              <p className="mb-4">
                At FZNO, we believe in a customer-first approach. We collaborate closely with businesses to understand
                their challenges, craft personalized solutions, and implement them with precision. Our methodology
                focuses on:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <strong>Understanding your needs</strong> – Deep dive into your business goals and challenges.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <strong>Innovating with purpose</strong> – Designing smart, efficient, and scalable solutions.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <strong>Delivering excellence</strong> – Ensuring seamless execution and high-quality results.
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <strong>Continuous evolution</strong> – Keeping your business ahead with the latest advancements.
                </li>
              </ul>

              <div className="text-center mt-12">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

