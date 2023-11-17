import React from 'react';
import BookingForm from '../../components/BookingForm';
import Destinations from './Destinations';

const Home = () => {
    return (
        <div>
            <BookingForm />
            <Destinations />
        </div>
    );
};

export default Home;