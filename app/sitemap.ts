// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saamon.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // 必要に応じて主要ページを足す
    // { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];
}
