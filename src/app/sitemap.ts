import { MetadataRoute } from 'next';
import { destinations, packages, taxiPackages, blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ramayantoursandtravels.com';
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/tours/rameshwaram`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/destinations`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/packages`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/ai-planner`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/reviews`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    const destinationRoutes: MetadataRoute.Sitemap = destinations.map((d) => ({
        url: `${baseUrl}/destinations/${d.id}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const packageRoutes: MetadataRoute.Sitemap = [...packages, ...taxiPackages].map((p) => ({
        url: `${baseUrl}/packages/${p.id}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((b) => ({
        url: `${baseUrl}/blog/${b.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...destinationRoutes, ...packageRoutes, ...blogRoutes];
}
