import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import CharacteristicsCreateForm from '@/ui/components/Characteristics/CharacteristicsCreateForm/CharacteristicsCreateForm';
import { characteristicsKey, dashboardKey, productsKey } from '@/constants';
import { IProps } from '@/interfaces';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const currentPage = searchParams?.page || 1;
    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Характеристики',
                        href: `/${dashboardKey}/${productsKey}/${characteristicsKey}?page=${currentPage}`,
                    },
                    {
                        label: 'Створити характеристику',
                        href: `/${dashboardKey}/${productsKey}/${characteristicsKey}/create`,
                        active: true,
                    },
                ]}
            />
            <CharacteristicsCreateForm />
        </Container>
    );
};

export default Page;
