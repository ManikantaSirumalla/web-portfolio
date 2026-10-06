import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    images: ["/media/hero-poster.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Sirumalla · iOS Engineer",
    description,
    images: ["/media/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
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
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#content"
          className="fixed left-4 top-2 z-50 -translate-y-24 rounded-full bg-action px-4 py-2 text-[14px] text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
