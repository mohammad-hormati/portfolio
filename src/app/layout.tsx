import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamad Hormati — Frontend Developer",
  description:
    "Mohamad Hormati is a frontend developer with 5+ years building fast, scalable web apps in React, Next.js & TypeScript — now expanding into full-stack with Node.js.",
  openGraph: {
    title: "Mohamad Hormati — Frontend Developer",
    description:
      "Portfolio of Mohamad Hormati: React, Next.js, TypeScript projects and full-stack work with Node.js, Docker & CI/CD.",
    type: "website",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mohamad Hormati",
  },
};

export const viewport: Viewport = {
  themeColor: "#6d5ef0",
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
        <QueryProvider>
          <Header />
          <MobileNav />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
