'use client';

import React, { useState } from 'react';
import { Divider } from '@/ui/components';
import s from './productDetailsTabs.module.css';
import clsx from 'clsx';
import { ICharacteristic } from '@/interfaces';
import ProductDetailsDataList from '@/ui/components/Products/ProductDetailsTabs/ProductDetailsDataList/ProductDetailsDataList';

const tabs = [
    { id: 1, name: 'Опис товару' },
    { id: 2, name: 'Характеристики' },
    { id: 3, name: 'Спосіб застосування' },
    { id: 4, name: 'Склад' },
];

type Props = {
    description: string;
    characteristics: ICharacteristic[];
    directions: string;
    composition: string;
};

const ProductDetailsTabs: React.FC<Props> = ({ description, characteristics, directions, composition }) => {
    const [activeTab, setActiveTab] = useState<number>(1);
    return (
        <div className={s.container}>
            <Divider />
            <ul className={s.list}>
                {tabs.map((el) => (
                    <li
                        key={el.id}
                        className={clsx(s.tabItem, { [s.active]: activeTab === el.id })}
                        onClick={() => setActiveTab(el.id)}
                    >
                        <p>{el.name}</p>
                    </li>
                ))}
            </ul>
            <Divider />
            <div className={s.contentWrap}>
                {activeTab === 1 && <p className={s.tabContent}>{description}</p>}
                {activeTab === 2 && <ProductDetailsDataList data={characteristics} />}
                {activeTab === 3 && <p className={s.tabContent}>{directions}</p>}
                {activeTab === 4 && <p className={s.tabContent}>{composition}</p>}
            </div>
        </div>
    );
};

export default ProductDetailsTabs;
