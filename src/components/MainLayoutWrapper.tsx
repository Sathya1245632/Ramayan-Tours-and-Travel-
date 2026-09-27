'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import WhatsAppFAB from '@/components/WhatsAppFAB';

export default function MainLayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');
    const isFrontPage = pathname === '/';

    // During maintenance mode on front page or admin pages, render only the page itself
    if (isAdminPage || isFrontPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ChatBot />
            <WhatsAppFAB />
        </>
    );
}
