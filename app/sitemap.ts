import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qithi.co.za';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const whoWeAreSectionSlugs = [
    'core-claim',
    'lesotho-connection',
    'qwabi-line',
    'lady-frere-map',
    'etymologies',
    'name-what-we-know',
    'san-leaders-zones',
    'izibongo',
    'chronology',
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

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
    {
      url: `${BASE}/iziduko-izibongo-clan-names`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.94,
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

    // Blog index
    {
      url: `${BASE}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Who We Are deep section pages
    ...whoWeAreSectionSlugs.map((slug) => ({
      url: `${BASE}/who-we-are/sections/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),

    // Blog posts
    ...blogPosts,
  ];
}
