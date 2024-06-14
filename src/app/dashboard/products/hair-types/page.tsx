import React from 'react';
import { Container, CreateLink, Title } from '@/ui/components';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { hairTypesKey } from '@/constants';
import { IProps } from '@/interfaces';
import HairTypesTable from '@/ui/components/Tables/HairTypesTable/HairTypesTable';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const page = searchParams?.page || 1;

    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`${hairTypesKey}/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Типи волосся'} />
            <HairTypesTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
