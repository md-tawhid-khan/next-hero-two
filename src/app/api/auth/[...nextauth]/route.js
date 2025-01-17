import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions ={
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy:'jwt',
        maxAge: 60 * 60 * 24 * 30
    },
    providers:[
        CredentialsProvider({
           credentials:{
            email:{
                label:"Email",
                type:'text',
                required:true,
                placeholder:"your email address"
            },
            password:{
                label:"Password",
                type:'password',
                required:true,
                placeholder:"enter your password"
            }
           },
           async authorize(credentials){
            const {email, password}=credentials
              if(!credentials){
                return null
              }
            if(email){
                // const currentUser=users.find(user=>user.email===email)
                const db=await connectDB()
                const currentUser=await db.collection('users').findOne({email})
                console.log(currentUser)
                if(currentUser){
                    if(currentUser.password === password){
                        return currentUser
                    }
                }
            }
           }
   
        }) ,
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
          }),
          GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET
          })
            
    ],
    callbacks: {
       
        async jwt({ token, account, user}) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
              token.type = user.type,
              token.image = user.image
              
            }
            return token;
          },
          async session({ session,  token }) {
            session.user.type=token.type;
            session.user.image=token.image;
            return session
          },
    }

}

const handler=NextAuth(authOptions)

const users=[
    {
        id:1,
        name:'tawhid',
        email:'tal@tal.com',
        type:"admin",
        image:"https://i.ibb.co/gDbnDFK/Whats-App-Image-2025-01-11-at-22-20-27.jpg",
        password:"tawhid"
    },
    {
        id:2,
        name:'khan ',
        email:'khan@khan.com',
        type:"user",
        image:"https://i.ibb.co/gDbnDFK/Whats-App-Image-2025-01-11-at-22-20-27.jpg",
        password:"tawhid"
    },
    {
        id:3,
        name:'sorker',
        email:'sorker@sorker.com',
        type:"user",
        image:"https://i.ibb.co/gDbnDFK/Whats-App-Image-2025-01-11-at-22-20-27.jpg",
        password:"tawhid"
    },
    {
        id:4,
        name:'tawhid khan',
        email:'tawhid@khan.com',
        type:"user",
        image:"https://i.ibb.co/gDbnDFK/Whats-App-Image-2025-01-11-at-22-20-27.jpg",
        password:"tawhid"
    },
    {
        id:5,
        name:'tawhid sorker',
        email:'tawhid@sorker.com',
        type:"user",
        image:"https://i.ibb.co/gDbnDFK/Whats-App-Image-2025-01-11-at-22-20-27.jpg",
        password:"tawhid"
    },
]

export {handler as GET , handler as POST}