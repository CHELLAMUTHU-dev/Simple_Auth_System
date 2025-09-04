import { createContext, useState } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [token, setToken] = useState('');
    const url = 'http://localhost:5000';


    const contextValue = {
        token,
        setToken,
        url
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

