import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.letsresizeit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // =========================================================
    // CORE PAGES
    // =========================================================

    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${siteUrl}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${siteUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // =========================================================
    // LEGAL
    // =========================================================

    {
      url: `${siteUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    {
      url: `${siteUrl}/Terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // =========================================================
    // MAIN IMAGE TOOLS
    // =========================================================

    {
      url: `${siteUrl}/resize-image`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/compress-image`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // =========================================================
    // IMAGE CONVERSION TOOLS
    // =========================================================

    {
      url: `${siteUrl}/image-to-jpg`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/image-to-png`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/jpg-to-png`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/jpg-to-webp`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/png-to-jpg`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/png-to-webp`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/webp-to-jpg`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/webp-to-png`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/convert-jpg-to-webp`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // =========================================================
    // RESIZE BY FILE SIZE
    // =========================================================

    {
      url: `${siteUrl}/resize-image-to-50-kb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-100-kb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-200-kb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image-to-500-kb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // =========================================================
    // RESIZE BY DIMENSIONS
    // =========================================================

    {
      url: `${siteUrl}/resize-image-to-200x200`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/resize-image-to-300x300`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/resize-image-to-1080x1080`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    // =========================================================
    // FORMAT-SPECIFIC RESIZING
    // =========================================================

    {
      url: `${siteUrl}/resize-jpg`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/resize-image`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/webp-to-png`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}