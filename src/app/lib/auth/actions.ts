'use server';

import { AuthError } from 'next-auth';
import { auth, signIn, signOut } from '@/auth';
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

export async function login(formData: FormData) {
    try {
        await signIn('credentials', formData, { redirectTo: '/products' });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function logout() {
    try {
        await signOut();
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}
