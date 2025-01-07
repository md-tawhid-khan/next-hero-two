"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navbar = () => {
    const pathName=usePathname()
    
    const links=[{
        title:"Posts",
        path:"/posts"
    },
    {
        title:"Meals",
        path:"/meals"
    },
   
];

const handler=()=>{
 router.push('/login')
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
          <button onClick={handler} className='text-blue-400'>Log in </button>
        </nav>
       
        </div>
    );
};

export default Navbar;

