import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { destinations, packages, taxiPackages } from '@/lib/data';
import DestinationDetailClient from './DestinationDetailClient';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const dest = destinations.find((d) => d.id === params.id);

    if (!dest) {
        return {
            title: 'Destination Not Found | Ramayan Tours & Travels',
            description: 'The requested pilgrimage destination was not found.',
        };
    }

    const title = `${dest.name} Pilgrimage & Temple Tour Guide (${dest.state})`;
    const description = `${dest.description} Explore top temples like ${dest.temples.slice(0, 2).join(', ')}, best travel tips, and customized taxi packages.`;
    const keywords = [
        `${dest.name.toLowerCase()} temple tour`,
        `${dest.name.toLowerCase()} pilgrimage guide`,
        `${dest.name.toLowerCase()} sightseeing packages`,
        `${dest.name.toLowerCase()} taxi service`,
        `${dest.name.toLowerCase()} cab booking`,
        ...dest.temples.map((t) => t.toLowerCase()),
        `${dest.state.toLowerCase()} temple tours`,
        'south india pilgrimage packages',
    ];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://ramayantoursandtravels.com/destinations/${dest.id}`,
        },
        openGraph: {
            title,
            description,
            url: `https://ramayantoursandtravels.com/destinations/${dest.id}`,
            images: [
                {
                    url: dest.image,
                    alt: `${dest.name} Tour`,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [dest.image],
        },
    };
}

export default function DestinationDetailPage({ params }: Props) {
    const dest = destinations.find((d) => d.id === params.id);
    if (!dest) notFound();

    const allPkgs = [...taxiPackages, ...(packages as any[])];
    const relatedPackages = allPkgs.filter(
        (p) => p.name.toLowerCase().includes(dest.name.toLowerCase()) || p.destination === dest.name
    );

    return <DestinationDetailClient dest={dest} relatedPackages={relatedPackages} />;
}
