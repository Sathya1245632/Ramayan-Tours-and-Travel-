'use server';

import { cookies } from 'next/headers';

export async function login(formData: any) {
    try {
        const { email, password } = formData;

        // Check for admin credentials
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@ramayantours.com';
        const adminPassword = process.env.ADMIN_PASSWORD || 'JaiShriRam@2026';

        if (email === adminEmail && password === adminPassword) {
            cookies().set('admin_session', 'true', {
                path: '/',
                maxAge: 86400,
                sameSite: 'strict',
            });
            return { success: true, isAdmin: true };
        }

        // Direct user login
        cookies().set('user_id', 'demo_user', {
            path: '/',
            maxAge: 86400 * 7,
            sameSite: 'strict',
        });

        return { success: true, isAdmin: false };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: 'Internal server error' };
    }
}

export async function signup(formData: any) {
    try {
        return { success: true };
    } catch (error) {
        console.error('Signup error:', error);
        return { success: false, error: 'Internal server error' };
    }
}
