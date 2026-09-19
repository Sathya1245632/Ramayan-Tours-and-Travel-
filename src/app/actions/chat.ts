'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

// Google AI initialization will happen inside the functions to ensure fresh ENV variables 

const SYSTEM_PROMPT = `
You are the "Yatra AI Assistant" for Ramayan Tours and Travels, based in Rameshwaram. 
Your goal is to provide helpful, spiritual, and professional travel advice.

Key Business Information:
- Agency Name: Ramayan Tours and Travels
- Location: Rameshwaram, Tamil Nadu (Head Office near Agni Theertham Road)
- Phone/WhatsApp: +91 63858 55695
- Specialization: Pilgrimage tours (Rameshwaram, Tirupati, Madurai, Kanyakumari), AI-powered trip planning, taxi services.

Tour Packages:
1. Rameshwaram Local Pilgrimage: ₹1,500 (4-5 hours)
2. Dhanushkodi Special: ₹2,500 (6-8 hours)
3. Complete Rameshwaram: ₹4,500 (Full Day)
4. South India Circuit: ₹32,999 (7 Days)

Taxi Rates (include Driver Batta & Fuel):
- Sedan (Dzire): ₹1,500 (Local), ₹2,500 (Dhanushkodi)
- SUV (Innova): ₹2,500 (Local), ₹3,500 (Dhanushkodi)

Guidelines:
- Always be respectful and use words like "Namaste" and "Blessings".
- If someone asks for "admin number" or "contact", give them: +91 63858 55695.
- Encourage users to book via WhatsApp or the website's booking page.
- Keep responses concise but helpful.
- If the user is confused, offer to generate a custom itinerary using the "AI Planner" on the website.
`;

export async function chat(message: string, history: { role: 'user' | 'model'; parts: string }[]) {
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.7-flash', 'gemini-flash-latest'];
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return { 
            success: true, 
            text: "Namaste! 🙏 Welcome to Ramayan Tours & Travels. How may I assist you with your pilgrimage or taxi tour bookings today? You can also reach our 24/7 helpline at +91 63858 55695." 
        };
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    for (const modelName of modelsToTry) {
        try {
            const model = genAI.getGenerativeModel({ model: modelName });
            const chatSession = model.startChat({
                history: [
                    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
                    { role: 'model', parts: [{ text: "Understood. I am the Yatra AI Assistant, ready to help pilgrims plan their sacred journey with Ramayan Tours." }] },
                    ...history.map(h => ({ role: h.role, parts: [{ text: h.parts }] }))
                ],
                generationConfig: {
                    maxOutputTokens: 1200,
                    temperature: 0.7,
                },
            });

            const result = await chatSession.sendMessage(message);
            const response = await result.response;
            return { success: true, text: response.text() };
        } catch (err: any) {
            console.warn(`Model ${modelName} failed, attempting next if available:`, err.message);
        }
    }

    return { 
        success: true, 
        text: "Namaste! 🙏 Welcome to Ramayan Tours & Travels. For customized pilgrimage packages, taxi fares, and instant hotel bookings, please connect directly with our travel desk on WhatsApp or call +91 63858 55695." 
    };
}

