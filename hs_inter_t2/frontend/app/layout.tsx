import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar3";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "H&S SOLUTIONS",
//   description: "H&S Solutions is an AI‑based agency.",
// };

export const metadata = {
  title: "AI‑based agency",
  icons: {
    icon: "/favicon.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>


        
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
