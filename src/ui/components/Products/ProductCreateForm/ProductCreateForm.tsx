'use client';

import React, { useEffect, useState } from 'react';
import {
    Box,
    CheckBox,
    CreateBtn,
    Form,
    Input,
    MultiSelectInputWithSearch,
    SelectInputWithSearch,
    TextArea,
    UploadFiles,
} from '@/ui/components';
import { ISelectInputDataItem } from '@/interfaces';
import { getAllCharacteristics } from '@/app/lib/characteristics/data';
import {
    checkFormExistValues,
    createFormDataFromImageArray,
    renameCharacteristicsFields,
} from '@/ui/components/Products/ProductCreateForm/helpers';
import { getAllBrands } from '@/app/lib/brands/data';
import { getAllProductTypes } from '@/app/lib/productTypes/data';
import { getAllHairTypes } from '@/app/lib/hairTypes/data';
import { createProduct } from '@/app/lib/products/actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useCurrentPage from '@/hooks/useCurrentPage';
import { dashboardKey, productsKey } from '@/constants';
import { uploadImage } from '@/app/lib/images/actions';
import ProductPreview from '@/ui/components/Products/ProductPreview/ProductPreview';

import s from './productCreateForm.module.css';

// TODO: need to add product preview to the right side
const ProductCreateForm = () => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [volume, setVolume] = useState<string>('');
    const [brandId, setBrandId] = useState<number | null>(null);
    const [brandOptions, setBrandOptions] = useState<ISelectInputDataItem[]>([]);
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [characteristicIds, setCharacteristicIds] = useState<number[]>([]);
    const [characteristicsOptions, setCharacteristicsOptions] = useState<ISelectInputDataItem[]>([]);
    const [typeIds, setTypeIds] = useState<number[]>([]);
    const [typeOptions, setTypeOptions] = useState<ISelectInputDataItem[]>([]);
    const [hairTypeIds, setHairTypeIds] = useState<number[]>([]);
    const [hairTypeOptions, setHairTypeOptions] = useState<ISelectInputDataItem[]>([]);
    const [images, setImages] = useState<FileList | []>([]);
    const [recommended, setRecommended] = useState(false);
    const [composition, setComposition] = useState('');
    const [article, setArticle] = useState('');

    const router = useRouter();
    const currentPage = useCurrentPage();

    useEffect(() => {
        const fetchCharacteristics = async () => {
            const data = await getAllCharacteristics();
            if (!data) {
                throw new Error('Щось пішло не так з цими характеристиками!');
            }

            const updatedCharacteristicsData = renameCharacteristicsFields(data);

            setCharacteristicsOptions(updatedCharacteristicsData);
        };

        fetchCharacteristics();
    }, []);

    useEffect(() => {
        const fetchBrands = async () => {
            const data = await getAllBrands();
            if (!data) {
                throw new Error('Щось пішло не так з цими брендами!');
            }

            setBrandOptions(data);
        };

        fetchBrands();
    }, []);

    useEffect(() => {
        const fetchProductType = async () => {
            const data = await getAllProductTypes();
            if (!data) {
                throw new Error('Щось пішло не так з цими типами!');
            }
            const { rows } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими типами!');
            }

            setTypeOptions(rows);
        };

        fetchProductType();
    }, []);

    useEffect(() => {
        const fetchHairTypes = async () => {
            const data = await getAllHairTypes();
            if (!data) {
                throw new Error('Щось пішло не так з цими типами волосся!');
            }
            const { rows } = data;
            if (!rows) {
                throw new Error('Щось пішло не так з цими типами волосся!');
            }

            setHairTypeOptions(rows);
        };

        fetchHairTypes();
    }, []);

    const uploadFiles = async (productId: number) => {
        if (!productId) {
            throw new Error('Нема id продукту');
        }

        // TODO need to add fileSchema checking
        const formData = createFormDataFromImageArray(images, productId);
        try {
            const response = await uploadImage(formData);

            if (response.status === 201) {
                toast.info(`Загружено ${response.rows?.length} картинок`);
            } else {
                toast.error('Помилка при загрузці картинок');
            }
        } catch (e) {
            console.error(e);
            toast.error('Помилка при загрузці картинок');
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAllValuesValid = checkFormExistValues({
            name,
            price,
            brandId,
            typeIds,
            hairTypeIds,
            characteristicIds,
            description,
            directions,
            recommended,
            volume,
            composition,
            article,
        });
        if (!isAllValuesValid) return;

        const data = {
            name,
            brandId,
            price: Number(price),
            types: typeIds,
            description,
            directions,
            hairTypes: hairTypeIds,
            recommended,
            characteristics: characteristicIds,
            volume: Number(volume),
            composition,
            article,
        };

        try {
            const response = await createProduct(data);

            if (response?.status === 400) {
                toast.error(response?.message);
                return;
            } else if (response?.id && response?.name) {
                toast.info(`Продукт ${response.name} створено`);
                await uploadFiles(response.id);
            }

            router.push(`/${dashboardKey}/${productsKey}?page=${currentPage}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={s.container}>
            <Form onSubmit={handleSubmit}>
                <Box>
                    <Input
                        name={'productName'}
                        type={'text'}
                        value={name}
                        getValue={setName}
                        placeholder={'Введіть назву продукту'}
                    />
                </Box>
                <Box>
                    <SelectInputWithSearch
                        name={'brand'}
                        selectedId={brandId}
                        placeholder={'Виберіть назву бренду'}
                        data={brandOptions}
                        getSelectedId={setBrandId}
                    />
                </Box>
                <Box>
                    <UploadFiles name={'files'} placeholder={'Виберіть файли'} onGetFiles={setImages} quantity={5} />
                </Box>
                <Box>
                    <Input
                        name={'price'}
                        type={'number'}
                        value={price}
                        getValue={setPrice}
                        placeholder={'Введіть ціну продукту'}
                    />
                </Box>
                <Box>
                    <MultiSelectInputWithSearch
                        name={'type'}
                        placeholder={'Виберіть тип продукту'}
                        data={typeOptions}
                        onSelect={setTypeIds}
                    />
                </Box>
                <Box>
                    <MultiSelectInputWithSearch
                        name={'hairType'}
                        placeholder={'Виберіть тип волосся'}
                        data={hairTypeOptions}
                        onSelect={setHairTypeIds}
                    />
                </Box>
                <Box>
                    <MultiSelectInputWithSearch
                        name={'characteristics'}
                        placeholder={'Виберіть характеристики'}
                        data={characteristicsOptions}
                        onSelect={setCharacteristicIds}
                    />
                </Box>
                <Box>
                    <TextArea
                        name={'description'}
                        placeholder={'Введіть опис продукту'}
                        getTextAreaValue={setDescription}
                    />
                </Box>
                <Box>
                    <TextArea
                        name={'directions'}
                        placeholder={'Введіть спосіб користування'}
                        getTextAreaValue={setDirections}
                    />
                </Box>
                <Box>
                    <TextArea
                        name={'composition'}
                        placeholder={'Введіть склад товару'}
                        getTextAreaValue={setComposition}
                    />
                </Box>
                <Box>
                    <Input
                        name={'volume'}
                        type={'number'}
                        value={volume}
                        getValue={setVolume}
                        placeholder={"Введіть об'єм продукту"}
                    />
                </Box>
                <Box>
                    <Input
                        name={'article'}
                        type={'number'}
                        value={article}
                        getValue={setArticle}
                        placeholder={'Введіть артикул продукту'}
                    />
                </Box>
                <Box>
                    <CheckBox
                        name={'files'}
                        placeholder={'Додати цей продукт до рекомендованих?'}
                        onGetValue={setRecommended}
                    />
                </Box>
                <Box>
                    <CreateBtn type="submit" />
                </Box>
            </Form>
            <ProductPreview
                name={name}
                price={price}
                brandId={brandId}
                brandOptions={brandOptions}
                description={description}
                directions={directions}
                characteristicIds={characteristicIds}
                characteristicsOptions={characteristicsOptions}
                typeIds={typeIds}
                typeOptions={typeOptions}
                hairTypeIds={hairTypeIds}
                hairTypeOptions={hairTypeOptions}
                recommended={recommended}
                images={images}
                volume={volume}
            />
        </div>
    );
};

export default ProductCreateForm;
