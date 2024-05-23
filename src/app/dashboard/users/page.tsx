import React from 'react';
import { ISearchParams } from '@/interfaces';
import { Container, Title, UserList } from '@/ui/components';

const Page = async ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <Title text={'Користувачі'} />
            <UserList searchParams={searchParams} />
        </Container>
    );
};

export default Page;
