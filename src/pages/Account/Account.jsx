import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../components/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import Register from './Register/Register';

const Account = () => {
        // receiving state and functions from authprovider component through context API
        const { setUserData, userData } = useContext(authContext);

    // State declaration of this componet 
    const [isLogin, setIsLogin] = useState(true) // usually it is true, when false, then the register block will be shown

    // initialize useNavigate hook to handle navigation
    const navigate = useNavigate();
    
    if(userData){
        navigate("/")
    }

    return (
        <div className=' py-56 flex justify-center items-center'>

            {/* login/registration box */}
            <div className=' w-[30vw] p-6 bg-gray-100'>

                {/* heading ====================================== */}
                <div className=' flex justify-around items-center  pb-4 border-b-2'>
                    <h1
                        onClick={() => setIsLogin(true)}
                        style={{ color: isLogin ? "black" : "gray" }}
                        className=' text-center font-semibold text-lg cursor-pointer'>LOG IN</h1>

                    <h1
                        onClick={() => setIsLogin(false)}
                        style={{ color: !isLogin ? "black" : "gray" }}
                        className=' text-center font-semibold text-lg cursor-pointer'>REGISTER</h1>
                </div>

                {/* form section */}
                <div className=' mt-10'>
                    <p className=' text-gray-800 text-sm mb-3'>{isLogin?"Login To Your Account":"Register To Your Account"}</p>
                    <LoginForm isLogin={isLogin} />
                    <Register isLogin={isLogin} />
                </div>

            </div>

        </div>
    );
};

export default Account;