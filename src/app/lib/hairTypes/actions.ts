'use server';

import axios from 'axios';
import { baseUrl, hairTypesKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { hairTypeSchema } from '@/app/lib/hairTypes/zod';

type HairTypeDto = {
    name: string;
};

export const createHairType = async (dto: HairTypeDto) => {
    try {
        const { name } = await hairTypeSchema.parseAsync(dto);
        const { data } = await axios.post(
            `${baseUrl}/${hairTypesKey}/`,
            { name },
            {
                headers: {
                    Authorization: await createBearerToken(),
                },
            },
        );

        return data;
    } catch (e) {
        console.error(e, 'create hair type error');
        return null;
    }
};
