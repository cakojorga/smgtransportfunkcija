import type { MetadataRoute } from "next";
import { PRIVACY_LAST_UPDATED, PRIVACY_PATH, SITE_URL } from "@/lib/site";
import { serviceHref, services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${SITE_URL}${serviceHref(service.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}${PRIVACY_PATH}`,
      lastModified: new Date(PRIVACY_LAST_UPDATED),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
