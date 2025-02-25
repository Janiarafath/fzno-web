"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { AlertProvider } from "@/components/AlertProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head"; // Import Head for metadata

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
      <Head>
        <title>My Website</title>
        <meta name="description" content="A cool Next.js website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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


import './globals.css'