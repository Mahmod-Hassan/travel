import React, { useContext } from 'react';
import { FaCircleUser } from "react-icons/fa6";
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
  console.log(loggedIn)

  const handleLogout = () => {
    setLoggedIn(false);
  }

// return jsx
    return (
        <header  className={`px-4 md:px-10 z-100 bg-white sticky top-0 transition-transform duration-300`}>
        {/* <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to='/'>
                  <img className='w-20 h-16' src={icon} alt="" />
              </Link>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                 {
                  navLinks.map(({title, path}) => (
                    <li key={path} className='text-lg'>
                       <Link to={path}>{title}</Link>
                    </li>
                  ))
                 }
                </ul>
              </nav>
            </div>
      
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
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
      
               {/* 3 line icon */}
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </header>
 
    );
};

export default Navbar;