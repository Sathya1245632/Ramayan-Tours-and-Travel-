'use server';

import { prisma } from '@/lib/prisma';

export async function sendContactMessage(formData: any) {
    try {
        const { name, email, phone, subject, message } = formData;

        if (process.env.DATABASE_URL) {
            try {
                await prisma.contactMessage.create({
                    data: {
                        name,
                        email,
                        phone,
                        subject: subject || 'General Inquiry',
                        message
                    }
                });
            } catch (dbErr) {
                console.warn('Database save skipped for message (Option B active):', dbErr);
            }
        }

        return { success: true };
    } catch (error) {
        console.error('Contact message error:', error);
        return { success: true };
    }
}
