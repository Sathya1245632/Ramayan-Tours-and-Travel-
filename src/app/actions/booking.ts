'use server';

import { prisma } from '@/lib/prisma';

export async function createBooking(bookingData: any) {
    try {
        const { pkgId, travelers, formData, totalAmount } = bookingData;

        // Attempt to save to database if database is configured
        if (process.env.DATABASE_URL) {
            try {
                let user = await prisma.user.findUnique({
                    where: { email: formData.email }
                });

                if (!user) {
                    user = await prisma.user.create({
                        data: {
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            role: 'USER',
                            password: 'TEMP_' + Math.random().toString(36).slice(-8)
                        }
                    });
                }

                const booking = await prisma.booking.create({
                    data: {
                        userId: user.id,
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        travelers: travelers,
                        amount: totalAmount,
                        status: 'PENDING',
                        notes: formData.specialRequests ? `${formData.specialRequests} (Package: ${pkgId})` : `Package: ${pkgId}`,
                        travelDate: new Date(formData.travelDate),
                    }
                });

                return { success: true, bookingId: booking.id };
            } catch (dbErr) {
                console.warn('Database save skipped (Option B mode active):', dbErr);
            }
        }

        // Return instant success in direct WhatsApp/Call mode
        return { success: true, bookingId: 'RTT' + Date.now().toString().slice(-8) };
    } catch (error) {
        console.error('Booking handling:', error);
        return { success: true, bookingId: 'RTT' + Date.now().toString().slice(-8) };
    }
}
