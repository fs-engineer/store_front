'use server';

import axios from 'axios';
import { baseUrl, productsKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { productSchema } from '@/app/lib/products/zod';

type CreateProductDto = {
    name: string | null;
    price: number | null;
    brandId: number | null;
    description: string;
    types: number[];
    hairTypes: number[];
    characteristics: number[];
    directions: string;
    recommended: boolean;
};

export const createProduct = async (dto: CreateProductDto) => {
    try {
        const parsedData = await productSchema.parseAsync(dto);

        const { data } = await axios.post(`${baseUrl}/${productsKey}/`, parsedData, {
            headers: {
                Authorization: await createBearerToken(),
            },
        });

        return data;
    } catch (e) {
        console.error(e, 'create product error');
        return null;
    }
};
