import React from 'react';
import s from './productDetailsTitle.module.css';
import { IBrand, IType } from '@/interfaces';

type Props = {
    name: string;
    brand: IBrand;
    types: IType[];
};

const ProductDetailsTitle: React.FC<Props> = ({ name, brand, types }) => {
    return (
        <div className={s.wrap}>
            {brand?.name ? <h3 className={s.subtitle}>{brand.name}</h3> : null}
            <h2 className={s.title}>{name}</h2>
            <p className={s.types}>{types ? types.map((type) => type.name).join(' ') : null}</p>
        </div>
    );
};

export default ProductDetailsTitle;
