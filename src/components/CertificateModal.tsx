'use client';

import { X, ExternalLink, ShieldCheck, CheckCircle2, Building, Calendar, MapPin, Award } from 'lucide-react';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CertificateModal({ isOpen, onClose }: CertificateModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
            <div 
                className="relative w-full max-w-2xl bg-gray-900 border border-orange-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with National/Govt Accent */}
                <div className="bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 p-6 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl shrink-0 shadow-inner">
                            🏛️
                        </div>
                        <div>
                            <div className="text-xs uppercase tracking-widest font-bold text-orange-100 flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-green-300" />
                                Government of India • Ministry of MSME
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black font-poppins tracking-tight mt-0.5">
                                Udyam Registration Certificate
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Certificate Content Body */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                    {/* Official Registration Number Badge */}
                    <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/5 to-orange-500/10 border border-orange-500/30 rounded-2xl p-5 text-center">
                        <div className="text-xs uppercase tracking-widest text-orange-400 font-semibold mb-1">
                            Udyam Registration Number
                        </div>
                        <div className="text-2xl sm:text-3xl font-mono font-black text-white tracking-wider selection:bg-orange-500">
                            UDYAM-TN-19-0011517
                        </div>
                        <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-green-500/15 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" /> 100% Active & Verified Enterprise
                        </div>
                    </div>

                    {/* Official Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-gray-800/80 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-orange-400 text-xs font-semibold uppercase mb-1">
                                <Building className="w-4 h-4" /> Name of Enterprise
                            </div>
                            <div className="text-white font-bold text-base">RAMAYAN TOURS AND TRAVELS</div>
                            <div className="text-gray-400 text-xs mt-0.5">Proprietary Firm (Micro Services)</div>
                        </div>

                        <div className="bg-gray-800/80 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-yellow-400 text-xs font-semibold uppercase mb-1">
                                <Calendar className="w-4 h-4" /> Date of Incorporation
                            </div>
                            <div className="text-white font-bold text-base">05 March 2022</div>
                            <div className="text-gray-400 text-xs mt-0.5">3+ Years of Trusted Service</div>
                        </div>

                        <div className="bg-gray-800/80 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase mb-1">
                                <Award className="w-4 h-4" /> National Industry Code (NIC)
                            </div>
                            <div className="text-white font-bold text-base">NIC 79110</div>
                            <div className="text-gray-400 text-xs mt-0.5">Travel Agency & Tour Operator Activities</div>
                        </div>

                        <div className="bg-gray-800/80 border border-white/5 rounded-xl p-4">
                            <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase mb-1">
                                <MapPin className="w-4 h-4" /> Registered Office
                            </div>
                            <div className="text-white font-bold text-sm">Rameswaram Main Bus Stand</div>
                            <div className="text-gray-400 text-xs mt-0.5">Ramanathapuram, Tamil Nadu – 623526</div>
                        </div>
                    </div>

                    {/* Verifying Authorities */}
                    <div className="bg-gray-950/60 border border-white/5 rounded-xl p-4 text-xs text-gray-400 space-y-1.5">
                        <div className="flex justify-between">
                            <span>District Industries Centre:</span>
                            <span className="text-gray-200 font-medium">Ramanathapuram (Tamil Nadu)</span>
                        </div>
                        <div className="flex justify-between">
                            <span>MSME Development & Facilitation Office:</span>
                            <span className="text-gray-200 font-medium">Chennai (Tamil Nadu)</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Official Contact:</span>
                            <span className="text-orange-400 font-medium">+91 7639 661 626</span>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 sm:p-6 bg-gray-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-gray-500 text-center sm:text-left">
                        Verified authentic government certificate issued under Notification No. S.O. 2119(E)
                    </p>
                    <div className="flex gap-2 w-full sm:w-auto">
                        <a
                            href="https://udyamregistration.gov.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0"
                        >
                            <span>Verify on MSME Portal</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl text-xs font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all shrink-0"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
