import React from 'react';
import { CharacteristicsTable, Container, CreateLink, Title } from '@/ui/components';
import { ISearchParams } from '@/interfaces';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';

type Props = {
    searchParams: ISearchParams;
};

const Page: React.FC<Props> = ({ searchParams }) => {
    const { page } = searchParams || 1;

    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`characteristics/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Характеристики'} />
            <CharacteristicsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
