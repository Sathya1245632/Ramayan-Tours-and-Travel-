'use client';

import { useState } from 'react';
import { ShieldCheck, CheckCircle2, Award, FileText, ChevronRight } from 'lucide-react';
import CertificateModal from '@/components/CertificateModal';

export default function GovtTrustSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-14 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 border-y border-white/5 relative overflow-hidden">
                {/* Background accent glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-orange-500/15 via-yellow-500/10 to-emerald-500/10 border border-orange-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            
                            {/* Left: Emblem & Heading */}
                            <div className="lg:col-span-7 space-y-4">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider">
                                    <ShieldCheck className="w-4 h-4 text-green-400" />
                                    <span>Govt. of India Recognized & Registered</span>
                                </div>

                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-poppins leading-tight">
                                    100% Certified Pilgrimage & Taxi Operator
                                </h2>

                                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                    Ramayan Tours and Travels is officially registered with the 
                                    <strong className="text-white"> Ministry of Micro, Small & Medium Enterprises (Govt. of India)</strong>. 
                                    Serving pilgrims with authentic Rameshwaram darshan, South India circuits, and verified chauffeur services since 2022.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                                        <span><strong>Reg. No:</strong> UDYAM-TN-19-0011517</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                                        <span><strong>Established:</strong> 05 March 2022</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span><strong>Classification:</strong> NIC 79110 (Travel Agency)</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-xs text-gray-300 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                                        <span><strong>Office:</strong> Rameshwaram Main Bus Stand</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Certificate Preview Card with Action */}
                            <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
                                <div className="w-full max-w-sm bg-gray-950 border border-orange-500/40 rounded-2xl p-6 text-center space-y-4 shadow-xl">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-orange-500/30">
                                        📜
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg font-poppins">Udyam Registration Certificate</div>
                                        <div className="text-orange-400 font-mono text-xs mt-1">UDYAM-TN-19-0011517</div>
                                        <div className="text-gray-400 text-xs mt-1">Ministry of MSME • Govt. of India</div>
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                                    >
                                        <FileText className="w-4 h-4" />
                                        <span>View Official Certificate</span>
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
