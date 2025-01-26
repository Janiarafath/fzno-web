"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useAlert } from "@/components/AlertProvider"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { showAlert } = useAlert()

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const userData = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email_address: formData.get("email_address"),
      phone_number: formData.get("phone_number"),
      message: formData.get("message"),
    }

    try {
      const result = await emailjs.send("service_vlhumpe", "template_gi63opv", userData, "LJB9OySqh4LPpFqpI")
      console.log(result.text)
      showAlert({
        message: "Your message has been sent successfully!",
        variant: "success",
      })
    } catch (error) {
      console.error("Error sending email:", error)
      showAlert({
        message: "Failed to send message. Please try again.",
        variant: "error",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="space-y-2">
        <Label htmlFor="first_name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          First Name
        </Label>
        <Input
          type="text"
          id="first_name"
          name="first_name"
          placeholder="Your First Name"
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="last_name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Last Name
        </Label>
        <Input type="text" id="last_name" name="last_name" placeholder="Your Last Name" required className="w-full" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email_address" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Email Address
        </Label>
        <Input
          type="email"
          id="email_address"
          name="email_address"
          placeholder="Your Email Address"
          required
          className="w-full"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone_number" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Phone Number
        </Label>
        <Input type="tel" id="phone_number" name="phone_number" placeholder="Your Phone Number" className="w-full" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
          className="w-full min-h-[120px]"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

