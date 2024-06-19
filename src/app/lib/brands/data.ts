'use server';

import { ISearchParams } from '@/interfaces';
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import axios from 'axios';
import { baseUrl, brandsKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';
import { getSearchParams } from '@/app/lib/utils';

export const getAllBrandsByParams = async ({ searchParams }: { searchParams: ISearchParams }) => {
    noStore();
    const { query, pageSize, currentPage } = getSearchParams(searchParams);

    try {
        const { data } = await axios.get(`${baseUrl}/${brandsKey}`, {
            headers: {
                Authorization: await createBearerToken(),
            },
            params: {
                query,
                page: currentPage,
                pageSize,
            },
        });

        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const getAllBrands = async () => {
    noStore();

    try {
        const { data } = await axios.get(`${baseUrl}/${brandsKey}/all`, {
            headers: {
                Authorization: await createBearerToken(),
            },
        });

        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
