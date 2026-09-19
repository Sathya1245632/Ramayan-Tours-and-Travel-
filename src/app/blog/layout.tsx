import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rameshwaram Travel & Pilgrimage Blog',
    description: 'Travel guides, temple history, rituals, and pilgrimage tips for Rameshwaram and South India spiritual circuits.',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Rameshwaram Travel & Pilgrimage Blog | Ramayan Tours',
        description: 'Read pilgrimage guides, temple timings, and travel stories across South India.',
        url: 'https://ramayantoursandtravels.com/blog',
    },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
