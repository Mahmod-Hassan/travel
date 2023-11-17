import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../context/UserProvider';


const BookingForm = ({unique}) => {
  const [bookingInfo, setBookingInfo] = useState({});

  const {user} = useContext(UserContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formEl = event.target;
        const formData = {};
        for (let i = 0; i < formEl.elements.length; i++) {
        const element = formEl.elements[i];
        if (element.name) {
            formData[element.name] = element.value;
        }
        }
        if(formData){
          setBookingInfo(formData);
          toast.success(`Wow!! You successfully booked ${formData?.from} destination`)
        }
    }

      return (
        <form onSubmit={handleSubmit} className="bg-gray-100 flex flex-col p-4 items-center gap-5">

         {/* <!-- Email --> */}
         <div className="w-full">
          <p className="text-lg mb-2 font-semibold">Email</p>
          <div>
             <input type='text' className="border px-2 py-2 w-full"  defaultValue={user?.email} required name='email' readOnly />
          </div>
        </div>

        {/* <!-- From --> */}
        <div className="w-full">
          <p className="text-lg mb-2 font-semibold">Where</p>
            <input className='w-full px-2 py-2' defaultValue={unique?.title} name="destination" type='text' readOnly />
        </div>


        {/* <!-- Date --> */}
        <div className="w-full">
          <p className="text-lg mb-2 font-semibold">When</p>
          <input
            type="date"
            className="px-2 py-2 w-full date"
            name="date"
            required
          />
        </div>

        {/* <!-- Guests --> */}
        <div className="w-full">
          <p className="text-lg mb-2 font-semibold">Guests</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (1).svg" alt="" />
            <select
              className="outline-none px-2 py-2 w-full"
              name="guests"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <p className="text-lg mb-2 font-semibold">Type</p>
          <div className="flex flex-row">
            <img src="./img/icons/Vector (3).svg" alt="" />
            <select
              className="px-2 py-2 w-full"
              name="ticketClass"
              required
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>

         {
          bookingInfo?.destination === unique?.title ?
          (
            <button className='bg-gray-400 text-gray-200 rounded w-full py-2' disabled type="submit">
            Already Booked
           </button>
          )
          :
          (
           <button className='bg-teal-500 rounded w-full py-2' type="submit">
            Book
          </button>
          )
         }

        </form>
      )
    }


export default BookingForm;