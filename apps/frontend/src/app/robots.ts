import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/thank-you',
          '/design-system',
          '/pay',
          '/*?preview=*',
        ],
      },
    ],
    sitemap: 'https://leavecode.com/sitemap.xml',
    host: 'https://leavecode.com',
  };
}
