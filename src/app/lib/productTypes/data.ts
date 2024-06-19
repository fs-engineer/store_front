'use server';

import { ISearchParams } from '@/interfaces';
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import { getSearchParams } from '@/app/lib/utils';
import axios from 'axios';
import { baseUrl, productTypesKey } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';

export const getAllProductTypesByParams = async ({ searchParams }: { searchParams: ISearchParams }) => {
    noStore();
    const { query, pageSize, currentPage } = getSearchParams(searchParams);

    try {
        const { data } = await axios.get(`${baseUrl}/${productTypesKey}`, {
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

export const getAllProductTypes = async () => {
    noStore();

    try {
        const { data } = await axios.get(`${baseUrl}/${productTypesKey}/all`, {
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
