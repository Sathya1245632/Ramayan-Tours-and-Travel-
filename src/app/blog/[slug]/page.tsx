import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/data';
import BlogPostClient from './BlogPostClient';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const rawSlug = params?.slug || '';
    const slug = decodeURIComponent(rawSlug).replace(/\s+/g, '-');
    const post = blogPosts.find((p) => p.slug === slug || p.slug === rawSlug);

    if (!post) {
        return {
            title: 'Article Not Found | Ramayan Tours & Travels',
            description: 'The requested sacred guide or travel story was not found.',
        };
    }

    const title = `${post.title} | Ramayan Tours Travel Guide`;
    const description = post.excerpt;
    const keywords = [
        post.title.toLowerCase(),
        `${post.category.toLowerCase()} rameshwaram`,
        'rameshwaram travel guide',
        'south india pilgrimage guide',
        'rameshwaram tourism blog',
        'temple darshan guide',
        'rameshwaram tour tips',
        'ramayan tours blog',
    ];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://ramayantoursandtravels.com/blog/${post.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `https://ramayantoursandtravels.com/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [post.image],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const rawSlug = params?.slug || '';
    const slug = decodeURIComponent(rawSlug).replace(/\s+/g, '-');
    const post = blogPosts.find((p) => p.slug === slug || p.slug === rawSlug);

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} allPosts={blogPosts} />;
}
