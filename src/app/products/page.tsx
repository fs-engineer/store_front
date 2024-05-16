import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <h1 style={{ paddingTop: '120px' }}>Product page :)</h1>
            <Link href="/dashboard">To dashboard</Link>
        </div>
    );
};

export default Page;
