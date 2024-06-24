'use server';

import axios from 'axios';
import { baseUrl } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';

export const uploadImage = async (formData: FormData) => {
    try {
        const { data } = await axios.post(`${baseUrl}/upload/images`, formData, {
            headers: {
                Authorization: await createBearerToken(),
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    } catch (e) {
        console.error(e, 'create image error');
        return null;
    }
};
