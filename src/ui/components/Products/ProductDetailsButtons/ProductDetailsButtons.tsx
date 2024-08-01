import React, { useState } from 'react';
import s from './productDetailsButtons.module.css';
import AddToCartBtn from '@/ui/components/ButtonsAndLinks/AddToCartBtn/AddToCartBtn';
import { Select } from '@/ui/components';
import FavBtn from '@/ui/components/ButtonsAndLinks/FavBtn/FavBtn';
import clsx from 'clsx';
import { IProduct } from '@/interfaces';

interface IProps {
    product: IProduct;
}

const ProductDetailsButtons: React.FC<IProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleChangeQuantity = (value: string | number) => {
        setQuantity(Number(value));
    };

    return (
        <ul className={s.list}>
            <li className={s.item}>
                <Select options={numbersArray} getValue={handleChangeQuantity} />
            </li>
            <li className={clsx(s.item, s.cartBtnWrap)}>
                <AddToCartBtn quantity={quantity} product={product} />
            </li>
            <li className={s.item}>
                <FavBtn favorite={false} />
            </li>
        </ul>
    );
};

export default ProductDetailsButtons;
