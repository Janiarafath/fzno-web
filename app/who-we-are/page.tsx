import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const teamMembers = [
  {
    name: "Javed",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
    description: "John has over 20 years of experience in the tech industry and is passionate about innovation.",
  },
  {
    name: "Afri",
    position: "CTO",
    image: "/placeholder.svg?height=200&width=200",
    description: "Jane leads our technical team and has a background in AI and machine learning.",
  },
  {
    name: "Mohammed",
    position: "Head of Quality Assurance",
    image: "/placeholder.svg?height=200&width=200",
    description: "Mike ensures that all our solutions meet the highest quality standards.",
  },
  {
    name: "basha",
    position: "Lead Power BI Developer",
    image: "/placeholder.svg?height=200&width=200",
    description: "Sarah is an expert in data visualization and business intelligence solutions.",
  },
]

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow py-12 md:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
              FZNO is a leading technology solutions provider, dedicated to transforming businesses through innovative
              and cutting-edge solutions.
            </p>
            <div className="space-y-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  To empower businesses with state-of-the-art technology solutions that drive growth, efficiency, and
                  innovation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Values</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Innovation: We constantly push the boundaries of what's possible</li>
                  <li>Excellence: We strive for the highest quality in everything we do</li>
                  <li>Collaboration: We believe in the power of teamwork and partnerships</li>
                  <li>Integrity: We conduct our business with honesty and transparency</li>
                  <li>Customer-centric: We put our clients' needs at the heart of our solutions</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Our Expertise</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">We specialize in four key areas of technology:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Artificial Intelligence</li>
                  <li>Quality Assurance</li>
                  <li>Power BI Analytics</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">{member.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{member.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
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
  )
}

