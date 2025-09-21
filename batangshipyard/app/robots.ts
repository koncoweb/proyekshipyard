import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://batangshipyard.com';
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin','/api/private'] },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}


