import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../../firebase.config';

export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    // global state declaration ========================
    const [userData, setUserData] = useState(null);



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                setUserData(user);
            } else {
                // User is signed out.
                setUserData(null);
            }
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);


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