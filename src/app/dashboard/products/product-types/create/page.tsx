import React from 'react';
import { Breadcrumbs, Container } from '@/ui/components';
import { IProps } from '@/interfaces';
import { characteristicsKey, dashboardKey, productsKey, productTypesKey } from '@/constants';

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
                        href: `/${dashboardKey}/${productsKey}/${characteristicsKey}/create`,
                        active: true,
                    },
                ]}
            />
            {/*<CharacteristicsCreateForm />*/}
        </Container>
    );
};

export default Page;
