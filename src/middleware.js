import { NextResponse } from "next/server"

// const user=false;

// const coo="tawhid"

export const middleware=(request)=>{
    // const cookies=request.cookies.get('token')
    // if(!cookies || cookies.value !== coo){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
    // if(!user){
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
  return NextResponse.next()
}

export const config ={
    // matcher:'/about'
    matcher:['/about','/contacts']
}