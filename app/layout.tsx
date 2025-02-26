// app/layout.tsx
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { AlertProvider } from "@/components/AlertProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";

// ✅ Define metadata using Next.js built-in metadata API
export const metadata: Metadata = {
  title: {
    template: "%s | FZNO",
    default: "FZNO - Transform Your Business",
  },
  description:
    "Leading technology solutions in AI, Testing, Power BI, and Web Development",
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
        alt: "FZNO Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fzno",
    creator: "@fzno",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "QIUn5bpZv3IU-rQ-u9hGlX5Mynj2POxdd35qKd8_e10",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AlertProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
