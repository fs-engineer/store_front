import React from 'react';
import { CharacteristicsTable, Container, CreateLink, Title } from '@/ui/components';
import { IProps } from '@/interfaces';
import DashboardTopBar from '@/ui/components/Dashboard/DashboardTopBar/DashboardTopBar';
import { characteristicsKey } from '@/constants';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const page = searchParams?.page || 1;

    return (
        <Container>
            <DashboardTopBar>
                <CreateLink path={`${characteristicsKey}/create?page=${page}`} />
            </DashboardTopBar>
            <Title text={'Характеристики'} />
            <CharacteristicsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
