import React from 'react';
import bgImage from '../assets/img/Hero-Banner.webp';
const Banner = () => {
    return (
        <div className='h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="rounded-md max-w-6xl w-full mx-auto py-10">
         
        </div>
        </div>
    );
};

export default Banner;