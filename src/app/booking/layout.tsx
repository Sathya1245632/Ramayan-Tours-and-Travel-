import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Rameshwaram Tours & Taxi Cabs',
    description: 'Instant online booking & WhatsApp confirmation for Rameshwaram cabs, temple packages, and outstation trips.',
    alternates: {
        canonical: '/booking',
    },
    openGraph: {
        title: 'Book Rameshwaram Tours & Taxi Cabs | Ramayan Tours',
        description: 'Secure instant taxi & pilgrimage tour booking with 24/7 dedicated support.',
        url: 'https://ramayantoursandtravels.com/booking',
    },
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
