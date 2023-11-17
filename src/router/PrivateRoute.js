import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(UserContext);
    const location = useLocation();
       

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;