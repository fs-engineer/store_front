'use Client';

import React from 'react';
import type { Metadata } from 'next';
import '@/ui/common/styles/globals.css';
import { nunito } from '@/ui/common/fonts';
import ClientWrapper from '@/ui/components/navbar/clientWrapper';

export const metadata: Metadata = {
    title: '@kiss.viktory',
    description: 'Beauty store',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${nunito.className} antialiased`}>
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
