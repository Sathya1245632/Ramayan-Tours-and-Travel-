import type { Metadata } from 'next';
import { blogPosts } from '@/lib/data';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const rawSlug = params?.slug || '';
    const decodedSlug = decodeURIComponent(rawSlug).replace(/\s+/g, '-');
    const post = blogPosts.find((b) => b.slug === decodedSlug || b.slug === rawSlug);

    if (!post) {
        return {
            title: 'Pilgrimage Blog Article',
            description: 'Read the latest pilgrimage travel guides from Ramayan Tours & Travels.',
            alternates: {
                canonical: `/blog/${rawSlug}`,
            },
        };
    }

    const title = post.title.length > 55 ? `${post.title.slice(0, 52)}...` : post.title;
    const description = `${post.excerpt ? post.excerpt.slice(0, 145) : 'Read full guide by Ramayan Tours & Travels.'}...`;

    return {
        title,
        description,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description,
            url: `https://ramayantoursandtravels.com/blog/${post.slug}`,
            images: post.image ? [{ url: post.image }] : undefined,
        },
    };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
