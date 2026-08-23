'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('App runtime error:', error);
    }, [error]);

    return (
        <div className="min-h-[80vh] bg-gray-950 flex items-center justify-center px-4 py-20">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-red-400" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-poppins">
                        Something went wrong
                    </h1>
                    <p className="text-gray-400 text-sm">
                        An unexpected issue occurred while loading this page. Please try refreshing or return to the homepage.
                    </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        onClick={() => reset()}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
