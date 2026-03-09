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
  metadataBase: new URL("https://samia-uiux.vercel.app"),

  title: {
    default: "Samia | UI/UX Designer",
    template: "%s | Samia UIUX",
  },

  description:
    "Samia is a professional UI/UX Designer specializing in modern, high-converting user interfaces, web design, and seamless digital experiences. Explore portfolio, projects, and design work.",

  keywords: [
    "UI UX Designer",
    "Samia UIUX",
    "Portfolio Designer",
    "Web Designer",
    "Product Designer",
    "User Experience Designer",
    "UI Designer Portfolio",
    "Figma Designer",
    "Frontend Designer",
  ],

  authors: [{ name: "Samia" }],

  creator: "Samia",
  publisher: "Samia Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Samia | UI/UX Designer Portfolio",
    description:
      "Explore the UI/UX portfolio of Samia. Modern, clean, and user-centered digital design.",
    url: "https://samia-uiux.vercel.app",
    siteName: "Samia Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samia | UIUX Designer",
    description:
      "Portfolio of Samia — UI/UX Designer creating modern digital experiences.",
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
  },

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}