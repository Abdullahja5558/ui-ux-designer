import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#7040F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = "https://ascodex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AS CODEX | Enterprise IT Solutions, Cloud Architecture & Custom Software",
    template: "%s | AS CODEX — Enterprise Solutions",
  },

  description:
    "AS CODEX architects scalable cloud platforms, enterprise microservices, intuitive UI/UX design systems, and intelligent AI automation for visionary enterprises worldwide.",

  applicationName: "AS CODEX",

  keywords: [
    "Enterprise IT Solutions",
    "Custom Software Development Company",
    "Cloud Architecture & Scalability",
    "DevOps & Kubernetes Automation",
    "Next.js Full Stack Development",
    "Microservices Architecture Consulting",
    "UI/UX Design Agency",
    "Product Design & Prototyping",
    "Intelligent AI & Automation Pipelines",
    "Zero-Trust Cybersecurity Systems",
    "SaaS Product Engineering",
    "AWS Azure GCP Cloud Migration",
    "Distributed Backend Systems",
    "High Concurrency Web Platforms",
    "Hire Dedicated Senior Engineers",
    "AS CODEX",
  ],

  authors: [{ name: "AS CODEX", url: siteUrl }],
  creator: "AS CODEX",
  publisher: "AS CODEX",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
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
      { url: "/ascodex-favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/ascodex-favicon.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.webmanifest",

  openGraph: {
    title: "AS CODEX | Enterprise IT Solutions, Cloud Architecture & Custom Software",
    description:
      "Architecting scalable cloud platforms, enterprise microservices, intuitive UI/UX design, and AI automation for visionary enterprises.",
    url: siteUrl,
    siteName: "AS CODEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX — Enterprise IT Solutions & Cloud Architecture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AS CODEX | Enterprise IT Solutions & Cloud Architecture",
    description:
      "Architecting scalable cloud platforms, enterprise microservices, and bespoke software solutions built for exponential business growth.",
    images: ["/navbar-2.png"],
  },

  category: "technology",
};

// JSON-LD High-Ranking Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "AS CODEX",
      url: siteUrl,
      logo: `${siteUrl}/navbar-2.png`,
      description:
        "Architecting scalable cloud platforms, enterprise microservices, bespoke software solutions, UI/UX design, and AI automation for visionary enterprises.",
      email: "contact@ascodex.com",
      areaServed: "Worldwide",
      sameAs: [
        "https://github.com/ascodex",
        "https://linkedin.com/company/ascodex",
        "https://twitter.com/ascodex",
      ],
      knowsAbout: [
        "Cloud Infrastructure & Scalability",
        "Kubernetes & Docker DevOps Automation",
        "Custom Software Engineering",
        "Next.js Enterprise Development",
        "Microservices Architecture",
        "UI/UX & Product Design",
        "Intelligent AI & Automation Pipelines",
        "Zero-Trust Cybersecurity & Cryptographic Systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AS CODEX IT Solutions & Software Engineering",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Infrastructure & DevOps",
              description:
                "Enterprise AWS, Azure, and Google Cloud environments built with Kubernetes, Docker, and CI/CD automation for 99.99% uptime.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Enterprise Software & Microservices",
              description:
                "High-throughput web applications, microservices, and distributed backend architectures engineered for high concurrency.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design & Prototyping",
              description:
                "Human-centered design systems, responsive web & mobile interfaces, and high-fidelity Figma prototypes engineered for conversion.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Intelligent AI & Automation",
              description:
                "End-to-end integration of LLMs, proprietary AI agents, computer vision, and machine learning pipelines that automate operations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cybersecurity & Data Systems",
              description:
                "Hardened application security, automated compliance auditing, role-based access control, and zero-trust cryptographic data storage.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AS CODEX",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,89.6,200..800&family=Caveat:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,89.6,200..800&family=Caveat:wght@400..700&display=swap');
              html, body, *, *::before, *::after {
                font-family: 'Bricolage Grotesque', sans-serif !important;
              }
              .font-script, .font-script * {
                font-family: 'Caveat', cursive !important;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
