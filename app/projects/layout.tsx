import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Case Studies & All Projects",
  description:
    "Explore production-grade enterprise case studies engineered by AS CODEX: cloud dev platforms (AJ Code), SaaS engines (PDFHubX), global educational platforms (Noor-ul-Quran), booking systems (Bucceo), and e-commerce flagships (Drylicious).",
  alternates: {
    canonical: "https://ascodex.com/projects",
  },
  openGraph: {
    title: "Featured Case Studies & All Projects | AS CODEX",
    description:
      "Explore production-grade enterprise case studies engineered by AS CODEX across Cloud SaaS, Web Platforms, and Digital E-Commerce.",
    url: "https://ascodex.com/projects",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/aj-code-p1.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX Featured Case Studies & Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Case Studies & All Projects | AS CODEX",
    description:
      "Explore production-grade enterprise case studies engineered by AS CODEX.",
    images: ["/aj-code-p1.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

