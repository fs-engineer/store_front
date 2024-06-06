'use server';

import { ISearchParams } from '@/interfaces';
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import axios from 'axios';
import { baseUrl } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';

export const getAllBrandsByParams = async ({ searchParams }: ISearchParams) => {
    noStore();
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    try {
        const { data } = await axios.get(`${baseUrl}/brands`, {
            headers: {
                Authorization: await createBearerToken(),
            },
            params: {
                query: query,
                page: currentPage,
            },
        });

        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
