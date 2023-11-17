import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchDestinations from '../hooks/useFetchDestinations';

const DestinationDetails = () => {
    const params = useParams() || {};
    const {destinations, isLoading} = useFetchDestinations();
    if(isLoading) {
        return 'Loading...'
    }
    const unique = destinations.find(destination => destination.id === params?.id);
    const { title, image, price, description} = unique || {};
    return (
        <article className="grid grid-cols-3 gap-10 mt-20 px-20 h-[1000px]">
        <div className='col-span-2'>
            <img
            alt="Office"
            src={image}
            className="w-full h-[300px] object-cover"
            />
             <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">{title}</h3>
            <p>{description}</p>
        </div>

        <div className="">
           <h1>more details</h1>
        </div>
   </article>
    );
};

export default DestinationDetails;