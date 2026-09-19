'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tours/rameshwaram', label: 'Rameshwaram Special' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/ai-planner', label: '✨ AI Planner' },
    { href: '/blog', label: 'Blog' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                (scrolled || isOpen)
                ? 'bg-gray-950 shadow-lg shadow-saffron-500/10 border-b border-orange-500/10'
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group py-1">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg shadow-orange-500/20 border-2 border-orange-500/40 bg-white p-1 group-hover:border-orange-400 group-hover:scale-105 transition-all duration-300">
                            <Image
                                src="/images/brand-emblem-square.png"
                                alt="Ramayan Tours & Travels Emblem"
                                width={48}
                                height={48}
                                priority
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-white font-black text-xl sm:text-2xl leading-none font-poppins tracking-tight group-hover:text-orange-400 transition-colors">
                                Ramayan
                            </div>
                            <div className="text-orange-400 text-[9px] sm:text-[10px] font-bold tracking-[0.22em] mt-1 opacity-90 group-hover:opacity-100 transition-opacity uppercase">
                                TOURS & TRAVELS
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === link.href
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md shadow-orange-500/30'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+916385855695"
                            className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap shrink-0"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 63858 55695</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-gray-950/100 z-50 overflow-y-auto">
                    <div className="px-6 py-8 space-y-4 pb-20">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-5 py-4 rounded-xl text-base font-semibold transition-all ${pathname === link.href
                                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/20'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5 border border-white/5'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-6 flex flex-col gap-4">
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