function buildSmartFallbackItinerary(destination: string, days: number, budget: string, style: string) {
    const cleanDest = destination.split('(')[0].trim();
    const isBudget = budget === 'budget';
    const isLuxury = budget === 'luxury';

    const costPerDay = isBudget ? 3200 : isLuxury ? 9500 : 5500;
    const totalCost = Math.round(costPerDay * days);

    const itineraryDays = [];
    for (let d = 1; d <= days; d++) {
        if (d === 1) {
            itineraryDays.push({
                day: 1,
                title: `Arrival & Sacred Welcome in ${cleanDest}`,
                activities: [
                    `Pickup from airport/railway station by dedicated chauffeur`,
                    `Check-in and refresh at selected ${style} accommodation`,
                    `Evening traditional darshan & sacred aarti at prime temple/landmark`,
                    `Local cultural exploration and traditional sattvic dinner`
                ],
                temple: `${cleanDest} Main Shrine & Sacred Sanctum`,
                hotel: isLuxury ? `Luxury Heritage Palace / 5-Star Resort, ${cleanDest}` : isBudget ? `Verified Deluxe Yatri Nivas, ${cleanDest}` : `Premium 3-Star Comfort Hotel, ${cleanDest}`,
                tip: `Carry modest traditional attire for temple sanctum entry.`
            });
        } else if (d === days) {
            itineraryDays.push({
                day: d,
                title: `Sunrise Rituals, Souvenirs & Farewell`,
                activities: [
                    `Early morning peaceful meditation / theertham rituals at sunrise`,
                    `Visit local artisan markets for sacred prasad, silks & spices`,
                    `Check-out and comfortable transfer to station/airport`,
                    `Departure with sacred memories and blessings`
                ],
                temple: `${cleanDest} Ancient Theertham & Origin Shrine`,
                hotel: `Departure Check-out`,
                tip: `Keep temple prasadam securely packed for flight or train journey.`
            });
        } else {
            itineraryDays.push({
                day: d,
                title: `Circuit Darshan & Sightseeing Phase ${d - 1}`,
                activities: [
                    `Morning VIP darshan assistance to avoid queue rush`,
                    `Scenic sightseeing excursion to surrounding historical viewpoints`,
                    `Traditional South Indian lunch at celebrated heritage dining spot`,
                    `Evening serene parikrama (temple circumambulation) & musical puja`
                ],
                temple: `${cleanDest} Historical Circuit & Holy Theertham ${d}`,
                hotel: isLuxury ? `Luxury Heritage Palace / 5-Star Resort, ${cleanDest}` : isBudget ? `Verified Deluxe Yatri Nivas, ${cleanDest}` : `Premium 3-Star Comfort Hotel, ${cleanDest}`,
                tip: `Hire a certified government-approved guide for deep historical legends.`
            });
        }
    }

    return {
        destination,
        days,
        budget: style,
        totalCost,
        itinerary: itineraryDays,
        hotels: [
            isLuxury ? `Grand 5-Star Heritage Suites, ${cleanDest}` : isBudget ? `Deluxe Pilgrims Stay, ${cleanDest}` : `Grand Palace Residency, ${cleanDest}`,
            isLuxury ? `Royal Villa Resort, ${cleanDest}` : isBudget ? `TTDC Government Yatri Lodge` : `Hotel Sea View & Suites`
        ],
        transport: isLuxury ? `Toyota Innova Crysta AC with Chauffeur` : isBudget ? `AC Sedan (Swift Dzire / Etios)` : `Ertiga / Sedan AC Taxi`,
        highlights: [
            `${cleanDest} Grand Darshan`,
            `Special Puja & Archana Coordination`,
            `Scenic Sightseeing Points`,
            `Dedicated 24/7 Chauffeur Assistance`
        ]
    };
}

export async function generateAIItinerary(destination: string, days: number, budget: string, style: string) {
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.7-flash', 'gemini-flash-latest'];
    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
        const genAI = new GoogleGenerativeAI(apiKey);
        const prompt = `
            You are a professional travel planning expert for Ramayan Tours and Travels.
            Generate a detailed pilgrimage and sightseeing itinerary for ${destination} for ${days} days.
            Travel Style: ${style}. Budget Level: ${budget}.

            Return ONLY a valid JSON object matching this schema (no markdown, no extra text):
            {
                "destination": "${destination}",
                "days": ${days},
                "budget": "${style}",
                "totalCost": 15000,
                "itinerary": [
                    {
                        "day": 1,
                        "title": "Arrival & Initial Darshan",
                        "activities": ["Chauffeur pickup", "Check-in", "Evening Aarti"],
                        "temple": "Prime Sacred Shrine",
                        "hotel": "Hotel Name",
                        "tip": "Useful pilgrim tip"
                    }
                ],
                "hotels": ["Hotel 1", "Hotel 2"],
                "transport": "AC Sedan / Innova Crysta",
                "highlights": ["Highlight 1", "Highlight 2"]
            }
        `;

        for (const modelName of modelsToTry) {
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent(prompt);
                const text = result.response.text();
                const cleanedText = text.replace(/```json|```/g, '').trim();
                const parsed = JSON.parse(cleanedText);
                if (parsed && Array.isArray(parsed.itinerary)) {
                    return parsed;
                }
            } catch (err: any) {
                console.warn(`Model ${modelName} failed in generateAIItinerary:`, err.message);
            }
        }
    }

    // Smart Fallback
    return buildSmartFallbackItinerary(destination, days, budget, style);
}

export async function listAIModels() {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) return { success: false, error: 'No API Key' };

        // We use a simple fetch to list models directly from the API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await response.json();
        
        if (!response.ok) {
            return { success: false, error: data.error?.message || 'Failed to fetch models' };
        }

        return { success: true, models: data.models };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}
