import 'server-only';

import { JWTPayload, jwtVerify, SignJWT, decodeJwt } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function decrypt(session: string | undefined = '') {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        });

        return payload;
    } catch (error) {
        console.log(error);
        console.log('Failed to verify session');
    }
}

export async function createSession(token: string) {
    const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);

    cookies().set('kiss.session', token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });
}

export const verifySession = async () => {
    const cookie = cookies().get('kiss.session')?.value;
    console.log(cookie);

    const session = await decrypt(cookie);

    console.log(session);
    // console.log(session, 'session from verifySession');

    // if (!session?.id) {
    //     redirect('/');
    // }
    //
    // return { isAuth: true, userId: session.id };
};
