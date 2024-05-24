'use server';

import { getToken } from '@/common/helpers/getTokenServer';

export const createBearerToken = async (): Promise<string> => {
    const token: string | null = await getToken();
    return `Bearer ${token}`;
};
