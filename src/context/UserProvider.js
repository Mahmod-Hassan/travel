
import { createContext, useState } from "react";


export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    // useEffect(() => {
    //    const data = JSON.parse(localStorage.getItem('user'));
    //    setUser(data);
    // },[])
    const userInfo = {
        user, setUser
    }
    return (
        <UserContext.Provider value={userInfo}>
             {children}
        </UserContext.Provider>
    );
};

export default UserProvider;