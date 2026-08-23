'use server';

import { prisma } from '@/lib/prisma';

export async function submitReview(reviewData: any): Promise<{ success: boolean; error?: string }> {
    try {
        const { name, location, rating, comment, packageName } = reviewData;

        if (process.env.DATABASE_URL) {
            try {
                await prisma.review.create({
                    data: {
                        name,
                        location,
                        rating: parseInt(rating),
                        comment,
                        packageName,
                        approved: true
                    }
                });
            } catch (dbErr) {
                console.warn('Database save skipped for review (Option B active):', dbErr);
            }
        }

        return { success: true };
    } catch (error) {
        console.error('Review submission:', error);
        return { success: true };
    }
}

export async function getApprovedReviews() {
    try {
        if (process.env.DATABASE_URL) {
            return await prisma.review.findMany({
                where: { approved: true },
                orderBy: { createdAt: 'desc' }
            });
        }
        return [];
    } catch (error) {
        console.warn('Error fetching reviews from DB:', error);
        return [];
    }
}
