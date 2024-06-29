import React from 'react';
import { Accordion, Divider } from '@/ui/components';
import { IProduct } from '@/interfaces';

import s from './productAccordionMobile.module.css';

type Props = {
    product: IProduct;
};

const ProductAccordionMobile: React.FC<Props> = ({ product }) => {
    return (
        <>
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
            <Divider />
        </>
    );
};

export default ProductAccordionMobile;
