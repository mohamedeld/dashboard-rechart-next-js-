import NextAuth, { User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Adapter } from "next-auth/adapters";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        const user = await res.json()
        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    }),
  ],
  callbacks:{
    async jwt({token,user}:{
      token:JWT,
      user?:User | Adapter | null
    }){
      if(user){
        token.user = user;
      }
      return token
    },
    async session({session,token}:{
      session:any,
      token:JWT
    }){
      
      session.user = token?.user
      return session;
    },
  },
  pages:{
    signIn:'/register',
    signOut:'/register'
  },
  secret:process.env.NEXTAUTH_SECRET as string
};
const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}