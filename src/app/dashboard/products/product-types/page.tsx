import React from 'react';
import { Container, CreateLink, Title } from '@/ui/components';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { IProps } from '@/interfaces';
import { productTypesKey } from '@/constants';
import ProductTypesTable from '@/ui/components/Tables/ProductTypesTable/ProductTypesTable';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const page = searchParams?.page || 1;
    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`${productTypesKey}/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Типи продуктів'} />
            <ProductTypesTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
