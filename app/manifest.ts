import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Samia | UI/UX Designer & Creative Frontend Developer",
    short_name: "Samia Portfolio",
    description:
      "Official portfolio of Samia — UI/UX Designer and Creative Frontend Developer crafting high-converting interfaces and modern digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
