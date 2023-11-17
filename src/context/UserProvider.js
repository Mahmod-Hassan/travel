
// import { createContext, useEffect, useState } from "react";


// export const UserContext = createContext()

// const UserProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//        const data = JSON.parse(localStorage.getItem('user'));
//        setUser(data);
//     },[])
//     return (
//         <UserContext.Provider value={user}>
//              {children}
//         </UserContext.Provider>
//     );
// };

// export default UserProvider;