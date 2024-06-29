import React from 'react';
import { IProduct } from '@/interfaces';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';

import s from './productDetails.module.css';
import { Accordion, Box, CreateBtn, Divider } from '@/ui/components';

type Props = {
    product: IProduct;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
    const imageUrls = (product.images && product.images.map((el) => el.secureUrl)) || [];

    return (
        <div className={s.container}>
            {product?.brand?.name ? <h3 className={s.subtitle}>{product.brand.name}</h3> : null}
            <h2 className={s.title}>{product.name}</h2>
            <p>{product.types ? product.types.map((type) => type.name).join(' ') : null}</p>
            <ProductImagePreview imageUrls={imageUrls} />
            <div className={s.articleWrap}>
                <p className={s.article}>Артикул: треба додати до бази</p>
            </div>
            <Divider />
            <div className={s.priceWrap}>
                <p className={s.title}>{product.volume ? product.volume + ' мл' : null}</p>
                <p className={s.title}>{product.price ? product.price + ' грн' : null}</p>
            </div>
            <Box>
                <CreateBtn type={'button'} text={'Купити'} />
            </Box>
            <Divider />
            <Accordion title={'Опис товару'}>
                <p>{product.description}</p>
            </Accordion>
            <Divider />
            <Accordion title={'Характеристики'}>
                <ul className={s.charList}>
                    {product.characteristics
                        ? product.characteristics.map((el) => <li key={el.id}>{el.value}</li>)
                        : null}
                </ul>
            </Accordion>
            <Divider />
            <Accordion title={'Спосіб застосування'}>
                <p>{product.directions}</p>
            </Accordion>
            <Divider />
            <Accordion title={'Склад'}>
                <p>треба додати состав до бази</p>
            </Accordion>
        </div>
    );
};

export default ProductDetails;
