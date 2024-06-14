'use server';

import axios from 'axios';
import { baseUrl, brandsKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { brandSchema } from '@/app/lib/brands/zod';

type CreateBrandDto = {
    name: string;
    countryId: number;
};

export const createBrand = async (brandDto: CreateBrandDto) => {
    try {
        const { name, countryId } = await brandSchema.parseAsync(brandDto);
        const { data } = await axios.post(
            `${baseUrl}/${brandsKey}/`,
            { name, countryId },
            {
                headers: {
                    Authorization: await createBearerToken(),
                },
            },
        );

        return data;
    } catch (e) {
        console.error(e, 'create brand error');
        return null;
    }
};
