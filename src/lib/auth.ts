import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { AuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import { verifyPassword } from "@/helpers/auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string };
        const user = await prismaClient.user.findUnique({
          where: { email: email }, 
        });

        if (!user) {
          throw new Error("No user found with the given email");
        }

        // Use a asserção de não nulo (!) para garantir que as propriedades não sejam null
        const isValidPassword = await verifyPassword(password, user.password!);
        if (!isValidPassword) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string | null;
        email: string | null;
        emailVerified: Date | null;
        password: string | null;
        image: string | null;
      };

      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  }
};
