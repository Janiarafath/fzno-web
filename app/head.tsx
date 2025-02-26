// app/head.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fzno.in"),
  title: "FZNO - Transform Your Business",
  description: "Leading technology solutions in AI, Testing, Power BI, and Web Development",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "QIUn5bpZv3IU-rQ-u9hGlX5Mynj2POxdd35qKd8_e10",
  },
};
