import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Tour & Taxi Packages in Rameshwaram',
    description: 'Explore best-selling Rameshwaram temple sightseeing, Dhanushkodi cabs, and South India tour packages at transparent prices.',
    alternates: {
        canonical: '/packages',
    },
    openGraph: {
        title: 'Tour & Taxi Packages in Rameshwaram | Ramayan Tours',
        description: 'Transparent pricing for Rameshwaram cabs, Dhanushkodi 4WD trips, and South India temple circuits.',
        url: 'https://ramayantoursandtravels.com/packages',
    },
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
