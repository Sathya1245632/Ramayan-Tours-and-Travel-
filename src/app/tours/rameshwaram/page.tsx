import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
    MapPin, 
    Calendar, 
    Car, 
    Clock, 
    ShieldCheck, 
    Star, 
    Phone, 
    CheckCircle2, 
    ArrowRight,
    Compass,
    Waves,
    Church
} from 'lucide-react';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export const metadata: Metadata = {
    title: 'Best Travels in Rameshwaram | Tour Packages & Taxi Services',
    description: 'Book the #1 tour packages in Rameshwaram. Local sightseeing, Dhanushkodi trips, and temple tours starting from ₹1,500. Professional drivers & premium cars.',
    keywords: 'best travels in rameshwaram, rameshwaram temple tour, rameshwaram taxi service, dhanushkodi tour packages, rameshwaram local sightseeing, taxi rate in rameshwaram',
};

const packages = [
    {
        id: 'local-pilgrimage',
        title: 'Local Temple Pilgrimage',
        price: '1,500',
        duration: '4-5 Hours',
        description: 'Perfect for completing your sacred rituals at the main temple and holy theerthams.',
        includes: ['Ramanathaswamy Temple', 'Agni Theertham', '22 Wells Bathing', 'Gandha Madhana Parvatham'],
        image: '/images/tours/rameshwaram/temple.png'
    },
    {
        id: 'dhanushkodi-special',
        title: 'Dhanushkodi Exploration',
        price: '2,500',
        duration: '6-8 Hours',
        description: 'An unforgettable journey to the "Ghost Town" and the tip of India where two oceans meet.',
        includes: ['Dhanushkodi Beach', 'Old Town Ruins', 'Ram Setu Point', 'Kothandaramaswamy Temple'],
        image: '/images/tours/rameshwaram/road.png',
        highlight: 'Most Popular'
    },
    {
        id: 'full-tour',
        title: 'Complete Rameshwaram',
        price: '4,500',
        duration: 'Full Day',
        description: 'The ultimate Rameshwaram experience covering every major spiritual and historical site.',
        includes: ['All Local Temples', 'Dhanushkodi', 'Pamban Bridge View', 'APJ Abdul Kalam Memorial'],
        image: '/images/tours/rameshwaram/bridge.png'
    }
];

const taxiRates = [
    { vehicle: 'Swift Dzire (Sedan)', seats: '4+1', local: '₹1,500', dhanushkodi: '₹2,500', fullDay: '₹3,500' },
    { vehicle: 'Toyota Innova (SUV)', seats: '6+1', local: '₹2,500', dhanushkodi: '₹3,500', fullDay: '₹5,000' },
    { vehicle: 'Ertiga/Marazzo', seats: '6+1', local: '₹2,000', dhanushkodi: '₹3,000', fullDay: '₹4,500' },
    { vehicle: 'Tempo Traveller', seats: '12-17', local: '₹4,500', dhanushkodi: '₹6,000', fullDay: '₹8,500' },
];

