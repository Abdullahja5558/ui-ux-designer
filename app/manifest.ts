import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AS CODEX | Enterprise IT Solutions & Cloud Architecture",
    short_name: "AS CODEX",
    description:
      "Architecting scalable cloud platforms, enterprise microservices, bespoke software solutions, UI/UX design, and AI automation for visionary enterprises.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF9FF",
    theme_color: "#7040F5",
    icons: [
      {
        src: "/ascodex-favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
