import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const getTime=async()=>{
    const res=await fetch('http://localhost:3000/time',{ next: { revalidate: 5 } })
    const data=await res.json()
    // console.log(data)
    return data.currentTime
}

const page =async () => {
    const currentTime=await getTime()
    const session = await getServerSession(authOptions)
    console.log(session)
    // console.log(currentTime) 
    return (
        <div className='text-center'>
            <h1 className='text-3xl'>this is about page</h1>
            <h3 className='text-2xl'>current  time : {currentTime} </h3>
        </div>
    );
};

export default page;