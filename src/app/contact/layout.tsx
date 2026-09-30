import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Rameshwaram Taxi Booking & Tour Support',
    description:
        'Connect with Ramayan Tours and Travels Rameshwaram. 24/7 helpline for taxi booking, customized temple tours, Dhanushkodi cabs, and hotel reservations. Call +91 63858 55695.',
    keywords: [
        'ramayan tours contact number',
        'rameshwaram taxi booking phone number',
        'rameshwaram travel agency address',
        'rameshwaram cab booking 24/7',
        'hire taxi in rameshwaram contact',
        'dhanushkodi cab booking helpline',
        'south india tour operator contact',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/contact',
    },
    openGraph: {
        title: 'Contact Ramayan Tours & Travels Rameshwaram',
        description:
            'Need assistance with temple tours or cab booking? Contact our 24/7 Rameshwaram travel helpdesk.',
        url: 'https://ramayantoursandtravels.com/contact',
        type: 'website',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
