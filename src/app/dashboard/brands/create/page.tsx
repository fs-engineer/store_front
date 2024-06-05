import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import BrandCreateFrom from '@/ui/components/Brands/BrandCreateForm/BrandCreateFrom';
import { getAllCountries } from '@/app/lib/countries/data';

const Page = async () => {
    const countries = await getAllCountries();
    console.log(countries, 'countries');
    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Бренди', href: '/dashboard/brands' },
                    {
                        label: 'Створити бренд',
                        href: '/dashboard/brands/create',
                        active: true,
                    },
                ]}
            />
            <BrandCreateFrom countries={countries} />
        </Container>
    );
};

export default Page;
