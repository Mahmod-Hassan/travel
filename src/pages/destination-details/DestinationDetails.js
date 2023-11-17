import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/BookingForm';
import useFetchDestinations from '../../hooks/useFetchDestinations';

const DestinationDetails = () => {
    
    const params = useParams() || {};
    const {destinations, isLoading} = useFetchDestinations();
    if(isLoading) {
        return 'Loading...'
    }
    const unique = destinations.find(destination => destination.id === params?.id);
  
    const { title, image, price, description, review, timezone, country, population, language} = unique || {};
    return (
        <article className="grid grid-cols-3 gap-10 mt-20 px-20 h-[1000px]">
        <div className='col-span-2'>
            <img
            alt="Office"
            src={image}
            className="w-full h-[300px] object-cover"
            />
             <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">{title}</h3>
            <p className='text-gray-500'>{description}</p>

            <h2 className='text-xl font-bold mt-10 mb-2'>Basic Information</h2>
               
                <div className='grid grid-cols-2 gap-y-4 bg-gray-100 p-5'>
                    <p className='font-semibold'>Country :</p>
                    <p>{country}</p>

                    <p className='font-semibold'>Timezone :</p>
                    <p>{timezone}</p>

                    <p className='font-semibold'>Language :</p>
                    <p>{language}</p>

                    <p className='font-semibold'>Population :</p>
                    <p>{population}</p>
                </div>

        </div>

        <div className="">
           <h1>Book Now</h1>
           <BookingForm unique={unique} />
        </div>
   </article>
    );
};

export default DestinationDetails;