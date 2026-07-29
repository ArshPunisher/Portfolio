import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/portfolio";

/**
 * Generated at build time so `lastModified` can never go stale the way the old
 * hand-written public/sitemap.xml did.
 *
 * Only the single real URL is listed. Fragment links (#skills, #projects) are
 * not separate resources and search engines ignore them in sitemaps.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
