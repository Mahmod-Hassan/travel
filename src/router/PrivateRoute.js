import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const PrivateRoute = ({children}) => {
    const {loggedIn} = useContext(UserContext);
    const location = useLocation();
       

    if (loggedIn) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;