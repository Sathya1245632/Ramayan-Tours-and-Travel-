'use client';

import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-950 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <Shield className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 font-poppins">Privacy Policy</h1>
                    <p className="text-gray-400">Last Updated: March 21, 2026</p>
                </div>

                <div className="bg-gray-900/50 rounded-3xl border border-white/5 p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Eye className="w-6 h-6 text-orange-400" />
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect information you provide directly to us when you book a tour, create an account, or contact us. This includes your name, email address, phone number, and payment details. We also collect usage data through cookies to improve your experience on our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Lock className="w-6 h-6 text-orange-400" />
                            2. How We Use Your Information
                        </h2>
                        <p>
                            Your information is used to process bookings, provide customer support, and send you important updates about your pilgrimage. We also use data to personalize our AI Trip Planner recommendations based on your preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Globe className="w-6 h-6 text-orange-400" />
                            3. Data Sharing
                        </h2>
                        <p>
                            We do not sell your personal data. We only share information with trusted partners (like hotels or transport providers) as necessary to fulfill your booked services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Bell className="w-6 h-6 text-orange-400" />
                            4. Your Rights
                        </h2>
                        <p>
                            You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact our support team at <a href="mailto:support@ramayantoursandtravels.com" className="text-orange-400 hover:underline">support@ramayantoursandtravels.com</a>.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-sm text-gray-500">
                            By using our website, you agree to the terms of this Privacy Policy. 
                            If you have questions, please reach out via our <a href="/contact" className="text-orange-400 hover:underline">Contact Page</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
