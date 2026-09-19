import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms and Conditions',
    description: 'Read terms, booking policies, and cancellation guidelines for Ramayan Tours & Travels.',
    alternates: {
        canonical: '/terms',
    },
    openGraph: {
        title: 'Terms and Conditions | Ramayan Tours',
        description: 'Transparent terms and booking guidelines for all pilgrims.',
        url: 'https://ramayantoursandtravels.com/terms',
    },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
