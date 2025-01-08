import { redirect } from "next/navigation"


export  const getPost=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    // if(data){     
    //         redirect(`/posts/${data[0].id}`)   
    // }
    return data
}