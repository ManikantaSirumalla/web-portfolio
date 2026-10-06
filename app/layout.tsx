import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Spotlight from "@/components/portfolio/Spotlight";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "iOS Engineer with 5+ years shipping native apps in Swift, SwiftUI, and UIKit. Founder of AutoClosure LLC and builder of ZEALO, an Adaptive AI Fitness Intelligence platform for iPhone and Apple Watch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sirumallamanikanta.com"),
  title: {
    default: "Manikanta Sirumalla · iOS Engineer",
    template: "%s · Manikanta Sirumalla",
  },
  description,
  keywords: [
    "iOS Engineer",
    "Swift",
    "SwiftUI",
    "Apple Watch",
    "HealthKit",
    "Applied AI",
    "ZEALO",
    "Manikanta Sirumalla",
  ],
  authors: [{ name: "Manikanta Sirumalla" }],
  creator: "Manikanta Sirumalla",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manikanta Sirumalla · iOS Engineer",
    description,
    siteName: "Manikanta Sirumalla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Sirumalla · iOS Engineer",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0C10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a
          href="#content"
          className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
