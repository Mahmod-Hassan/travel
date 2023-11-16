import React from 'react';
import bgImage from '../../assets/img/Hero-Banner.webp';
import BookingForm from '../BookingForm';
import Navbar from '../Navbar';
const Banner = () => {
    return (
        <div className='h-screen bg-cover relative' style={{ backgroundImage: `url(${bgImage})` }}>
            <Navbar />
            <BookingForm />
        </div>
    );
};

export default Banner;