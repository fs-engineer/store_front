import React from 'react';
import { Container, CreateLink, Title } from '@/ui/components';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { IProps } from '@/interfaces';
import ProductsTable from '@/ui/components/Tables/ProductsTable/ProductsTable';

const Page: React.FC<IProps> = ({ searchParams }) => {
    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={'products/create'} />
            </DashboardTopBar>
            <Title text={'Продукти'} />
            <ProductsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
