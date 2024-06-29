import React from 'react';
import { PageContainer } from '@/ui/components';
import { getProductById } from '@/app/lib/products/data';
import { IProduct } from '@/interfaces';
import ProductDetails from '@/ui/components/Products/ProductDetails/ProductDetails';
import Advantages from '@/ui/components/Advantages/Advantages';

const Page = async ({ params }: { params: { id: string } }) => {
    const id: number = Number(params.id);

    const product: IProduct | null = await getProductById({ id });

    return (
        <PageContainer>
            {product ? <ProductDetails product={product} /> : null}
            <Advantages />
        </PageContainer>
    );
};

export default Page;
