import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <h1 style={{ paddingTop: '120px' }}>Admin page :)</h1>
            <Link href="/products">To Products page</Link>
        </div>
    );
};

export default Page;
