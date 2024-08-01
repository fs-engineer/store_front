import React from 'react';
import { IProps } from '@/interfaces';
import { Breadcrumbs, Container } from '@/ui/components';
import { dashboardKey, hairTypesKey, productsKey } from '@/constants';
import HairTypesCreateForm from '@/ui/components/HairTypes/HairTypesCreateForm/HairTypesCreateForm';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const currentPge = searchParams?.page || 1;

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Типи волосся',
                        href: `/${dashboardKey}/${productsKey}/${hairTypesKey}?page=${currentPge}`,
                    },
                    {
                        label: 'Створити тип волосся',
                        href: `/${dashboardKey}/${productsKey}/${hairTypesKey}/create`,
                        active: true,
                    },
                ]}
            />
            <HairTypesCreateForm />
        </Container>
    );
};

export default Page;
