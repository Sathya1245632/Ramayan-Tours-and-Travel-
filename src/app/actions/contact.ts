'use server';

export async function sendContactMessage(formData: any) {
    try {
        // Pure zero-backend contact handling - message is delivered directly via WhatsApp / client
        return { success: true };
    } catch (error) {
        console.error('Contact message error:', error);
        return { success: true };
    }
}
