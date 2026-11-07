import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AS CODEX | Elite Digital Engineering & IT Solutions Agency",
  description:
    "Discover AS CODEX — premier digital engineering collective architecting scalable custom software, cloud microservices, intuitive UI/UX design systems, and AI automation for visionary enterprises worldwide.",
  keywords: [
    "About AS CODEX",
    "Digital Engineering Collective",
    "Enterprise Software Agency Pakistan",
    "Senior Full Stack Engineering Team",
    "Custom Software Company",
    "Cloud Architecture Specialists",
  ],
  alternates: {
    canonical: "https://ascodex.vercel.app/about",
  },
  openGraph: {
    title: "About AS CODEX | Elite Digital Engineering & IT Solutions Agency",
    description:
      "Discover our philosophy where architectural rigor meets creative design fluidity. 99.99% cloud uptime, senior staff engineering, and 100% client code ownership.",
    url: "https://ascodex.vercel.app/about",
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
    title: "About AS CODEX | Elite Digital Engineering Agency",
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
