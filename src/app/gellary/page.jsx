import {Oswald} from "next/font/google";
import Image from 'next/image';
import React from 'react';


const oswald = Oswald({weight:['200','300','400','500','700'] ,subsets:['latin']})

const GellaryPage = () => {
    return (
        <div className={`${oswald.className} px-12 py-24`}>
            <h1 className='text-center text-3xl text-blue-500 mb-12'>Gellary</h1>
            
          <div>
            {
                [1,2,3,4,5,6]?.map(img=><Image key={img} src={`/images/${img}.JPG`} width={1920} height={1080} alt='No Image'/>)
            }
          </div>
        </div>
    );
};

export default GellaryPage;