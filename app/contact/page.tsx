import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
              Ready to transform your business with our cutting-edge technology solutions? Contact us today!
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

