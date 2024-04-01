import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { app } from '../../../../firebase.config';
import { authContext } from '../../../components/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = ({ isLogin }) => {
    const auth = getAuth(app);

    // receiving state and functions from authprovider component through context API
    const { setUserData, userData } = useContext(authContext);

    // State declaration of this component
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Regex for password validation (at least 8 characters)
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

    // Perform login functionality
    const handleLogin = (event) => {
        event.preventDefault();

        // Validate password length and format
        // if (!passwordRegex.test(password)) {
        //     toast.error('Password must be at least 8 characters long and contain letters and numbers.');
        //     return;
        // }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                setUserData(user);
                console.log(userData)
                // Show success message
                toast.success('Login successful!');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // Show error message
                toast.error(errorMessage);
            });
    }

    return (
        <div className={isLogin ? "block" : "hidden"}>
            <form action="" onSubmit={handleLogin}>
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

                <button type='submit' className=' btn w-full hover:bg-[#fab250]  bg-[#fab250] mt-7 rounded font-semibold  text-base'>Log in</button>
            </form>
            {/* Toast container for displaying messages */}
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default LoginForm;
