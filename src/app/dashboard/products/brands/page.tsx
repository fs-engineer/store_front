import React from 'react';
import { BrandsTable, Container, CreateLink, Title } from '@/ui/components';
import { IProps } from '@/interfaces';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { brandsKey } from '@/constants';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const page = searchParams?.page || 1;

    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`${brandsKey}/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
