import { cookies } from "next/headers"
import { NextResponse } from "next/server"

// const user=false;

// const coo="tawhid"

export const middleware=(request)=>{

  const token=cookies(request).get('next-auth.session-token')

  // console.log(token)

    // const cookies=request.cookies.get('token')
    // if(!cookies || cookies.value !== coo){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
    // if(!user){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }

    if(!token){
      return NextResponse.redirect(new URL('/api/auth/signin',request.url))
    }
  return NextResponse.next()
}

export const config ={
    // matcher:'/about'
    matcher:['/dashboard','/contact']
}