export default function RameshwaramTours() {
    return (
        <main className="min-h-screen bg-gray-950 text-white pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] md:h-[75vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:py-24">
                <Image 
                    src="/images/rameshwaram-hero.jpg"
                    alt="Rameshwaram Temple"
                    fill
                    className="object-cover opacity-50 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-gray-950/30" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-6 animate-fade-in">
                        <Star className="w-4 h-4 fill-orange-400" />
                        <span>Top Rated Travels in Rameshwaram</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-poppins mb-4 sm:mb-6 leading-tight">
                        Experience the Magic of <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Rameshwaram</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                        Authentic temple tours, Dhanushkodi explorations, and reliable taxi services by local experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-xs sm:max-w-none mx-auto">
                        <Link 
                            href="https://wa.me/916385855695?text=I'm%20interested%20in%20a%20Rameshwaram%20tour%20package"
                            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 text-sm sm:text-base"
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                            Book Your Ride
                        </Link>
                        <Link 
                            href="#packages"
                            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-sm text-sm sm:text-base"
                        >
                            View Packages
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <div className="container mx-auto px-4 mt-6 md:-mt-12 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {[
                        { icon: ShieldCheck, label: 'Safety Verified', value: '100%' },
                        { icon: Clock, label: 'Available', value: '24/7' },
                        { icon: Car, label: 'Clean Vehicles', value: '30+' },
                        { icon: MapPin, label: 'Local Guides', value: 'Expert' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-gray-900/90 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-2xl text-center shadow-lg">
                            <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto mb-2 sm:mb-3" />
                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Packages Section */}
            <section id="packages" className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Our Bestselling Packages</h2>
                    <p className="text-gray-400">Curated experiences designed to cover all sacred and scenic spots in Rameshwaram.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div key={pkg.id} className={`group bg-gray-900 rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 ${pkg.highlight ? 'border-orange-500/50 shadow-2xl shadow-orange-500/10' : 'border-white/5'}`}>
                            <div className="relative h-64">
                                <Image src={pkg.image} alt={pkg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                                {pkg.highlight && (
                                    <div className="absolute top-4 right-4 bg-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white">
                                        {pkg.highlight}
                                    </div>
                                )}
                                <div className="absolute bottom-4 left-4">
                                    <div className="text-orange-400 text-sm font-medium flex items-center gap-1 mb-1">
                                        <Clock className="w-4 h-4" /> {pkg.duration}
                                    </div>
                                    <h3 className="text-2xl font-bold">{pkg.title}</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-gray-400 mb-6 text-sm">{pkg.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.includes.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                    <div>
                                        <div className="text-xs text-gray-500">Starting from</div>
                                        <div className="text-2xl font-bold text-white">₹{pkg.price}</div>
                                    </div>
                                    <Link 
                                        href={`https://wa.me/916385855695?text=I'd%20like%20to%20book%20the%20${pkg.title}%20package`}
                                        className="bg-orange-600/10 hover:bg-orange-600 text-orange-500 hover:text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all border border-orange-500/20"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Taxi Rates Table */}
            <section className="py-20 bg-gray-900/50 border-y border-white/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 font-poppins">Transparent Taxi Rates</h2>
                            <p className="text-gray-400 italic">No hidden costs. All rates include Driver Batta & Fuel.</p>
                        </div>
                        
                        <div className="overflow-x-auto rounded-2xl border border-white/5">
                            <table className="w-full text-left bg-gray-900">
                                <thead className="bg-orange-600/10 text-orange-400">
                                    <tr>
                                        <th className="p-5 font-semibold">Vehicle Type</th>
                                        <th className="p-5 font-semibold">Local (4-5h)</th>
                                        <th className="p-5 font-semibold">Dhanushkodi</th>
                                        <th className="p-5 font-semibold">Full Day</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {taxiRates.map((rate, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="p-5 font-medium">
                                                <div className="text-white">{rate.vehicle}</div>
                                                <div className="text-xs text-gray-500 italic mt-0.5">{rate.seats} Seats</div>
                                            </td>
                                            <td className="p-5 text-gray-300">{rate.local}</td>
                                            <td className="p-5 text-gray-300">{rate.dhanushkodi}</td>
                                            <td className="p-5 text-gray-300 font-bold text-orange-400">{rate.fullDay}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focused Dhanushkodi Section */}
            <section className="py-24 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                <Image 
                                    src="/images/tours/rameshwaram/ruins.png"
                                    alt="Dhanushkodi Landscape"
                                    width={800}
                                    height={600}
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-gray-900 to-transparent">
                                    <div className="flex items-center gap-2 text-orange-400 font-bold mb-2">
                                        <Compass className="w-5 h-5" />
                                        Arichal Munai (The End of India)
                                    </div>
                                    <p className="text-gray-300 text-sm">Where the Bay of Bengal meets the Indian Ocean.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-poppins leading-tight">
                                Dhanushkodi: <br />
                                <span className="text-orange-500">The Lost Ghost Town</span>
                            </h2>
                            <div className="space-y-6 text-gray-400">
                                <p className="text-lg leading-relaxed">
                                    Frozen in time since the massive cyclone of 1964, Dhanushkodi offers a hauntingly beautiful landscape. Located just 20km from the main temple, it is the only land border between India and Sri Lanka (just 18 miles away).
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                                            <Church className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Old Ruins</h4>
                                            <p className="text-sm">See the remains of the church, railway station, and school.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                                            <Waves className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Adam's Bridge</h4>
                                            <p className="text-sm">Ancient limestone shoals connecting India to Sri Lanka.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                    <Link 
                                        href="https://wa.me/916385855695?text=I'd%20like%20to%20book%20a%20Dhanushkodi%20exclusive%20tour"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 rounded-xl font-bold text-white hover:bg-orange-500 transition-all"
                                    >
                                        Book Dhanushkodi Trip
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs italic">
                                        Note: Entry closes at 5:00 PM. Best visited before sunset.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO / FAQ Section */}
            <section className="py-24 border-t border-white/5 bg-gradient-to-b from-gray-950 via-gray-900/40 to-gray-950">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">
                            <Compass className="w-3.5 h-3.5 text-orange-400" />
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold font-poppins text-white tracking-tight mb-4">
                            Everything You Need to Know
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                            Clear answers regarding Rameshwaram tour packages, Dhanushkodi trips, outstation taxi booking, and custom family itineraries.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                num: "01",
                                q: "What are the best Rameshwaram tour packages offered by Ramayan Tours and Travels?",
                                a: "Ramayan Tours and Travels offers Rameshwaram tour packages, sightseeing packages, pilgrimage tours, family tour packages, and customized travel packages designed around your travel requirements."
                            },
                            {
                                num: "02",
                                q: "How can I book a Rameshwaram sightseeing and Dhanushkodi tour package?",
                                a: "You can contact Ramayan Tours and Travels to book a Rameshwaram sightseeing tour and Dhanushkodi tour package. The itinerary can include popular attractions such as Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi, and Agni Theertham."
                            },
                            {
                                num: "03",
                                q: "Does Ramayan Tours and Travels provide Rameshwaram taxi, cab, and car rental services?",
                                a: "Yes. We provide Rameshwaram taxi service, cab booking, car rental, local sightseeing cabs, and outstation travel services for individuals, families, and groups."
                            },
                            {
                                num: "04",
                                q: "Can I book Rameshwaram tour packages from Madurai, Coimbatore, or Chennai?",
                                a: "Yes. Travellers can enquire about Rameshwaram tour packages from Madurai, Coimbatore, and Chennai, including transportation, sightseeing, and customized travel options."
                            },
                            {
                                num: "05",
                                q: "Does Ramayan Tours and Travels offer customized family, pilgrimage, and group tour packages?",
                                a: "Yes. Ramayan Tours and Travels offers customized family tour packages, pilgrimage tour packages, group travel packages, holiday packages, and multi-day tours based on your preferred destinations, duration, and travel requirements."
                            }
                        ].map((faq, i) => (
                            <div 
                                key={i} 
                                className="group p-6 md:p-7 bg-gray-900/70 hover:bg-gray-900 rounded-2xl border border-white/10 hover:border-orange-500/40 transition-all duration-300 shadow-lg hover:shadow-orange-500/5 flex flex-col md:flex-row gap-4 md:gap-6 items-start"
                            >
                                <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 flex items-center justify-center font-bold text-sm text-orange-400 font-poppins group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    {faq.num}
                                </div>
                                <div className="space-y-2.5 flex-1">
                                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition-colors leading-snug">
                                        {faq.q}
                                    </h3>
                                    <p className="text-gray-300/90 text-sm sm:text-base leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Inquiry Bar */}
                    <div className="mt-10 p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <h4 className="font-bold text-white text-base">Have a customized itinerary or custom timing in mind?</h4>
                            <p className="text-xs sm:text-sm text-gray-400">Our local Rameshwaram travel coordinators are ready to assist you 24/7.</p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <Link 
                                href="https://wa.me/916385855695?text=Hi%20Ramayan%20Tours,%20I%20have%20a%20question%20about%20Rameshwaram%20packages" 
                                target="_blank"
                                className="px-4 py-2.5 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/30 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5"
                            >
                                Chat on WhatsApp
                            </Link>
                            <Link 
                                href="tel:+916385855695"
                                className="px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-orange-500/20 flex items-center gap-1.5"
                            >
                                <Phone className="w-3.5 h-3.5" /> Call Expert
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Structured Data for Google Search Rich Snippets */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "What are the best Rameshwaram tour packages offered by Ramayan Tours and Travels?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Ramayan Tours and Travels offers Rameshwaram tour packages, sightseeing packages, pilgrimage tours, family tour packages, and customized travel packages designed around your travel requirements."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "How can I book a Rameshwaram sightseeing and Dhanushkodi tour package?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "You can contact Ramayan Tours and Travels to book a Rameshwaram sightseeing tour and Dhanushkodi tour package. The itinerary can include popular attractions such as Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi, and Agni Theertham."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does Ramayan Tours and Travels provide Rameshwaram taxi, cab, and car rental services?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. We provide Rameshwaram taxi service, cab booking, car rental, local sightseeing cabs, and outstation travel services for individuals, families, and groups."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Can I book Rameshwaram tour packages from Madurai, Coimbatore, or Chennai?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. Travellers can enquire about Rameshwaram tour packages from Madurai, Coimbatore, and Chennai, including transportation, sightseeing, and customized travel options."
                                    }
                                },
                                {
                                    "@type": "Question",
                                    "name": "Does Ramayan Tours and Travels offer customized family, pilgrimage, and group tour packages?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Yes. Ramayan Tours and Travels offers customized family tour packages, pilgrimage tour packages, group travel packages, holiday packages, and multi-day tours based on your preferred destinations, duration, and travel requirements."
                                    }
                                }
                            ]
                        })
                    }}
                />
            </section>

            {/* Final CTA */}
            <section className="py-24 container mx-auto px-4 text-center">
                <div className="bg-gradient-to-br from-orange-600 to-yellow-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-orange-500/20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white text-pretty">Plan Your Sacred Journey Today</h2>
                    <p className="text-orange-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                        Don't settle for less. Choose the most trusted travel agency in Rameshwaram for a peaceful and organized pilgrimage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link 
                            href="tel:+916385855695"
                            className="bg-white text-orange-600 px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl shadow-white/10"
                        >
                            Call Us Now
                        </Link>
                        <Link 
                            href="https://wa.me/916385855695?text=I'm%20ready%20to%20book%20a%20tour"
                            className="bg-gray-950 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all border border-orange-400/30"
                        >
                            WhatsApp Us
                        </Link>
                    </div>
                </div>
            </section>

            <WhatsAppFAB />
        </main>
    );
}
