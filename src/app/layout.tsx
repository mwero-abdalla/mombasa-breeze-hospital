import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mombasa Breeze Hospital — Quality Healthcare with Compassion",
    template: "%s | Mombasa Breeze Hospital",
  },
  description:
    "Mombasa Breeze Hospital is a private hospital in Mombasa, Kenya providing quality, compassionate, and affordable healthcare 24/7. KMPDC registered and SHA approved.",
  keywords: [
    "Hospital in Mombasa",
    "Private Hospital Mombasa",
    "Emergency Hospital Mombasa",
    "Mvita Hospital",
    "Healthcare in Mombasa",
    "SHA Approved Hospital",
    "Ronald Ngala Road Hospital",
    "Mombasa Breeze Hospital",
  ],
  openGraph: {
    title: "Mombasa Breeze Hospital",
    description: "Quality Healthcare with Compassion, 24 Hours a Day.",
    url: "https://mombasabreezehospital.com",
    siteName: "Mombasa Breeze Hospital",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
