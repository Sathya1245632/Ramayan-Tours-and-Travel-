import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Pilgrimage & Tour Planner | Custom Itinerary Generator',
    description:
        'Generate personalized, day-by-day temple pilgrimage and travel itineraries across India with our AI Trip Planner. Instant budget calculation, temple schedules, and hotel suggestions.',
    keywords: [
        'ai pilgrimage planner',
        'ai trip planner india',
        'rameshwaram itinerary planner',
        'custom temple tour generator',
        'south india pilgrimage planner',
        'temple darshan itinerary maker',
        'customized tour planner rameshwaram',
        'pilgrimage yatra planner ai',
        'madurai rameshwaram itinerary',
    ],
    alternates: {
        canonical: 'https://ramayantoursandtravels.com/ai-planner',
    },
    openGraph: {
        title: 'AI Pilgrimage & Tour Planner | Ramayan Tours',
        description:
            'Plan your sacred pilgrimage in seconds with AI. Customized day-by-day schedules, darshan timings, and verified cab recommendations.',
        url: 'https://ramayantoursandtravels.com/ai-planner',
        type: 'website',
    },
};

export default function AIPlannerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
