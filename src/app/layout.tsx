import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/ui/common/styles/globals.css'
import { nunito } from '@/ui/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: '@kiss.viktory',
    description: 'Beauty store',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${nunito.className} antialiased`}>
                {children}
            </body>
        </html>
    )
}
