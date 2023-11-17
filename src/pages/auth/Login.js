import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-full max-w-sm mx-auto mt-20  bg-white rounded-lg shadow-md ">
           <div className="px-6 py-4">

                <h3 className="mt-3 text-xl font-medium text-gray-600 ">Login</h3>

                <form>
                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                    </div>

                    <div className="w-full mt-4">
                        <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg    focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-sm text-gray-600  hover:text-gray-500">Forget Password?</a>

                        <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex items-center justify-center py-4 text-center bg-gray-50 ">
                <span className="text-sm text-gray-600 ">Don't have an account? </span>

                <Link to='/register' className="mx-2 text-sm font-bold text-blue-500">Register</Link>
            </div>
       </div>
    );
};

export default Login;