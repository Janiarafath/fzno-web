import Image from "next/image"

const customers = [
  { name: "Company A", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Company B", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Company C", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Company D", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Company E", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Company F", logo: "/placeholder.svg?height=100&width=200" },
]

const testimonials = [
  {
    name: "Alice Johnson",
    position: "CTO, Company X",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "FZNO's AI solutions have revolutionized our business processes. Their expertise and innovative approach have been invaluable to our growth.",
  },
  {
    name: "Bob Williams",
    position: "CEO, Company Y",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The quality assurance services provided by FZNO have significantly improved our product reliability. Their attention to detail is unmatched.",
  },
  {
    name: "Carol Davis",
    position: "Head of Analytics, Company Z",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "FZNO's Power BI solutions have transformed the way we analyze and visualize our data. Their insights have been crucial for our decision-making process.",
  },
]

export default function CustomersPage() {
  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-grow py-12 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            Our Customers
          </h1>
          <p className="text-lg sm:text-xl text-center mb-10 text-gray-600 dark:text-gray-300">
            We're proud to work with some of the most innovative companies across various industries.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <Image
                  src={customer.logo || "/placeholder.svg"}
                  alt={customer.name}
                  width={200}
                  height={100}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
              >
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4 italic">"{testimonial.testimonial}"</p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</h3>
                <p className="text-purple-600 dark:text-purple-400">{testimonial.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

