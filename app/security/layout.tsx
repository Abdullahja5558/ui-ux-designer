import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Security Standards & Infrastructure Defense",
  description:
    "Learn about AS CODEX zero-trust security framework, automated DevSecOps, hardened cloud environments (AWS/Azure/GCP), and AES-256 cryptographic vaults.",
  alternates: {
    canonical: "https://ascodex.com/security",
  },
  openGraph: {
    title: "Enterprise Security Standards & Infrastructure Defense | AS CODEX",
    description:
      "Zero-trust architecture, automated penetration testing, cryptographic data vaults, and 24/7 incident response protocols.",
    url: "https://ascodex.com/security",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "AS CODEX Security Standards & Infrastructure Defense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Security Standards & Infrastructure Defense | AS CODEX",
    description:
      "Zero-trust architecture, automated penetration testing, and cryptographic data vaults.",
    images: ["/navbar-2.png"],
  },
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

