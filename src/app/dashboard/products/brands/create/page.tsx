import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import BrandCreateFrom from '@/ui/components/Brands/BrandCreateForm/BrandCreateFrom';
import { getAllCountries } from '@/app/lib/countries/data';
import { brandsKey, dashboardKey } from '@/constants';

const Page = async () => {
    const countries = await getAllCountries();

    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Бренди', href: `/${dashboardKey}/${brandsKey}` },
                    {
                        label: 'Створити бренд',
                        href: `/${dashboardKey}/${brandsKey}/create`,
                        active: true,
                    },
                ]}
            />
            <BrandCreateFrom countries={countries} />
        </Container>
    );
};

export default Page;
