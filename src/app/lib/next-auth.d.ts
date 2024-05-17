import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            email: string;
            roles: string[];
        };
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }
}

declare module 'next-auth/jwt' {
    // TODO need to add emailVerified to User
    interface JWT {
        user: {
            id: string;
            email: string;
            roles: string[];
            emailVerified: Date | null;
        };
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }
}
