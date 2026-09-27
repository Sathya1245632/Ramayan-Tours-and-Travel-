'use client';

import React from 'react';

export default function MaintenancePage() {
    return (
        <div className="min-h-screen w-full bg-[#f1f4f8] flex items-center justify-center p-4 selection:bg-amber-400 selection:text-gray-900 font-sans">
            <div className="max-w-xl w-full text-center py-12 px-6 flex flex-col items-center justify-center">
                
                {/* Meshed Gears Graphic */}
                <div className="relative w-40 h-32 mb-8 flex items-center justify-center">
                    {/* Big Silver Gear */}
                    <svg
                        className="w-24 h-24 text-slate-300 drop-shadow-sm animate-spin"
                        style={{ animationDuration: '10s' }}
                        viewBox="0 0 100 100"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M50 35a15 15 0 100 30 15 15 0 000-30zm-23 15a23 23 0 013.2-11.8l-5.4-4.5 5.7-9.8 6.8 2a23 23 0 0110.3-6l1-7 11.4 0 1 7a23 23 0 0110.3 6l6.8-2 5.7 9.8-5.4 4.5A23 23 0 0180 50a23 23 0 01-3.2 11.8l5.4 4.5-5.7 9.8-6.8-2a23 23 0 01-10.3 6l-1 7-11.4 0-1-7a23 23 0 01-10.3-6l-6.8 2-5.7-9.8 5.4-4.5A23 23 0 0127 50z"
                        />
                    </svg>

                    {/* Small Yellow/Gold Gear */}
                    <svg
                        className="w-16 h-16 text-amber-400 drop-shadow-sm absolute -top-1 right-3 animate-spin"
                        style={{ animationDuration: '6s', animationDirection: 'reverse' }}
                        viewBox="0 0 100 100"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M50 35a15 15 0 100 30 15 15 0 000-30zm-23 15a23 23 0 013.2-11.8l-5.4-4.5 5.7-9.8 6.8 2a23 23 0 0110.3-6l1-7 11.4 0 1 7a23 23 0 0110.3 6l6.8-2 5.7 9.8-5.4 4.5A23 23 0 0180 50a23 23 0 01-3.2 11.8l5.4 4.5-5.7 9.8-6.8-2a23 23 0 01-10.3 6l-1 7-11.4 0-1-7a23 23 0 01-10.3-6l-6.8 2-5.7-9.8 5.4-4.5A23 23 0 0127 50z"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f293d] tracking-tight mb-4">
                    Site is under maintenance
                </h1>

                {/* Subtitle */}
                <p className="text-gray-500 text-base sm:text-lg font-normal mb-8 max-w-md mx-auto leading-relaxed">
                    We&apos;re working hard to improve the user experience. Stay tuned!
                </p>

                {/* Action Buttons */}
                <div className="flex flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/916385855695?text=Hello%20Ramayan%20Tours%2C%20I%20am%20reaching%20out%20from%20the%20website."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3 bg-[#1c2434] hover:bg-[#2c384e] text-white font-semibold text-sm rounded-md transition-all shadow-sm active:scale-95 text-center min-w-[120px]"
                    >
                        Contact Us
                    </a>

                    <button
                        onClick={() => window.location.reload()}
                        className="px-7 py-3 bg-white hover:bg-gray-50 text-[#1c2434] font-semibold text-sm rounded-md border border-[#cbd5e1] hover:border-gray-400 transition-all shadow-sm active:scale-95 text-center min-w-[120px]"
                    >
                        Reload
                    </button>
                </div>

            </div>
        </div>
    );
}
