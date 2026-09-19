import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Rameshwaram Tour Packages & Taxi Service',
    description: 'Book authentic Rameshwaram temple darshan, Dhanushkodi 4WD trips, and 24/7 taxi service with verified local guides.',
    alternates: {
        canonical: '/tours/rameshwaram',
    },
    openGraph: {
        title: 'Rameshwaram Tour Packages & Taxi Service | Ramayan Tours',
        description: 'Authentic Rameshwaram temple tours, Dhanushkodi trips, and verified taxi services.',
        url: 'https://ramayantoursandtravels.com/tours/rameshwaram',
    },
};

export default function RameshwaramTourLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
