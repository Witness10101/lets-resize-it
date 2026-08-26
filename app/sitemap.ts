import type { MetadataRoute } from "next";
import { blogArticles } from "@/lib/blog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://letsresizeit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // =========================================================
    // CORE PAGES
    // =========================================================

    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${siteUrl}/how-it-works`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // LEGAL
    // =========================================================

    {
      url: `${siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${siteUrl}/Terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // =========================================================
    // MAIN IMAGE TOOLS
    // =========================================================

    {
      url: `${siteUrl}/resize-image`,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/compress-image`,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // =========================================================
    // IMAGE CONVERSION TOOLS
    // =========================================================

    {
      url: `${siteUrl}/image-to-jpg`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/image-to-png`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/jpg-to-png`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/jpg-to-webp`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/png-to-jpg`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/png-to-webp`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/webp-to-jpg`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/webp-to-png`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/convert-jpg-to-webp`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // =========================================================
    // RESIZE BY FILE SIZE
    // =========================================================

    {
      url: `${siteUrl}/resize-image-to-50-kb`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-100-kb`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-200-kb`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-500-kb`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // =========================================================
    // RESIZE BY DIMENSIONS
    // =========================================================

    {
      url: `${siteUrl}/resize-image-to-200x200`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/resize-image-to-300x300`,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/resize-image-to-1080x1080`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // =========================================================
    // FORMAT-SPECIFIC TOOLS
    // =========================================================

    {
      url: `${siteUrl}/resize-jpg`,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // =========================================================
    // BLOG INDEX
    // =========================================================

    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // =========================================================
    // BLOG ARTICLES
    // =========================================================
    //
    // Automatically includes every article in lib/blog.ts.
    //

    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}