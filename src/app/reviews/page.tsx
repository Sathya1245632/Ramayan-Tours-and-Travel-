'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, MapPin, X, CheckCircle } from 'lucide-react';
import { reviews as initialReviews } from '@/lib/data';
import { submitReview } from '@/app/actions/reviews';
import toast from 'react-hot-toast';

export default function ReviewsPage() {
    const [reviewsList, setReviewsList] = useState(initialReviews);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        packageName: 'Rameshwaram Special Tour',
        rating: 5,
        comment: '',
    });

    const avgRating = (reviewsList.reduce((a, r) => a + (r.rating || 5), 0) / reviewsList.length).toFixed(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.comment) {
            toast.error('Please enter your name and review');
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await submitReview(formData);
            if (res.success) {
                toast.success('🙏 Thank you! Your review has been published.');
                // Optimistically add to reviews list
                const newReview = {
                    id: Date.now(),
                    name: formData.name,
                    location: formData.location || 'India',
                    destination: formData.packageName,
                    package: formData.packageName,
                    rating: Number(formData.rating),
                    date: 'Just now',
                    avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
                    review: formData.comment,
                };
                setReviewsList([newReview as any, ...reviewsList]);
                setIsModalOpen(false);
                setFormData({
                    name: '',
                    location: '',
                    packageName: 'Rameshwaram Special Tour',
                    rating: 5,
                    comment: '',
                });
            } else {
                toast.error(res.error || 'Failed to submit review');
            }
        } catch {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 pt-24 pb-20">
            {/* Header */}
            <div className="relative py-20 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5" />
                <div className="temple-pattern absolute inset-0 opacity-40" />
                <div className="relative z-10">
                    <div className="badge-saffron inline-block mb-4">⭐ Testimonials</div>
                    <h1 className="section-title gradient-text mb-4">Pilgrim Stories</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Hear from thousands of pilgrims who found their sacred connection through Ramayan Tours.
                    </p>
                </div>
            </div>

            {/* Stats Row */}
            <div className="max-w-5xl mx-auto px-4 mb-12">
                <div className="bg-gradient-to-r from-orange-500/15 via-yellow-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-black gradient-text">{avgRating}</div>
                            <div className="flex justify-center gap-0.5 my-2">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-gray-400 text-sm">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black gradient-text">50,000+</div>
                            <div className="text-gray-400 text-sm mt-2">Happy Pilgrims</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black gradient-text">98%</div>
                            <div className="text-gray-400 text-sm mt-2">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviewsList.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-900 rounded-2xl p-6 border border-white/5 hover:border-orange-500/20 card-hover flex flex-col"
                        >
                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-700'}`}
                                    />
                                ))}
                                <span className="text-gray-500 text-xs ml-1">{review.date}</span>
                            </div>

                            {/* Review Text */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1 italic">
                                "{review.review}"
                            </p>

                            {/* Package Badge */}
                            <div className="mb-4">
                                <span className="text-xs px-3 py-1 bg-orange-500/10 text-orange-300 border border-orange-500/20 rounded-full">
                                    📦 {review.package}
                                </span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-700 shrink-0">
                                    <Image
                                        src={review.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{review.name}</div>
                                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                                        <MapPin className="w-3 h-3 text-orange-400" />
                                        <span>{review.location}</span>
                                        {review.destination && (
                                            <>
                                                <span className="mx-1">•</span>
                                                <span>Visited {review.destination}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Write a Review CTA */}
            <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
                <div className="bg-gray-900 rounded-2xl border border-orange-500/20 p-10">
                    <div className="text-4xl mb-4">✍️</div>
                    <h2 className="text-2xl font-bold text-white mb-3">Share Your Sacred Experience</h2>
                    <p className="text-gray-400 mb-6">
                        Traveled with us? We'd love to hear about your pilgrimage. Your story inspires others!
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                    >
                        Write a Review
                    </button>
                </div>
            </div>

            {/* Review Submission Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="relative w-full max-w-lg bg-gray-900 border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="text-3xl mb-2">🙏</div>
                            <h3 className="text-xl font-bold text-white font-poppins">Share Your Experience</h3>
                            <p className="text-gray-400 text-xs mt-1">Tell fellow pilgrims about your journey with us</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-semibold uppercase mb-1">Your Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Ramesh Kumar"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input-sacred w-full"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-xs font-semibold uppercase mb-1">Your City / Location</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Chennai, TN"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                        className="input-sacred w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-xs font-semibold uppercase mb-1">Package / Tour</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Rameshwaram Tour"
                                        value={formData.packageName}
                                        onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                                        className="input-sacred w-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-xs font-semibold uppercase mb-2">Rating</label>
                                <div className="flex items-center gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setFormData({ ...formData, rating: star })}
                                            className="p-1 text-2xl focus:outline-none transition-transform hover:scale-125"
                                        >
                                            <Star
                                                className={`w-7 h-7 ${star <= formData.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                                            />
                                        </button>
                                    ))}
                                    <span className="text-orange-400 text-sm font-bold ml-2">{formData.rating} / 5 Stars</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-xs font-semibold uppercase mb-1">Your Experience / Review *</label>
                                <textarea
                                    required
                                    rows={4}
                                    placeholder="Tell us about the driver, temple darshan, hotel, comfort and your overall feeling..."
                                    value={formData.comment}
                                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    className="input-sacred w-full resize-none text-sm"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting Review...
                                    </>
                                ) : (
                                    <>Submit Sacred Review 🙏</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

