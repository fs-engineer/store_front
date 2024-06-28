import React from 'react';
import { Breadcrumbs, PageContainer, ProductsList } from '@/ui/components';
import { productsKey } from '@/constants';
import { IProps } from '@/interfaces';

const Page: React.FC<IProps> = async ({ searchParams }) => {
    return (
        <PageContainer>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Головна', href: `/` },
                    {
                        label: 'Товари',
                        href: `/${productsKey}`,
                        active: true,
                    },
                ]}
            />
            <ProductsList searchParams={searchParams} />
        </PageContainer>
    );
};

export default Page;
