'use server';

import axios from 'axios';
import { baseUrl } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { characteristicSchema } from '@/app/lib/characteristics/zod';

type CharacteristicDto = {
    value: string;
};

export const createCharacteristic = async (dto: CharacteristicDto) => {
    try {
        const { value } = await characteristicSchema.parseAsync(dto);
        const { data } = await axios.post(
            `${baseUrl}/characteristics/`,
            { value },
            {
                headers: {
                    Authorization: await createBearerToken(),
                },
            },
        );

        return data;
    } catch (e) {
        console.error(e, 'create characteristics error');
        return null;
    }
};
