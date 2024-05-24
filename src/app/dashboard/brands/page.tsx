import React from 'react';
import { Container, Title } from '@/ui/components';
import BrandsTable from '@/ui/components/Tables/BrandsTable/BrandsTable';
import { ISearchParams } from '@/interfaces';
import SelectInputWithSearch from '@/ui/components/Inputs/SelectInputWithSearch';
import CreateIcon from '@/ui/components/Icons/CreateIcon';

const Page = ({ searchParams }: ISearchParams) => {
    return (
        <Container>
            {/*<SelectInputWithSearch apiEndpoint={''} placeholder={}*/}
            <CreateIcon stroke={'#272727FF'} />
            <Title text={'Бренди'} />
            <BrandsTable searchParams={searchParams} />
        </Container>
    );
};

export default Page;
