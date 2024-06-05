'use server';

import axios from 'axios';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { baseUrl } from '@/constants';

export const getAllCountries = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/countries/all`, {
            headers: {
                Authorization: await createBearerToken(),
            },
        });

        return data;
    } catch (e) {
        console.error(e);
        throw new Error('Something went wrong while getting all countries.');
    }
};
