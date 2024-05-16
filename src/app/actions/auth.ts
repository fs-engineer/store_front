'use server';

import { SignupFormSchema, FormState } from '@/app/lib/definitions';
import axios from 'axios';
import { createSession } from '@/app/lib/sessions';
import { redirect } from 'next/navigation';

export async function signIn(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;

    const { data: user } = await axios.post('http://localhost:5050/api/auth/login', { email, password });

    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        };
    }

    await createSession(user.accessToken);
    redirect('/');
}
