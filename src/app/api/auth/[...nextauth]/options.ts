import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label:"Username:",
                    type:"text",
                    placeholder:"username"
                },
                password:{
                    label:"Password:",
                    type:"password",
                    placeholder:"password"
                }

            },
            async authorize(credentials){
                const user = {id: "1", name:"Admin", password:"nextauth"}
                if (credentials?.username === user.name && credentials?.password == user.password){
                    console.log(user)
                    return user
                } else{
                    return null
                }
            }
        })
    ],
    database: process.env.MONGODB_URI,
    callbacks: {
    async redirect() {
        return "/home"
    }
    },
}