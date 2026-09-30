import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { taxiPackages, packages } from '@/lib/data';
import PackageDetailClient from './PackageDetailClient';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const allPackages = [...taxiPackages, ...(packages as any[])];
    const pkg = allPackages.find((p) => p.id === params.id);

    if (!pkg) {
        return {
            title: 'Package Not Found | Ramayan Tours & Travels',
            description: 'The requested travel package was not found.',
        };
    }

    const title = `${pkg.name} | Rameshwaram Tour & Taxi Package`;
    const description = `Book ${pkg.name} starting from ${pkg.price}. Duration: ${pkg.duration}. Includes pickup from ${pkg.pickup || 'Rameshwaram'}, verified AC cab, and experienced local driver.`;
    const keywords = [
        `${pkg.name.toLowerCase()}`,
        `${pkg.name.toLowerCase()} rameshwaram`,
        'rameshwaram tour package',
        'rameshwaram taxi package',
        'dhanushkodi cab booking',
        'rameshwaram sightseeing cab',
        'rameshwaram outstation taxi',
        'south india pilgrimage package',
        'rameshwaram car rental with driver',
    ];

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: `https://ramayantoursandtravels.com/packages/${pkg.id}`,
        },
        openGraph: {
            title,
            description,
            url: `https://ramayantoursandtravels.com/packages/${pkg.id}`,
            images: [
                {
                    url: pkg.image,
                    alt: pkg.name,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [pkg.image],
        },
    };
}

export default function PackageDetailPage({ params }: Props) {
    const allPackages = [...taxiPackages, ...(packages as any[])];
    const pkg = allPackages.find((p) => p.id === params.id);

    if (!pkg) {
        notFound();
    }

    return <PackageDetailClient pkg={pkg} />;
}
