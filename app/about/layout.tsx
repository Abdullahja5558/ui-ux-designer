import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AS CODEX | Enterprise Architecture & Digital Innovation",
  description:
    "Discover AS CODEX — an elite digital engineering collective architecting scalable cloud platforms, enterprise microservices, intuitive UI/UX design, and AI automation for visionary enterprises worldwide.",
  alternates: {
    canonical: "https://ascodex.com/about",
  },
  openGraph: {
    title: "About AS CODEX | Enterprise Architecture & Digital Innovation",
    description:
      "Discover our philosophy where architectural rigor meets creative design fluidity. 99.99% cloud uptime, senior staff engineering, and 100% client code ownership.",
    url: "https://ascodex.com/about",
    siteName: "AS CODEX",
    type: "website",
    images: [
      {
        url: "/navbar-2.png",
        width: 1200,
        height: 630,
        alt: "About AS CODEX — Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AS CODEX | Enterprise Architecture & Digital Innovation",
    description:
      "Discover AS CODEX engineering philosophy, cloud architectures, and bespoke software solutions.",
    images: ["/navbar-2.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
