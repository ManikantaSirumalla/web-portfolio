import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Manikanta Sirumalla | iOS Developer & Data Scientist",
    template: "%s | Manikanta Sirumalla",
  },
  description:
    "iOS engineer and UMBC M.S. Data Science candidate building SwiftUI, CoreML, LLM, and applied ML systems from research ideas into shipped products.",
  keywords: [
    "iOS developer",
    "SwiftUI",
    "Swift",
    "Data Science",
    "Machine Learning",
    "Manikanta Sirumalla",
    "Portfolio",
  ],
  authors: [{ name: "Manikanta Sirumalla" }],
  creator: "Manikanta Sirumalla",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manikanta Sirumalla | iOS Developer & Data Scientist",
    description:
      "iOS engineer and UMBC M.S. Data Science candidate building SwiftUI, CoreML, LLM, and applied ML systems from research ideas into shipped products.",
    siteName: "Manikanta Sirumalla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Sirumalla | iOS Developer & Data Scientist",
    description:
      "iOS engineer and UMBC M.S. Data Science candidate building SwiftUI, CoreML, LLM, and applied ML systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
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
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable}`}>
      <body className={sourceSans.className}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
