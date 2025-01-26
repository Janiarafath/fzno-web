import { Database, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PowerBIAnalyticsPage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-950/20 dark:to-gray-950 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 mb-6">
                <Database className="h-12 w-12 text-yellow-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Power BI Analytics Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Transform your data into actionable insights with powerful business intelligence tools
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Unlock the Power of Your Data</h2>
              <p className="mb-6">
                At FZNO, we specialize in creating custom Power BI solutions that help businesses visualize their data
                and gain valuable insights. Our expert team develops tailored dashboards, reports, and data models that
                allow you to explore your data in real-time, empowering decision-makers with the information they need
                to drive business growth and efficiency.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Power BI Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Custom Dashboard Development",
                  "Real-time Data Visualization",
                  "Advanced Data Modeling",
                  "Interactive Reports",
                  "Data Integration",
                  "Mobile BI Solutions",
                  "Performance Optimization",
                  "Power BI Training",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Benefits of Our Power BI Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Data-Driven Decision Making",
                    description: "Make informed decisions based on real-time insights.",
                  },
                  {
                    title: "Improved Operational Efficiency",
                    description: "Identify bottlenecks and optimize business processes.",
                  },
                  {
                    title: "Enhanced Customer Insights",
                    description: "Understand customer behavior and preferences better.",
                  },
                  {
                    title: "Streamlined Reporting",
                    description: "Automate and simplify your reporting processes.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Power BI Development Process</h3>
              <ol className="list-decimal pl-6 mb-8">
                <li className="mb-2">Requirements Gathering and Analysis</li>
                <li className="mb-2">Data Source Identification and Integration</li>
                <li className="mb-2">Data Modeling and Transformation</li>
                <li className="mb-2">Dashboard and Report Design</li>
                <li className="mb-2">Implementation and Testing</li>
                <li>Training and Ongoing Support</li>
              </ol>

              <p>
                Whether you need executive dashboards, sales reports, or complex data models, our team of Power BI
                experts is here to help you unlock the full potential of your data and drive your business forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Harness the Power of Your Data?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our Power BI solutions can transform your business intelligence capabilities.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Get Started with Power BI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline" className="rounded-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

