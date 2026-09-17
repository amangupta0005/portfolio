import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Aman Gupta — Python & AI/ML Engineer",
  description:
    "Portfolio of Aman Gupta. Python & AI/ML Engineer specializing in Deep Learning, NLP Transformers, and Full-Stack Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090a0f] text-slate-100 min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
