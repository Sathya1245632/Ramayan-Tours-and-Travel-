export interface TrailLocation {
    id: string;
    name: string;
    tamilName: string;
    category: 'Epic Trail' | 'Holy Theertham' | 'Sacred Temple' | 'Coastal Legend';
    tag: string;
    coordinates: { x: number; y: number }; // Relative coordinates on the island canvas (percentage 0-100)
    distanceFromTempleKm: number;
    approxTime: string;
    bestTimeToVisit: string;
    image: string;
    spiritualSignificance: string;
    ramayanaStory: string;
    ritualsAndTips: string[];
    darshanTimings: string;
    audioHint?: string;
    orderInStory: number;
}

export const RAMAYANA_TRAIL_LOCATIONS: TrailLocation[] = [
    {
        id: 'pamban-bridge',
        name: 'Pamban Sea Bridge & Annai Indira Gandhi Bridge',
        tamilName: 'பாம்பன் பாலம்',
        category: 'Coastal Legend',
        tag: 'Entry to Sacred Island',
        coordinates: { x: 12, y: 48 },
        distanceFromTempleKm: 12,
        approxTime: '45 mins',
        bestTimeToVisit: 'Sunrise or Sunset (5:30 AM – 7:00 AM / 5:30 PM – 6:45 PM)',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&q=80',
        spiritualSignificance: 'The gateway bridge connecting mainland India with the sacred island of Rameshwaram across the Palk Strait.',
        ramayanaStory: 'Lord Rama and his Vanara army arrived at the shores of the ocean at Pamban before formulating the divine strategy to cross over to Lanka.',
        ritualsAndTips: [
            'Witness the double-leaf bascule railway bridge opening for ships if timing coincides',
            'Spectacular ocean breeze and panoramic photography spot',
            'Best viewed in early morning golden hour'
        ],
        darshanTimings: 'Open 24/7 (Viewing from Road Bridge)',
        orderInStory: 1
    },
    {
        id: 'ramar-padam',
        name: 'Gandhamadana Parvatham (Ramar Padam)',
        tamilName: 'ராமர் பாதம்',
        category: 'Epic Trail',
        tag: 'Highest Point of Rameshwaram',
        coordinates: { x: 42, y: 32 },
        distanceFromTempleKm: 2.5,
        approxTime: '1 Hour',
        bestTimeToVisit: 'Early Morning (6:00 AM – 9:00 AM) for panoramic island view',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
        spiritualSignificance: 'Houses the sacred imprint of Lord Rama’s lotus feet on a chakra stone at the peak of the hillock.',
        ramayanaStory: 'Lord Rama stood on this highest sand hillock to survey the ocean and plan the military march of the Vanara army towards Lanka.',
        ritualsAndTips: [
            'Climb to the rooftop for a 360-degree panoramic view of the entire island and ocean',
            'Offer prayers to the sacred footprints of Lord Rama',
            'Very peaceful atmosphere with gentle sea breezes'
        ],
        darshanTimings: '6:00 AM – 1:00 PM & 3:30 PM – 7:00 PM',
        orderInStory: 2
    },
    {
        id: 'panchamukhi-hanuman',
        name: 'Panchamukhi Hanuman & Floating Stones',
        tamilName: 'பஞ்சமுக ஆஞ்சநேயர் & மிதக்கும் கல்',
        category: 'Epic Trail',
        tag: 'Miracle of Ram Setu',
        coordinates: { x: 48, y: 38 },
        distanceFromTempleKm: 2,
        approxTime: '45 mins',
        bestTimeToVisit: 'Morning (7:00 AM – 11:30 AM)',
        image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
        spiritualSignificance: 'Home to the five-faced Lord Hanuman idol smeared with sacred Sindoor and the actual buoyant stones used for Ram Setu.',
        ramayanaStory: 'Hanuman revealed his majestic Panchamukhi form (Hanuman, Narasimha, Garuda, Varaha, Hayagriva) to extinguish the 5 lamps of Mahiravana simultaneously. The floating stones blessed by Nal and Neel were placed here.',
        ritualsAndTips: [
            'Touch and see the authentic porous limestone that floats naturally on water',
            'Receive Hanuman Sindoor blessings for courage and protection',
            'Proximity to Lakshmana Theertham'
        ],
        darshanTimings: '6:30 AM – 1:00 PM & 3:30 PM – 8:00 PM',
        orderInStory: 3
    },
    {
        id: 'vibhishan-temple',
        name: 'Vibhishana Temple (Kothandaramaswamy)',
        tamilName: 'விபீஷணர் பட்டாபிஷேக கோவில்',
        category: 'Epic Trail',
        tag: 'Coronation of King Vibhishana',
        coordinates: { x: 68, y: 62 },
        distanceFromTempleKm: 12,
        approxTime: '1.5 Hours',
        bestTimeToVisit: 'Afternoon (3:00 PM – 5:30 PM) on the way to Dhanushkodi',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80',
        spiritualSignificance: 'The only historic monument that miraculously survived the catastrophic 1964 Dhanushkodi cyclone intact.',
        ramayanaStory: 'Ravana’s righteous brother Vibhishana sought refuge at Lord Rama’s feet (Saranagati). Lord Rama crowned Vibhishana as the rightful King of Lanka at this very spot before the battle commenced.',
        ritualsAndTips: [
            'Admire the idols of Rama, Sita, Lakshmana, Hanuman, and Vibhishana together in one sanctum',
            'Surrounded entirely by shallow ocean waters on both sides along the road',
            'Ideal to combine with the Dhanushkodi evening tour'
        ],
        darshanTimings: '6:30 AM – 6:30 PM',
        orderInStory: 4
    },
    {
        id: 'ram-setu-point',
        name: 'Ram Setu (Adam’s Bridge) & Floating Stone Trail',
        tamilName: 'ராமர் சேது & மிதக்கும் பாலம்',
        category: 'Coastal Legend',
        tag: 'Ancient Submerged Causeway',
        coordinates: { x: 88, y: 74 },
        distanceFromTempleKm: 20,
        approxTime: '1 Hour',
        bestTimeToVisit: 'Low Tide Hours (Morning 8:00 AM – 11:00 AM)',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        spiritualSignificance: 'The legendary chain of limestone shoals connecting Dhanushkodi (India) to Mannar Island (Sri Lanka) across 48 km.',
        ramayanaStory: 'Engineered by the Vanara architects Nala and Neela with millions of floating stones inscribed with Rama’s holy name, allowing the entire army to cross to Lanka in just 5 days.',
        ritualsAndTips: [
            'Look out over the turquoise waters where the underwater shoals and reef patterns are visible',
            'Feel the historic presence of one of world history’s most revered epic landmarks',
            'Carry a sun hat and drink plenty of water'
        ],
        darshanTimings: 'Daylight hours until 5:30 PM (restricted entry after sunset by Coast Guard)',
        orderInStory: 5
    },
    {
        id: 'arichal-munai',
        name: 'Arichal Munai (Land’s End Point)',
        tamilName: 'அரிச்சல் முனை',
        category: 'Coastal Legend',
        tag: 'Confluence of Two Oceans',
        coordinates: { x: 96, y: 82 },
        distanceFromTempleKm: 24,
        approxTime: '1.5 Hours',
        bestTimeToVisit: 'Early Morning or Late Afternoon (4:00 PM – 5:30 PM)',
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
        spiritualSignificance: 'The extreme southernmost tip of the Indian peninsula where the calm Bay of Bengal (Mahodadhi) merges with the roaring Indian Ocean (Ratnakara).',
        ramayanaStory: 'After defeating Ravana and rescuing Sita Devi, Lord Rama broke the bridge with the end of his divine bow (Dhanush) upon King Vibhishana’s request, hence named Dhanush-kodi.',
        ritualsAndTips: [
            'Visit the national emblem pillar erected at the edge of the cape',
            'Notice the remarkable difference in waves: one ocean is calm while the other is roaring',
            'Sri Lanka maritime boundary is merely 18 miles away from here'
        ],
        darshanTimings: '6:00 AM – 5:30 PM (Naval & Police checkpoint guidelines apply)',
        orderInStory: 6
    },
    {
        id: 'dhanushkodi-ghost-town',
        name: 'Dhanushkodi Ghost City & Church Ruins',
        tamilName: 'தனுஷ்கோடி வரலாற்று நகரம்',
        category: 'Coastal Legend',
        tag: 'Submerged Heritage City',
        coordinates: { x: 80, y: 70 },
        distanceFromTempleKm: 18,
        approxTime: '2 Hours',
        bestTimeToVisit: 'Morning 7:00 AM – 10:30 AM or Afternoon 3:30 PM – 5:30 PM',
        image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80',
        spiritualSignificance: 'A once thriving port city declared a ghost town following the 1964 cyclone, preserving mystical energy and sea heritage.',
        ramayanaStory: 'The sands of Dhanushkodi are sacred as the assembly ground where Rama, Lakshmana, Sugriva, and the Vanara commanders camped.',
        ritualsAndTips: [
            'Explore the stone arches of the Portuguese Church and railway station ruins',
            'Buy handmade seashell crafts from local fishermen families',
            'Clean white sand beaches with scenic turquoise water'
        ],
        darshanTimings: '6:00 AM – 5:30 PM',
        orderInStory: 7
    },
    {
        id: 'ramanathaswamy-temple',
        name: 'Ramanathaswamy Jyotirlinga & 22 Theerthams',
        tamilName: 'ஸ்ரீ ராமநாதசுவாமி திருக்கோவில்',
        category: 'Sacred Temple',
        tag: 'One of the 12 Jyotirlingas & Char Dham',
        coordinates: { x: 50, y: 44 },
        distanceFromTempleKm: 0,
        approxTime: '3–4 Hours',
        bestTimeToVisit: 'Spadika Linga Puja (5:00 AM – 6:00 AM) or Evening Aarti (6:00 PM – 8:30 PM)',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
        spiritualSignificance: 'One of the holiest shrines in Hinduism where Lord Shiva is worshipped as a Linga consecrated by Lord Rama and Sita Devi.',
        ramayanaStory: 'To absolve the sin of Brahmahatya Dosha after slaying Ravana (a learned Brahmin devotee of Shiva), Lord Rama desired to worship Lord Shiva. Sita Devi molded a divine Shiva Lingam out of sand (Ramalingam) when Hanuman was delayed bringing a lingam from Mount Kailash.',
        ritualsAndTips: [
            'First take a holy sea bath at Agni Theertham, then bathe in all 22 sacred temple wells inside the temple complex',
            'Marvel at the world’s longest pillared temple corridor with 1,212 intricately carved stone pillars',
            'Strict traditional dress code: Dhoti/Kurta for men, Saree/Chudidar for women'
        ],
        darshanTimings: '5:00 AM – 1:00 PM & 3:00 PM – 9:00 PM',
        orderInStory: 8
    },
    {
        id: 'agni-theertham',
        name: 'Agni Theertham (Sacred Ocean Shore)',
        tamilName: 'அக்னி தீர்த்தம்',
        category: 'Holy Theertham',
        tag: 'Primary Sea Bathing Ghat',
        coordinates: { x: 54, y: 46 },
        distanceFromTempleKm: 0.3,
        approxTime: '45 mins',
        bestTimeToVisit: 'Dawn (5:00 AM – 7:00 AM) during sunrise',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
        spiritualSignificance: 'The calm eastern beach directly facing the East Gate of Ramanathaswamy Temple where pilgrims take their first purification bath.',
        ramayanaStory: 'Agni Bhagavan (the Fire God) washed away his sin of testing the purity of Sita Devi in the sacred waters of this ocean bay.',
        ritualsAndTips: [
            'Begin your pilgrimage rituals here before entering the 22 wells and main sanctum',
            'Auspicious for performing Tarpanam and ancestral offerings (Pithru Pooja)',
            'The sea here is remarkably calm and waveless, resembling a vast sacred pool'
        ],
        darshanTimings: 'Open 24/7 (Rituals best conducted sunrise to noon)',
        orderInStory: 9
    },
    {
        id: 'jada-theertham',
        name: 'Jada Theertham & Kaveri Theertham',
        tamilName: 'ஜடா தீர்த்தம்',
        category: 'Holy Theertham',
        tag: 'Purification of Sacred Matted Hair',
        coordinates: { x: 62, y: 52 },
        distanceFromTempleKm: 3.5,
        approxTime: '30 mins',
        bestTimeToVisit: 'Morning 7:00 AM – 11:00 AM',
        image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
        spiritualSignificance: 'A tranquil lotus-filled temple tank nestled within dense date palm and coconut groves.',
        ramayanaStory: 'Lord Rama washed his sacred matted hair (Jada) here to cleanse all remnants of battle before worshipping Lord Shiva at Rameshwaram.',
        ritualsAndTips: [
            'Admire the serene stepwell architecture',
            'Only temple in India where Lord Kapardiswara (Lord of Matted Hair) is enshrined',
            'Great spiritual tranquility away from town bustle'
        ],
        darshanTimings: '6:00 AM – 12:00 PM & 4:00 PM – 7:30 PM',
        orderInStory: 10
    }
];

