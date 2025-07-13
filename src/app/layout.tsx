import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radhe Shyam Event Management | Premium Destination Wedding Planner Vrindavan",
  description: "Leading destination wedding planner in Vrindavan with 10+ years experience. 500+ successful weddings. Packages starting from ₹5L. Book your dream wedding today!",
  keywords: "destination wedding vrindavan, wedding planner vrindavan, vrindavan wedding packages, indian wedding planner, destination wedding india, wedding planning services",
  authors: [{ name: "Radhe Shyam Event Management" }],
  openGraph: {
    title: "Radhe Shyam Event Management | Vrindavan Wedding Planner",
    description: "Premium destination wedding planning in the holy city of Vrindavan. 10+ years experience, 500+ successful weddings.",
    url: "https://radheshyamevents.com",
    siteName: "Radhe Shyam Event Management",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhe Shyam Event Management | Vrindavan Wedding Planner",
    description: "Premium destination wedding planning in Vrindavan. 10+ years experience, 500+ successful weddings.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
