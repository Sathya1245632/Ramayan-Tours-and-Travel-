'use client';

import { FileText, Gavel, Calendar, CreditCard, Ban, Scale } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gray-950 pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <FileText className="w-16 h-16 text-orange-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 font-poppins">Terms of Service</h1>
                    <p className="text-gray-400">Last Updated: March 21, 2026</p>
                </div>

                <div className="bg-gray-900/50 rounded-3xl border border-white/5 p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Scale className="w-6 h-6 text-orange-400" />
                            1. Agreement to Terms
                        </h2>
                        <p>
                            By accessing or using the services of **Ramayan Tours and Travels**, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-orange-400" />
                            2. Bookings and Reservations
                        </h2>
                        <p>
                            All tour and taxi bookings are subject to availability. A booking is only confirmed once you receive a confirmation email or message. You are responsible for providing accurate travel information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <CreditCard className="w-6 h-6 text-orange-400" />
                            3. Payments and Rates
                        </h2>
                        <p>
                            All prices are quoted in Indian Rupees (INR) unless stated otherwise. We reserve the right to adjust tour prices based on seasonality or government tax changes. Full payment must be completed before the tour departure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Ban className="w-6 h-6 text-orange-400" />
                            4. Cancellations and Refunds
                        </h2>
                        <p>
                            Cancellations made more than **48 hours** before the scheduled tour are eligible for a full refund. Cancellations between 24 and 48 hours are subject to a 50% cancellation fee. No refunds will be provided for late arrivals or no-shows.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Gavel className="w-6 h-6 text-orange-400" />
                            5. Liability and Conduct
                        </h2>
                        <p>
                            Ramayan Tours and Travels is not liable for indirect or consequential loss, injury, or damage. Travelers are expected to follow local temple rules and dress codes respectfully. Any misconduct may result in cancellation of service without refund.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-white/10 mt-12 text-center">
                        <p className="text-sm text-gray-500">
                            For direct support regarding your booking, call us at <a href="tel:+917639661626" className="text-orange-400 font-bold hover:underline">+91 7639 661 626</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
