import React, { useContext, useState } from 'react';
import { FaBars, FaCircleUser, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import icon from '../assets/img/travel-icon.png';
import { UserContext } from '../context/UserProvider';
const navLinks = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    }
  ]
  
const Navbar = () => {

  const {loggedIn, setLoggedIn} = useContext(UserContext);
  const [show, setShow] = useState(false);
  console.log(show);
  const handleLogout = () => {
    setLoggedIn(false);
  }

// return jsx
    return (
        <header  className={`px-4 md:px-10 z-100 bg-white sticky top-0 transition-transform duration-300 relative`}>
        {/* <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to='/'>
                  <img className='w-20 h-16' src={icon} alt="" />
              </Link>
            </div>
            <div>
              <nav className={`flex flex-col md:flex-row gap-6 ${show ? 'absolute md:static bg-white right-0 top-16 p-10 md:p-0' : 'hidden md:flex'}`}>
                <ul className={`flex items-center gap-6 text-sm`}>
                 {
                  navLinks.map(({title, path}) => (
                    <li key={path} className='text-lg'>
                       <Link to={path}>{title}</Link>
                    </li>
                  ))
                 }
                </ul>
                <div>
                    {
                      loggedIn ? 
                      (
                        <div className='flex gap-4'>
                          <FaCircleUser className='w-10 h-10' />
                          <button onClick={handleLogout} className='rounded px-5 py-1 bg-red-600 text-white'>Logout</button>
                        </div> 
                      )
                    :
                    (
                      <Link
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      to='/login'
                    >
                      Login
                    </Link>
                    )
                    }
                    
                </div>
              </nav>
              <button
                className={`block md:hidden text-xl`}
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <FaXmark />
                ) : (
                  <FaBars />
                )}
              </button>
            </div>
            </div>
      </header>
 
    );
};

export default Navbar;