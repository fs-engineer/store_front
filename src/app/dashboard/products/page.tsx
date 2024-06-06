import React from 'react';
import { Container, CreateLink, Title } from '@/ui/components';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { ISearchParams } from '@/interfaces';

const Page = ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={'products/create'} />
            </DashboardTopBar>
            <Title text={'Продукти'} />
            {/*<BrandsTable searchParams={searchParams} />*/}
        </Container>
    );
};

export default Page;
