import React, { useContext, useState } from 'react';
import { authContext } from '../../../components/AuthProvider/AuthProvider';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../../../firebase.config';

const Register = ({ isLogin }) => {
    // inditializing the auth from firebase-------
    const auth = getAuth(app)
    // ===========================================


    // receiving state and functions from authprovider component through context API ----------------
    const { setUserData, userData } = useContext(authContext);
    // ==============================================================================================


    // State declaration of this component -----------------------------------------------------------------
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userRole, setUserRole] = useState(""); // State to hold the selected user type
    const [status, setStatus] = useState("pending") // at first it is pending, when admin approve, it will be approved
    // =====================================================================================================


    // Perform user creation or registration-------------------------------------------
    const handleRegistration = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up--------------------- 
                const user = userCredential.user;

                if (user) {
                    setUserData(user) // saving user credential 
                

                    // sending user's data to the server ------------------------------
                    fetch("https://server-qfkg.vercel.app/getAllUsers/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ userName, userRole, email, password, status })
                    })
                        .then(response => response.json())
                        .then(data => console.log(data))
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    console.log(userData)
    return (
        <div className={!isLogin ? "block" : "hidden"}>
            <form action="" onSubmit={handleRegistration}>
                <input
                    type="text"
                    placeholder='email address'
                    className=' border w-full px-3 py-2 rounded mb-3 focus:outline-none'
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='username'
                    className=' border w-full px-3 py-2 rounded mb-3 focus:outline-none'
                    onChange={e => setUserName(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='password'
                    className=' border w-full px-3 py-2 rounded mb-3 focus:outline-none'
                    onChange={e => setPassword(e.target.value)}
                />

                <div className=' mt-6'>
                    <label htmlFor="customer">
                        <input
                            type="radio"
                            id="customer"
                            name="userRole"
                            value="customer" // Assign value to the radio button
                            onChange={e => setUserRole(e.target.value)} // Update userType state
                        />
                        <span className='ms-1 text-gray-700'>
                            I am customer
                        </span>
                    </label> <br />


                    <label htmlFor="cook" className='mb-10' >
                        <input
                            type="radio"
                            id="cook"
                            name="userRole"
                            value="cook" // Assign value to the radio button
                            onChange={e => setUserRole(e.target.value)} // Update userType state
                        />
                        <span className='ms-1 text-gray-700'>
                            I am cook
                        </span>
                    </label>

                </div>

                <article className='text-gray-700 text-sm mt-6'>
                    Kişisel verileriniz bu web sitesindeki deneyiminizi desteklemek, hesabınıza erişimi yönetmek ve privacy policy sayfamızda açıklanan diğer amaçlar için kullanılacaktır.
                </article>

                <button className='btn w-full  text-gray-800 text-base hover:bg-[#fab250] bg-[#fab250] mt-7 rounded font-semibold '>Register</button>
            </form>
        </div>
    );
};

export default Register;
