import type { Metadata } from 'next';
import { destinations } from '@/lib/data';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const dest = destinations.find((d) => d.id === params.id);

    if (!dest) {
        return {
            title: 'Destination Guide',
            description: 'Explore pilgrimage travel destinations with Ramayan Tours & Travels.',
            alternates: {
                canonical: `/destinations/${params.id}`,
            },
        };
    }

    const title = `${dest.name} Tour Guide & Temples`;
    const description = `${dest.description ? dest.description.slice(0, 145) : 'Plan your journey with Ramayan Tours & Travels.'}...`;

    return {
        title: title.length > 55 ? title.slice(0, 55) : title,
        description,
        alternates: {
            canonical: `/destinations/${params.id}`,
        },
        openGraph: {
            title: `${dest.name} | Ramayan Tours`,
            description,
            url: `https://ramayantoursandtravels.com/destinations/${params.id}`,
            images: dest.image ? [{ url: dest.image }] : undefined,
        },
    };
}

export default function DestinationDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
