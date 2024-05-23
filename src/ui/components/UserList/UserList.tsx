import React from 'react';
import { getAllUsers } from '@/app/lib/users/data';
import { ISearchParams } from '@/interfaces';

const UserList = async ({ searchParams }: ISearchParams) => {
    const users = await getAllUsers({ searchParams });
    console.log(users);

    return <div></div>;
};

export default UserList;
