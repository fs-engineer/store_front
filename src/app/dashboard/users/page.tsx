import React from 'react';
import { ISearchParams } from '@/interfaces';
import { Container, Title, UsersTable } from '@/ui/components';

const Page = async ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <Title text={'Користувачі'} />
            <UsersTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
