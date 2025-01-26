import { Brain, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ArtificialIntelligencePage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-6">
                <Brain className="h-12 w-12 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Artificial Intelligence Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Empower your business with cutting-edge AI and machine learning capabilities
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Transform Your Business with AI</h2>
              <p className="mb-6">
                At FZNO, we leverage state-of-the-art machine learning algorithms and neural networks to provide
                innovative AI solutions that drive real business outcomes. Our expertise spans across predictive
                analytics, natural language processing, and computer vision, enabling businesses to automate processes,
                gain deeper insights from data, and create intelligent systems that learn and adapt.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our AI Capabilities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Advanced Machine Learning",
                  "Natural Language Processing",
                  "Computer Vision",
                  "Predictive Analytics",
                  "Intelligent Automation",
                  "Deep Learning",
                  "Reinforcement Learning",
                  "AI-Powered Chatbots",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Benefits of Our AI Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Enhanced Decision Making",
                    description: "Leverage data-driven insights for smarter, faster decisions.",
                  },
                  {
                    title: "Improved Customer Experience",
                    description: "Deliver personalized interactions and recommendations.",
                  },
                  {
                    title: "Increased Operational Efficiency",
                    description: "Automate processes and optimize resource allocation.",
                  },
                  {
                    title: "Competitive Advantage",
                    description: "Stay ahead with innovative AI-powered solutions.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our AI Development Process</h3>
              <ol className="list-decimal pl-6 mb-8">
                <li className="mb-2">Requirement Analysis and Problem Definition</li>
                <li className="mb-2">Data Collection and Preprocessing</li>
                <li className="mb-2">AI Model Selection and Development</li>
                <li className="mb-2">Training and Validation</li>
                <li className="mb-2">Integration and Deployment</li>
                <li>Monitoring and Continuous Improvement</li>
              </ol>

              <p>
                Whether you're looking to implement intelligent chatbots, develop recommendation systems, or create
                custom AI solutions tailored to your specific business needs, our team of experts is here to guide you
                through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our AI solutions can transform your business and drive innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Get Started with AI
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

