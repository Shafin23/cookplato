import React, { createContext, useContext, useState } from 'react';

export const authContext = createContext();
const AuthProvider = ({ children }) => {
    // global state declaration ========================
    const [userData, setUserData] = useState(null);

    const payload = {
        userData,
        setUserData
    }
    return (
        <authContext.Provider value={payload}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;