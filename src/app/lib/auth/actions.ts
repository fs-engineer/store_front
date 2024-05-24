'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import axios from 'axios';
import { JWT } from 'next-auth/jwt';
import { baseUrl } from '@/constants';

export const refreshToken = async (token: JWT): Promise<JWT> => {
    const { data } = await axios.post(
        `${baseUrl}/auth/refresh`,
        {},
        {
            headers: { Authorization: `Refresh ${token.refreshToken}` },
        },
    );

    if (!data) {
        throw new Error('Failed to refresh token');
    }

    return {
        ...token,
        ...data,
    };
};

export const checkUser = async (email: string, password: string) => {
    try {
        const { data } = await axios.post(`${baseUrl}/auth/login`, { email, password });

        if (!data) {
            return null;
        }

        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
};

export async function login(_: string | undefined, formData: FormData) {
    try {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        await signIn('credentials', {
            email,
            password,
            redirectTo: '/products',
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Не вірний e-mail або пароль';
                default:
                    return 'Щось пішло не так! :(';
            }
        }
        throw error;
    }
}
