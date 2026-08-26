'use client';

import { useState, useEffect, useRef } from 'react';
import { Sparkles, MapPin, Clock, DollarSign, Users, Loader2, CheckCircle, Hotel, Bus, Star, ArrowRight, Search, ChevronDown, Check, X } from 'lucide-react';
import Link from 'next/link';
import { generateAIItinerary } from '@/app/actions/chat';

interface ItineraryDay {
    day: number;
    title: string;
    activities: string[];
    temple: string;
    hotel: string;
    tip: string;
}

interface GeneratedItinerary {
    destination: string;
    days: number;
    budget: string;
    totalCost: number;
    itinerary: ItineraryDay[];
    hotels: string[];
    transport: string;
    highlights: string[];
}

const DESTINATION_GROUPS = [
    {
        category: 'Sacred Temples & Pilgrimages',
        icon: '🛕',
        items: [
            'Rameshwaram (Tamil Nadu)',
            'Madurai Meenakshi Temple (Tamil Nadu)',
            'Varanasi / Kashi Vishwanath (Uttar Pradesh)',
            'Ayodhya Ram Janmabhoomi (Uttar Pradesh)',
            'Tirupati Balaji Temple (Andhra Pradesh)',
            'Puri Jagannath Temple (Odisha)',
            'Kedarnath & Badrinath (Uttarakhand)',
            'Dwarka & Nageshwar (Gujarat)',
            'Somnath Jyotirlinga (Gujarat)',
            'Haridwar & Rishikesh (Uttarakhand)',
            'Shirdi Sai Baba Temple (Maharashtra)',
            'Ujjain Mahakaleshwar (Madhya Pradesh)',
            'Amritsar Golden Temple (Punjab)',
            'Vaishno Devi (Jammu & Kashmir)',
            'Thanjavur Brihadeeswarar Temple (Tamil Nadu)',
            'Kumbakonam Navagraha Circuit (Tamil Nadu)',
            'Chidambaram Nataraja Temple (Tamil Nadu)',
            'Palani Murugan Temple (Tamil Nadu)',
            'Tiruchendur Sea Temple (Tamil Nadu)',
            'Tiruvannamalai Arunachaleswarar (Tamil Nadu)',
            'Srirangam Ranganathaswamy (Tamil Nadu)',
            'Kanchipuram Temples (Tamil Nadu)',
            'Guruvayur Temple (Kerala)',
            'Kollur Mookambika & Udupi (Karnataka)',
            'Murudeshwar Shiva Temple (Karnataka)',
            'Gokarna Mahabaleshwar (Karnataka)',
            'Kamakhya Temple (Guwahati, Assam)',
            'Trimbakeshwar & Shirdi (Maharashtra)',
        ]
    },
    {
        category: 'Scenic Hill Stations & Mountains',
        icon: '⛰️',
        items: [
            'Manali & Solang Valley (Himachal Pradesh)',
            'Shimla & Kufri (Himachal Pradesh)',
            'Leh Ladakh & Pangong Lake (Ladakh)',
            'Kashmir, Srinagar & Gulmarg (J&K)',
            'Ooty & Nilgiris (Tamil Nadu)',
            'Kodaikanal (Tamil Nadu)',
            'Munnar & Tea Valleys (Kerala)',
            'Darjeeling (West Bengal)',
            'Gangtok & North Sikkim (Sikkim)',
            'Nainital & Lake District (Uttarakhand)',
            'Mussoorie Queen of Hills (Uttarakhand)',
            'Coorg / Kodagu (Karnataka)',
            'Wayanad (Kerala)',
            'Shillong & Meghalaya (Meghalaya)',
            'Cherrapunji Living Root Bridges (Meghalaya)',
            'Dharamshala & McLeodganj (Himachal Pradesh)',
            'Spiti Valley (Himachal Pradesh)',
            'Yercaud Shevaroys (Tamil Nadu)',
            'Valparai (Tamil Nadu)',
            'Mount Abu (Rajasthan)',
            'Mahabaleshwar (Maharashtra)',
        ]
    },
    {
        category: 'Royal Heritage & Palaces',
        icon: '🏰',
        items: [
            'Jaipur Pink City & Amber Fort (Rajasthan)',
            'Udaipur City of Lakes (Rajasthan)',
            'Jodhpur Blue City & Mehrangarh (Rajasthan)',
            'Jaisalmer Golden Fort & Thar Desert (Rajasthan)',
            'Agra Taj Mahal & Fort (Uttar Pradesh)',
            'Hampi UNESCO Heritage Ruins (Karnataka)',
            'Mysore Palace & Chamundi (Karnataka)',
            'Khajuraho Temples (Madhya Pradesh)',
            'Gwalior Fort & Palaces (Madhya Pradesh)',
            'Delhi Red Fort & Qutub Minar (Delhi)',
            'Fatehpur Sikri (Uttar Pradesh)',
            'Bhubaneswar & Konark Sun Temple (Odisha)',
            'Chettinad Mansions (Karaikudi, Tamil Nadu)',
            'Mahabalipuram Shore Temples (Tamil Nadu)',
        ]
    },
    {
        category: 'Beaches & Coastal Havens',
        icon: '🏖️',
        items: [
            'Goa (North & South Beaches)',
            'Andaman & Nicobar (Havelock / Radhanagar)',
            'Kanyakumari Land’s End & Triveni Sangam',
            'Alleppey Houseboat Backwaters (Kerala)',
            'Pondicherry French Quarter & Auroville',
            'Gokarna Om Beach (Karnataka)',
            'Kovalam Beach (Kerala)',
            'Varkala Cliff Beach (Kerala)',
            'Dhanushkodi & Ram Setu (Tamil Nadu)',
            'Lakshadweep Islands',
            'Diu Island (Gujarat)',
            'Puri Golden Beach (Odisha)',
            'Velankanni Coastal Basilica (Tamil Nadu)',
        ]
    },
    {
        category: 'Wildlife, Nature & Adventure',
        icon: '🌿',
        items: [
            'Jim Corbett National Park (Uttarakhand)',
            'Ranthambore Tiger Reserve (Rajasthan)',
            'Kaziranga National Park (Assam)',
            'Sundarbans Mangrove Forest (West Bengal)',
            'Periyar Wildlife Sanctuary (Thekkady, Kerala)',
            'Gir National Park Asiatic Lions (Gujarat)',
            'Mudumalai Tiger Reserve (Tamil Nadu)',
            'Bandhavgarh & Kanha (Madhya Pradesh)',
            'Kabini & Nagarhole (Karnataka)',
            'Rishikesh River Rafting (Uttarakhand)',
            'Courtallam Waterfalls (Tamil Nadu)',
            'Hogenakkal Waterfalls (Tamil Nadu)',
            'Sathuragiri Holy Hills (Tamil Nadu)',
        ]
    },
    {
        category: 'Major Cities & Gateways',
        icon: '🏙️',
        items: [
            'Chennai (Tamil Nadu)',
            'Bengaluru (Karnataka)',
            'Mumbai (Maharashtra)',
            'Delhi NCR (Capital)',
            'Hyderabad (Telangana)',
            'Kolkata (West Bengal)',
            'Coimbatore (Tamil Nadu)',
            'Madurai (Tamil Nadu)',
            'Tiruchirappalli (Trichy, Tamil Nadu)',
            'Kochi / Cochin (Kerala)',
            'Ahmedabad (Gujarat)',
            'Pune (Maharashtra)',
            'Chandigarh (Punjab & Haryana)',
            'Salem (Tamil Nadu)',
            'Tirunelveli (Tamil Nadu)',
        ]
    }
];

