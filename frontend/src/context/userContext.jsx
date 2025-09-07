import { createContext, useState } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const url = 'https://simple-auth-system.onrender.com/api';


    const contextValue = {
        url
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

