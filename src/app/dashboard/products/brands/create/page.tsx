import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import BrandCreateFrom from '@/ui/components/Brands/BrandCreateForm/BrandCreateFrom';
import { getAllCountries } from '@/app/lib/countries/data';
import { brandsKey, dashboardKey, productsKey } from '@/constants';
import { IProps } from '@/interfaces';

const Page: React.FC<IProps> = async ({ searchParams }) => {
    const currentPage = searchParams?.page || 1;
    const countries = await getAllCountries();

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Бренди', href: `/${dashboardKey}/${productsKey}/${brandsKey}?page=${currentPage}` },
                    {
                        label: 'Створити бренд',
                        href: `/${dashboardKey}/${productsKey}/${brandsKey}/create`,
                        active: true,
                    },
                ]}
            />
            <BrandCreateFrom countries={countries} />
        </Container>
    );
};

export default Page;
