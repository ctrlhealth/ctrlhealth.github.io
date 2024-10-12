import NextAuth from "next-auth";
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    mathcers: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}