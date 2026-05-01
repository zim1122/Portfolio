import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zim | Engineered for Growth",
  description: "Helping businesses thrive with innovative digital strategies, creative solutions, and measurable outcomes. We turn complexity into conversion.",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} min-h-full flex flex-col font-inter selection:bg-primary selection:text-on-primary-container`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
