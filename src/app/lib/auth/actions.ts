'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';

const secretKey = process.env.AUTH_SECRET;
console.log(secretKey);
const encodedKey = new TextEncoder().encode(secretKey);
console.log(encodedKey);

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Невірні данні';
                default:
                    return 'Щось пішло не по плану.';
            }
        }
        throw error;
    }
}
