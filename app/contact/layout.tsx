import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiate Discovery Call & Project Inquiry",
  description:
    "Connect directly with AS CODEX principal cloud architects and software engineers. Schedule a confidential discovery session to scope your architecture, verify SLAs, and evaluate technical requirements.",
  alternates: {
    canonical: "https://ascodex.com/contact",
  },
  openGraph: {
    title: "Initiate Discovery Call & Project Inquiry | AS CODEX",
    description:
      "Schedule a confidential discovery session with AS CODEX engineering directors to evaluate your requirements and scope your roadmap.",
    url: "https://ascodex.com/contact",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "Contact AS CODEX Engineering Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiate Discovery Call & Project Inquiry | AS CODEX",
    description:
      "Connect directly with AS CODEX principal cloud architects and software engineers.",
    images: ["/navbar-2.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

