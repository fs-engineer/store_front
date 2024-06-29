import React from 'react';
import { IProduct } from '@/interfaces';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';

import s from './productDetails.module.css';
import { CreateBtn, Divider } from '@/ui/components';
import ProductAccordionMobile from '@/ui/components/Products/ProductAccordionMobile/ProductAccordionMobile';

type Props = {
    product: IProduct;
};

const ProductDetails: React.FC<Props> = ({ product }) => {
    const imageUrls = (product.images && product.images.map((el) => el.secureUrl)) || [];

    return (
        <div className={s.container}>
            <div>
                {product?.brand?.name ? <h3 className={s.subtitle}>{product.brand.name}</h3> : null}
                <h2 className={s.title}>{product.name}</h2>
                <p>{product.types ? product.types.map((type) => type.name).join(' ') : null}</p>
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
        </div>
    );
};

export default ProductDetails;
