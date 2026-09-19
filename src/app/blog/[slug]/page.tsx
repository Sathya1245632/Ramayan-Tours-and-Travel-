'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { Clock, User, ArrowLeft, Share2, MessageCircle, Calendar, Phone, CheckCircle } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import toast from 'react-hot-toast';

export default function BlogPostPage() {
    const params = useParams();
    const rawSlug = (params?.slug as string) || '';
    const slug = decodeURIComponent(rawSlug).replace(/\s+/g, '-');
    const post = blogPosts.find((p) => p.slug === slug || p.slug === rawSlug);

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-950 pt-32 pb-20 px-4 text-center">
                <div className="max-w-md mx-auto bg-gray-900 border border-white/10 rounded-2xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-3">Article Not Found</h2>
                    <p className="text-gray-400 text-sm mb-6">The sacred story or guide you are looking for does not exist or has moved.</p>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-semibold text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const handleShare = () => {
        if (typeof window !== 'undefined') {
            if (navigator.share) {
                navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: window.location.href,
                }).catch(() => {});
            } else {
                navigator.clipboard.writeText(window.location.href);
                toast.success('📋 Article link copied to clipboard!');
            }
        }
    };

    return (
        <article className="min-h-screen bg-gray-950 pt-28 pb-20">
            {/* Navigation */}
            <div className="max-w-4xl mx-auto px-4 mb-8">
                <Link 
                    href="/blog" 
                    className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to all stories
                </Link>
            </div>

            {/* Featured Image Header */}
            <div className="max-w-5xl mx-auto px-4 mb-12">
                <div className="relative h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                        <div className="badge-saffron inline-block mb-4 self-start">{post.category}</div>
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-white font-poppins mb-4 md:mb-6 leading-tight max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-300 text-xs md:text-sm">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                                <User className="w-4 h-4 text-orange-400" />
                                <span className="font-semibold">{post.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-orange-400" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-orange-400">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-3">
                    <div className="prose prose-invert prose-orange max-w-none">
                        {/* Custom Structured Content if available */}
                        {(post as any).content && Array.isArray((post as any).content) ? (
                            <div className="text-gray-300 space-y-8 leading-relaxed text-base md:text-lg">
                                {(post as any).content.map((sec: any, idx: number) => {
                                    if (sec.type === 'paragraph') {
                                        return (
                                            <p key={idx} className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                {sec.text}
                                            </p>
                                        );
                                    }
                                    if (sec.type === 'callout') {
                                        return (
                                            <div key={idx} className="p-6 bg-orange-500/10 rounded-2xl border border-orange-500/30">
                                                {sec.title && <h4 className="text-orange-400 font-bold text-lg mb-2">{sec.title}</h4>}
                                                <p className="text-gray-200 text-sm md:text-base">{sec.text}</p>
                                            </div>
                                        );
                                    }
                                    if (sec.type === 'templeGrid') {
                                        return (
                                            <div key={idx} className="my-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white font-poppins mb-6 flex items-center gap-2 border-l-4 border-orange-500 pl-4 bg-orange-500/5 py-2">
                                                    ✨ {sec.title}
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {sec.temples?.map((t: any, tIdx: number) => (
                                                        <div key={tIdx} className="p-5 bg-gray-900/90 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all flex flex-col justify-between">
                                                            <div>
                                                                <div className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2">
                                                                    {t.planet}
                                                                </div>
                                                                <h4 className="font-bold text-white text-base mb-1">{t.name}</h4>
                                                                <p className="text-xs text-gray-400 mb-3">📍 {t.location}</p>
                                                            </div>
                                                            <p className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                                                                {t.significance}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                    if (sec.type === 'heading') {
                                        return (
                                            <div key={idx} className="space-y-4 pt-4">
                                                <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins mt-6 mb-3 border-l-4 border-orange-500 pl-4 bg-orange-500/5 py-2">
                                                    {sec.title}
                                                </h2>
                                                {sec.paragraphs?.map((pText: string, pIdx: number) => (
                                                    <p key={pIdx} className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                        {pText}
                                                    </p>
                                                ))}
                                                {sec.text && (
                                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                        {sec.text}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        ) : (
                            /* Default Fallback Content for other posts */
                            <>
                                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 font-medium bg-orange-500/5 p-6 rounded-2xl border border-orange-500/20">
                                    {post.excerpt}
                                </p>
                                
                                <div className="text-gray-300 space-y-6 leading-relaxed text-base md:text-lg">
                                    <p>
                                        South India is blessed with some of the most sacred pilgrimage shrines and majestic heritage corridors in the world. For generations, millions of devotees have traveled across Rameshwaram, Madurai, Kanyakumari, and beyond in search of divine blessings and peaceful memories.
                                    </p>
                                    
                                    <h2 className="text-2xl font-bold text-white font-poppins mt-10 mb-4 border-l-4 border-orange-500 pl-4 bg-orange-500/5 py-2">
                                        🌟 Key Highlights & Spiritual Significance
                                    </h2>
                                    <p>
                                        Every sacred shrine on this trail has centuries of history and distinct spiritual rituals. From performing the holy bath in the 22 sacred theerthams of Ramanathaswamy Temple to witnessing the morning aarti at Meenakshi Amman Temple, proper timing and planning makes all the difference.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                                        <div className="p-5 bg-gray-900 rounded-2xl border border-white/5">
                                            <div className="text-orange-400 font-bold text-base mb-2 flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4" /> Best Season & Timings
                                            </div>
                                            <p className="text-gray-400 text-sm">Early morning (5:00 AM to 9:00 AM) and evening aartis offer the most peaceful darshan.</p>
                                        </div>
                                        <div className="p-5 bg-gray-900 rounded-2xl border border-white/5">
                                            <div className="text-orange-400 font-bold text-base mb-2 flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4" /> Hassle-Free Transport
                                            </div>
                                            <p className="text-gray-400 text-sm">Comfortable AC sedans and tempo travelers with experienced local drivers who know temple schedules.</p>
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white font-poppins mt-10 mb-4 border-l-4 border-orange-500 pl-4 bg-orange-500/5 py-2">
                                        🚗 Planning Your Journey with Ramayan Tours
                                    </h2>
                                    <p>
                                        At Ramayan Tours and Travels, our dedicated team assists you with customized itinerary planning, clean AC cabs, hotel accommodations, and 24/7 dedicated support so you can focus entirely on your devotion and family comfort.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                        <div className="flex gap-4">
                            <button
                                onClick={handleShare}
                                className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-white/10 rounded-full text-sm hover:bg-orange-500/10 hover:border-orange-500/30 transition-all text-gray-300"
                            >
                                <Share2 className="w-4 h-4 text-orange-400" /> Share Story
                            </button>
                            <a
                                href="https://wa.me/916385855695?text=Hi%20Ramayan%20Tours,%20I%20have%20an%20inquiry%20regarding%20the%20article:%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm hover:bg-green-500/20 transition-all"
                            >
                                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-28 space-y-6">
                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-orange-500 to-yellow-600 p-6 rounded-2xl shadow-xl shadow-orange-500/20 text-white">
                            <h3 className="font-black text-xl mb-2 font-poppins">Ready to Visit?</h3>
                            <p className="text-xs text-white/90 mb-5 leading-relaxed">
                                Book your comfortable cab or complete pilgrimage tour in Rameshwaram & South India.
                            </p>
                            <Link 
                                href="/packages"
                                className="block w-full text-center py-3 bg-white text-orange-600 font-bold text-sm rounded-xl hover:bg-gray-100 transition-colors shadow-md mb-2"
                            >
                                View Packages
                            </Link>
                            <a 
                                href="tel:+916385855695"
                                className="block w-full text-center py-2.5 border border-white/40 text-white font-medium text-xs rounded-xl hover:bg-white/10 transition-colors"
                            >
                                Call +91 63858 55695
                            </a>
                        </div>

                        {/* Recent Posts Mini */}
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-white font-bold mb-4 font-poppins text-xs uppercase tracking-widest text-orange-400">Recent Stories</h3>
                            <div className="space-y-4">
                                {blogPosts.filter(p => p.slug !== slug).slice(0, 4).map(p => (
                                    <Link key={p.id} href={`/blog/${p.slug}`} className="group block">
                                        <p className="text-gray-300 text-xs mb-1 line-clamp-1 group-hover:text-orange-400 transition-colors">{p.title}</p>
                                        <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                            <span>{p.date}</span>
                                            <span>•</span>
                                            <span>{p.readTime}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

