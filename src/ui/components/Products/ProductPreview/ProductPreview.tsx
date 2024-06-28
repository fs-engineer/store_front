import React from 'react';
import { ISelectInputDataItem } from '@/interfaces';

import s from './ProductPreview.module.css';
import { getOptionNames } from '@/ui/components/Products/ProductPreview/helpers';
import ProductImagePreview from '@/ui/components/Products/ProductImagePreview/ProductImagePreview';
import clsx from 'clsx';

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
    volume: string;
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
    volume,
}) => {
    const brandName = brandOptions.length > 0 && brandId ? brandOptions.find((el) => el.id === brandId)?.name : null;
    const types = typeOptions.length > 0 && typeIds.length > 0 ? getOptionNames(typeOptions, typeIds) : [];
    const hairTypes =
        hairTypeOptions.length > 0 && hairTypeIds.length > 0 ? getOptionNames(hairTypeOptions, hairTypeIds) : [];
    const characteristics =
        characteristicsOptions.length > 0 && characteristicIds.length > 0
            ? getOptionNames(characteristicsOptions, characteristicIds)
            : [];
    console.log(volume);
    return (
        <div className={s.container}>
            <div>
                <p className={s.brand}>{brandName}</p>
                <p className={s.name}>{name}</p>
                <p className={s.type}>{types && types.join(', ')}</p>
            </div>

            <div className={s.descriptionWrapper}>
                <div>
                    <ProductImagePreview images={images} />
                    <div className={s.priceContainer}>
                        {recommended ? <p className={s.greenText}>Рекомендований товар</p> : null}
                        <p className={clsx(s.subtitle, s.price)}>{price && price + ' грн.'}</p>
                    </div>
                </div>
                <div style={{ paddingLeft: '20px' }}>
                    {hairTypes.length > 0 ? <h3 className={s.subtitle}>Тип волосся</h3> : null}
                    <ul className={s.list}>
                        {hairTypes.length > 0 &&
                            hairTypes.map((el) => (
                                <li key={el} className={s.listItem}>
                                    {el}
                                </li>
                            ))}
                    </ul>
                    {characteristics.length > 0 ? <h3 className={s.subtitle}>Характеристики</h3> : null}
                    <ul className={s.list}>
                        {characteristics.length > 0
                            ? characteristics.map((el) => (
                                  <li key={el} className={s.listItem}>
                                      {el}
                                  </li>
                              ))
                            : null}
                    </ul>
                    {description ? (
                        <>
                            <h3 className={s.subtitle}>Опис товару</h3>
                            <p className={s.description}>{description}</p>
                        </>
                    ) : null}
                    {directions ? (
                        <>
                            <h3 className={s.subtitle}>Спосіб застосування</h3>
                            <p className={s.description}>{directions}</p>
                        </>
                    ) : null}
                    {volume ? (
                        <>
                            <h3 className={s.subtitle}>{"Об'єм"}</h3>
                            <p className={s.description}>{volume + ' мл'}</p>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
