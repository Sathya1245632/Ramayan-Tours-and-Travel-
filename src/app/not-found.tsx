'use client';

import Link from 'next/link';
import { Home, Compass, Phone } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] bg-gray-950 flex items-center justify-center px-4 py-20">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Compass className="w-12 h-12 text-orange-400 animate-pulse" />
                </div>

                <div className="space-y-2">
                    <div className="text-orange-400 font-bold text-sm tracking-widest uppercase">404 Error</div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-poppins">
                        Sacred Path Not Found
                    </h1>
                    <p className="text-gray-400 text-sm">
                        The page you are looking for might have moved or is temporarily unavailable. Let us help guide your journey.
                    </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>
                    <Link
                        href="/packages"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <Compass className="w-4 h-4" />
                        View Tour Packages
                    </Link>
                </div>

                <div className="pt-6 border-t border-white/5 text-xs text-gray-500">
                    Need urgent assistance? Call us at{' '}
                    <a href="tel:+917639661626" className="text-orange-400 hover:underline">
                        +91 7639 661 626
                    </a>
                </div>
            </div>
        </div>
    );
}
