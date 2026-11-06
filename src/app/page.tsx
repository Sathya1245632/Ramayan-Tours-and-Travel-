import type { Metadata } from 'next';
import OriginalHomePage from '@/components/OriginalHomePage';

export const metadata: Metadata = {
    title: 'Ramayan Tours & Travels | Rameshwaram Tour Packages & Cabs',
    description:
        'Explore Rameshwaram temple tour packages, Dhanushkodi sightseeing cabs, Ramayana trail visits and South India pilgrimage trips with Ramayan Tours & Travels.',
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
        title: 'Ramayan Tours & Travels | Rameshwaram Tour Packages & Cabs',
        description:
            'Explore Rameshwaram temple tours, Dhanushkodi sightseeing and South India pilgrimage packages with Ramayan Tours & Travels.',
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
        title: 'Ramayan Tours & Travels | Rameshwaram Tour Packages',
        description:
            'Explore Rameshwaram temple tours, Dhanushkodi sightseeing and South India pilgrimage packages.',
    },
};

export default function HomePage() {
    return <OriginalHomePage />;
}
