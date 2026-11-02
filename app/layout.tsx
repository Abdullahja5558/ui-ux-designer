import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = "https://samia-uiux.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Samia | Professional UI/UX Designer & Creative Frontend Developer",
    template: "%s | Samia - UI/UX Designer & Developer",
  },

  description:
    "Portfolio of Samia — Senior UI/UX Designer & Creative Frontend Developer. Crafting high-converting digital products, modern web interfaces, design systems, and responsive web applications with Figma, Next.js, and React.",

  applicationName: "Samia Portfolio",

  keywords: [
    // UI/UX Keywords
    "UI UX Designer",
    "Senior UI/UX Designer",
    "Product Designer",
    "User Experience Designer",
    "User Interface Designer",
    "Figma Designer",
    "Design Systems Specialist",
    "Interaction Designer",
    "Prototyping Expert",
    "Mobile App Designer",
    "Web Designer Portfolio",
    "Samia UIUX",
    // Developer Keywords
    "Frontend Developer",
    "Creative Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Full-Stack UI Developer",
    "TypeScript Developer",
    "Tailwind CSS Specialist",
    // High-Intent & Commercial Keywords
    "Hire UI/UX Designer",
    "Freelance UI UX Designer",
    "Hire Frontend Developer",
    "Remote UI Designer",
    "Portfolio Website",
    "Best UI UX Portfolios",
  ],

  authors: [{ name: "Samia", url: siteUrl }],
  creator: "Samia",
  publisher: "Samia",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "Samia | Senior UI/UX Designer & Frontend Developer",
    description:
      "Crafting human-centered digital experiences, robust design systems, and modern web applications with Figma, React, and Next.js.",
    url: siteUrl,
    siteName: "Samia - UI/UX & Development Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samia - UI/UX Designer & Frontend Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Samia | UI/UX Designer & Frontend Developer",
    description:
      "Senior UI/UX Designer & Creative Frontend Developer. Crafting pixel-perfect, high-converting digital interfaces and modern web applications.",
    images: ["/og-image.png"],
    creator: "@samia_uiux",
  },

  verification: {
    google: "googlefc24be5cd256c9a9",
  },

  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Samia",
      alternateName: ["Samia UI/UX", "Samia Designer", "Samia Developer"],
      url: siteUrl,
      jobTitle: ["Senior UI/UX Designer", "Frontend Developer", "Product Designer"],
      description:
        "Samia is a professional UI/UX Designer and Frontend Developer specializing in human-centered design, Figma design systems, Next.js, React, and high-impact digital experiences.",
      knowsAbout: [
        "UI/UX Design",
        "Product Design",
        "User Interface Design",
        "User Experience Design",
        "Frontend Development",
        "Web Development",
        "Next.js",
        "React",
        "Figma",
        "Design Systems",
        "Prototyping",
        "User Research",
        "Tailwind CSS",
        "Interaction Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Samia | UI/UX Designer & Frontend Developer Portfolio",
      description:
        "Official portfolio of Samia — UI/UX Designer and Creative Frontend Developer crafting high-converting interfaces and modern web experiences.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Samia - UI/UX Design & Frontend Development Services",
      url: siteUrl,
      description:
        "Professional UI/UX design, mobile & web application interfaces, design systems, and frontend web development services.",
      priceRange: "$$",
      provider: {
        "@id": `${siteUrl}/#person`,
      },
      areaServed: "Worldwide",
      serviceType: [
        "UI/UX Design",
        "Frontend Web Development",
        "Mobile App UI/UX Design",
        "Design Systems Architecture",
        "Web Design & Prototyping",
      ],
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}