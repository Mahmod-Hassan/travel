

import useFetchDestinations from '../../hooks/useFetchDestinations';
import Destination from './Destination';

const Destinations = () => {

    const {destinations, isLoading} = useFetchDestinations();
    if(isLoading)  {
        return 'Loading...'
    }

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20'>
            {
          destinations?.map((destination,index) => (
                    <Destination key={index} destination={destination} />
                ))
            }
        </div>
    );
};

export default Destinations;