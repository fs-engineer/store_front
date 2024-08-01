import React from 'react';
import { Breadcrumbs, PageContainer } from '@/ui/components';
import { getProductById } from '@/app/lib/products/data';
import { IProduct, ISearchParams } from '@/interfaces';
import ProductDetails from '@/ui/components/Products/ProductDetails/ProductDetails';
import { productsKey } from '@/constants';

const Page = async ({ params, searchParams }: { params: { id: string }; searchParams: ISearchParams }) => {
    const id: number = Number(params.id);
    const currentPage = searchParams?.page || 1;

    const product: IProduct | null = await getProductById({ id });

    return (
        <PageContainer>
            {product ? (
                <>
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: 'Головна', href: `/` },
                            { label: 'Товари', href: `/${productsKey}?page=${currentPage}` },
                            {
                                label: `${product.types ? product.types.map((type) => type.name).join(' ') : product.name}`,
                                href: `/${productsKey}/${product.id}`,
                                active: true,
                            },
                        ]}
                    />
                    <ProductDetails product={product} />
                </>
            ) : null}
        </PageContainer>
    );
};

export default Page;
