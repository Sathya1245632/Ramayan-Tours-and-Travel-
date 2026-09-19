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
    description: 'Book Rameshwaram temple tours, Dhanushkodi cabs, and South India pilgrimage packages with Ramayan Tours & Travels. 24/7 support & verified cabs.',
    keywords: [
        'best travels in rameshwaram',
        'rameshwaram temple tour packages',
        'rameshwaram taxi service',
        'dhanushkodi cab booking',
        'south india pilgrimage tours',
        'rameshwaram car rental',
    ],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Ramayan Tours & Travels | Best Travels in Rameshwaram',
        description: 'Explore sacred Rameshwaram temple packages and custom South India tours with 24/7 dedicated support.',
        url: 'https://ramayantoursandtravels.com',
        siteName: 'Ramayan Tours and Travels',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ramayan Tours & Travels | Rameshwaram Pilgrimage Tours',
        description: 'Authentic Rameshwaram temple packages, Dhanushkodi tours, and taxi services with verified local guides.',
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
                        "@type": "LocalBusiness",
                        "name": "Ramayan Tours and Travels",
                        "description": "Top-rated travel agency in Rameshwaram specializing in AI-powered pilgrimage tours and local transport.",
                        "url": "https://ramayantoursandtravels.com",
                        "telephone": "+91 63858 55695",
                        "priceRange": "$$",
                        "areaServed": "Rameshwaram, Tamil Nadu, India",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Agni Theertham Road",
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
