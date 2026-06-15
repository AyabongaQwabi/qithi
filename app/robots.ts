import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qithi.co.za';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Main search engines and AI crawlers — full access to public content
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'facebot',
          'ia_archiver',
          // AI search engine bots
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Claude-Web',
          'Applebot',
          'YouBot',
          'cohere-ai',
          'CCBot',
        ],
        allow: [
          '/',
          '/who-we-are',
          '/families',
          '/initiatives',
          '/trust',
          '/genealogy',
          '/apply',
          '/directory',
          '/llms.txt',
          '/sitemap.xml',
        ],
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
