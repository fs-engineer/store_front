import { auth } from '@/auth';
import { Session } from 'next-auth';

export const getToken = async (): Promise<string | null> => {
    const session: Session | null = await auth();
    if (!session) {
        return null;
    }
    return session.accessToken;
};
