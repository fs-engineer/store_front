'use client';

import React from 'react';
import { checkoutKey } from '@/constants';
import { Breadcrumbs, Divider, PageContainer } from '@/ui/components';
import { ICart } from '@/interfaces';
import { useCart } from '@/hooks/useCart';

const Page = () => {
    const { cartItems } = useCart();

    return (
        <PageContainer>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Головна', href: `/` },
                    {
                        label: `Кошик`,
                        href: `/${checkoutKey}`,
                        active: true,
                    },
                ]}
            />
            <ul>
                {cartItems.length &&
                    cartItems.map((el: ICart) => (
                        <li key={el.id}>
                            <p>{el.id}</p>
                        </li>
                    ))}
            </ul>
            <Divider />
        </PageContainer>
    );
};

export default Page;
