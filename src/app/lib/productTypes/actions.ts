'use server';

import axios from 'axios';
import { baseUrl, productTypesKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { productTypeSchema } from '@/app/lib/productTypes/zod';

type ProductTypeDto = {
    name: string;
};

export const createProductType = async (dto: ProductTypeDto) => {
    try {
        const { name } = await productTypeSchema.parseAsync(dto);
        const { data } = await axios.post(
            `${baseUrl}/${productTypesKey}/`,
            { name },
            {
                headers: {
                    Authorization: await createBearerToken(),
                },
            },
        );

        return data;
    } catch (e) {
        console.error(e, 'create product type error');
        return null;
    }
};
