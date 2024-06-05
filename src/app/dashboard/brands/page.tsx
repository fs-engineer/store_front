import React from 'react';
import { Container, Title } from '@/ui/components';
import BrandsTable from '@/ui/components/Tables/BrandsTable/BrandsTable';
import { ISearchParams } from '@/interfaces';
import CreateLink from '@/ui/components/LinksAndButtons/CreateLink/CreateLink';
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
