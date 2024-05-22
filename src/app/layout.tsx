import React from 'react';
import type { Metadata } from 'next';
import '@/ui/common/styles/globals.css';
import { nunito } from '@/ui/common/fonts';
import Navbar from '@/ui/components/navbar/navbar';
import { SessionProvider } from 'next-auth/react';
import s from './layout.module.css';

export const metadata: Metadata = {
    title: '@kiss.viktory',
    description: 'Beauty store',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${nunito.className} antialiased`}>
                <SessionProvider>
                    <Navbar />
                    <main className={s.main}>{children}</main>
                </SessionProvider>
            </body>
        </html>
    );
}
