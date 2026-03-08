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
  title: "Samia | UI.UX Designer",
  description: "Specializing in high-converting user interfaces and seamless digital experiences. Explore the portfolio of Samia, a UI/UX Designer dedicated to user-centric design.",
  keywords: ["UI/UX Designer", "Product Design", "Web Design", "User Experience", "Samia Design"],
  authors: [{ name: "Samia" }],
  creator: "Samia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samia-uiux.vercel.app",
    siteName: "Samia Portfolio",
    title: "Samia | UI/UX Designer",
    description: "Designing digital products that balance aesthetics with functionality.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    suppressContentEditableWarning={true}
    suppressHydrationWarning={true}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
