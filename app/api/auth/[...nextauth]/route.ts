import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import credentials from "next-auth/providers/credentials";


const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credential',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password'}
            },
            async authorize(credentials){
                const user = {
                    id: "1",
                    email: "user@email.com",
                    password: "123",
                    name: "User",
                    role: "admin"
                }

                const isValidEmail = user.email === credentials?.email
                const isValidPassword = user.password === credentials?.password

                if (!isValidEmail || !isValidPassword) {
                return null
                }

                return user
            }  
        })
        
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}