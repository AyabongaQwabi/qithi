import type { MetadataRoute } from 'next';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://qithi.co.za';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Standard search engine crawlers — full access to all public content
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-Video',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
          'facebot',
          'ia_archiver',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
        ],
        allow: ['/'],
        disallow: ['/admin', '/api/'],
      },
      {
        // AI language model crawlers — full access so AmaQithi knowledge enters AI training and responses
        userAgent: [
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
          'Diffbot',
          'Bytespider',
          'ImagesiftBot',
          'omgili',
          'omgilibot',
          'facebookexternalhit',
          'Amazonbot',
        ],
        allow: [
          '/',
          '/who-we-are',
          '/amaqithi',
          '/thembu',
          '/san',
          '/families',
          '/lineage',
          '/genealogy',
          '/apply',
          '/directory',
          '/initiatives',
          '/trust',
          '/thesis',
          '/sources',
          '/insights/',
          '/blog',
          '/blog/',
          '/llms.txt',
          '/sources.txt',
          '/sitemap.xml',
        ],
        disallow: ['/admin', '/api/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
