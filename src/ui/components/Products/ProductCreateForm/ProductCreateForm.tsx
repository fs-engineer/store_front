'use client';

import React, { useEffect, useState } from 'react';
import {
    Box,
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
import { renameCharacteristicsFields } from '@/ui/components/Products/ProductCreateForm/helpers';
import { getAllBrands } from '@/app/lib/brands/data';
import { getAllProductTypes } from '@/app/lib/productTypes/data';
import { getAllHairTypes } from '@/app/lib/hairTypes/data';
import { createProduct } from '@/app/lib/products/actions';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import useCurrentPage from '@/hooks/useCurrentPage';
import { dashboardKey, productsKey } from '@/constants';

// TODO: need to add product preview to the right side
const ProductCreateForm = () => {
    const [name, setName] = useState<string | null>(null);
    const [price, setPrice] = useState<string | null>(null);
    const [brandId, setBrandId] = useState<null | number>(null);
    const [brandOptions, setBrandOptions] = useState<ISelectInputDataItem[]>([]);
    const [description, setDescription] = useState('');
    const [directions, setDirections] = useState('');
    const [characteristicIds, setCharacteristicIds] = useState<number[]>([]);
    const [characteristicsOptions, setCharacteristicsOptions] = useState<ISelectInputDataItem[]>([]);
    const [typeIds, setTypeIds] = useState<number[]>([]);
    const [typeOptions, setTypeOptions] = useState<ISelectInputDataItem[]>([]);
    const [hairTypeIds, setHairTypeIds] = useState<number[]>([]);
    const [hairTypeOptions, setHairTypeOptions] = useState<ISelectInputDataItem[]>([]);
    const [files, setFiles] = useState<FileList | null>(null);

    const router = useRouter();
    const currentPage = useCurrentPage();
    console.log(files, 'files');
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !price || !brandId) {
            return;
        }

        try {
            const response = await createProduct({
                name,
                brandId,
                price: Number(price),
                types: typeIds,
                description,
                directions,
                hairTypes: hairTypeIds,
                characteristics: characteristicIds,
            });

            if (response?.status === 400) {
                toast.error(response?.message);
                return;
            } else if (response?.id && response?.name) {
                toast.info(`Продукт ${response.name} створено`);
            }

            router.push(`/${dashboardKey}/${productsKey}?page=${currentPage}`);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box>
                <Input
                    name={'productName'}
                    type={'text'}
                    getInputValue={setName}
                    placeholder={'Введіть назву продукту'}
                />
            </Box>
            <Box>
                <SelectInputWithSearch
                    name={'brand'}
                    placeholder={'Виберіть назву бренду'}
                    data={brandOptions}
                    onSelect={setBrandId}
                />
            </Box>
            <Box>
                <UploadFiles placeholder={'Виберіть файли'} onGetFiles={setFiles} />
            </Box>
            <Box>
                <Input name={'price'} type={'number'} getInputValue={setPrice} placeholder={'Введіть ціну продукту'} />
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
                <MultiSelectInputWithSearch
                    name={'characteristics'}
                    placeholder={'Виберіть характеристики'}
                    data={characteristicsOptions}
                    onSelect={setCharacteristicIds}
                />
            </Box>
            <Box>
                <CreateBtn type="submit" />
            </Box>
        </Form>
    );
};

export default ProductCreateForm;
