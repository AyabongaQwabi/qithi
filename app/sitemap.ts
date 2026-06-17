import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qithi.co.za';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Tier 1 — core identity pages (highest SEO priority)
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/who-we-are`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE}/amaqithi`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BASE}/families`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },

    // Tier 2 — heritage knowledge pages
    {
      url: `${BASE}/thembu`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/san`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/lineage`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/sources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Tier 3 — community + action pages
    {
      url: `${BASE}/apply`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE}/genealogy`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Tier 4 — research + insights
    {
      url: `${BASE}/thesis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.82,
    },
    {
      url: `${BASE}/insights/thembu-village-anatomy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.82,
    },

    // Tier 5 — community infrastructure
    {
      url: `${BASE}/initiatives`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/trust`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE}/directory`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
