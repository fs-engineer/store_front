import NextAuth, { Session } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { signInSchema } from '@/app/lib/auth/zod';
import { ZodError } from 'zod';
import { authConfig } from '@/app/lib/auth/auth.config';
import { checkUser, refreshToken } from '@/app/lib/auth/actions';
import { JWT } from 'next-auth/jwt';

export const {
    handlers: { GET, POST },
    signIn,
    // signOut,
    auth,
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize: async (credentials) => {
                try {
                    // logic to check credentials
                    const { email, password } = await signInSchema.parseAsync(credentials);

                    // logic to verify if user exists
                    const user = await checkUser(email, password);

                    if (!user) {
                        // No user found, so this is their first attempt to login
                        // meaning this is also the place you could do registration
                        throw new Error('User not found.');
                    }

                    // return user object with the their profile data
                    return user;
                } catch (error) {
                    if (error instanceof ZodError) {
                        // Return `null` to indicate that the credentials are invalid
                        console.log(error);
                        return null;
                    }
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.expiresIn) return token;

            return await refreshToken(token);
        },
        async session({ token, session }: { token: JWT; session: Session }) {
            session.user = token.user;
            session.accessToken = token.accessToken;
            session.refreshToken = token.refreshToken;
            session.expires = token.expiresIn;

            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
});
