import React from 'react';
import { ISearchParams } from '@/interfaces';
import { Container, UserList } from '@/ui/components';

const Page = async ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <h1>Користувачі</h1>
            <UserList searchParams={searchParams} />
        </Container>
    );
};

export default Page;
