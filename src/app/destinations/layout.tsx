import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sacred Pilgrimage Destinations in India | Ramayan Tours & Travels',
    description:
        'Discover India’s most revered pilgrimage destinations including Rameshwaram, Madurai, Tirupati, Kanyakumari, Varanasi, Ayodhya, and Chola heritage temples. Detailed guides and travel tips.',
    keywords: [
        'sacred destinations in india',
        'south india pilgrimage places',
        'famous temples in tamil nadu',
        'rameshwaram pilgrimage guide',
        'madurai meenakshi temple tour',
        'tirupati balaji darshan',
        'kanyakumari travel guide',
        'chola temples pilgrimage',
        'spiritual places to visit in south india',
        'hindu pilgrimage destinations india',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/destinations',
    },
    openGraph: {
        title: 'Sacred Pilgrimage Destinations in India | Ramayan Tours',
        description:
            'Explore sacred temple circuits, holy shrines, and heritage landmarks across India with expert travel guidance.',
        url: 'https://ramayantoursandtravels.com/destinations',
        type: 'website',
    },
};

export default function DestinationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
