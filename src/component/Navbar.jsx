"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName=usePathname()
    const router=useRouter()
    const links=[{
        title:"Posts",
        path:"/posts"
    },
   
];

const handler=()=>{
 router.push('/login')
}

if(pathName.includes('dashboard'))
    return(
<div className='bg-green-400'>
    <h1>dashboard layout</h1>
</div>
)
    return (
        <div className='bg-blue-400'>
             <nav  >
                <h1 > next <span>hero</span></h1>
          <ul className='flex justify-center items-center space-x-4' >          
            {
                links.map((link)=><Link className={`${pathName===link.path && "text-blue-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handler} className='text-blue-400'>Log in </button>
        </nav>
       
        </div>
    );
};

export default Navbar;

