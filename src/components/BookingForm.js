import React from 'react';
import bgImage from '../assets/img/Hero-Banner.webp';

const BookingForm = () => {
  const user = JSON.parse(localStorage.getItem('user'));
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
        console.log(formData);
    }
    if(user?.email) {
      return (
        <div className='h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="rounded-md max-w-6xl w-full mx-auto py-10">
          <form onSubmit={handleSubmit} className="bg-gray-100/50 flex justify-between p-4 items-center gap-5">
            {/* <!-- From --> */}
            <div className="flex-grow">
              <p className="text-lg mb-2 font-semibold">Destination</p>
              <div className="flex flex-row">
                <select
                  className="border px-2 py-2 w-full"
                  name="from"
                  required
                >
                  <option value="" hidden>
                    Please Select
                  </option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>

  
            {/* <!-- Date --> */}
            <div className="flex-grow">
              <p className="text-lg mb-2 font-semibold">Date</p>
              <input
                type="date"
                className="outline-none px-2 py-2 w-full date"
                name="date"
                required
              />
            </div>
  
            {/* <!-- Guests --> */}
            <div className="flex-grow">
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
  
            <div className="flex-grow">
              <p className="text-lg mb-2 font-semibold">Type</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select
                  className="outline-none px-2 py-2 w-full"
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

              <button className='bg-yellow-500 rounded px-4 py-1' type="submit">
                Search
            </button>
           
          </form>
        </div>
        </div>
      )
    }
    else {
      return (
        <div className='h-screen bg-cover bg-no-repeat flex justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
             <div className="rounded-md max-w-4xl w-full mx-auto py-10">
                 <h1 className='text-center text-4xl font-bold bg-gray-100/50 p-5 uppercase'>If you want to book, Please Login</h1>
             </div>
         </div>
      )
    }
};

export default BookingForm;