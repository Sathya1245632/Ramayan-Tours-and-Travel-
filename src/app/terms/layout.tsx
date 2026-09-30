import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Ramayan Tours & Travels',
    description:
        'Terms of Service, booking conditions, and cancellation policies for Ramayan Tours and Travels Rameshwaram.',
    keywords: [
        'terms of service ramayan tours',
        'rameshwaram taxi booking terms',
        'cancellation policy rameshwaram tour',
        'tour booking agreement',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/terms',
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
