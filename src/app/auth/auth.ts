import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import axios from 'axios';
import { parseJwt } from '@/app/utils/parseJwt';

type Roles = {
    name: string;
    description: string;
};

type User = {
    token: string;
    userId: string;
    roles: Roles[];
};

const sendUserAndGetToken = async (email: string, password: string) => {
    try {
        const { data } = await axios.post('http://localhost:5050/api/auth/login', { email, password });
        const userData = await parseJwt(data.accessToken);

        const user: User = {
            token: data.accessToken,
            userId: userData.id,
            roles: userData.roles,
        };

        return user;
    } catch (error) {
        console.log(error);
    }
};

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials, request) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await sendUserAndGetToken(email, password);

                    if (!user) return null;
                    console.log(user);

                    return user;
                }

                return null;
            },
        }),
    ],
});
