import { NextAuthOptions, User, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./connect";

// we need to add isAdmin field in our session and token but by default it is decleared that
// it has onlu name email and  image field to change it we need to change the declaration of Session and token

declare module "next-auth" {
    interface Session {
        user: User & {
            isAdmin: Boolean;
        };
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        isAdmin: Boolean;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        })
    ],
    adapter: PrismaAdapter(prisma),

    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        async jwt({ token }) {
            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email!,
                },
            });
            token.isAdmin = userInDb?.isAdmin!;
            return token;
        },
    }
}

// to get status and user in our server components
export const getAuthSession = () => getServerSession(authOptions);