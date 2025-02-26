// app/layout.tsx

"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { AlertProvider } from "@/components/AlertProvider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { metadata } from "./head";  // Import metadata from head.tsx
import Head from "next/head";  // Import Head from next/head

import "./globals.css"; // Import global styles here

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
      <body>
        <Head>
          <title>FZNO</title>
          <meta name="description" content={metadata.description} />
          {metadata.icons.icon.map((icon, index) => (
            <link key={index} rel="icon" href={icon.url} sizes={icon.sizes} />
          ))}
          {metadata.icons.apple.map((appleIcon, index) => (
            <link
              key={index}
              rel="apple-touch-icon"
              href={appleIcon.url}
              sizes={appleIcon.sizes}
            />
          ))}
          <meta
            name="google-site-verification"
            content={metadata.verification.google}
          />
        </Head>

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
