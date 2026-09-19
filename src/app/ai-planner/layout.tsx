import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Pilgrimage & Trip Planner',
    description: 'Generate a personalized day-by-day spiritual itinerary for 100+ destinations across India in seconds with AI.',
    alternates: {
        canonical: '/ai-planner',
    },
    openGraph: {
        title: 'AI Pilgrimage Trip Planner | Ramayan Tours',
        description: 'Instant customized pilgrimage day-by-day itineraries across South India and Pan-India shrines.',
        url: 'https://ramayantoursandtravels.com/ai-planner',
    },
};

export default function AIPlannerLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
