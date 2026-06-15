import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qithi.co.za';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/who-we-are', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/families', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/initiatives', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/trust', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/genealogy', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/apply', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/directory', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
