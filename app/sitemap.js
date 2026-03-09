export default function sitemap() {
  return [
    {
      url: "https://samia-uiux.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
     {
      url: "https://samia-uiux.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}