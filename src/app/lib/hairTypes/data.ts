'use server';

import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import { ISearchParams } from '@/interfaces';
import { getSearchParams } from '@/app/lib/utils';
import { baseUrl, hairTypesKey } from '@/constants';
import axios from 'axios';
import { createBearerToken } from '@/common/helpers/createBearerToken';

export const getAllHairTypesByParams = async ({ searchParams }: { searchParams: ISearchParams }) => {
    noStore();
    const { query, currentPage, pageSize } = getSearchParams(searchParams);

    try {
        const { data } = await axios.get(`${baseUrl}/${hairTypesKey}`, {
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

export const getAllHairTypes = async () => {
    noStore();

    try {
        const { data } = await axios.get(`${baseUrl}/${hairTypesKey}/all`, {
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
