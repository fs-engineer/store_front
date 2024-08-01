'use client';

import React from 'react';
import { IProduct } from '@/interfaces';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';
import s from './productDetails.module.css';
import { Breadcrumbs, Divider } from '@/ui/components';
import ProductAccordionMobile from '@/ui/components/Products/ProductAccordionMobile/ProductAccordionMobile';
import ProductDetailsTitle from '@/ui/components/Products/ProductDetailsTitle/ProductDetailsTitle';
import Advantages from '@/ui/components/Advantages/Advantages';
import useWindowSize from '@/hooks/useWindowSize';
import ProductInfo from '@/ui/components/Products/ProductInfo/ProductInfo';
import ProductDetailsTabs from '@/ui/components/Products/ProductDetailsTabs/ProductDetailsTabs';
import ProductDetailsButtons from '@/ui/components/Products/ProductDetailsButtons/ProductDetailsButtons';
import { productsKey } from '@/constants';
import useCurrentPage from '@/hooks/useCurrentPage';

type Props = {
    product: IProduct;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
    const imageUrls = (product.images && product.images.map((el) => el.secureUrl)) || [];
    const { width } = useWindowSize();
    const currentPage = useCurrentPage();

    return (
        <div className={s.container}>
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
            <div className={s.titleImageWrap}>
                <div className={s.titleButtonsWrap}>
                    <ProductDetailsTitle name={product.name} brand={product.brand} types={product.types} />
                    {width && width >= 600 ? (
                        <>
                            <ProductInfo
                                productId={product.id}
                                volume={product.volume}
                                price={product.price}
                                article={product.article}
                            />
                            <ProductDetailsButtons id={product.id} price={product.price} />
                        </>
                    ) : null}
                </div>
                <ProductImagePreview imageUrls={imageUrls} />
            </div>
            {width && width < 600 ? (
                <>
                    <ProductInfo
                        productId={product.id}
                        volume={product.volume}
                        price={product.price}
                        article={product.article}
                    />
                    <ProductDetailsButtons id={product.id} price={product.price} />
                    <Divider />
                    <ProductAccordionMobile product={product} />
                </>
            ) : null}
            {width && width > 600 ? (
                <ProductDetailsTabs
                    description={product.description}
                    characteristics={product.characteristics}
                    directions={product.directions}
                    composition={product.composition}
                />
            ) : null}
            <Advantages />
        </div>
    );
};

export default ProductDetails;
