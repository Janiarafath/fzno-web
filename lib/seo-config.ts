import type { DefaultSeoProps } from "next-seo"

export const SEO: DefaultSeoProps = {
  titleTemplate: "%s | FZNO",
  defaultTitle: "FZNO - Transform Your Business",
  description: "Leading technology solutions in AI, Testing, Power BI, and Web Development",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.fzno.in",
    siteName: "FZNO",
    images: [
      {
        url: "https://www.fzno.in/favicon.png",
        width: 1200,
        height: 630,
        alt: "FZNO",
      },
    ],
  },
  twitter: {
    handle: "@fzno",
    site: "@fzno",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
      sizes: "any",
    },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
}

