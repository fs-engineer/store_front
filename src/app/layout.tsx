import React from 'react';
import type { Metadata } from 'next';
import '@/ui/common/styles/globals.css';
import { nunito } from '@/ui/common/fonts';
import Header from '@/ui/components/Header/Header';
import { SessionProvider } from 'next-auth/react';
import s from './layout.module.css';
import Footer from '@/ui/components/Footer/Footer';

export const metadata: Metadata = {
    title: '@kiss.viktory',
    description: 'Beauty store',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className={`${nunito.className} antialiased`}>
                <SessionProvider>
                    <Header />
                    <main className={s.main}>{children}</main>
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
