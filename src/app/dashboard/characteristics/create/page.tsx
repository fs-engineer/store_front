import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import CharacteristicsCreateForm from '@/ui/components/Characteristics/CharacteristicsCreateForm/CharacteristicsCreateForm';

const Page = () => {
    return (
        <Container>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Характеристики', href: '/dashboard/characteristics' },
                    {
                        label: 'Створити бренд',
                        href: '/dashboard/characteristics/create',
                        active: true,
                    },
                ]}
            />
            <CharacteristicsCreateForm />
        </Container>
    );
};

export default Page;
