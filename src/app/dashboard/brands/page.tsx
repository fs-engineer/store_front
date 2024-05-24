import React from 'react';
import { Container, Title } from '@/ui/components';
import BrandsTable from '@/ui/components/Tables/BrandsTable/BrandsTable';
import { ISearchParams } from '@/interfaces';
import CreateBtn from '@/ui/components/Buttons/CreateBtn/CreateBtn';

const Page = ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <CreateBtn />
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
