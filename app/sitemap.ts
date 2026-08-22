import type { MetadataRoute } from "next";
import { locations } from "@/lib/data/locations";
import { SITE_URL } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/book`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...locationRoutes];
}
