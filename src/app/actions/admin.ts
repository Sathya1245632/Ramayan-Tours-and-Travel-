'use server';

import { packages, taxiPackages, destinations } from '@/lib/data';

export async function getAdminDashboardStats() {
    try {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        const monthlyStats = months.map((month, idx) => ({
            month,
            amount: 45000 + idx * 12500
        }));

        return {
            totalRevenue: 285000,
            activeBookings: 18,
            newCustomers: 42,
            pendingApprovals: 3,
            monthlyRevenue: monthlyStats
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return {
            totalRevenue: 0,
            activeBookings: 0,
            newCustomers: 0,
            pendingApprovals: 0,
            monthlyRevenue: []
        };
    }
}

export async function getBookings() {
    try {
        return [
            {
                id: 'RTT-DEMO-01',
                bookingRef: 'RTT8920194',
                name: 'Ramesh Kumar',
                email: 'ramesh.k@gmail.com',
                phone: '+91 98401 23456',
                travelers: 4,
                amount: 14000,
                status: 'CONFIRMED',
                notes: 'Rameshwaram & Dhanushkodi Sightseeing',
                createdAt: new Date(),
                package: { name: 'Complete Rameshwaram & Dhanushkodi Circuit' },
                user: { name: 'Ramesh Kumar', email: 'ramesh.k@gmail.com' }
            },
            {
                id: 'RTT-DEMO-02',
                bookingRef: 'RTT7620188',
                name: 'Ananya Sharma',
                email: 'ananya.sharma@yahoo.com',
                phone: '+91 94441 98765',
                travelers: 2,
                amount: 8500,
                status: 'PENDING',
                notes: 'Early morning Agni Theertham special darshan',
                createdAt: new Date(Date.now() - 3600 * 1000 * 24),
                package: { name: 'Rameshwaram Spiritual Darshan' },
                user: { name: 'Ananya Sharma', email: 'ananya.sharma@yahoo.com' }
            }
        ];
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return [];
    }
}

export async function getCustomers() {
    try {
        return [
            {
                id: 'cust-1',
                name: 'Ramesh Kumar',
                email: 'ramesh.k@gmail.com',
                phone: '+91 98401 23456',
                trips: 2,
                totalSpent: 22500,
                createdAt: new Date()
            },
            {
                id: 'cust-2',
                name: 'Ananya Sharma',
                email: 'ananya.sharma@yahoo.com',
                phone: '+91 94441 98765',
                trips: 1,
                totalSpent: 8500,
                createdAt: new Date()
            }
        ];
    } catch (error) {
        console.error('Error fetching customers:', error);
        return [];
    }
}

export async function getPackages() {
    try {
        return [...packages, ...taxiPackages].map((p: any, index: number) => ({
            id: p.id || `pkg-${index}`,
            name: p.name,
            price: typeof p.price === 'number' ? p.price : 2500,
            duration: p.duration,
            rating: p.rating || 4.9,
            destination: { name: 'Rameshwaram' }
        }));
    } catch (error) {
        console.error('Error fetching packages:', error);
        return [];
    }
}

export async function getMessages() {
    try {
        return [
            {
                id: 'msg-1',
                name: 'Suresh Iyer',
                email: 'suresh.iyer@gmail.com',
                phone: '+91 98840 55443',
                subject: 'Taxi service for Madurai to Rameshwaram',
                message: 'Looking for Innova Crysta for 6 persons on next Friday morning.',
                createdAt: new Date()
            }
        ];
    } catch (error) {
        console.error('Error fetching messages:', error);
        return [];
    }
}
