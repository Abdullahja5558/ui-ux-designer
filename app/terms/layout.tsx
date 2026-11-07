import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service & Client Engagement",
  description:
    "Master client service agreement terms, 100% intellectual property ownership transfer, milestone acceptance criteria, and 99.99% infrastructure SLAs.",
  alternates: {
    canonical: "https://ascodex.vercel.app/terms",
  },
  openGraph: {
    title: "Terms of Service & Client Engagement | AS CODEX",
    description:
      "Master client service agreement terms, 100% intellectual property ownership transfer, and enterprise SLAs.",
    url: "https://ascodex.vercel.app/terms",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Client Engagement | AS CODEX",
    description:
      "Master client service agreement terms, 100% intellectual property ownership transfer, and enterprise SLAs.",
    images: ["/navbar-2.png"],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
