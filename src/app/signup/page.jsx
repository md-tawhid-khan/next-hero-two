"use client"
import React from 'react';

const page = () => {
    const handleRegister=async(e)=>{
        e.preventDefault()
            console.log('tawhid sorker')
    }
    return (
        <div className='text-center'>
            <h1>this is sign in page </h1>
            <div>
                <form onSubmit={handleRegister} action="" className='flex flex-col'>
                    <label >  Name : </label>
                    <input type="text" name="name" id="" placeholder='enter your name' className='w-1/2 border-2' />
                    <label >  Email : </label>
                    <input type="text" name="name" id="" placeholder='enter your email address' className='w-1/2 border-2' />
                    <label > Password : </label>
                    <input type="text" name="" id="" placeholder='enter strong password' className='w-1/2 border-2' />
                    <button className='bg-blue-300'>Submit</button>
                </form>
            </div>
        </div>
    );
}; 

export default page;