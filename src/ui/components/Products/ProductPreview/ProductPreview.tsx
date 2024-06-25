import React from 'react';
import { ISelectInputDataItem } from '@/interfaces';

import s from './productPreview.module.css';
import { getOptionNames } from '@/ui/components/Products/ProductPreview/helpers';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';

type Props = {
    name: string | null;
    price: string | null;
    brandId: number | null;
    description: string;
    directions: string;
    brandOptions: ISelectInputDataItem[];
    characteristicIds: number[];
    characteristicsOptions: ISelectInputDataItem[];
    typeIds: number[];
    typeOptions: ISelectInputDataItem[];
    hairTypeIds: number[];
    hairTypeOptions: ISelectInputDataItem[];
    recommended: boolean;
    images: FileList | [];
};

const ProductPreview: React.FC<Props> = ({
    name,
    price,
    brandId,
    brandOptions,
    description,
    directions,
    characteristicIds,
    characteristicsOptions,
    typeIds,
    typeOptions,
    hairTypeIds,
    hairTypeOptions,
    recommended,
    images,
}) => {
    const brandName = brandOptions.length > 0 && brandId ? brandOptions.find((el) => el.id === brandId)?.name : null;
    const types = typeOptions.length > 0 && typeIds.length > 0 ? getOptionNames(typeOptions, typeIds) : null;
    const hairTypes =
        hairTypeOptions.length > 0 && hairTypeIds.length > 0 ? getOptionNames(hairTypeOptions, hairTypeIds) : null;
    const characteristics =
        characteristicsOptions.length > 0 && characteristicIds.length > 0
            ? getOptionNames(characteristicsOptions, characteristicIds)
            : null;

    return (
        <div className={s.container}>
            <p className={s.brand}>{brandName}</p>
            <p className={s.name}>{name}</p>
            <p className={s.type}>{types && types.join(', ')}</p>
            <ProductImagePreview images={images} />

            <p>{price && price + 'грн.'}</p>
            {recommended ? <p>Рекомендований товар</p> : null}
            <p>Тип волосся</p>
            <ul>{hairTypes && hairTypes.map((el) => <li key={el}>{el}</li>)}</ul>
            <p>Характеристики</p>
            <ul>{characteristics && characteristics.map((el) => <li key={el}>{el}</li>)}</ul>
            <p>Опис товару</p>
            <p>{description}</p>
            <p>Спосіб застосування</p>
            <p>{directions}</p>
        </div>
    );
};

export default ProductPreview;
