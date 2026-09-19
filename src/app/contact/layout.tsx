import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Ramayan Tours & Travels',
    description: 'Get in touch with our 24/7 pilgrimage travel desk in Rameshwaram via WhatsApp or call +91 63858 55695.',
    alternates: {
        canonical: '/contact',
    },
    openGraph: {
        title: 'Contact Ramayan Tours & Travels | 24/7 Support',
        description: 'Call or WhatsApp us at +91 63858 55695 for custom tours and taxi bookings.',
        url: 'https://ramayantoursandtravels.com/contact',
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
