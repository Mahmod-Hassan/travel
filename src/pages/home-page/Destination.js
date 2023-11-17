import React from 'react';
import { Link } from 'react-router-dom';

const Destination = ({destination}) => {
    const {id, title, image, price} = destination;
    return (
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Office"
              src={image}
              className="h-56 w-full object-cover"
            />

            <div className="bg-white p-4 sm:p-6">
                <h3 className="mt-0.5 text-lg text-gray-900 font-semibold">{title}</h3>
                <p className='text-teal-600 font-bold'>{price}</p>
                <Link to={`/destination/${id}`}>
                  <button  className="block bg-yellow-300 px-5 py-2 rounded text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">Details</button>
                </Link>
            </div>
       </article>
    );
};

export default Destination;