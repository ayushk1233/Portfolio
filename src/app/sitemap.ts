import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { getSiteUrl } from "@/lib/paths";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
