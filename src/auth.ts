import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import axios from 'axios';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

type User = {
    email: string;
    password: string;
};

async function getUser(email: string, password: string): Promise<User | undefined> {
    try {
        const { data } = await axios.post<User>(`http://localhost:5050/auth/login`, { email, password });

        return data;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email, password);

                    if (!user) return null;

                    return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        }),
    ],
});
