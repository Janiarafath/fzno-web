export default function Head() {
    return (
      <>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Add a favicon for the browser */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        
        {/* Google-specific meta tags */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Open Graph meta tag for Facebook */}
        <meta property="og:image" content="/favicon.ico" />
        <meta name="google-site-verification" content="QIUn5bpZv3IU-rQ-u9hGlX5Mynj2POxdd35qKd8_e10" />
      </>
    );
  }
  