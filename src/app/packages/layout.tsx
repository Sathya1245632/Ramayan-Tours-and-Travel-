import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tour & Sightseeing Packages | Best Rameshwaram Taxi Packages',
    description:
        'Explore affordable and verified tour & taxi packages for Rameshwaram local sightseeing, Dhanushkodi, Madurai, Kanyakumari, and South India temple circuits. Transparent rates and verified drivers.',
    keywords: [
        'rameshwaram tour packages',
        'rameshwaram taxi packages',
        'dhanushkodi tour package',
        'rameshwaram local sightseeing taxi rate',
        'south india pilgrimage packages',
        'madurai rameshwaram kanyakumari tour',
        'rameshwaram car rental with driver',
        'tempo traveller in rameshwaram',
        'rameshwaram 1 day tour package',
        'rameshwaram 2 days tour package',
        'rameshwaram outstation cab rates',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/packages',
    },
    openGraph: {
        title: 'Tour & Sightseeing Packages in Rameshwaram | Ramayan Tours',
        description:
            'Book verified Rameshwaram sightseeing cabs, Dhanushkodi packages, and temple pilgrimage tours with transparent pricing.',
        url: 'https://ramayantoursandtravels.com/packages',
        type: 'website',
    },
};

export default function PackagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
