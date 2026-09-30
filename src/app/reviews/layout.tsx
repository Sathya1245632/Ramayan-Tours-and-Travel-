import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Customer Reviews & Pilgrim Testimonials | Ramayan Tours & Travels',
    description:
        'Read genuine reviews, customer feedback, and spiritual journey testimonials from over 50,000+ happy pilgrims who traveled with Ramayan Tours and Travels Rameshwaram.',
    keywords: [
        'ramayan tours reviews',
        'best travels in rameshwaram reviews',
        'rameshwaram taxi service customer reviews',
        'rameshwaram tour operator ratings',
        'reliable cabs rameshwaram reviews',
        'pilgrimage tour testimonials',
        'dhanushkodi cab reviews',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/reviews',
    },
    openGraph: {
        title: 'Pilgrim Reviews & Testimonials | Ramayan Tours & Travels',
        description:
            'Rated 4.9/5 by 50,000+ satisfied travelers. Read verified reviews and honest experiences.',
        url: 'https://ramayantoursandtravels.com/reviews',
        type: 'website',
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
