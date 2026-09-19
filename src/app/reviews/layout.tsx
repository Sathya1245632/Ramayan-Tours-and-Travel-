import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pilgrim Reviews & Ratings (4.9/5)',
    description: 'Read verified reviews and experiences from 50,000+ happy pilgrims who traveled with Ramayan Tours & Travels.',
    alternates: {
        canonical: '/reviews',
    },
    openGraph: {
        title: 'Pilgrim Reviews & Ratings | Ramayan Tours',
        description: 'Rated 4.9/5 by 50,000+ pilgrims across India. Read verified reviews.',
        url: 'https://ramayantoursandtravels.com/reviews',
    },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
