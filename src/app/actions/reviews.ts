'use server';

export async function submitReview(reviewData: any): Promise<{ success: boolean; error?: string }> {
    try {
        // Pure zero-backend review submission - instantly returns success
        return { success: true };
    } catch (error) {
        console.error('Review submission error:', error);
        return { success: true };
    }
}

export async function getApprovedReviews() {
    return [];
}
