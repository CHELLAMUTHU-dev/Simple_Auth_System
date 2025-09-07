import { createContext, useState } from "react";
export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const url = 'http://localhost:5000/api';


    const contextValue = {
        url
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

