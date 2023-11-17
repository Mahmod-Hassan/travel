import React from 'react';
import { FaSearch } from "react-icons/fa";
import bgImage from '../assets/img/Hero-Banner.webp';
const Banner = () => {
    return (
        <div className='h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="rounded-md max-w-6xl w-full mx-auto py-10">
               <div className='flex justify-center w-1/2 mx-auto items-center relative'>
                   <input className='px-2 py-2 w-full rounded' placeholder='Seacrh destination' type="text" />
                   <FaSearch className='absolute right-4 text-gray-500' />
               </div>
        </div>
        </div>
    );
};

export default Banner;