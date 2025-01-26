import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-8 dark:text-gray-100">Thank You!</h1>
      <p className="text-xl mb-8 dark:text-gray-300">Your submission has been received. We'll be in touch soon.</p>
      <Link href="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}

