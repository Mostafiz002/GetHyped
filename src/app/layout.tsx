import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Get Hyped - Social first content agency",
  description: "A Clone of GetHyped",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex  flex-col bg-[#faf4ec]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
