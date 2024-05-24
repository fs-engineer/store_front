import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';

const Page = () => {
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
        </Container>
    );
};

export default Page;
