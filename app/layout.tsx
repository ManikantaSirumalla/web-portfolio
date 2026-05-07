import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Manikanta Sirumalla — iOS Developer & Data Scientist",
    template: "%s — Manikanta Sirumalla",
  },
  description:
    "iOS engineer with 3+ years of production experience and a Master's in Data Science. Building polished native apps with on-device intelligence.",
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
    title: "Manikanta Sirumalla — iOS Developer & Data Scientist",
    description:
      "iOS engineer with 3+ years of production experience and a Master's in Data Science. Building polished native apps with on-device intelligence.",
    siteName: "Manikanta Sirumalla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manikanta Sirumalla — iOS Developer & Data Scientist",
    description:
      "iOS engineer with 3+ years of production experience and a Master's in Data Science.",
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
