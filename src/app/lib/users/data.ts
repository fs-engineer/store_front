import axios from 'axios';
import { auth } from '@/auth';
import { unstable_noStore as noStore } from 'next/cache';
import { ISearchParams } from '@/interfaces';

const baseUrl = process.env.LOCAL_HOST_DEV_URL;

const getToken = async () => {
    const session = await auth();
    if (!session) {
        return null;
    }
    return session.accessToken;
};

export const getAllUsers = async ({ searchParams }: ISearchParams) => {
    noStore();
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const token: string | null = await getToken();

    try {
        const { data } = await axios.get(`${baseUrl}/users`, {
            params: {
                query: query,
                page: currentPage,
            },
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (e) {
        console.error(e);
        return null;
    }
};
