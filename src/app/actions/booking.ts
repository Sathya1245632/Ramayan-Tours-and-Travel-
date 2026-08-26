'use server';

export async function createBooking(bookingData: any) {
    try {
        const { pkgId, travelers, formData, totalAmount } = bookingData;
        const bookingId = 'RTT' + Date.now().toString().slice(-8);

        // Pure zero-backend booking - returns reference ID for instant WhatsApp / Direct communication
        return { 
            success: true, 
            bookingId 
        };
    } catch (error) {
        console.error('Booking handling error:', error);
        return { 
            success: true, 
            bookingId: 'RTT' + Date.now().toString().slice(-8) 
        };
    }
}
        