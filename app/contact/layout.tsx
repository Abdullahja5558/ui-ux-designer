import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AS CODEX | Hire Software Developers & Schedule Consultation",
  description:
    "Connect directly with AS CODEX principal cloud architects and senior software engineers. Schedule a confidential technical discovery call to scope custom software development, cloud infrastructure, or UI/UX platform requirements.",
  keywords: [
    "Contact AS CODEX",
    "Hire Software Developers",
    "Hire Next.js Team",
    "Schedule Technical Discovery Call",
    "Custom Software Quote",
    "Software Development Agency Contact",
    "Dedicated Engineering Teams Consultation",
  ],
  alternates: {
    canonical: "https://ascodex.vercel.app/contact",
  },
  openGraph: {
    title: "Contact AS CODEX | Hire Software Developers & Schedule Consultation",
    description:
      "Schedule a confidential technical discovery session with AS CODEX engineering directors to scope your roadmap under strict NDA protection.",
    url: "https://ascodex.vercel.app/contact",
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
    title: "Contact AS CODEX | Hire Software Developers & Schedule Consultation",
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
