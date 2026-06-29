'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, MapPin, Clock, Star, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { taxiPackages, packages } from '@/lib/data';

export default function PackagesPage() {
    return (
        <div className="min-h-screen bg-gray-950 pt-24 pb-20">
            {/* ─── TOUR PACKAGES SECTION ─────────────────────────── */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="badge-saffron inline-block mb-4">✨ Specialized Tours</div>
                        <h2 className="section-title gradient-text mb-4">Spiritual Tour Packages</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Curated pilgrimage and nature tours designed for a deeply spiritual and comfortable experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.id}
                                className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500 flex flex-col md:flex-row h-full shadow-2xl"
                            >
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent md:hidden" />
                                    <div className="absolute top-4 left-4">
                                        <span className="badge-saffron text-[10px]">{pkg.category}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-white font-bold text-2xl font-poppins">{pkg.name}</h3>
                                        <div className="text-right">
                                            <div className="text-orange-400 font-black text-xl">{pkg.price}</div>
                                            <div className="text-gray-500 text-[10px] uppercase">{pkg.perPerson}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-orange-400" />
                                            <span>{pkg.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            <span className="text-gray-300">4.9</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {pkg.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                                                <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] text-gray-400">
                                                    👤
                                                </div>
                                            ))}
                                            <div className="w-8 h-8 rounded-full border-2 border-gray-900 bg-orange-500/20 flex items-center justify-center text-[10px] text-orange-400 font-bold">
                                                +12
                                            </div>
                                        </div>
                                        <Link
                                            href="/booking"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/40 transition-all"
                                        >
                                            Book Trip
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── TAXI PACKAGES SECTION ─────────────────────────── */}
            <section className="py-20 px-4 bg-gray-900/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="badge-saffron inline-block mb-4">🚕 Reliable Transport</div>
                        <h2 className="section-title gradient-text mb-4">Taxi Sightseeing Packages</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Comfortable and reliable taxi services for your local pilgrimage and nearby sightseeing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {taxiPackages.map((taxi) => (
                            <div
                                key={taxi.id}
                                className="group bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 card-hover flex flex-col h-full shadow-xl"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={taxi.image}
                                        alt={taxi.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
                                    <div className="absolute top-3 left-3">
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-500 text-white rounded-full uppercase tracking-wider">
                                            {taxi.duration}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-1 text-center">
                                    <h3 className="text-white font-bold text-base font-poppins mb-4 h-12 flex items-center justify-center">
                                        {taxi.name}
                                    </h3>

                                    <div className="space-y-2 mb-6 text-sm">
                                        <div className="flex items-center justify-center gap-2 text-gray-400">
                                            <MapPin className="w-3.5 h-3.5 text-orange-400" />
                                            <span>Pickup: <span className="text-gray-300">{taxi.pickup}</span></span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-gray-400">
                                            <Users className="w-3.5 h-3.5 text-orange-400" />
                                            <span>{taxi.perPerson}</span>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5 flex flex-col gap-3 mt-auto">
                                        <div className="flex flex-col items-center">
                                            <span className="text-gray-500 text-[10px] uppercase tracking-wider">Starting From</span>
                                            <span className="text-orange-400 font-bold text-xl">{taxi.price}</span>
                                        </div>
                                        <Link
                                            href={`/packages/${taxi.id}`}
                                            className="w-full text-center py-2.5 bg-white/5 border border-white/10 text-white text-xs font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:border-transparent transition-all shadow-md"
                                        >
                                            View Itinerary
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
