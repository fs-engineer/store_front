import axios from 'axios';
import { auth } from '@/auth';
import { unstable_noStore as noStore } from 'next/cache';

const baseUrl = process.env.LOCAL_HOST_DEV_URL;

const getToken = async () => {
    const session = await auth();
    if (!session) {
        return null;
    }
    return session.accessToken;
};

export const getAllUsers = async () => {
    noStore();
    const token: string | null = await getToken();

    try {
        const { data } = await axios.get(`${baseUrl}/users`, {
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
