'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Sparkles, ArrowRight, Instagram } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/ramayana-trail', label: 'Ramayana Trail' },
    { href: '/tours/rameshwaram', label: 'Rameshwaram Special' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Packages' },
    { href: '/ai-planner', label: 'AI Planner' },
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

    // Automatically close mobile menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const isHome = pathname === '/';

    return (
        <nav
            style={isOpen ? { backgroundColor: '#030712' } : undefined}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                isOpen
                    ? 'bg-gray-950 border-b border-orange-500/20 shadow-2xl'
                    : (!isHome || scrolled)
                    ? 'bg-gray-950/95 backdrop-blur-md shadow-xl shadow-black/50 border-b border-orange-500/20'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 group py-1 select-none"
                    >
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

                    {/* Desktop Navigation */}
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

                    {/* Desktop Phone CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="tel:+916385855695"
                            className="flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap shrink-0"
                        >
                            <Phone className="w-4 h-4" />
                            <span>+91 63858 55695</span>
                        </a>
                    </div>

                    {/* Mobile Hamburger / Close Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 border border-white/15 text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-orange-400" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Fully Opaque Solid Mobile Menu Overlay */}
            {isOpen && (
                <div
                    style={{ backgroundColor: '#030712' }}
                    className="lg:hidden fixed inset-x-0 top-20 h-[calc(100dvh-80px)] bg-gray-950 z-[100] overflow-y-auto border-t border-orange-500/20"
                >
                    <div className="px-5 py-6 space-y-2.5 pb-28 max-w-lg mx-auto">
                        {/* Navigation Links */}
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all ${
                                        isActive
                                            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg shadow-orange-500/25'
                                            : 'text-gray-200 hover:text-white bg-gray-900 active:bg-gray-800 border border-white/10'
                                    }`}
                                >
                                    <span>{link.label}</span>
                                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                </Link>
                            );
                        })}

                        {/* AI Planner Banner */}
                        <div className="pt-4 space-y-3">
                            <Link
                                href="/ai-planner"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-4 px-4 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/20 border border-orange-500/40 rounded-2xl flex items-center justify-between group active:scale-98 transition-all bg-gray-900"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-bold text-sm">AI Trip Planner</div>
                                        <div className="text-gray-400 text-xs">Generate custom pilgrimage plans</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Instagram Mobile Link */}
                            <a
                                href="https://www.instagram.com/ramayan_tours_and_travels?stkn=ZjRsOGJ1cDFjeG5n"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-orange-500/15 border border-pink-500/30 rounded-2xl flex items-center justify-between group active:scale-98 transition-all"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                        <Instagram className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-white font-bold text-sm">Follow on Instagram</div>
                                        <div className="text-pink-300 text-[11px]">@ramayan_tours_and_travels</div>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-pink-400 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
