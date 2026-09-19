import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pilgrimage Destinations in South India',
    description: 'Explore sacred pilgrimage destinations across Tamil Nadu and South India including Rameshwaram, Madurai, Thanjavur, and more.',
    alternates: {
        canonical: '/destinations',
    },
    openGraph: {
        title: 'Pilgrimage Destinations in South India | Ramayan Tours',
        description: 'Complete guide to Rameshwaram, Madurai, Thanjavur, Kanyakumari, and top holy shrines.',
        url: 'https://ramayantoursandtravels.com/destinations',
    },
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
