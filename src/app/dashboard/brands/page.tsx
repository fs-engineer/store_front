import React from 'react';
import { Container, Title } from '@/ui/components';
import BrandsTable from '@/ui/components/Tables/BrandsTable/BrandsTable';
import { ISearchParams } from '@/interfaces';
import CreateBtn from '@/ui/components/Buttons/CreateBtn/CreateBtn';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';

const Page = ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <DashboardTopBar>
                <CreateBtn path={'brands/create'} />
            </DashboardTopBar>
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
