import React from 'react';
import { getAllUsers } from '@/app/lib/users/data';

const Page = async () => {
    const users = await getAllUsers();
    return (
        <div>
            <h1>Dashboard users page</h1>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </div>
    );
};

export default Page;
