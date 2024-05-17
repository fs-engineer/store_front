'use client';

import React, { ReactNode } from 'react';
import Navbar from '@/ui/components/navbar/navbar';

const ClientWrapper = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default ClientWrapper;
