// app/layout.tsx
"use client"
import { ThemeProvider } from "@/components/theme-provider";
import { AlertProvider } from "@/components/AlertProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DefaultSeo } from "next-seo";
import { SEO } from "@/lib/seo-config";
import { metadata } from "./head";  // Import metadata from head.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply metadata directly inside <head> */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Other meta tags can be added here if needed */}
      </head>
      <body>
        <DefaultSeo {...SEO} />
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
