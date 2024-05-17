import React from 'react';
import Link from 'next/link';

const Page = async () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <Link href="/" style={{ marginRight: '20px' }}>
                home
            </Link>
            <Link href="/products">products</Link>
            <form>
                <button>Sign Out</button>
            </form>
        </div>
    );
};

export default Page;
