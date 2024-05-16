'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/app/auth/auth';

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Не вірні данні.';
                default:
                    return 'Щось пішло не по плану.';
            }
        }
        throw error;
    }
}
