import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import { IProps } from '@/interfaces';
import { dashboardKey, productsKey, productTypesKey } from '@/constants';
import ProductTypesCreateForm from '@/ui/components/ProductTypes/ProductTypesCreateForm/ProductTypesCreateForm';

const Page: React.FC<IProps> = ({ searchParams }) => {
    const currentPge = searchParams?.page || 1;

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'Типи продуктів',
                        href: `/${dashboardKey}/${productsKey}/${productTypesKey}?page=${currentPge}`,
                    },
                    {
                        label: 'Створити тип продукту',
                        href: `/${dashboardKey}/${productsKey}/${productTypesKey}/create`,
                        active: true,
                    },
                ]}
            />
            <ProductTypesCreateForm />
        </Container>
    );
};

export default Page;
