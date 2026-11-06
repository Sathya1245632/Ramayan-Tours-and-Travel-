import { MetadataRoute } from 'next';

const baseUrl = 'https://ramayantoursandtravels.com';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/admin/'],
            },
            // Search/discovery crawlers used by AI answer engines.
            // These rules allow public pages while keeping admin routes excluded.
            {
                userAgent: ['OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot'],
                allow: '/',
                disallow: ['/admin', '/admin/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
