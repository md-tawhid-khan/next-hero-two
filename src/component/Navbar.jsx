"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


import React from 'react';

const Navbar = () => {
    const pathName=usePathname()
    const router = useRouter()
    const session=useSession()
    // console.log(session)
    
    const links=[{
        title:"Posts",
        path:"/posts"
    },
    {
        title:"Meals",
        path:"/meals"
    },
    {
        title:"Gellary",
        path:"/gellary"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Contact",
        path:"/contact"
    },
   
];

const handler=()=>{
 router.push('/api/auth/signin')
}


    return (
        <div className='bg-blue-400'>
             <nav  >
                <h1 > next <span>hero</span></h1>
          <ul  >          
            {
                links.map((link)=><li key={link.path}><Link className={`${pathName===link.path && "text-blue-500"}`}  href={link.path}>{link.title}</Link></li>)
            }
          </ul>
          {
          session.status === "authenticated" ? <button onClick={handler} className='text-blue-400'>log out</button> : <button onClick={handler} className='text-blue-400'>log in </button> 
          }
          
      
        </nav>
       
        </div>
    );
};

export default Navbar;

