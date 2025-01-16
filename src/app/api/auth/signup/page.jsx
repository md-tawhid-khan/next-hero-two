"use client";
import React from 'react';

const page = () => {
    const handlerRegister=async(e)=>{
        e.preventDefault()
        const newUser={
            name:e.target.name.value,
            email:e.target.email.value,
            image:e.target.image.value,
            type:e.target.type.value,
            password:e.target.password.value,
        }
    //  console.log(newUser)
     const resp= await fetch('http://localhost:3000/api/auth/signup/new-user',{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            'content-type':'application/json',
        }
     })
     console.log(resp)
    }

   
    return (
        <div>
            <h1 className='text-3xl text-blue-400 text-center'> sign up</h1>
            <form className='mx-24 mb-16' onSubmit={handlerRegister}>
             <div className='flex flex-col gap-3'>
                <label > name :</label>
                <input type='text' name='name' placeholder='enter your name'  className='border-2 border-blue-400 w-3/5'/>
             </div>
             <div className='flex flex-col gap-3 my-4'>
                <label > email :</label>
                <input type='text' name='email' placeholder='enter your name'  className='border-2 border-blue-400 w-3/5'/>
             </div>
             <div className='flex flex-col gap-3 my-4'>
                <label > image :</label>
                <input type='text' name='image' placeholder='enter your image url'  className='border-2 border-blue-400 w-3/5'/>
             </div>
             <div className='flex flex-col gap-3 my-4'>
                <label > type :</label>
              <select name="type" placeholder="user type" className='outline-none border-transparent p-3 text-slate-700' >
               <option value="admin">admin </option>
               <option value="member">member </option>
               <option value="moderator">moderator </option>
              </select>
             </div>
             <div className='flex flex-col gap-3 mb-4'>
                <label > password :</label>
                <input type='text' name='password' placeholder='enter your name'   className='border-2 border-blue-400 w-3/5'/>
             </div> 
             <div>
             <button className='bg-blue-300'>sign up</button>
             </div>
           
             </form>
        </div>
    );
};

export default page;