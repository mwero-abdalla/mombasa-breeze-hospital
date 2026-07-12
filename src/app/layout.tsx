import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
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
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
