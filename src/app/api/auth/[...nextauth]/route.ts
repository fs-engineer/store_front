import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from '@/app/lib/auth/auth.config';

export default NextAuth(authConfig);
