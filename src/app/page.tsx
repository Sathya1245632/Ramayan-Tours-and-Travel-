import type { Metadata } from 'next';
import OriginalHomePage from '@/components/OriginalHomePage';

export const metadata: Metadata = {
    title: 'Ramayan Tours & Travels | Best Travels in Rameshwaram | Tour Packages & Cabs',
    description:
        '#1 rated travel agency in Rameshwaram. Book authentic temple tour packages, Dhanushkodi sightseeing cabs, Ramayana trail yatras, and South India pilgrimage trips with 24/7 support.',
    keywords: [
        'best travels in rameshwaram',
        'rameshwaram tour packages',
        'rameshwaram taxi service',
        'dhanushkodi cab booking',
        'rameshwaram temple darshan tour',
        'south india pilgrimage packages',
        'rameshwaram car rental with driver',
        'madurai to rameshwaram taxi',
        'rameshwaram local sightseeing package',
        'kanyakumari rameshwaram tour package',
        'ramayana trail tour rameshwaram',
        'rameshwaram cab booking online',
        'rameshwaram travels contact number',
        'budget travels in rameshwaram',
        'verified cabs rameshwaram',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com',
    },
    openGraph: {
        title: 'Ramayan Tours & Travels | Best Travels in Rameshwaram',
        description:
            'Book Rameshwaram temple tours, Dhanushkodi cabs, and South India pilgrimage packages. Verified cabs and 24/7 local guide assistance.',
        url: 'https://ramayantoursandtravels.com',
        siteName: 'Ramayan Tours and Travels',
        images: [
            {
                url: '/images/brand-emblem-square.png',
                width: 800,
                height: 800,
                alt: 'Ramayan Tours and Travels Rameshwaram',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ramayan Tours & Travels | Best Travels in Rameshwaram',
        description:
            'Book Rameshwaram temple tours, Dhanushkodi cabs, and South India pilgrimage packages. Verified cabs and 24/7 local guide assistance.',
    },
};

export default function HomePage() {
    return <OriginalHomePage />;
}

