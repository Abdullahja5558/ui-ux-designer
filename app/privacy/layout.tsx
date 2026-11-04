import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Privacy Framework & Data Governance",
  description:
    "Explore AS CODEX enterprise privacy framework, zero-claim intellectual property guarantees, GDPR/CCPA compliance, and cryptographic data protection protocols.",
  alternates: {
    canonical: "https://ascodex.com/privacy",
  },
  openGraph: {
    title: "Enterprise Privacy Framework & Data Governance | AS CODEX",
    description:
      "Explore AS CODEX enterprise privacy framework, zero-claim intellectual property guarantees, and GDPR/CCPA compliance.",
    url: "https://ascodex.com/privacy",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX Privacy Framework",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Privacy Framework & Data Governance | AS CODEX",
    description:
      "Enterprise privacy framework and zero-claim intellectual property guarantees.",
    images: ["/navbar-2.png"],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

