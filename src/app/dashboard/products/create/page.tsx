import React from 'react';
import { IProps } from '@/interfaces';
import { Breadcrumbs, Container } from '@/ui/components';
import { dashboardKey, productsKey } from '@/constants';
import ProductCreateForm from '@/ui/components/Products/ProductCreateForm/ProductCreateForm';

const Page: React.FC<IProps> = async ({ searchParams }) => {
    const currentPage = searchParams?.page || 1;

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Продукти', href: `/${dashboardKey}/${productsKey}?page=${currentPage}` },
                    {
                        label: 'Створити продукт',
                        href: `/${dashboardKey}/${productsKey}/create`,
                        active: true,
                    },
                ]}
            />
            <ProductCreateForm />
        </Container>
    );
};

export default Page;
