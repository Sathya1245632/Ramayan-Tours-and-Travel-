import type { Metadata } from 'next';
import { taxiPackages, packages } from '@/lib/data';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const allPackages = [...taxiPackages, ...(packages as any[])];
    const pkg = allPackages.find((p) => p.id === params.id);

    if (!pkg) {
        return {
            title: 'Tour Package Details',
            description: 'Explore pilgrimage and taxi tour packages with Ramayan Tours & Travels.',
            alternates: {
                canonical: `/packages/${params.id}`,
            },
        };
    }

    const title = `${pkg.name || pkg.title} Package`;
    const description = `${pkg.description ? pkg.description.slice(0, 145) : 'Book your tour with Ramayan Tours and Travels. 24/7 support & verified cabs.'}...`;

    return {
        title: title.length > 55 ? title.slice(0, 55) : title,
        description,
        alternates: {
            canonical: `/packages/${params.id}`,
        },
        openGraph: {
            title: `${pkg.name || pkg.title} | Ramayan Tours`,
            description,
            url: `https://ramayantoursandtravels.com/packages/${params.id}`,
            images: pkg.image ? [{ url: pkg.image }] : undefined,
        },
    };
}

export default function PackageDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
