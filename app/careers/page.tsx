import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow py-12 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
              Join Our Team
            </h1>
            <p className="text-lg sm:text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
              At FZNO, we're always looking for talented individuals to help us push the boundaries of technology and
              innovation.
            </p>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Why Work With Us?</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Cutting-edge projects in AI, QA, Power BI, and Web Development</li>
                  <li>Collaborative and innovative work environment</li>
                  <li>Opportunities for professional growth and learning</li>
                  <li>Competitive compensation and benefits</li>
                  <li>Work-life balance and flexible schedules</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Open Positions</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We currently have openings in the following areas:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>AI Engineers</li>
                  <li>Quality Assurance Specialists</li>
                  <li>Power BI Developers</li>
                  <li>Full Stack Web Developers</li>
                  <li>Project Managers</li>
                </ul>
              </div>
              <div className="text-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full">
                    Apply Now
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

