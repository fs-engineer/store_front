import React from 'react';
import s from './productDetailsButtons.module.css';
import { CreateBtn, Divider } from '@/ui/components';

type Props = {
    volume: number;
    price: number;
};

const ProductDetailsButtons: React.FC<Props> = ({ volume, price }) => {
    return (
        <>
            <div className={s.articleWrap}>
                <p className={s.article}>Артикул: треба додати до бази</p>
            </div>
            <Divider />
            <div className={s.priceWrap}>
                <p className={s.title}>{volume ? volume + ' мл' : null}</p>
                <p className={s.title}>{price ? price + ' грн' : null}</p>
            </div>
            <div className={s.btnWrap}>
                <CreateBtn type={'button'} text={'Купити'} />
            </div>
        </>
    );
};

export default ProductDetailsButtons;
