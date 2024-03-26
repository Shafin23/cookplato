import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../../firebase.config';

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // global state declaration ================================================================
    const [userData, setUserData] = useState(null); // userCredential that comes from firebase
    const [loggedInUsersRole, setLoggedINUsersRole] = useState(""); // user's role ---cook,host,admin
    const [loggedUser, setLoggedUser] = useState(null); // loggedIn user
    const [allUsers, setAllUsers] = useState([]); // all user's data comes from server
    const [loggedInUsersId, setLoggedInUsersId] = useState('')
    const [accountTrigger, setAccountTrigger] = useState(false) // when user hit login or register button, then this state will be changed and all user's data will be reloaded again in this component in useEffect
    const [allcooks, setAllCooks] = useState([]) // store all cooks in thsi state 
    const [dataFetchTrigger, setDataFetchTrigger] = useState(true); // trigger this state to reload data
    // ================================================================================================


    // fetch all user's data from server -------------------------------------------------------------------
    useEffect(() => {
        fetch("http://localhost:3000/getAllUsers")
            .then(response => response.json())
            .then(data => setAllUsers(data))

        const loggedInUser = allUsers.find(user => user.email === userData?.email)
        setLoggedINUsersRole(loggedInUser?.userRole);
        setLoggedUser(loggedInUser)
        setLoggedInUsersId(loggedInUser?._id)

        const cooks = allUsers.filter(user=>user?.userRole === "cook") 
        setAllCooks(cooks) 

    }, [accountTrigger, userData])
    // ====================================================================================================

    console.log(loggedInUsersRole)

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
        loggedInUsersRole,
        loggedUser,
        loggedInUsersId,
        setAccountTrigger, 
        accountTrigger,
        allcooks,
        setDataFetchTrigger,
        dataFetchTrigger
    }
    // =====================================================================================================

    return (
        <authContext.Provider value={payload}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;