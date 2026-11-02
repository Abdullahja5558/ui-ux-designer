import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Samia | Senior UI/UX Designer & Creative Frontend Developer",
  description:
    "Learn about Samia's design philosophy, human-centered methodologies, design systems, and frontend engineering background. Crafting impactful interfaces and scalable web products.",
  alternates: {
    canonical: "https://samia-uiux.vercel.app/about",
  },
  openGraph: {
    title: "About Samia | Senior UI/UX Designer & Creative Frontend Developer",
    description:
      "Learn about Samia's design journey, human-centered UX design approach, and frontend development capabilities.",
    url: "https://samia-uiux.vercel.app/about",
    siteName: "Samia Portfolio",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Samia - UI/UX Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Samia | UI/UX Designer & Developer",
    description:
      "Explore Samia's journey, design systems, and frontend development expertise.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
