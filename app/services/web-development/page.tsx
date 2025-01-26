import { Code, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow">
        <div className="bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-950 py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-4 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                <Code className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                Web Development Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Create exceptional digital experiences with modern web technologies
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6">Elevate Your Online Presence</h2>
              <p className="mb-6">
                At FZNO, we specialize in creating cutting-edge web solutions that help businesses establish a strong
                online presence and deliver exceptional user experiences. Our expert team leverages the latest
                technologies and frameworks to build fast, secure, and scalable web applications tailored to your
                specific needs.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Our Web Development Services</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  "Responsive Website Design",
                  "Custom Web Application Development",
                  "E-commerce Solutions",
                  "Content Management Systems (CMS)",
                  "Progressive Web Apps (PWA)",
                  "API Development and Integration",
                  "Web Performance Optimization",
                  "Accessibility Compliance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4">Technologies We Use</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "Frontend",
                    description: "React.js, Next.js, Vue.js, Angular",
                  },
                  {
                    title: "Backend",
                    description: "Node.js, Express, Django, Ruby on Rails",
                  },
                  {
                    title: "Databases",
                    description: "MongoDB, PostgreSQL, MySQL, Redis",
                  },
                  {
                    title: "Cloud & DevOps",
                    description: "AWS, Google Cloud, Azure, Docker",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold mb-4">Our Web Development Process</h3>
              <ol className="list-decimal pl-6 mb-8">
                <li className="mb-2">Requirements Gathering and Analysis</li>
                <li className="mb-2">UI/UX Design and Prototyping</li>
                <li className="mb-2">Frontend and Backend Development</li>
                <li className="mb-2">Quality Assurance and Testing</li>
                <li className="mb-2">Deployment and Launch</li>
                <li>Maintenance and Support</li>
              </ol>

              <p>
                Whether you need a simple corporate website or a sophisticated web application, our team of experienced
                developers is committed to delivering web solutions that are not only visually appealing but also
                performant, secure, and scalable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss how our web development expertise can bring your vision to life.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact">
                <Button size="lg" className="rounded-full">
                  Start Your Web Project
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

