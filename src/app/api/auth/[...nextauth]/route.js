import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions ={
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy:'jwt'
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
                const currentUser=users.find(user=>user.email===email)
                if(currentUser){
                    if(currentUser.password === password){
                        return currentUser
                    }
                }
            }
           }
   
        })      
    ]
}

const handler=NextAuth(authOptions)

const users=[
    {
        id:1,
        name:'tawhid',
        email:'tal@tal.com',
        password:"tawhid"
    },
    {
        id:2,
        name:'khan ',
        email:'khan@khan.com',
        password:"tawhid"
    },
    {
        id:3,
        name:'sorker',
        email:'sorker@sorker.com',
        password:"tawhid"
    },
    {
        id:4,
        name:'tawhid khan',
        email:'tawhid@khan.com',
        password:"tawhid"
    },
    {
        id:5,
        name:'tawhid sorker',
        email:'tawhid@sorker.com',
        password:"tawhid"
    },
]

export {handler as GET , handler as POST}