import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Rameshwaram Tour & Taxi Service Online | Ramayan Tours',
    description:
        'Fast and secure online booking for Rameshwaram cabs, Dhanushkodi sightseeing trips, and South India temple packages. Instant WhatsApp confirmation, verified AC vehicles, and 24/7 support.',
    keywords: [
        'book rameshwaram taxi online',
        'rameshwaram cab booking online',
        'reserve temple tour package rameshwaram',
        'dhanushkodi cab booking online',
        'online taxi hire rameshwaram',
        'instant cab booking rameshwaram',
        'rameshwaram pilgrimage package booking',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/booking',
    },
    openGraph: {
        title: 'Book Rameshwaram Tour & Taxi Online | Ramayan Tours',
        description:
            'Book your Rameshwaram cab or tour package online with verified local drivers and instant confirmation.',
        url: 'https://ramayantoursandtravels.com/booking',
        type: 'website',
    },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
