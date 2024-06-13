import React from 'react';
import { BrandsTable, Container, CreateLink, Title } from '@/ui/components';
import { IProps } from '@/interfaces';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const { page } = searchParams;
    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`brands/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
