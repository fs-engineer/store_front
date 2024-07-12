import React from 'react';
import { ICharacteristic } from '@/interfaces';
import s from './productDetailsDataList.module.css';

type Props = {
    data: ICharacteristic[];
};

const ProductDetailsDataList: React.FC<Props> = ({ data }) => {
    return (
        <ul>
            {data.map((el) => (
                <li key={el.id} className={s.item}>
                    <p className={s.tabContent}>{el.value}</p>
                </li>
            ))}
        </ul>
    );
};

export default ProductDetailsDataList;
