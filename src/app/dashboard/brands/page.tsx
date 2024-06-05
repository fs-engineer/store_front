import React from 'react';
import { BrandsTable, Container, CreateLink, Title } from '@/ui/components';
import { ISearchParams } from '@/interfaces';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';

const Page = ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={'brands/create'} />
            </DashboardTopBar>
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
