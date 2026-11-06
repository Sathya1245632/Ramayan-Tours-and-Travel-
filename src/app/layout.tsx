import type { Metadata } from 'next';
import './globals.css';
import MainLayoutWrapper from '@/components/MainLayoutWrapper';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    metadataBase: new URL('https://ramayantoursandtravels.com'),
    title: {
        default: 'Ramayan Tours & Travels | Best Travels in Rameshwaram',
        template: '%s | Ramayan Tours & Travels',
    },
    description: 'Explore Rameshwaram temple tours, Dhanushkodi sightseeing and South India pilgrimage packages with Ramayan Tours & Travels.',
    keywords: [
        'best travels in rameshwaram',
        'rameshwaram temple tour packages',
        'rameshwaram taxi service',
        'dhanushkodi cab booking',
        'south india pilgrimage tours',
        'rameshwaram car rental',
        'rameshwaram local sightseeing cabs',
        'madurai to rameshwaram taxi',
        'kanyakumari tour packages',
        'ramayana trail rameshwaram',
        'online cab booking rameshwaram',
        'rameshwaram travels contact number',
        'temple darshan cab rameshwaram',
        'tamil nadu pilgrimage packages',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Ramayan Tours & Travels | Best Travels in Rameshwaram',
        description: 'Explore Rameshwaram temple packages, Dhanushkodi sightseeing and custom South India tours with Ramayan Tours & Travels.',
        url: 'https://ramayantoursandtravels.com',
        siteName: 'Ramayan Tours and Travels',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ramayan Tours & Travels | Rameshwaram Pilgrimage Tours',
        description: 'Explore Rameshwaram temple packages, Dhanushkodi tours and local taxi services.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href="/images/brand-emblem-square.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&family=Cinzel:wght@400;700;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        "name": "Ramayan Tours and Travels",
                        "description": "Travel and tour services in Rameshwaram, Tamil Nadu, including local sightseeing, pilgrimage tours and taxi services.",
                        "url": "https://ramayantoursandtravels.com",
                        "telephone": "+91 63858 55695",
                        "email": "Ramayantoursandtravels@gmail.com",
                        "areaServed": "Rameshwaram, Tamil Nadu, India",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Middle Street, Near Main Temple, West Gate",
                            "addressLocality": "Rameshwaram",
                            "addressRegion": "Tamil Nadu",
                            "postalCode": "623526",
                            "addressCountry": "IN"
                        }
                    })
                }} />
            </head>
            <body className="bg-gray-950 text-white font-sans">
                <Toaster
                    position="top-right"
                    toastOptions={{
                        style: {
                            background: '#1F2937',
                            color: '#fff',
                            border: '1px solid rgba(255,122,0,0.3)',
                        },
                    }}
                />
                <MainLayoutWrapper>
                    {children}
                </MainLayoutWrapper>
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
