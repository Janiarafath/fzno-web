export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1>Terms and Conditions</h1>
          <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing our website and services, you agree to be bound by these Terms and Conditions and all
            applicable laws and regulations.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on FZNO's website for personal, non-commercial use
            only.
          </p>

          <h2>3. Services</h2>
          <p>
            We provide various technology solutions including but not limited to AI services, quality assurance,
            analytics, and web development. All services are subject to separate agreements and terms.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our website and services are owned by FZNO and are protected by
            international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>5. User Responsibilities</h2>
          <ul>
            <li>Provide accurate information</li>
            <li>Maintain the security of your account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Use services responsibly and ethically</li>
          </ul>

          <h2>6. Limitation of Liability</h2>
          <p>
            FZNO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting
            from your use of our services.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any material changes to
            these terms.
          </p>

          <h2>8. Contact Information</h2>
          <p>
            Questions about the Terms and Conditions should be sent to us at:{" "}
            <a href="mailto:contact@fzno.com">contact@fzno.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

