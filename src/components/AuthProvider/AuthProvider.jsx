import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../../firebase.config';


export const authContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // global state declaration ================================================================
    const [userData, setUserData] = useState(null); // userCredential that comes from firebase
    const [allcooks, setAllCooks] = useState([]) // store all cooks in this state 
    // =========================================================================================


    // fetch all user's data from server -------------------------------------------------------------------
    useEffect(() => {
        // Fetch all user's data from server after 2 seconds
        const fetchData = setInterval(() => {
            fetch("http://localhost:3000/getAllUsers/cook")
                .then(response => response.json())
                .then(data => setAllCooks(data))
                .catch(error => console.error('Error fetching data:', error));
        }, 2000);

        return () => clearInterval(fetchData); // Clear timeout on unmount or re-render
    }, []); // Trigger useEffect only when userData changes
    // ====================================================================================================

    // console.log(userData)

    // subscribe userData using onAuthStateChange so that userCredential nevel null while refreshing the page
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
    // ========================================================================================================


    // all the state and function we pass all through the application ----------------------------------------
    const payload = {
        userData,
        setUserData,
        allcooks,
    }
    // =====================================================================================================

    return (
        <authContext.Provider value={payload}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;