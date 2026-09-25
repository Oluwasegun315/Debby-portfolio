import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { workCategories } from "@/data/work-categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://debbytella.com";
  const now = new Date();

  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/my-work", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/testimonials", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/start-project", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return [
    ...paths.map((item) => ({
      url: `${base}${item.path}`,
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })),
    ...workCategories.map((category) => ({
      url: `${base}/work/${category.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...projects.map((project) => ({
      url: `${base}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
