import React from 'react';
import { Container, CreateLink, Title } from '@/ui/components';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { IProps } from '@/interfaces';

const Page: React.FC<IProps> = ({ searchParams }) => {
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
