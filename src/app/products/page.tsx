import React from 'react';
import Link from 'next/link';

const Page = async () => {
    return (
        <div>
            <h1>Products page</h1>
            <Link href="/" style={{ marginRight: '20px' }}>
                home
            </Link>
            <Link href="/dashboard">dashboard</Link>
        </div>
    );
};

export default Page;