export const RAMAYANA_STORY_PHASES = [
    {
        step: 1,
        title: 'Arrival & Ocean Survey',
        desc: 'Rama, Lakshmana, and the Vanara army reach Pamban and climb Ramar Padam to strategize crossing the vast sea.',
        locationIds: ['pamban-bridge', 'ramar-padam']
    },
    {
        step: 2,
        title: 'Refuge of Vibhishana & Divine Pledge',
        desc: 'Vibhishana surrenders at Kothandaramaswamy Temple and is crowned rightful King of Lanka by Lord Rama.',
        locationIds: ['vibhishan-temple']
    },
    {
        step: 3,
        title: 'Construction of Ram Setu Bridge',
        desc: 'Vanaras Nal and Neel build the miraculous floating stone bridge across 48 km of deep ocean from Dhanushkodi.',
        locationIds: ['panchamukhi-hanuman', 'ram-setu-point', 'dhanushkodi-ghost-town']
    },
    {
        step: 4,
        title: 'Victory, Bow Breaking & Shiva Consecration',
        desc: 'Lord Rama breaks the bridge at Arichal Munai, washes in Jada & Agni Theertham, and consecrates the Jyotirlinga.',
        locationIds: ['arichal-munai', 'jada-theertham', 'agni-theertham', 'ramanathaswamy-temple']
    }
];
