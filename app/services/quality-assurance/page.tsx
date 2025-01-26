import { TestTube, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function QualityAssurancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
                <TestTube className="h-12 w-12 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Quality Assurance Services
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Ensure flawless performance and reliability with our comprehensive testing solutions
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Elevate Your Software Quality</h2>
              <p className="mb-6">
                At FZNO, we provide comprehensive QA services covering all aspects of software testing. Our approach
                combines both manual and automated testing methodologies to ensure your software meets the highest
                quality standards and performs flawlessly under all conditions.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our QA Expertise</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Functional Testing",
                  "Performance Testing",
                  "Security Testing",
                  "User Experience Testing",
                  "Automated Testing",
                  "Manual Testing",
                  "Mobile App Testing",
                  "API Testing",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Benefits of Our QA Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Improved Software Reliability",
                    description: "Ensure your software performs consistently under various conditions.",
                  },
                  {
                    title: "Enhanced User Satisfaction",
                    description: "Deliver a seamless and bug-free experience to your users.",
                  },
                  {
                    title: "Faster Time-to-Market",
                    description: "Streamline your development process with efficient testing.",
                  },
                  {
                    title: "Cost Savings",
                    description: "Identify and fix issues early in the development cycle.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our QA Process</h3>
              <ol className="list-decimal pl-6 mb-8">
                <li className="mb-2">Requirements Analysis and Test Planning</li>
                <li className="mb-2">Test Case Development</li>
                <li className="mb-2">Test Environment Setup</li>
                <li className="mb-2">Test Execution (Manual and Automated)</li>
                <li className="mb-2">Defect Reporting and Tracking</li>
                <li>Regression Testing and Final Quality Assessment</li>
              </ol>

              <p>
                Our team of experienced QA professionals uses industry-leading tools and methodologies to ensure your
                software meets the highest standards of quality and reliability. Whether you need comprehensive testing
                for a new application or want to improve the quality of an existing product, we're here to help.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Elevate Your Software Quality?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our QA services can ensure the reliability and performance of your software.
            </p>
            <Link href="/contact">
              <Button size="lg" className="rounded-full">
                Improve Your QA Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

