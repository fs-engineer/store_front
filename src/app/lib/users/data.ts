import axios from 'axios';
import { unstable_noStore as noStore } from 'next/cache';
import { ISearchParams } from '@/interfaces';
import { baseUrl } from '@/constants';
import { createBearerToken } from '@/common/helpers/createBearerToken';

export const getAllUsersByParams = async ({ searchParams }: { searchParams: ISearchParams }) => {
    noStore();
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    try {
        const { data } = await axios.get(`${baseUrl}/users`, {
            params: {
                query: query,
                page: currentPage,
            },
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