export default function AIPlannerPage() {
    const [formData, setFormData] = useState({
        destination: 'Rameshwaram (Tamil Nadu)',
        days: 3,
        budget: 'premium',
        style: 'Premium',
    });
    const [loading, setLoading] = useState(false);
    const [itinerary, setItinerary] = useState<GeneratedItinerary | null>(null);
    const [step, setStep] = useState(0);

    // Custom Combobox State
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredGroups = DESTINATION_GROUPS.map((group) => {
        if (selectedCategory !== 'All' && group.category !== selectedCategory) {
            return { ...group, items: [] };
        }
        const filteredItems = group.items.filter((item) =>
            item.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...group, items: filteredItems };
    }).filter((g) => g.items.length > 0);

    const loadingSteps = [
        'Analyzing temple schedules...',
        'Finding optimal routes...',
        'Selecting best hotels...',
        'Calculating budget breakdown...',
        'Generating your itinerary...',
    ];

    const handleGenerate = async () => {
        if (!formData.destination) return;
        setLoading(true);
        setStep(0);

        const totalSteps = loadingSteps.length;
        const stepInterval = 1000;

        const progressInterval = setInterval(() => {
            setStep((s) => (s < totalSteps ? s + 1 : s));
        }, stepInterval);

        try {
            const result = await generateAIItinerary(
                formData.destination,
                formData.days,
                formData.budget,
                formData.style
            );

            if (result && Array.isArray(result.itinerary)) {
                setItinerary(result);
            } else if (result && !result.error) {
                setItinerary(result);
            } else {
                const errorMsg = result?.message || 'Please try again in a few moments.';
                alert(`Notice: ${errorMsg} 🙏`);
            }
        } catch (error: any) {
            console.error(error);
        } finally {
            clearInterval(progressInterval);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-950 pt-24 pb-20">
            {/* Header */}
            <div className="relative py-16 px-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-500/5" />
                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="badge-saffron inline-block mb-4">🤖 AI-Powered</div>
                    <h1 className="section-title gradient-text mb-4">AI Trip Planner</h1>
                    <p className="text-gray-400 text-lg">
                        Tell us where you want to go and our AI will create a personalized day-by-day pilgrimage itinerary in seconds.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4">
                {/* Input Form */}
                <div className="bg-gray-900 rounded-3xl border border-white/10 p-6 sm:p-10 mb-8 shadow-2xl relative">
                    <h2 className="text-white font-bold text-2xl mb-8 flex items-center gap-3 font-poppins">
                        <span className="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-sm">✨</span>
                        Customize Your Pilgrimage & Tour
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Custom Modern Searchable Destination Combobox */}
                        <div className="relative" ref={dropdownRef}>
                            <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-2">
                                <MapPin className="w-4 h-4 inline mr-1 text-orange-400" />
                                Target Destination / Pilgrimage Shrine
                            </label>

                            {/* Trigger Button */}
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full text-left px-5 py-4 rounded-2xl bg-gray-950/80 border transition-all flex items-center justify-between ${
                                    isDropdownOpen
                                        ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-lg shadow-orange-500/10'
                                        : 'border-white/10 hover:border-orange-500/40'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 text-lg font-bold">
                                        📍
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-base">
                                            {formData.destination || 'Choose a destination...'}
                                        </div>
                                        <div className="text-gray-500 text-xs">
                                            Search 100+ tourist & sacred places across India
                                        </div>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                                        isDropdownOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* Floating Custom Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-gray-900/98 backdrop-blur-2xl border border-orange-500/30 rounded-2xl shadow-2xl p-4 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                    {/* Search Input */}
                                    <div className="relative mb-3">
                                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search destination, temple, hill station, beach..."
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-950 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
                                            autoFocus
                                        />
                                        {searchQuery && (
                                            <button
                                                onClick={() => setSearchQuery('')}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Category Filter Chips */}
                                    <div className="flex gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none text-xs">
                                        {[
                                            { id: 'All', label: '✨ All Places' },
                                            { id: 'Sacred Temples & Pilgrimages', label: '🛕 Temples' },
                                            { id: 'Scenic Hill Stations & Mountains', label: '⛰️ Hill Stations' },
                                            { id: 'Royal Heritage & Palaces', label: '🏰 Heritage' },
                                            { id: 'Beaches & Coastal Havens', label: '🏖️ Beaches' },
                                            { id: 'Wildlife, Nature & Adventure', label: '🌿 Wildlife' },
                                            { id: 'Major Cities & Gateways', label: '🏙️ Cities' },
                                        ].map((cat) => (
                                            <button
                                                key={cat.id}
                                                type="button"
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                                                    selectedCategory === cat.id
                                                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold shadow-md'
                                                        : 'bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-800'
                                                }`}
                                            >
                                                {cat.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Scrollable Destination List */}
                                    <div className="max-h-72 overflow-y-auto space-y-4 pr-1">
                                        {filteredGroups.length === 0 ? (
                                            <div className="py-8 text-center text-gray-400 text-sm">
                                                No destinations found matching &quot;{searchQuery}&quot;
                                            </div>
                                        ) : (
                                            filteredGroups.map((group) => (
                                                <div key={group.category}>
                                                    <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-2 flex items-center gap-1.5 px-2">
                                                        <span>{group.icon}</span>
                                                        <span>{group.category}</span>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                                        {group.items.map((item) => {
                                                            const isSelected = formData.destination === item;
                                                            return (
                                                                <button
                                                                    key={item}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setFormData((p) => ({ ...p, destination: item }));
                                                                        setIsDropdownOpen(false);
                                                                        setSearchQuery('');
                                                                    }}
                                                                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs md:text-sm transition-all flex items-center justify-between ${
                                                                        isSelected
                                                                            ? 'bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 text-orange-300 font-semibold shadow-sm'
                                                                            : 'text-gray-300 hover:bg-white/5 hover:text-white'
                                                                    }`}
                                                                >
                                                                    <span className="leading-snug">{item}</span>
                                                                    {isSelected && <Check className="w-4 h-4 text-orange-400 shrink-0 ml-1.5" />}
                                                                </button>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Number of Days Slider */}
                        <div className="bg-gray-950/60 border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-orange-400" />
                                    Trip Duration
                                </label>
                                <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/40 text-orange-400 font-black rounded-lg text-sm">
                                    {formData.days} {formData.days === 1 ? 'Day' : 'Days'}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={1}
                                max={14}
                                value={formData.days}
                                onChange={(e) => setFormData((p) => ({ ...p, days: parseInt(e.target.value) }))}
                                className="w-full accent-orange-500 my-3 cursor-pointer"
                            />
                            <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                                <span>1 Day Quick Darshan</span>
                                <span>7 Days Grand Tour</span>
                                <span>14 Days Complete Yatra</span>
                            </div>
                        </div>

                        {/* Budget Preference Cards */}
                        <div className="md:col-span-2">
                            <label className="block text-gray-300 text-xs font-semibold uppercase tracking-wider mb-3">
                                <DollarSign className="w-4 h-4 inline mr-1 text-orange-400" />
                                Budget & Travel Style
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { id: 'budget', label: 'Budget Yatra', price: '₹5,000–₹10,000', desc: 'Clean AC Cabs, verified standard rooms & darshan assistance', icon: '💰' },
                                    { id: 'premium', label: 'Premium Comfort', price: '₹10,000–₹25,000', desc: 'AC Sedans/SUV, 3-Star hotels & specialized temple guide', icon: '✨' },
                                    { id: 'luxury', label: 'VIP Luxury', price: '₹25,000+', desc: 'Innova Crysta, 4/5-Star luxury stays & priority arrangements', icon: '👑' },
                                ].map((tier) => (
                                    <button
                                        key={tier.id}
                                        type="button"
                                        onClick={() => setFormData((p) => ({ ...p, budget: tier.id, style: tier.id === 'budget' ? 'Budget' : tier.id === 'premium' ? 'Premium' : 'Luxury' }))}
                                        className={`p-5 rounded-2xl border text-left transition-all relative ${
                                            formData.budget === tier.id
                                                ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border-orange-500 ring-2 ring-orange-500/30 shadow-lg shadow-orange-500/10'
                                                : 'bg-gray-950/60 border-white/10 hover:border-orange-500/30'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-2xl">{tier.icon}</span>
                                            {formData.budget === tier.id && (
                                                <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs">
                                                    ✓
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-white font-bold text-base mb-1 font-poppins">{tier.label}</div>
                                        <div className="text-orange-400 font-bold text-xs mb-2">{tier.price}</div>
                                        <div className="text-gray-400 text-xs leading-relaxed">{tier.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={!formData.destination || loading}
                        className="w-full py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold text-lg rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                    >
                        {loading && <Loader2 className="w-5 h-5 animate-spin" />}
                        {loading ? loadingSteps[step - 1] || 'Generating...' : '✨ Generate My Sacred Itinerary'}
                    </button>

                    {loading && (
                        <div className="mt-4">
                            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transition-all duration-500"
                                    style={{ width: `${(step / loadingSteps.length) * 100}%` }}
                                />
                            </div>
                            <div className="text-center text-gray-400 text-sm mt-2">{loadingSteps[step - 1] || 'Initializing...'}</div>
                        </div>
                    )}
                </div>

                {/* Generated Itinerary */}
                {itinerary && !loading && (
                    <div className="space-y-6 animate-fade-in-up">
                        {/* Summary Card */}
                        <div className="bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/5 border border-orange-500/30 rounded-2xl p-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div>
                                    <div className="badge-saffron inline-block mb-2">✨ AI Generated</div>
                                    <h2 className="text-2xl font-bold text-white font-poppins">
                                        {itinerary.days}-Day {itinerary.destination} Pilgrimage
                                    </h2>
                                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-300">
                                        <span>🏨 {itinerary.budget} Stay</span>
                                        <span>🚌 {itinerary.transport}</span>
                                        <span>📅 {itinerary.days} days</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-400 text-sm">Estimated Total</div>
                                    <div className="text-3xl font-black gradient-text">₹{itinerary.totalCost.toLocaleString()}</div>
                                    <div className="text-gray-500 text-xs">Per person, all inclusive</div>
                                </div>
                            </div>
                        </div>

                        {/* Day-by-Day Itinerary */}
                        <div className="space-y-4">
                            {itinerary.itinerary.map((day, i) => (
                                <div key={day.day} className="bg-gray-900 rounded-2xl border border-white/5 overflow-hidden">
                                    <div className="flex items-center gap-4 p-6 border-b border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white font-black text-lg shrink-0">
                                            {day.day}
                                        </div>
                                        <div>
                                            <div className="text-orange-400 text-xs font-semibold uppercase tracking-wider">Day {day.day}</div>
                                            <div className="text-white font-bold text-lg">{day.title}</div>
                                        </div>
                                    </div>

                                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Activities</div>
                                            <div className="space-y-2">
                                                {day.activities.map((act, j) => (
                                                    <div key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                                                        <span>{act}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                                                <div className="text-xs text-orange-300 font-semibold mb-1">🛕 Temple Visit</div>
                                                <div className="text-gray-200 text-sm">{day.temple}</div>
                                            </div>
                                            <div className="bg-gray-800 rounded-xl p-4">
                                                <div className="text-xs text-gray-400 font-semibold mb-1 flex items-center gap-1">
                                                    <Hotel className="w-3.5 h-3.5" /> Hotel
                                                </div>
                                                <div className="text-gray-200 text-sm">{day.hotel}</div>
                                            </div>
                                            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
                                                <div className="text-xs text-blue-300 font-semibold mb-1">💡 Tip</div>
                                                <div className="text-gray-300 text-sm">{day.tip}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hotels & Transport */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-900 rounded-2xl border border-white/5 p-6">
                                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                    <Hotel className="w-5 h-5 text-orange-400" /> Recommended Hotels
                                </h3>
                                <div className="space-y-2">
                                    {itinerary.hotels.map((h) => (
                                        <div key={h} className="flex items-center gap-2 text-gray-300 text-sm">
                                            <Star className="w-3.5 h-3.5 text-yellow-400" />
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-900 rounded-2xl border border-white/5 p-6">
                                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                    <Bus className="w-5 h-5 text-orange-400" /> Transport & Highlights
                                </h3>
                                <div className="text-gray-300 text-sm mb-4">🚌 {itinerary.transport}</div>
                                <div className="flex flex-wrap gap-2">
                                    {itinerary.highlights.map((h) => (
                                        <span key={h} className="text-xs px-3 py-1 bg-orange-500/10 text-orange-300 border border-orange-500/20 rounded-full">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Book CTA */}
                        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/10 border border-orange-500/30 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Love this itinerary?</h3>
                            <p className="text-gray-400 mb-6">Book it now and our team will personalize every detail for you!</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all"
                                >
                                    Book This Trip <ArrowRight className="w-5 h-5" />
                                </Link>
                                <button
                                    onClick={() => setItinerary(null)}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-orange-500/50 hover:bg-orange-500/10 transition-all"
                                >
                                    Regenerate Plan
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
