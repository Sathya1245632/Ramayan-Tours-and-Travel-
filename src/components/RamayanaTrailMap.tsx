'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    Compass,
    Sparkles,
    Clock,
    Sun,
    ChevronRight,
    ChevronLeft,
    Share2,
    Send,
    BookOpen,
    Info,
    Eye,
    CheckCircle2,
    Calendar
} from 'lucide-react';
import toast from 'react-hot-toast';
import {
    RAMAYANA_TRAIL_LOCATIONS,
    RAMAYANA_STORY_PHASES,
    TrailLocation
} from '@/lib/ramayanaTrailData';

export default function RamayanaTrailMap({
    compact = false,
    initialLocationId
}: {
    compact?: boolean;
    initialLocationId?: string;
}) {
    const [selectedLocationId, setSelectedLocationId] = useState<string>(
        initialLocationId || RAMAYANA_TRAIL_LOCATIONS[1].id // Default to Ramar Padam
    );
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeStoryPhase, setActiveStoryPhase] = useState<number | null>(null);

    const detailsCardRef = useRef<HTMLDivElement>(null);

    // Auto-read URL query parameters if present
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const spotParam = params.get('spot');
            if (spotParam && RAMAYANA_TRAIL_LOCATIONS.some((l) => l.id === spotParam)) {
                setSelectedLocationId(spotParam);
            }
        }
    }, []);

    // Active location object
    const selectedLocation = useMemo(() => {
        return (
            RAMAYANA_TRAIL_LOCATIONS.find((loc) => loc.id === selectedLocationId) ||
            RAMAYANA_TRAIL_LOCATIONS[0]
        );
    }, [selectedLocationId]);

    // Filtered locations
    const filteredLocations = useMemo(() => {
        if (activeStoryPhase !== null) {
            const phase = RAMAYANA_STORY_PHASES.find((p) => p.step === activeStoryPhase);
            if (phase) {
                return RAMAYANA_TRAIL_LOCATIONS.filter((l) => phase.locationIds.includes(l.id));
            }
        }
        if (selectedCategory === 'All') return RAMAYANA_TRAIL_LOCATIONS;
        return RAMAYANA_TRAIL_LOCATIONS.filter((loc) => loc.category === selectedCategory);
    }, [selectedCategory, activeStoryPhase]);

    // Navigate to next / prev location
    const currentIndex = RAMAYANA_TRAIL_LOCATIONS.findIndex(
        (loc) => loc.id === selectedLocationId
    );

    const handleSelectLocation = (id: string) => {
        setSelectedLocationId(id);
        if (typeof window !== 'undefined' && window.innerWidth < 1024 && detailsCardRef.current) {
            detailsCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const handleNextLocation = () => {
        const nextIdx = (currentIndex + 1) % RAMAYANA_TRAIL_LOCATIONS.length;
        handleSelectLocation(RAMAYANA_TRAIL_LOCATIONS[nextIdx].id);
    };

    const handlePrevLocation = () => {
        const prevIdx =
            (currentIndex - 1 + RAMAYANA_TRAIL_LOCATIONS.length) %
            RAMAYANA_TRAIL_LOCATIONS.length;
        handleSelectLocation(RAMAYANA_TRAIL_LOCATIONS[prevIdx].id);
    };

    const handleCategoryClick = (cat: string) => {
        setActiveStoryPhase(null);
        setSelectedCategory(cat);
        const matching = cat === 'All'
            ? RAMAYANA_TRAIL_LOCATIONS
            : RAMAYANA_TRAIL_LOCATIONS.filter((l) => l.category === cat);
        if (matching.length > 0 && !matching.some((l) => l.id === selectedLocationId)) {
            setSelectedLocationId(matching[0].id);
        }
    };

    const handlePhaseClick = (step: number) => {
        if (activeStoryPhase === step) {
            setActiveStoryPhase(null);
        } else {
            setActiveStoryPhase(step);
            const phase = RAMAYANA_STORY_PHASES.find((p) => p.step === step);
            if (phase && phase.locationIds.length > 0) {
                setSelectedLocationId(phase.locationIds[0]);
            }
        }
    };

    const handleShare = () => {
        if (typeof window !== 'undefined') {
            const url = `${window.location.origin}/ramayana-trail?spot=${selectedLocation.id}`;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(url);
                toast.success('Link copied to clipboard!');
            } else {
                toast.success(`Share link: ${url}`);
            }
        }
    };

    return (
        <div className="w-full bg-gray-900/90 backdrop-blur-2xl border border-orange-500/25 rounded-3xl p-4 sm:p-8 shadow-2xl shadow-black/80 relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* ─── HEADER ─────────────────────────────────────── */}
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
                        <span>Sacred Geography of Rameshwaram</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-black text-white font-poppins flex items-center gap-3">
                        Interactive <span className="gradient-text">Ramayana Trail</span> Map
                    </h2>
                    <p className="text-gray-300 text-sm mt-1 max-w-2xl">
                        Click on any sacred point on the island map to discover its epic Ramayana significance, rituals, travel distance, and auspicious visit timings.
                    </p>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                    <button
                        onClick={handleShare}
                        className="px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-200 text-xs font-semibold transition-all flex items-center gap-2"
                        title="Share this sacred trail"
                    >
                        <Share2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>Share Spot</span>
                    </button>

                    <Link
                        href={`/ai-planner?q=${encodeURIComponent('Rameshwaram & Dhanushkodi Ramayana Trail 2 Days Itinerary')}`}
                        className="px-4 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Generate Full Trail Plan</span>
                    </Link>
                </div>
            </div>

            {/* ─── CHRONOLOGICAL STORY TIMELINE SELECTOR ──────── */}
            <div className="relative z-10 mb-8 bg-gray-950/70 p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Follow Epic Ramayana Chronology
                    </span>
                    {activeStoryPhase !== null && (
                        <button
                            onClick={() => setActiveStoryPhase(null)}
                            className="text-[11px] text-gray-400 hover:text-white underline"
                        >
                            Reset to All Sites
                        </button>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {RAMAYANA_STORY_PHASES.map((phase) => {
                        const isActive = activeStoryPhase === phase.step;
                        return (
                            <button
                                key={phase.step}
                                onClick={() => handlePhaseClick(phase.step)}
                                className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                                    isActive
                                        ? 'bg-orange-500/20 border-orange-500 text-white shadow-md shadow-orange-500/20'
                                        : 'bg-gray-900/60 border-white/5 text-gray-300 hover:border-white/20 hover:bg-gray-900'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                            isActive ? 'bg-orange-500 text-white' : 'bg-white/10 text-orange-400'
                                        }`}>
                                            Phase {phase.step}
                                        </span>
                                    </div>
                                    <div className="font-bold text-xs line-clamp-1">{phase.title}</div>
                                    <div className="text-[11px] text-gray-400 line-clamp-2 mt-1 leading-snug">
                                        {phase.desc}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ─── CATEGORY FILTER PILLS ───────────────────────── */}
            <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
                {['All', 'Epic Trail', 'Sacred Temple', 'Holy Theertham', 'Coastal Legend'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryClick(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                            selectedCategory === cat && activeStoryPhase === null
                                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                                : 'bg-gray-950/60 text-gray-400 hover:text-white border border-white/10'
                        }`}
                    >
                        {cat === 'All' ? '🌟 All 10 Sacred Sites' : cat}
                    </button>
                ))}
            </div>

            {/* ─── MAIN MAP & DETAIL VIEW GRID ─────────────────── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* ─── LEFT: INTERACTIVE ISLAND MAP CANVAS ────────── */}
                <div className="lg:col-span-7 bg-gray-950 rounded-3xl border border-white/10 p-4 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
                    {/* Map Header details */}
                    <div className="flex items-center justify-between mb-4 z-20">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
                            <span className="text-xs font-semibold text-gray-300">Live Interactive Island Grid</span>
                        </div>
                        <span className="text-[11px] text-gray-400">Pamban ➔ Rameshwaram ➔ Dhanushkodi ➔ Ram Setu</span>
                    </div>

                    {/* SVG Interactive Island Illustration Canvas */}
                    <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-blue-950/40 via-gray-950 to-emerald-950/20 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center select-none shadow-inner">
                        {/* Ocean Waves Decor SVG */}
                        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="ocean-pattern" width="40" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 0 10 Q 10 0 20 10 T 40 10" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#ocean-pattern)" />
                        </svg>

                        {/* Island Graphic Contour SVG */}
                        <svg
                            viewBox="0 0 1000 600"
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* Ocean water boundary glow */}
                            <path
                                d="M 50,280 C 150,270 250,220 380,200 C 480,180 580,220 680,340 C 760,420 860,480 970,520 C 980,530 940,560 840,510 C 720,440 620,380 520,320 C 420,290 320,310 180,340 C 90,360 40,310 50,280 Z"
                                fill="rgba(249, 115, 22, 0.08)"
                                stroke="rgba(249, 115, 22, 0.4)"
                                strokeWidth="3"
                                strokeDasharray="8 4"
                            />

                            {/* Trail Connecting Highway Path */}
                            <path
                                d="M 120,290 Q 280,240 420,200 T 500,265 T 680,370 T 800,430 T 960,500"
                                fill="none"
                                stroke="rgba(234, 179, 8, 0.6)"
                                strokeWidth="2.5"
                                strokeDasharray="4 4"
                                className="animate-pulse"
                            />

                            {/* Ram Setu Shoals dotted line toward Sri Lanka */}
                            <path
                                d="M 880,450 Q 930,480 990,520"
                                fill="none"
                                stroke="rgba(56, 189, 248, 0.8)"
                                strokeWidth="4"
                                strokeDasharray="6 6"
                            />

                            {/* Labels in SVG */}
                            <text x="70" y="260" fill="rgba(255,255,255,0.4)" fontSize="18" fontWeight="bold">Pamban Channel</text>
                            <text x="460" y="160" fill="rgba(249, 115, 22, 0.7)" fontSize="20" fontWeight="bold">Rameshwaram Town</text>
                            <text x="720" y="320" fill="rgba(255,255,255,0.4)" fontSize="18" fontWeight="bold">Dhanushkodi Sandbar</text>
                            <text x="820" y="560" fill="rgba(56, 189, 248, 0.8)" fontSize="18" fontWeight="bold">➔ Ram Setu / Sri Lanka</text>
                        </svg>

                        {/* Location Markers rendered over coordinates */}
                        {RAMAYANA_TRAIL_LOCATIONS.map((loc, idx) => {
                            const isSelected = selectedLocationId === loc.id;
                            const isVisible = filteredLocations.some((fl) => fl.id === loc.id);

                            return (
                                <button
                                    key={loc.id}
                                    type="button"
                                    onClick={() => handleSelectLocation(loc.id)}
                                    style={{
                                        left: `${loc.coordinates.x}%`,
                                        top: `${loc.coordinates.y}%`,
                                    }}
                                    aria-label={`Select ${loc.name}`}
                                    className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30 transition-all duration-300 focus:outline-none ${
                                        isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-25 scale-75'
                                    }`}
                                >
                                    {/* Pulsing ring on selected */}
                                    {isSelected && (
                                        <div className="absolute inset-0 -m-3 rounded-full bg-orange-500/50 animate-ping pointer-events-none" />
                                    )}

                                    {/* Marker Pin */}
                                    <div
                                        className={`group relative flex items-center justify-center rounded-full transition-all shadow-xl ${
                                            isSelected
                                                ? 'w-10 h-10 bg-gradient-to-tr from-orange-600 to-yellow-400 text-white ring-4 ring-orange-400/50 scale-110 shadow-orange-500/50'
                                                : 'w-7 h-7 bg-gray-900 text-orange-400 border border-orange-500/40 hover:scale-125 hover:border-orange-400 hover:bg-orange-500 hover:text-white'
                                        }`}
                                    >
                                        <span className="text-xs font-black">{idx + 1}</span>

                                        {/* Hover Tooltip */}
                                        <div className="absolute bottom-full mb-2.5 hidden group-hover:flex flex-col items-center pointer-events-none z-50 whitespace-nowrap">
                                            <div className="bg-gray-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-orange-500/40 shadow-2xl flex items-center gap-1.5">
                                                <span>{loc.name}</span>
                                            </div>
                                            <div className="w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-orange-500/40 -mt-1" />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Bottom Map Navigation Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-3">
                        <button
                            onClick={handlePrevLocation}
                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 text-xs font-semibold flex items-center gap-1 transition-all"
                        >
                            <ChevronLeft className="w-4 h-4 text-orange-400" />
                            <span>Prev Spot</span>
                        </button>

                        <div className="text-center">
                            <span className="text-xs text-orange-400 font-bold">
                                Spot {currentIndex + 1} of {RAMAYANA_TRAIL_LOCATIONS.length}
                            </span>
                        </div>

                        <button
                            onClick={handleNextLocation}
                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-300 text-xs font-semibold flex items-center gap-1 transition-all"
                        >
                            <span>Next Spot</span>
                            <ChevronRight className="w-4 h-4 text-orange-400" />
                        </button>
                    </div>
                </div>

                {/* ─── RIGHT: SELECTED SPOT EXPANDED CARD ─────────── */}
                <div
                    ref={detailsCardRef}
                    className="lg:col-span-5 bg-gradient-to-b from-gray-950 to-gray-900 rounded-3xl border border-orange-500/40 p-6 shadow-2xl flex flex-col justify-between relative overflow-hidden"
                >
                    <div className="space-y-6">
                        {/* Spot Image & Category Tag */}
                        <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-white/10 group">
                            <Image
                                src={selectedLocation.image}
                                alt={selectedLocation.name}
                                fill
                                priority
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/40 to-transparent" />

                            <div className="absolute top-3 left-3 flex items-center gap-2">
                                <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-md rounded-full text-xs font-black text-white shadow-lg">
                                    {selectedLocation.category}
                                </span>
                                <span className="px-3 py-1 bg-gray-950/80 backdrop-blur-md rounded-full text-[11px] font-semibold text-orange-300 border border-orange-500/30">
                                    {selectedLocation.tag}
                                </span>
                            </div>

                            <div className="absolute bottom-3 left-4 right-4">
                                <div className="text-xs text-orange-400 font-bold">{selectedLocation.tamilName}</div>
                                <h3 className="text-xl sm:text-2xl font-black text-white font-poppins leading-tight">
                                    {selectedLocation.name}
                                </h3>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-900/80 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-semibold">Distance</div>
                                    <div className="text-xs font-bold text-white">
                                        {selectedLocation.distanceFromTempleKm === 0
                                            ? 'Temple Sanctum'
                                            : `${selectedLocation.distanceFromTempleKm} KM from Temple`}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900/80 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-semibold">Est. Time</div>
                                    <div className="text-xs font-bold text-white">{selectedLocation.approxTime}</div>
                                </div>
                            </div>
                        </div>

                        {/* Auspicious Timings */}
                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-3.5 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400">
                                <Sun className="w-3.5 h-3.5" />
                                <span>Auspicious Time & Darshan:</span>
                            </div>
                            <p className="text-xs text-gray-300 leading-snug">{selectedLocation.bestTimeToVisit}</p>
                            <div className="text-[11px] text-gray-400 pt-1">
                                Timings: <strong className="text-white">{selectedLocation.darshanTimings}</strong>
                            </div>
                        </div>

                        {/* Ramayana Epic Backstory */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Ramayana Epic Legend
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-gray-950/60 p-4 rounded-xl border border-white/5">
                                {selectedLocation.ramayanaStory}
                            </p>
                        </div>

                        {/* Rituals & Pilgrim Tips */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                                Sacred Rituals & Visitor Guidance:
                            </h4>
                            <div className="space-y-1.5">
                                {selectedLocation.ritualsAndTips.map((tip) => (
                                    <div key={tip} className="flex items-start gap-2 text-xs text-gray-400 leading-snug">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0 mt-0.5" />
                                        <span>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="space-y-3 pt-6 mt-6 border-t border-white/10">
                        <a
                            href={`https://wa.me/916385855695?text=${encodeURIComponent(
                                `Hello Ramayan Tours! I am interested in visiting *${selectedLocation.name}* during my Rameshwaram pilgrimage. Please share guided tour / cab details.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-green-600/30 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm group"
                        >
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            <span>Inquire Guide & Cab for {selectedLocation.name}</span>
                        </a>

                        <Link
                            href={`/ai-planner?q=${encodeURIComponent(`Tour to ${selectedLocation.name} in Rameshwaram`)}`}
                            className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                            <span>Add to My AI Pilgrimage Itinerary</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ─── HORIZONTAL QUICK PICKER BAR ───────────────── */}
            <div className="relative z-10 mt-10 pt-8 border-t border-white/10">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Quick Select Any Sacred Spot ({RAMAYANA_TRAIL_LOCATIONS.length} Locations):</span>
                    <span className="text-[11px] text-orange-400">Click to explore details & map pin</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
                    {RAMAYANA_TRAIL_LOCATIONS.map((loc, idx) => {
                        const isSelected = selectedLocationId === loc.id;
                        return (
                            <button
                                key={loc.id}
                                onClick={() => handleSelectLocation(loc.id)}
                                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                                    isSelected
                                        ? 'bg-orange-500/20 border-orange-500 shadow-md shadow-orange-500/20 ring-1 ring-orange-400'
                                        : 'bg-gray-950/60 border-white/5 hover:border-white/20 hover:bg-gray-950'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[10px] font-black w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
                                        {idx + 1}
                                    </span>
                                    <span className="text-[9px] text-gray-500 truncate max-w-[50px]">
                                        {loc.distanceFromTempleKm} km
                                    </span>
                                </div>
                                <div className="text-[11px] font-bold text-white line-clamp-2 leading-tight">
                                    {loc.name.split('(')[0]}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
