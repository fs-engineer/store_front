'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import axios from 'axios';
import { JWT } from 'next-auth/jwt';

// export const getAllUsers = async () => {
//     const session = await auth();
//
//     if (!session) {
//         return;
//     }
//     const token = session?.accessToken;
//
//     try {
//         const { data } = await axios.get('http://localhost:5050/api/users', {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//
//         return data;
//     } catch (e) {
//         // console.log(e);
//         return null;
//     }
// };

export const refreshToken = async (token: JWT): Promise<JWT> => {
    const { data } = await axios.post(
        'http://localhost:5050/api/auth/refresh',
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
        const { data } = await axios.post('http://localhost:5050/api/auth/login', { email, password });

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
