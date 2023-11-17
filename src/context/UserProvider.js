
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState( null);
    
    
    useEffect(() => {
       const data = JSON.parse(localStorage.getItem('user'));
       setUser(data);
    },[])
    const userInfo = {
        user, setUser, loggedIn, setLoggedIn
    }
    return (
        <UserContext.Provider value={userInfo}>
             {children}
        </UserContext.Provider>
    );
};

export default UserProvider;