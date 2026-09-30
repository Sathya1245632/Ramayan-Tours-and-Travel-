import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pilgrimage Blog, Temple Guides & Travel Insights | Ramayan Tours',
    description:
        'Read expert articles on Rameshwaram 22 theerthams rituals, Dhanushkodi history, Navagraha temple circuits, South India pilgrimage tips, and cab travel advice.',
    keywords: [
        'rameshwaram travel blog',
        'rameshwaram temple guide',
        '22 theerthams rules',
        'dhanushkodi travel guide',
        'south india temple tours blog',
        'navagraha temples tour guide',
        'pilgrimage tips india',
        'rameshwaram taxi blog',
        'best time to visit rameshwaram',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/blog',
    },
    openGraph: {
        title: 'Pilgrimage Blog & Sacred Guides | Ramayan Tours',
        description:
            'Discover temple histories, ritual traditions, and insider travel advice for Rameshwaram and sacred South India.',
        url: 'https://ramayantoursandtravels.com/blog',
        type: 'website',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
