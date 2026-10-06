import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import SiteNav from "@/components/layout/SiteNav";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
  themeColor: "#09090B",
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
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
