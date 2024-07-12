import React from 'react';
import { IProduct } from '@/interfaces';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';

import s from './productDetails.module.css';
import { CreateBtn, Divider } from '@/ui/components';
import ProductAccordionMobile from '@/ui/components/Products/ProductAccordionMobile/ProductAccordionMobile';
import ProductDetailsTitle from '@/ui/components/Products/ProductDetailsTitle/ProductDetailsTitle';
import Advantages from '@/ui/components/Advantages/Advantages';

type Props = {
    product: IProduct;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
    const imageUrls = (product.images && product.images.map((el) => el.secureUrl)) || [];

    return (
        <div className={s.container}>
            <div className={s.titleImageWrap}>
                <ProductDetailsTitle name={product.name} brand={product.brand} types={product.types} />
                <ProductImagePreview imageUrls={imageUrls} />
            </div>
            <div className={s.articleWrap}>
                <p className={s.article}>Артикул: треба додати до бази</p>
            </div>
            <Divider />
            <div className={s.priceWrap}>
                <p className={s.title}>{product.volume ? product.volume + ' мл' : null}</p>
                <p className={s.title}>{product.price ? product.price + ' грн' : null}</p>
            </div>
            <div className={s.btnWrap}>
                <CreateBtn type={'button'} text={'Купити'} />
            </div>
            <Divider />
            <ProductAccordionMobile product={product} />
            <Advantages />
        </div>
    );
};

export default ProductDetails;
