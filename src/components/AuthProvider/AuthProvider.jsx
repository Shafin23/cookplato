import React, { createContext, useContext, useState } from 'react';

export const authContext = createContext();
const AuthProvider = ({ children }) => {
    // global state declaration ========================
    const [language, setLanguage] = useState("ro")

    const payload = {
        language,
        setLanguage
    }
    return (
        <authContext.Provider value={payload}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;