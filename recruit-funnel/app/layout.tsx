import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "H&S Solutions",
  description:
    "We build automation systems for staffing agencies that eliminate manual follow-ups, scheduling chaos, and reporting grind. Setup under $3K. Results in 30 days.",
  openGraph: {
    title: "H&S Solutions — Workflow Automation for Staffing Agencies",
    description:
      "Stop losing placements to slow follow-ups. Automate your recruitment workflow under $3K.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
