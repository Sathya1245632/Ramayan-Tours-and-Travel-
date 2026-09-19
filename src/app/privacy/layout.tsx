import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Learn how Ramayan Tours & Travels protects your personal data and booking privacy.',
    alternates: {
        canonical: '/privacy',
    },
    openGraph: {
        title: 'Privacy Policy | Ramayan Tours',
        description: 'Read our strict privacy policy and data security standards.',
        url: 'https://ramayantoursandtravels.com/privacy',
    },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
