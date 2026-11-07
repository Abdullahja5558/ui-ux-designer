import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Case Studies & IT Solutions Portfolio",
  description:
    "Explore enterprise case studies and digital solutions engineered by AS CODEX: cloud development platforms (AJ Code), verified event marketplaces (LEEMEVENTS), SaaS document processing (PDFfilz), booking engines (Bucceo), and e-commerce flagships (Drylicious).",
  keywords: [
    "AS CODEX Projects",
    "Enterprise Software Case Studies",
    "Custom Web Applications Portfolio",
    "SaaS Platform Development Portfolio",
    "Next.js Production Applications",
    "Cloud Architecture Case Studies",
    "Full Stack Development Portfolio",
  ],
  alternates: {
    canonical: "https://ascodex.vercel.app/projects",
  },
  openGraph: {
    title: "Featured Case Studies & IT Solutions Portfolio | AS CODEX",
    description:
      "Explore production-grade enterprise case studies engineered by AS CODEX across Cloud SaaS, Web Platforms, and Digital Solutions.",
    url: "https://ascodex.vercel.app/projects",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/aj-code-p1.webp",
        width: 1200,
        height: 630,
        alt: "AS CODEX Featured Case Studies & IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Case Studies & IT Solutions Portfolio | AS CODEX",
    description:
      "Explore production-grade enterprise software engineered by AS CODEX.",
    images: ["/aj-code-p1.webp"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
