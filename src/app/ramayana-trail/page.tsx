import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
    Sparkles,
    Compass,
    BookOpen,
    MapPin,
    ShieldCheck,
    Calendar,
    PhoneCall,
    ArrowRight
} from 'lucide-react';
import RamayanaTrailMap from '@/components/RamayanaTrailMap';
import { RAMAYANA_TRAIL_LOCATIONS, RAMAYANA_STORY_PHASES } from '@/lib/ramayanaTrailData';

export const metadata: Metadata = {
    title: 'Interactive Ramayana Trail Map of Rameshwaram & Dhanushkodi | Ramayan Tours',
    description:
        'Explore the sacred locations of the Ramayana in Rameshwaram & Dhanushkodi: Agni Theertham, Ramar Padam, Vibhishan Temple, Ram Setu Floating Stones, and Ramanathaswamy Temple.',
    keywords: [
        'ramayana trail rameshwaram',
        'rameshwaram interactive map',
        'dhanushkodi ram setu map',
        'ramar padam rameshwaram',
        'vibhishan temple kothandaramaswamy',
        'floating stone rameshwaram',
        'agni theertham timings',
        'rameshwaram sacred places trail'
    ],
    alternates: {
        canonical: '/ramayana-trail',
    },
    openGraph: {
        title: 'Interactive Ramayana Trail Pilgrimage Map | Ramayan Tours',
        description:
            'Discover sacred Ramayana landmarks across Rameshwaram and Dhanushkodi with interactive maps, historical significance, and rituals.',
        url: 'https://ramayantoursandtravels.com/ramayana-trail',
        type: 'website',
    },
};

export default function RamayanaTrailPage() {
    return (
        <div className="min-h-screen bg-gray-950 text-white pt-32 pb-24">
            {/* Schema.org TouristTrip Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'TouristTrip',
                        name: 'Ramayana Pilgrimage Trail - Rameshwaram & Dhanushkodi',
                        description:
                            'Sacred pilgrimage circuit covering all historic landmarks associated with Lord Rama, Sita Devi, Lakshmana, and Hanuman in Rameshwaram.',
                        touristType: 'Pilgrimage / Heritage Tourism',
                        itinerary: RAMAYANA_TRAIL_LOCATIONS.map((loc, i) => ({
                            '@type': 'TouristAttraction',
                            name: loc.name,
                            description: loc.spiritualSignificance,
                            position: i + 1,
                        })),
                    }),
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ─── HERO HEADER ───────────────────────────── */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/15 border border-orange-500/30 rounded-full text-orange-400 text-xs sm:text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span>Sacred Heritage & Spiritual Geography</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white mb-4 font-poppins leading-tight">
                        The Sacred <span className="gradient-text">Ramayana Trail</span>
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        Retrace the divine footsteps of Lord Rama, Sita Devi, and the Vanara Sena across the holy island of Rameshwaram, Dhanushkodi, and the ancient Ram Setu causeway.
                    </p>
                </div>

                {/* ─── INTERACTIVE MAP COMPONENT ─────────────── */}
                <div className="mb-20">
                    <RamayanaTrailMap />
                </div>

                {/* ─── CHRONOLOGICAL EPIC PHASES GUIDE ───────── */}
                <section className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="badge-saffron inline-block mb-3">📜 The Epic Sequence</div>
                        <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-white">
                            The 4 Divine Chapters in Rameshwaram
                        </h2>
                        <p className="text-gray-400 text-sm mt-2">
                            How the Yuddha Kanda of the Ramayana unfolded on this sacred island.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {RAMAYANA_STORY_PHASES.map((phase) => (
                            <div
                                key={phase.step}
                                className="bg-gray-900/80 rounded-3xl border border-white/10 p-6 sm:p-8 hover:border-orange-500/40 transition-all shadow-xl flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-2xl bg-orange-500/20 text-orange-400 font-black text-base flex items-center justify-center border border-orange-500/30">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-poppins">{phase.title}</h3>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{phase.desc}</p>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-white/10">
                                    <div className="text-xs font-bold text-orange-400 uppercase">Key Landmarks:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {phase.locationIds.map((id) => {
                                            const loc = RAMAYANA_TRAIL_LOCATIONS.find((l) => l.id === id);
                                            return (
                                                <span
                                                    key={id}
                                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                                >
                                                    📍 {loc?.name.split('(')[0]}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── PILGRIMAGE ASSISTANCE BANNER ──────────── */}
                <section className="bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/20 border border-orange-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <h2 className="text-2xl sm:text-4xl font-black text-white font-poppins">
                            Ready to Experience the Sacred Ramayana Trail?
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Our certified local pilgrimage guides and comfortable AC transport will take you to every holy theertham and historic temple with personalized ritual guidance.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                            <a
                                href="https://wa.me/916385855695?text=Hello%20Ramayan%20Tours!%20I%20would%20like%20to%20book%20the%20guided%20Ramayana%20Trail%20pilgrimage%20tour%20in%20Rameshwaram."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg shadow-green-600/30 hover:scale-105 transition-all text-sm"
                            >
                                📲 Book Guided Ramayana Trail Tour
                            </a>
                            <Link
                                href="/ai-planner"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-full transition-all text-sm"
                            >
                                ✨ Customize with AI Trip Planner
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
