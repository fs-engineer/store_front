import React from 'react';
import s from './productInfo.module.css';
import { Divider } from '@/ui/components';

type Props = {
    volume: number;
    price: number;
    article: string;
    productId: number;
};

const ProductInfo: React.FC<Props> = ({ volume, price, article }) => {
    return (
        <>
            <div className={s.articleWrap}>
                <p className={s.article}>Артикул: {article}</p>
            </div>
            <Divider />
            <div className={s.priceWrap}>
                <p className={s.title}>{volume ? volume + ' мл' : null}</p>
                <p className={s.title}>{price ? price + ' грн' : null}</p>
            </div>
        </>
    );
};

export default ProductInfo;
