import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const viewport: Viewport = {
  themeColor: "#7040F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = "https://ascodex.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AS CODEX | Custom Software Development, Cloud Architecture & IT Solutions Agency",
    template: "%s | AS CODEX — Custom Software Development & IT Solutions",
  },

  description:
    "AS CODEX is an elite digital engineering agency architecting high-throughput custom software, scalable cloud infrastructure (AWS/Azure/GCP), modern web platforms, AI automation pipelines, and conversion-engineered UI/UX design systems for visionary founders and global enterprises.",

  applicationName: "AS CODEX",

  keywords: [
    // Brand & Agency Authority
    "AS CODEX",
    "AS CODEX Software Company",
    "AS CODEX IT Solutions",
    "AS CODEX Digital Engineering",
    // High-Intent Client Buyer Keywords
    "Custom Software Development Company",
    "Enterprise IT Solutions Agency",
    "Custom Web Development Services",
    "Hire Dedicated Senior Developers",
    "Hire Full Stack Next.js Developers",
    "Custom Enterprise Software Development",
    "SaaS MVP Product Engineering",
    "Full Stack Web & Mobile App Development",
    "UI/UX Design Agency for Tech Startups",
    "Cloud Architecture & Scalability Consulting",
    "AWS Azure GCP DevOps Kubernetes CI/CD",
    "Microservices & Distributed Systems Engineering",
    "AI Agent & Machine Learning Integration",
    "Zero-Trust Cybersecurity Systems",
    "Nearshore & Offshore Dedicated Engineering Teams",
    "High Concurrency Low Latency Platforms",
    "FinTech HealthTech SaaS Software Solutions",
    "Software Consulting & System Architecture Review",
  ],

  authors: [{ name: "AS CODEX", url: siteUrl }],
  creator: "AS CODEX",
  publisher: "AS CODEX",

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": `${siteUrl}/`,
      "en-GB": `${siteUrl}/`,
      "en-AE": `${siteUrl}/`,
    },
  },

  verification: {
    google: "googlefc24be5cd256c9a9",
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
    title: "AS CODEX | Custom Software Development, Cloud Architecture & IT Solutions Agency",
    description:
      "Premier digital engineering agency architecting high-performance custom software, cloud microservices, and conversion-focused UI/UX design systems for visionary enterprises worldwide.",
    url: siteUrl,
    siteName: "AS CODEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX — Custom Enterprise Software Development & Cloud Architecture",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AS CODEX | Custom Software Development & Cloud Architecture",
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
      "@type": ["Organization", "ProfessionalService", "ITService"],
      "@id": `${siteUrl}/#organization`,
      name: "AS CODEX",
      alternateName: ["AS CODEX IT Solutions", "AS CODEX Software Agency"],
      url: siteUrl,
      logo: `${siteUrl}/navbar-2.png`,
      image: `${siteUrl}/navbar-2.png`,
      description:
        "Premier digital engineering agency architecting scalable custom software, cloud microservices, and conversion-focused UI/UX design systems for visionary enterprises worldwide.",
      email: "contact@ascodex.com",
      telephone: "+92-371-5909509",
      priceRange: "$$$",
      currenciesAccepted: "USD, EUR, GBP, AED, PKR",
      paymentAccepted: "Credit Card, Bank Transfer, Stripe, Wire Transfer",
      areaServed: [
        "Worldwide",
        "United States",
        "United Kingdom",
        "Europe",
        "Middle East",
        "Pakistan",
      ],
      sameAs: [
        "https://github.com/ascodex",
        "https://linkedin.com/company/ascodex",
        "https://twitter.com/ascodex",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+92-371-5909509",
          contactType: "sales",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Urdu"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+92-326-6455353",
          contactType: "technical support",
          areaServed: "Worldwide",
          availableLanguage: ["English", "Urdu"],
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "84",
        bestRating: "5",
        worstRating: "1",
      },
      knowsAbout: [
        "Custom Software Engineering",
        "Enterprise Web Application Development",
        "Hire Dedicated Senior Developers",
        "Cloud Infrastructure & Scalability",
        "Kubernetes & Docker DevOps Automation",
        "Next.js Enterprise Development",
        "Microservices Architecture",
        "UI/UX & Product Design Systems",
        "Intelligent AI & Automation Pipelines",
        "Zero-Trust Cybersecurity & Cryptographic Systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AS CODEX IT Solutions & Software Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Infrastructure & DevOps Scalability",
              description:
                "Enterprise AWS, Azure, and Google Cloud environments built with Kubernetes, Docker, and CI/CD automation for 99.99% uptime and zero-downtime scaling.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Enterprise Software & Web Development",
              description:
                "High-throughput web applications, microservices, and distributed backend architectures engineered for high concurrency, ultra-low latency, and mission-critical reliability.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design Systems & High-Fidelity Prototyping",
              description:
                "Human-centered design systems, responsive web & mobile interfaces, and high-fidelity Figma prototypes engineered for maximum engagement and effortless user flow.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Intelligent AI & Automation Pipelines",
              description:
                "End-to-end integration of LLMs, proprietary AI agents, computer vision, and machine learning pipelines that automate complex operations with real-time feedback loops.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zero-Trust Cybersecurity & Cryptographic Systems",
              description:
                "Hardened application security, automated compliance auditing, role-based access control, and resilient cryptographic data storage architectures.",
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
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What custom software engineering services does AS CODEX provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AS CODEX provides end-to-end custom software development, high-concurrency microservices, cloud DevOps (AWS/Azure/GCP), bespoke UI/UX design systems, Next.js web platforms, and intelligent AI automation pipelines.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can AS CODEX start on a new client project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We begin with a complimentary technical discovery call and can deploy dedicated senior engineers or sprint teams within 48 to 72 hours under strict NDA protection.",
          },
        },
        {
          "@type": "Question",
          name: "What is AS CODEX's core technology stack?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our primary stack includes Next.js, React, TypeScript, Node.js, Python, Golang, PostgreSQL, Redis, Docker, Kubernetes, AWS, and modern Figma design systems.",
          },
        },
        {
          "@type": "Question",
          name: "Does AS CODEX offer 24/7 dedicated support and SLA guarantees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, AS CODEX offers 24/7 telemetry monitoring, auto-scaling cluster support, and enterprise SLA-backed maintenance contracts.",
          },
        },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,89.6,200..800&family=Caveat:wght@400..700&family=Dancing+Script:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Bricolage+Grotesque:opsz,wdth,wght@12..96,89.6,200..800&family=Caveat:wght@400..700&family=Dancing+Script:wght@500;700&display=swap');
              html, body, *, *::before, *::after {
                font-family: 'Bricolage Grotesque', sans-serif !important;
              }
              .font-script, .font-script * {
                font-family: 'Caveat', 'Dancing Script', 'Alex Brush', cursive !important;
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
        <WhatsAppWidget />
      </body>
    </html>
  );
}
