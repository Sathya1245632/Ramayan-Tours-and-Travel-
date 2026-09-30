import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Ramayan Tours & Travels',
    description:
        'Privacy Policy for Ramayan Tours & Travels. Learn how we handle your personal data, booking information, and protect your privacy.',
    keywords: [
        'privacy policy ramayan tours',
        'travel agency privacy policy',
        'data security ramayan tours',
        'rameshwaram travel privacy terms',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/privacy',
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
