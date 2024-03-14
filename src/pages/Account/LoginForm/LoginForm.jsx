import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { app } from '../../../../firebase.config';
import { authContext } from '../../../components/AuthProvider/AuthProvider';

const LoginForm = ({ isLogin }) => {
    const auth = getAuth(app);

    // receiving state and functions from authprovider component through context API
    const { setUserData, userData } = useContext(authContext);

    //   State declaration of this component =============
    const [email, setEmail] = useState("");
    const [passWord, setPassword] = useState("");

    // perform login functionality==========
    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUserData(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return (
        <div className={isLogin ? "block" : "hidden"}>
            <form action="">
                <input
                    type="text"
                    placeholder='username or email address'
                    className=' border w-full px-3 py-2 rounded mb-3 focus:outline-none'
                    onChange={e => setEmail(e.target.value)}
                />

                <div className=' border rounded mb-3 bg-white w-full flex justify-between items-center'>
                    <input
                        type="password"
                        placeholder='password'
                        className=' w-[80%] px-3 py-2 focus:outline-none'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className=' text-amber-300 w-[20%] flex justify-center items-center text-sm cursor-pointer hover:text-amber-500'>Forgot?</span>
                </div>

                <label htmlFor="rememberMe">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                    />
                    <span className=' ms-1 text-gray-700'>
                        Remember me
                    </span>
                </label>


                <button onClick={handleLogin} className=' btn w-full hover:bg-[#fab250]  bg-[#fab250] mt-7 rounded font-semibold  text-base'>Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;